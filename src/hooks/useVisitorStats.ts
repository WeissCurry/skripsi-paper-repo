import { useState, useEffect, useCallback } from 'react';

export interface VisitorStatsData {
  visitors30d: number;
  visitorsLifetime: number;
  pageviews: number;
  lastUpdated: Date | null;
  loading: boolean;
  error: string | null;
  isSettingDisabled: boolean;
  refetch: () => Promise<void>;
}

interface UseVisitorStatsOptions {
  siteCode?: string;
  pagePath?: string; // e.g. '/kiat-skripsi' or undefined for site-wide
  cacheMinutes?: number;
}

const parseCount = (rawCount: unknown): number => {
  if (typeof rawCount === 'number') return rawCount;
  if (typeof rawCount === 'string') {
    const cleaned = rawCount.replace(/[^0-9]/g, '');
    const parsed = parseInt(cleaned, 10);
    return isNaN(parsed) ? 0 : parsed;
  }
  return 0;
};

export function useVisitorStats({
  siteCode = 'mualskripsi',
  pagePath,
  cacheMinutes = 5,
}: UseVisitorStatsOptions = {}): VisitorStatsData {
  const [visitors30d, setVisitors30d] = useState<number>(0);
  const [visitorsLifetime, setVisitorsLifetime] = useState<number>(0);
  const [pageviews, setPageviews] = useState<number>(0);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isSettingDisabled, setIsSettingDisabled] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<number>(0);

  const cacheKey = `mualskripsi_stats_${siteCode}_${pagePath || 'total'}`;

  useEffect(() => {
    let isCancelled = false;

    async function loadData() {
      // Check sessionStorage cache first if this is not a manual force refresh (trigger === 0)
      if (trigger === 0 && typeof window !== 'undefined') {
        try {
          const cached = sessionStorage.getItem(cacheKey);
          if (cached) {
            const parsedCache = JSON.parse(cached);
            const cacheTime = new Date(parsedCache.timestamp).getTime();
            const now = Date.now();
            if (now - cacheTime < cacheMinutes * 60 * 1000) {
              if (!isCancelled) {
                setVisitors30d(parsedCache.visitors30d);
                setVisitorsLifetime(parsedCache.visitorsLifetime);
                setPageviews(parsedCache.pageviews);
                setLastUpdated(new Date(parsedCache.timestamp));
                setLoading(false);
              }
              return;
            }
          }
        } catch (e) {
          console.warn('Failed to read stats cache:', e);
        }
      }

      const baseUrl = `https://${siteCode}.goatcounter.com/counter`;
      const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0];

      try {
        // Fetch 1: Lifetime total
        const totalPromise = fetch(`${baseUrl}/TOTAL.json`);

        // Fetch 2: 30 days total
        const thirtyDaysPromise = fetch(`${baseUrl}/TOTAL.json?start=${thirtyDaysAgo}`);

        // Fetch 3: Specific pageviews (if pagePath provided) or site total
        const targetPage = pagePath ? encodeURIComponent(pagePath) : 'TOTAL';
        const pageviewsPromise = fetch(`${baseUrl}/${targetPage}.json`);

        const [totalRes, thirtyDaysRes, pageRes] = await Promise.all([
          totalPromise,
          thirtyDaysPromise,
          pageviewsPromise,
        ]);

        if (isCancelled) return;

        // Check if GoatCounter requires setting toggle (403 error)
        if (totalRes.status === 403 || pageRes.status === 403) {
          const errorText = await totalRes.text();
          if (!isCancelled) {
            if (errorText.toLowerCase().includes('visitor counter')) {
              setIsSettingDisabled(true);
              setError(
                "Pengaturan 'Allow adding visitor counts on your website' belum diaktifkan di dashboard GoatCounter."
              );
            } else {
              setError('Akses dibatasi (HTTP 403) oleh GoatCounter.');
            }
            setLoading(false);
          }
          return;
        }

        if (!totalRes.ok || !thirtyDaysRes.ok || !pageRes.ok) {
          throw new Error(
            `Gagal mengambil data dari GoatCounter (Status: ${totalRes.status})`
          );
        }

        const [totalData, thirtyDaysData, pageData] = await Promise.all([
          totalRes.json(),
          thirtyDaysRes.json(),
          pageRes.json(),
        ]);

        if (isCancelled) return;

        const parsedLifetime = parseCount(totalData?.count);
        const parsed30d = parseCount(thirtyDaysData?.count);
        const parsedPageviews = parseCount(pageData?.count);
        const now = new Date();

        setVisitorsLifetime(parsedLifetime);
        setVisitors30d(parsed30d);
        setPageviews(parsedPageviews);
        setLastUpdated(now);
        setError(null);
        setIsSettingDisabled(false);

        // Save to sessionStorage
        try {
          sessionStorage.setItem(
            cacheKey,
            JSON.stringify({
              visitorsLifetime: parsedLifetime,
              visitors30d: parsed30d,
              pageviews: parsedPageviews,
              timestamp: now.toISOString(),
            })
          );
        } catch (e) {
          console.warn('Failed to cache stats:', e);
        }
      } catch (err: unknown) {
        if (!isCancelled) {
          const message =
            err instanceof Error ? err.message : 'Terjadi kesalahan saat memuat data statistik';
          setError(message);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      isCancelled = true;
    };
  }, [siteCode, pagePath, cacheKey, cacheMinutes, trigger]);

  const refetch = useCallback(async () => {
    setLoading(true);
    setTrigger((prev) => prev + 1);
  }, []);

  return {
    visitors30d,
    visitorsLifetime,
    pageviews,
    lastUpdated,
    loading,
    error,
    isSettingDisabled,
    refetch,
  };
}
