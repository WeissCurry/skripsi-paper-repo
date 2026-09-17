import { useState, useEffect } from 'react';
import { Loader2, HardDriveDownload, Activity } from 'lucide-react';

export default function PageLoader() {
  const [bytesLoaded, setBytesLoaded] = useState<number>(0);
  const [resourceCount, setResourceCount] = useState<number>(0);

  useEffect(() => {
    // Measure total assets actually downloaded
    const calculateTransferredBytes = () => {
      try {
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        let total = 0;
        let count = resources.length;

        for (const res of resources) {
          const sz = res.transferSize > 0 
            ? res.transferSize 
            : (res.encodedBodySize || res.decodedBodySize || 0);
          total += sz;
        }

        const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        if (navEntries && navEntries.length > 0) {
          const nav = navEntries[0];
          total += nav.transferSize > 0 
            ? nav.transferSize 
            : (nav.encodedBodySize || nav.decodedBodySize || 0);
          count += 1;
        }

        setBytesLoaded(total);
        setResourceCount(count);
      } catch {
        // Silently fail if performance API is not available
      }
    };

    calculateTransferredBytes();

    // Setup PerformanceObserver if supported
    let observer: PerformanceObserver | null = null;
    try {
      observer = new PerformanceObserver(() => {
        calculateTransferredBytes();
      });
      observer.observe({ entryTypes: ['resource'] });
    } catch {
      // Fallback
    }

    const interval = setInterval(calculateTransferredBytes, 300);

    return () => {
      clearInterval(interval);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const formatSize = (bytes: number) => {
    if (!bytes || bytes <= 0) return '0 B';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Memuat Halaman"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="w-full max-w-sm bg-white dark:bg-gray-900 border-[3.5px] border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] rounded-2xl p-6 sm:p-7 text-center relative overflow-hidden">
        {/* Top decorative accent */}
        <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-brand-emerald via-brand-yellow to-brand-purple" />

        {/* Logo Branding */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="bg-black text-white px-2.5 py-1 rounded-md text-sm font-black font-serif transform -rotate-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Mual
          </span>
          <span className="font-serif font-black text-xl text-black dark:text-white">
            Skripsi
          </span>
        </div>

        {/* Loading Spinner & Status */}
        <div className="flex items-center justify-center gap-2.5 mb-2 text-brand-emerald dark:text-emerald-400">
          <Loader2 className="w-5 h-5 animate-spin" strokeWidth={3} />
          <span className="text-base font-black tracking-tight text-gray-900 dark:text-white">
            Memuat Halaman...
          </span>
        </div>

        <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mb-5">
          Mengunduh komponen, visual & data karya ilmiah...
        </p>

        {/* Indeterminate Progress Bar */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-black dark:border-white rounded-xl p-3 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
          <div className="flex justify-between items-center text-xs font-bold mb-1.5">
            <span className="text-gray-700 dark:text-gray-300 flex items-center gap-1">
              <Activity size={13} className="text-brand-yellow" />
              <span>Status Jaringan</span>
            </span>
            <span className="font-mono text-brand-emerald dark:text-emerald-400 font-bold">
              Aktif
            </span>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden border border-black dark:border-white relative">
            <div className="absolute inset-0 bg-brand-emerald w-1/3 rounded-full animate-[ping-pong_1.5s_ease-in-out_infinite]" style={{ animationName: 'indeterminate-bar', animationDuration: '1.5s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }} />
            <style>
              {`
                @keyframes indeterminate-bar {
                  0% { left: -33%; }
                  100% { left: 100%; }
                }
              `}
            </style>
          </div>
        </div>

        {/* Real-time Data/Size Indicator */}
        <div className="bg-emerald-50 dark:bg-emerald-950/40 border-2 border-brand-emerald rounded-xl p-3 flex items-center justify-between text-left">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-brand-emerald text-black rounded-lg border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
              <HardDriveDownload size={18} />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                Aset Aktual Diunduh
              </div>
              <div className="text-xs font-mono font-bold text-gray-900 dark:text-gray-100">
                {formatSize(bytesLoaded)}
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-[10px] font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Total Berkas
            </div>
            <div className="text-xs font-mono font-bold text-gray-800 dark:text-gray-200">
              {resourceCount} file
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
