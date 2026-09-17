import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, GraduationCap } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import AnalyticsTracker from './components/AnalyticsTracker';

const lazyWithMinDelay = <P extends object>(
  factory: () => Promise<{ default: React.ComponentType<P> }>,
  minDelay = 650
) => {
  return lazy(() =>
    Promise.all([
      factory(),
      new Promise((resolve) => setTimeout(resolve, minDelay)),
    ]).then(([moduleExports]) => moduleExports)
  );
};

const Home = lazyWithMinDelay(() => import('./pages/Home'));
const PaperDetail = lazyWithMinDelay(() => import('./pages/PaperDetail'));
const Perjalanan = lazyWithMinDelay(() => import('./pages/Perjalanan'));
const KiatSkripsi = lazyWithMinDelay(() => import('./pages/KiatSkripsi'));
const NotFound = lazyWithMinDelay(() => import('./pages/NotFound'));

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);


function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close menu when route changes (during render to avoid cascading renders)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background selection:bg-brand-emerald selection:text-white">
      <header className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 transition-all duration-300 ${isScrolled ? 'top-2' : 'top-4'}`}>
        <div className="bg-white dark:bg-gray-900 border-[3px] border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] py-3 px-6 md:px-8 flex justify-between items-center rounded-2xl relative">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-black font-serif tracking-tight leading-none">
              <Link to="/" className="hover:text-brand-emerald transition-colors flex items-center gap-2">
                <span className="bg-black text-white px-2.5 py-0.5 rounded-md transform -rotate-1">Mual</span>
                <span className="text-black dark:text-white">Skripsi</span>
              </Link>
            </h1>
            <p className="hidden md:block text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mt-1">Skripsi Maulana Asykari Muhammad</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 md:gap-2">
            <Link
              to="/kiat-skripsi"
              className={`px-3.5 py-2 font-bold text-sm rounded-lg transition-all border-2 ${pathname === '/kiat-skripsi'
                ? 'bg-brand-emerald text-white border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800 border-transparent text-gray-800 dark:text-gray-200'
                }`}
              title="Kiat & Tips Skripsi"
            >
              <span>Kiat Skripsi</span>
            </Link>

            <Link
              to="/perjalanan"
              className={`px-3.5 py-2 font-bold text-sm rounded-lg transition-all border-2 ${pathname === '/perjalanan'
                ? 'bg-brand-yellow text-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800 border-transparent text-gray-800 dark:text-gray-200'
                }`}
              title="Perjalanan Skripsi"
            >
              <span>Roadmap</span>
            </Link>

            <div className="h-6 w-[2px] bg-gray-200 dark:bg-gray-700 mx-1"></div>

            <a
              href="https://skripsistaking.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 font-bold text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border-2 border-transparent text-gray-800 dark:text-gray-200"
              title="Web3 Staking Dashboard"
            >
              <span>Dashboard</span>
            </a>

            <a
              href="https://canva.link/61gja8sos0zt711"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 font-bold text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border-2 border-transparent text-gray-800 dark:text-gray-200"
              title="Slides Presentasi Sidang"
            >
              <span>Slides</span>
            </a>

            <a
              href="https://scholar.google.com/citations?user=YKcLScoAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 font-bold text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border-2 border-transparent text-gray-800 dark:text-gray-200"
              title="Google Scholar Profile"
            >
              <span>Scholar</span>
            </a>

            <div className="h-6 w-[2px] bg-gray-200 dark:bg-gray-700 mx-1"></div>

            <button
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="p-2.5 border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] bg-white dark:bg-gray-800 transition-all rounded-lg cursor-pointer"
              title="Toggle Dark Mode"
            >
              <Moon size={20} className="dark:hidden" />
              <Sun size={20} className="hidden dark:block" />
            </button>
          </nav>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="p-2.5 border-2 border-black dark:border-white bg-white dark:bg-gray-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] active:translate-x-[1px] active:translate-y-[1px] transition-all rounded-lg cursor-pointer"
            >
              <Moon size={22} className="dark:hidden" />
              <Sun size={22} className="hidden dark:block" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 bg-brand-emerald text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all rounded-lg cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div className={`absolute top-[calc(100%+12px)] left-0 w-full bg-white dark:bg-gray-900 border-[3px] border-black dark:border-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] rounded-2xl p-4 flex flex-col gap-2 transition-all duration-300 origin-top lg:hidden ${isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-95 opacity-0 invisible'}`}>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-2 pt-1">Halaman</p>

            <Link
              to="/"
              className={`p-3 font-bold rounded-xl transition-all border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] ${pathname === '/'
                ? 'bg-brand-yellow text-black'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              <span className="text-base">Beranda</span>
            </Link>

            <Link
              to="/kiat-skripsi"
              className={`p-3 font-bold rounded-xl transition-all border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] ${pathname === '/kiat-skripsi'
                ? 'bg-brand-emerald text-white'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              <span className="text-base">Kiat & Tips Skripsi</span>
            </Link>

            <Link
              to="/perjalanan"
              className={`p-3 font-bold rounded-xl transition-all border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] ${pathname === '/perjalanan'
                ? 'bg-brand-yellow text-black'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              <span className="text-base">Roadmap</span>
            </Link>

            <div className="h-[2px] bg-gray-200 dark:bg-gray-700 my-1"></div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-2">Tautan Eksternal</p>

            <a
              href="https://skripsistaking.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 font-bold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]"
            >
              <span className="text-base">Prototype</span>
            </a>

            <a
              href="https://canva.link/61gja8sos0zt711"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 font-bold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]"
            >
              <span className="text-base">Slides</span>
            </a>

            <a
              href="https://scholar.google.com/citations?user=YKcLScoAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 font-bold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]"
            >
              <span className="text-base">Google Scholar</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-28 md:pt-32">
        {children}
      </main>

      <footer className="border-t-[3px] border-black dark:border-white py-10 px-4 md:px-8 mt-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif font-black text-lg">MualSkripsi</h3>
            <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
              Karya Penulisan & Skripsi oleh <strong>Maulana Asykari Muhammad</strong> · UIN Syarif Hidayatullah Jakarta
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/maulanasykari/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all rounded-lg cursor-pointer"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href="https://scholar.google.com/citations?user=YKcLScoAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] bg-white dark:bg-gray-800 text-brand-emerald hover:bg-emerald-50 dark:hover:bg-gray-700 transition-all rounded-lg cursor-pointer"
              title="Google Scholar Profile"
              aria-label="Google Scholar Profile"
            >
              <GraduationCap size={20} />
            </a>

            <a
              href="https://github.com/WeissCurry/skripsi-paper-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all rounded-lg cursor-pointer"
              title="GitHub Repository"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnalyticsTracker />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Routes WITH Layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/paper/:slug" element={<Layout><PaperDetail /></Layout>} />
          <Route path="/perjalanan" element={<Layout><Perjalanan /></Layout>} />
          <Route path="/kiat-skripsi" element={<Layout><KiatSkripsi /></Layout>} />

          {/* Catch-all 404 Route with Auto-Redirect */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
