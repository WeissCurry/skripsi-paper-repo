import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Sun, Moon, GitBranch, ExternalLink, Menu, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const PaperDetail = lazy(() => import('./pages/PaperDetail'));


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
                <span className="bg-black text-white px-2 py-0.5 rounded-sm transform -rotate-1">Mual</span>
                <span className="text-black dark:text-white">Skripsi</span>
              </Link>
            </h1>
            <p className="hidden md:block text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mt-1">Skripsi Maulana Asykari Muhammad</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 md:gap-6">
            <a 
              href="https://skripsistaking.netlify.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 font-bold text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border-2 border-transparent"
            >
              <GitBranch size={18} className="text-brand-emerald" />
              <span>Dashboard</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/maulanasykari/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 font-bold text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border-2 border-transparent"
            >
              <ExternalLink size={18} className="text-blue-600" />
              <span>Know More</span>
            </a>

            <div className="h-6 w-[2px] bg-gray-200 dark:bg-gray-700 mx-1"></div>

            <button
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="p-2.5 border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] bg-white dark:bg-gray-800 transition-all rounded-lg"
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
              className="p-2.5 border-2 border-black dark:border-white bg-white dark:bg-gray-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] active:translate-x-[1px] active:translate-y-[1px] transition-all rounded-lg"
            >
              <Moon size={22} className="dark:hidden" />
              <Sun size={22} className="hidden dark:block" />
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 bg-brand-emerald text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all rounded-lg"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div className={`absolute top-[calc(100%+12px)] left-0 w-full bg-white dark:bg-gray-900 border-[3px] border-black dark:border-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] rounded-2xl p-4 flex flex-col gap-2 transition-all duration-300 origin-top lg:hidden ${isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-95 opacity-0 invisible'}`}>
            <a 
              href="https://skripsistaking.netlify.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 font-bold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <GitBranch size={24} className="text-brand-emerald" />
              <span className="text-lg">Dashboard</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/maulanasykari/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 font-bold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <ExternalLink size={24} className="text-blue-600" />
              <span className="text-lg">Know More</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-28 md:pt-32">
        {children}
      </main>

      <footer className="border-t-[3px] border-black dark:border-white py-8 px-4 md:px-8 mt-12 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center font-medium">
          <p>© {new Date().getFullYear()} Maulana Asykari Muhammad. All rights reserved.</p>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Built for Thesis Presentation purposes.</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="flex justify-center items-center py-20 font-bold text-xl">Loading...</div>}>
        <Routes>
          {/* Routes WITH Layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/paper/:slug" element={<Layout><PaperDetail /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
