import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(1.8);

  useEffect(() => {
    const interval = 100; // update every 100ms
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 0.1;
        if (next <= 0) {
          clearInterval(timer);
          navigate('/', { replace: true });
          return 0;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [navigate]);

  const progressPercent = Math.max(0, Math.min(100, (timeLeft / 1.8) * 100));

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 selection:bg-brand-emerald selection:text-white">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 border-[3px] border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden">
        {/* Top decorative stripe */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-emerald via-brand-yellow to-brand-purple" />

        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-yellow text-black border-2 border-black rounded-lg font-black text-xs uppercase tracking-wider mb-4 transform -rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Compass size={16} className="animate-spin" />
          <span>404 — Halaman Tidak Ditemukan</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black font-serif tracking-tight text-gray-900 dark:text-white mb-3">
          Tersesat di Luar Radar?
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-300 font-medium mb-6 leading-relaxed">
          Halaman yang Anda tuju tidak ditemukan atau telah dipindahkan. Sistem sedang mengalihkan Anda kembali ke beranda.
        </p>

        {/* Countdown & Progress bar */}
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-black dark:border-white rounded-xl p-3.5 mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
          <div className="flex justify-between items-center text-xs font-bold mb-2">
            <span className="text-gray-700 dark:text-gray-300">Otomatis dialihkan dalam:</span>
            <span className="font-mono text-brand-emerald dark:text-emerald-400 text-sm">
              {timeLeft.toFixed(1)}s
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden border border-black dark:border-white">
            <div
              className="bg-brand-emerald h-full transition-all duration-100 ease-linear rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Action button */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate('/', { replace: true })}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-emerald text-black font-bold text-sm rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
          >
            <Home size={18} />
            <span>Kembali ke Beranda Sekarang</span>
          </button>
        </div>

        {/* Mini footer */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 text-[11px] font-mono text-gray-400">
          MualSkripsi • Repositori Karya Ilmiah
        </div>
      </div>
    </div>
  );
}
