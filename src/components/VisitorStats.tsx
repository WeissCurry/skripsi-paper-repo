import { useState, useEffect } from 'react';
import {
  Users,
  Globe,
  Eye,
  Clock,
  RotateCw,
  AlertCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { useVisitorStats } from '../hooks/useVisitorStats';

interface VisitorStatsProps {
  pagePath?: string;
  pageLabel?: string;
  siteCode?: string;
  className?: string;
}

function AnimatedNumber({ value }: { value: number }) {
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 800;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayVal(Math.floor(value * ease));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayVal(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [value]);

  return <span>{displayVal.toLocaleString('id-ID')}</span>;
}

export default function VisitorStats({
  pagePath,
  pageLabel = 'Halaman Ini',
  siteCode = 'mualskripsi',
  className = '',
}: VisitorStatsProps) {
  const {
    visitors30d,
    visitorsLifetime,
    pageviews,
    lastUpdated,
    loading,
    error,
    isSettingDisabled,
    refetch,
  } = useVisitorStats({ siteCode, pagePath });

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const formatTime = (date: Date | null) => {
    if (!date) return '-';
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }) + ' WIB';
  };

  return (
    <div
      className={`bg-white dark:bg-gray-900 border-[3px] border-black dark:border-white rounded-2xl p-5 md:p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] ${className}`}
    >
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b-2 border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-emerald text-black flex items-center justify-center border-2 border-black font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Sparkles size={16} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif font-black text-base md:text-lg">
                Statistik Pengunjung
              </h3>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {lastUpdated && (
            <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-md border border-gray-200 dark:border-gray-700">
              <Clock size={12} />
              <span>Update: {formatTime(lastUpdated)}</span>
            </div>
          )}

          <button
            onClick={handleRefresh}
            disabled={loading || isRefreshing}
            className="p-1.5 rounded-lg border-2 border-black dark:border-white bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer disabled:opacity-50"
            title="Muat ulang statistik"
            aria-label="Refresh stats"
          >
            <RotateCw
              size={15}
              className={`${isRefreshing || loading ? 'animate-spin' : ''}`}
            />
          </button>

          <a
            href={`https://${siteCode}.goatcounter.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg border-2 border-black dark:border-white bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
            title="Buka Dashboard GoatCounter"
            aria-label="Open GoatCounter dashboard"
          >
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {/* Warning State: If GoatCounter visitor counter setting is disabled */}
      {isSettingDisabled && (
        <div className="mb-5 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-500 dark:border-amber-400 text-xs">
          <div className="flex items-start gap-2.5">
            <AlertCircle size={18} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900 dark:text-amber-200 mb-1">
                Langkah Terakhir: Aktifkan Visitor Counter di GoatCounter
              </p>
              <p className="text-amber-800/90 dark:text-amber-300 leading-relaxed mb-2">
                GoatCounter mengembalikan pesan:{' '}
                <em>"Need to enable the 'allow using the visitor counter' setting"</em>.
              </p>
              <ol className="list-decimal list-inside space-y-1 text-amber-800 dark:text-amber-300 mb-3 font-medium">
                <li>Buka dashboard GoatCounter kamu di <strong>https://{siteCode}.goatcounter.com</strong></li>
                <li>Masuk ke menu <strong>Settings</strong></li>
                <li>Centang kotak <strong>"Allow adding visitor counts on your website"</strong></li>
                <li>Klik tombol <strong>Save</strong></li>
              </ol>
              <button
                onClick={handleRefresh}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 text-black font-black text-xs rounded-md border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
              >
                <RotateCw size={12} className={isRefreshing ? 'animate-spin' : ''} />
                <span>Saya Sudah Centang, Cek Lagi</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error State: Other errors */}
      {!isSettingDisabled && error && (
        <div className="mb-5 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/30 border-2 border-red-400 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-red-800 dark:text-red-300">
            <AlertCircle size={16} className="flex-shrink-0" />
            <span>{error}</span>
          </div>
          <button
            onClick={handleRefresh}
            className="px-2.5 py-1 bg-white dark:bg-gray-800 font-bold text-xs border border-red-400 rounded cursor-pointer hover:bg-gray-50"
          >
            Coba Lagi
          </button>
        </div>
      )}

      {/* Stats Cards Grid */}
      {loading ? (
        /* Loading Skeleton */
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 animate-pulse"
            >
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
              <div className="h-8 w-28 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
              <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        /* Main Stats Display */
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Card 1: Visitors 30 Hari Terakhir */}
          <div className="p-4 rounded-xl border-2 border-black dark:border-white bg-gradient-to-br from-emerald-50/50 to-white dark:from-emerald-950/20 dark:to-gray-800 shadow-[3px_3px_0px_0px_rgba(16,185,129,1)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800">
                30 Hari Terakhir
              </span>
              <Users size={16} className="text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <div className="font-mono text-2xl md:text-3xl font-black text-black dark:text-white mb-0.5">
                <AnimatedNumber value={visitors30d} />
              </div>
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                Pengunjung Unik
              </p>
            </div>
          </div>

          {/* Card 2: Lifetime Visitors */}
          <div className="p-4 rounded-xl border-2 border-black dark:border-white bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-950/20 dark:to-gray-800 shadow-[3px_3px_0px_0px_rgba(59,130,246,1)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-950/70 px-2 py-0.5 rounded border border-blue-300 dark:border-blue-800">
                All-Time / Lifetime
              </span>
              <Globe size={16} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="font-mono text-2xl md:text-3xl font-black text-black dark:text-white mb-0.5">
                <AnimatedNumber value={visitorsLifetime} />
              </div>
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                Total Pengunjung Seumur Hidup
              </p>
            </div>
          </div>

          {/* Card 3: Pageviews */}
          <div className="p-4 rounded-xl border-2 border-black dark:border-white bg-gradient-to-br from-amber-50/50 to-white dark:from-amber-950/20 dark:to-gray-800 shadow-[3px_3px_0px_0px_rgba(245,158,11,1)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/70 px-2 py-0.5 rounded border border-amber-300 dark:border-amber-800">
                {pageLabel}
              </span>
              <Eye size={16} className="text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <div className="font-mono text-2xl md:text-3xl font-black text-black dark:text-white mb-0.5">
                <AnimatedNumber value={pageviews} />
              </div>
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                Total Tayangan Halaman (Views)
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer Meta Note */}
      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 gap-2">
        <div className="flex items-center gap-1.5">
          <Clock size={12} />
          <span>cache data setiap ~4 jam</span>
        </div>
        {lastUpdated && (
          <span className="sm:hidden font-mono">
            Diperbarui: {formatTime(lastUpdated)}
          </span>
        )}
      </div>
    </div>
  );
}
