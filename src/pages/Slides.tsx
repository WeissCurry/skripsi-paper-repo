import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, X, Maximize2, Minimize2, CheckCircle2, 
  AlertTriangle, ShieldCheck, Zap, TrendingUp, HardDrive, 
  Code2, Database, Layout as LayoutIcon, Settings,
  CheckCircle, ArrowRightCircle, Target, BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface SlideProps {
  content: React.ReactNode;
  index: number;
}

const SlideContainer: React.FC<SlideProps> = ({ content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8 overflow-y-auto custom-scrollbar"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-full py-12">
        {content}
      </div>
    </motion.div>
  );
};

export default function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(s => s + 1);
      setZoomedImage(null);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(s => s - 1);
      setZoomedImage(null);
    }
  }, [currentSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'f' || e.key === 'F') toggleFullscreen();
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isFullscreen]);

  const ImageWithZoom = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => (
    <div className={`relative group cursor-zoom-in ${className}`} onClick={() => setZoomedImage(src)}>
      <div className="absolute inset-0 bg-brand-emerald/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
        <Maximize2 className="text-white drop-shadow-md" size={32} />
      </div>
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
  );

  const slides = [
    // Slide 1: Title
    {
      id: "title",
      content: (
        <div className="space-y-10">
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-block bg-black text-white px-8 py-3 border-[4px] border-brand-emerald shadow-[10px_10px_0px_0px_rgba(16,185,129,1)]"
          >
            <h4 className="text-xl md:text-2xl font-black tracking-[0.3em] uppercase">Sidang Skripsi 2026</h4>
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-black font-serif leading-none tracking-tight uppercase max-w-5xl">
            Rancangan Arsitektur Manajemen Risiko <br/>
            <span className="text-brand-emerald">&</span> Kepatuhan <span className="text-brand-blue">Syariah</span> <br/>
            pada Staking Ethereum
          </h1>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-12 bg-black"></span>
              <p className="text-2xl font-bold italic text-gray-600 underline decoration-brand-yellow decoration-4 underline-offset-4">Pendekatan TOGAF ADM</p>
              <span className="h-[3px] w-12 bg-black"></span>
            </div>
            <div className="bg-white border-[3px] border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xl font-black tracking-widest uppercase">Maulana Asykari Muhammad</p>
              <p className="text-sm font-bold text-gray-500">11220930000058 • Sistem Informasi</p>
            </div>
          </div>
        </div>
      )
    },
    // Slide 2: Latar Belakang (The Data)
    {
      id: "background",
      content: (
        <div className="w-full max-w-6xl space-y-12">
          <div className="flex justify-between items-end border-b-8 border-black pb-4">
             <h2 className="text-5xl md:text-7xl font-black font-serif uppercase italic leading-none">Latar <span className="text-brand-emerald">Belakang</span></h2>
             <p className="text-xl font-black text-gray-400">02 / 17</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <div className="brutal-box p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                 <h4 className="font-black uppercase text-brand-emerald mb-2 italic">Global Crypto Adoption Index</h4>
                 <p className="text-lg font-bold">Indonesia Peringkat #7 Dunia (Chainalysis, 2025)</p>
                 <div className="mt-4 h-4 bg-gray-100 rounded-full overflow-hidden flex">
                    <div className="h-full bg-brand-emerald w-[70%]"></div>
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="brutal-box p-4 bg-black text-white">
                    <p className="text-3xl font-black">45.2T</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Volume Transaksi (Bappebti)</p>
                 </div>
                 <div className="brutal-box p-4 bg-brand-yellow text-black border-black">
                    <p className="text-3xl font-black">75%</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-700">Usia Produktif (18-35th)</p>
                 </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="brutal-box p-1 bg-white rotate-2 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <ImageWithZoom src="/content/paper-images/transaksi-kripto-vs-pasar-modal.png" alt="Market share" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 text-right italic">Gbr: Pertumbuhan Transaksi Kripto di Indonesia</p>
            </div>
          </div>
        </div>
      )
    },
    // Slide 3: Staking Context (Market Share)
    {
      id: "market-share",
      content: (
        <div className="w-full max-w-6xl space-y-12">
          <h2 className="text-4xl md:text-6xl font-black font-serif uppercase tracking-tight text-left italic">Dominasi <span className="text-brand-blue">Market Share</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="brutal-box p-1 bg-white -rotate-1 shadow-[12px_12px_0px_0px_rgba(59,130,246,1)]">
                <ImageWithZoom src="/content/paper-images/skema-liquid-staking.png" alt="Liquid Staking Scheme" />
             </div>
             <div className="text-left space-y-8">
                <div className="space-y-4">
                   <div className="flex items-center gap-6">
                      <div className="bg-red-500 text-white w-20 h-20 flex flex-col items-center justify-center border-4 border-black shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                         <span className="text-2xl font-black">71.5%</span>
                      </div>
                      <div>
                         <h4 className="text-xl font-black uppercase">Liquid Staking Protocols</h4>
                         <p className="text-sm font-bold text-gray-500 italic">Lido, RocketPool, etc. (Risiko Sentralisasi Tinggi)</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6">
                      <div className="bg-brand-emerald text-black w-20 h-20 flex flex-col items-center justify-center border-4 border-black shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                         <span className="text-2xl font-black">28.5%</span>
                      </div>
                      <div>
                         <h4 className="text-xl font-black uppercase">Solo Staking</h4>
                         <p className="text-sm font-bold text-gray-500 italic">Mekanisme Paling Aman & Desentralisasi</p>
                      </div>
                   </div>
                </div>
                <div className="bg-black text-white p-6 border-l-8 border-brand-yellow italic">
                   <p className="font-bold">"Transisi PoS (The Merge) menjadikan staking sebagai instrumen vital, namun model titip dana saat ini penuh dengan syubhat."</p>
                </div>
             </div>
          </div>
        </div>
      )
    },
    // Slide 4: Gap Analysis (Masalah Utama)
    {
      id: "gap-analysis",
      content: (
        <div className="w-full max-w-6xl space-y-12">
          <h2 className="text-5xl font-black font-serif uppercase tracking-tighter bg-red-600 text-white px-8 py-2 inline-block">Gap <span className="italic">Analysis</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="brutal-box p-8 bg-white border-red-600 shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] text-left">
                <h4 className="text-xl font-black uppercase text-red-600 mb-4 italic border-b-2 border-red-100 pb-2">Risiko DeFi</h4>
                <ul className="space-y-3 font-bold text-sm">
                   <li>• Mekanisme Slashing</li>
                   <li>• Smart Contract Bug</li>
                   <li>• Centralization Risk</li>
                </ul>
             </div>
             <div className="brutal-box p-8 bg-white border-brand-emerald shadow-[8px_8px_0px_0px_rgba(16,185,129,1)] text-left">
                <h4 className="text-xl font-black uppercase text-brand-emerald mb-4 italic border-b-2 border-green-100 pb-2">Kepatuhan Syariah</h4>
                <ul className="space-y-3 font-bold text-sm">
                   <li>• Potensi Gharar (Reward/Slash)</li>
                   <li>• Ambiguitas Akad</li>
                   <li>• Unsur Riba pada Rebase</li>
                </ul>
             </div>
             <div className="brutal-box p-8 bg-black text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-left border-brand-yellow border-2">
                <h4 className="text-xl font-black uppercase text-brand-yellow mb-4 italic border-b-2 border-gray-800 pb-2">Gap Tata Kelola</h4>
                <p className="font-bold text-xs leading-relaxed italic text-gray-300 underline decoration-brand-yellow underline-offset-4">
                   "Belum ada standar audit yang mengintegrasikan aspek TEKNIS & SYARIAH dalam satu kerangka kerja Arsitektur Enterprise."
                </p>
             </div>
          </div>
        </div>
      )
    },
    // Slide 5: Identifikasi & Rumusan Masalah
    {
      id: "problem-statement",
      content: (
        <div className="w-full max-w-5xl space-y-10">
          <div className="text-center space-y-4">
             <h2 className="text-4xl font-black font-serif uppercase tracking-widest">Identifikasi Masalah</h2>
             <div className="h-1 w-32 bg-black mx-auto"></div>
          </div>
          <div className="space-y-6">
             <div className="bg-white border-4 border-black p-6 flex items-start gap-4 text-left shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-black text-white p-2 font-black">01</div>
                <p className="font-bold text-lg">Belum terkelolanya risiko multidimensi pada ekosistem staking Ethereum.</p>
             </div>
             <div className="bg-white border-4 border-black p-6 flex items-start gap-4 text-left shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-black text-white p-2 font-black">02</div>
                <p className="font-bold text-lg">Belum tersedianya standar kepatuhan syariah yang baku untuk memvalidasi mekanisme staking.</p>
             </div>
          </div>
          <div className="bg-brand-emerald p-8 border-4 border-black mt-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
             <h4 className="text-xl font-black uppercase mb-2">Rumusan Masalah:</h4>
             <p className="text-3xl font-black italic">
                "Bagaimana merancang arsitektur manajemen risiko & kepatuhan syariah menggunakan pendekatan TOGAF ADM?"
             </p>
          </div>
        </div>
      )
    },
    // Slide 6: Batasan Masalah (Fokus, Lokus, Tempus)
    {
      id: "limitations",
      content: (
        <div className="w-full max-w-6xl space-y-12">
          <h2 className="text-5xl font-black font-serif uppercase tracking-tighter italic">Batasan <span className="text-brand-blue">Masalah</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="brutal-box p-8 bg-white border-black shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] flex flex-col items-center">
                <div className="bg-brand-blue text-white p-3 border-2 border-black mb-6 rotate-3"><Target size={32} /></div>
                <h4 className="text-2xl font-black uppercase mb-4">Fokus</h4>
                <p className="text-sm font-bold text-gray-600 text-center italic leading-relaxed">
                   Perancangan arsitektur menggunakan TOGAF ADM (Preliminary s.d. Phase D) & Implementasi Prototipe.
                </p>
             </div>
             <div className="brutal-box p-8 bg-white border-black shadow-[8px_8px_0px_0px_rgba(16,185,129,1)] flex flex-col items-center">
                <div className="bg-brand-emerald text-black p-3 border-2 border-black mb-6 -rotate-3"><HardDrive size={32} /></div>
                <h4 className="text-2xl font-black uppercase mb-4">Lokus</h4>
                <p className="text-sm font-bold text-gray-600 text-center italic leading-relaxed">
                   Ekosistem Ethereum Mainnet untuk mekanisme Solo dan Liquid Staking.
                </p>
             </div>
             <div className="brutal-box p-8 bg-white border-black shadow-[8px_8px_0px_0px_rgba(253,224,71,1)] flex flex-col items-center">
                <div className="bg-brand-yellow text-black p-3 border-2 border-black mb-6 rotate-1"><Zap size={32} /></div>
                <h4 className="text-2xl font-black uppercase mb-4">Tempus</h4>
                <p className="text-sm font-bold text-gray-600 text-center italic leading-relaxed">
                   Periode pasca transisi "The Merge" (Mekanisme Proof-of-Stake).
                </p>
             </div>
          </div>
        </div>
      )
    },
    // Slide 7: Tinjauan Literatur (Venn Diagram)
    {
      id: "literature",
      content: (
        <div className="w-full max-w-6xl space-y-12">
          <h2 className="text-5xl font-black font-serif uppercase tracking-tighter italic text-center">Tinjauan <span className="text-brand-emerald">Literatur</span></h2>
          <div className="relative h-[400px] flex items-center justify-center">
             <div className="absolute w-[280px] h-[280px] bg-brand-emerald/20 border-[4px] border-brand-emerald rounded-full -translate-x-20 flex items-start justify-center pt-12">
                <p className="font-black uppercase text-sm">Enterprise Architecture</p>
             </div>
             <div className="absolute w-[280px] h-[280px] bg-brand-blue/20 border-[4px] border-brand-blue rounded-full translate-x-20 flex items-start justify-center pt-12">
                <p className="font-black uppercase text-sm">Manajemen Risiko DeFi</p>
             </div>
             <div className="absolute w-[280px] h-[280px] bg-brand-yellow/20 border-[4px] border-brand-yellow rounded-full translate-y-20 flex items-end justify-center pb-12">
                <p className="font-black uppercase text-sm">Kepatuhan Syariah</p>
             </div>
             <div className="absolute bg-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10 text-center">
                <p className="text-xl font-black uppercase italic tracking-tighter">Penelitian Ini</p>
                <div className="h-1 w-12 bg-brand-emerald mx-auto my-2"></div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Maulana Asykari Muhammad</p>
             </div>
          </div>
        </div>
      )
    },
    // Slide 8: Metode Penelitian (TOGAF Cycle)
    {
      id: "methodology",
      content: (
        <div className="w-full max-w-6xl space-y-10">
          <h2 className="text-5xl md:text-7xl font-black font-serif uppercase leading-none">Metode <span className="text-brand-emerald italic">Penelitian</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="brutal-box p-1 bg-white rotate-1 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                <ImageWithZoom src="/content/paper-images/kerangka-penelitian.png" alt="Metodologi" />
             </div>
             <div className="text-left space-y-6">
                <div className="space-y-4">
                   <div className="bg-white border-2 border-black p-4 flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer">
                      <div className="bg-black text-white font-black p-2 text-xs">P</div>
                      <p className="font-black uppercase">Preliminary Phase</p>
                   </div>
                   <div className="bg-white border-2 border-black p-4 flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer">
                      <div className="bg-brand-emerald text-black font-black p-2 text-xs">A</div>
                      <p className="font-black uppercase">Architecture Vision</p>
                   </div>
                   <div className="bg-white border-2 border-black p-4 flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer">
                      <div className="bg-brand-blue text-white font-black p-2 text-xs">B</div>
                      <p className="font-black uppercase">Business Architecture</p>
                   </div>
                   <div className="bg-white border-2 border-black p-4 flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer">
                      <div className="bg-brand-yellow text-black font-black p-2 text-xs">C</div>
                      <p className="font-black uppercase">Info System Architecture</p>
                   </div>
                   <div className="bg-black text-white border-2 border-black p-4 flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer">
                      <div className="bg-gray-700 text-white font-black p-2 text-xs">D</div>
                      <p className="font-black uppercase">Technology Architecture</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      )
    },
    // Slide 9: Komparasi Framework (Why TOGAF?)
    {
      id: "comparison",
      content: (
        <div className="w-full max-w-6xl space-y-12">
          <h2 className="text-5xl font-black font-serif uppercase tracking-tighter">Why <span className="text-brand-emerald italic">TOGAF ADM?</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
             <div className="p-8 bg-brand-emerald/10 border-r-4 border-black text-left">
                <h4 className="text-2xl font-black uppercase mb-4 italic underline decoration-brand-emerald">TOGAF ADM</h4>
                <p className="font-bold text-sm italic">"Metode operasional langkah-demi-langkah (How-to) yang sangat adaptif untuk tata kelola risiko."</p>
             </div>
             <div className="p-8 bg-white border-r-4 border-black text-left">
                <h4 className="text-2xl font-black uppercase mb-4 italic">Zachman</h4>
                <p className="font-bold text-sm italic text-gray-400">"Hanya berupa matriks taksonomi (What) tanpa panduan urutan pengerjaan."</p>
             </div>
             <div className="p-8 bg-white text-left">
                <h4 className="text-2xl font-black uppercase mb-4 italic">FEAF</h4>
                <p className="font-bold text-sm italic text-gray-400">"Didesain khusus untuk hierarki birokrasi pemerintahan federal."</p>
             </div>
          </div>
        </div>
      )
    },
    // Slide 10: Syariah Integration (Secret Weapon)
    {
      id: "syariah",
      content: (
        <div className="w-full max-w-5xl space-y-12">
          <h2 className="text-4xl md:text-6xl font-black font-serif uppercase tracking-tighter bg-black text-white px-6 py-2 inline-block italic border-r-[12px] border-brand-emerald">Senjata Rahasia <span className="text-brand-emerald">Kepatuhan</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="text-4xl font-black bg-brand-emerald w-20 h-20 flex items-center justify-center border-4 border-black rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">01</div>
              <div>
                <h3 className="text-2xl font-black uppercase mb-2">Akad Wakalah</h3>
                <p className="text-sm font-bold text-gray-500 italic">"Wakalah bil Istithmar dengan fee 5% di awal, menghapus Gharar."</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="text-4xl font-black bg-brand-blue w-20 h-20 flex items-center justify-center border-4 border-black rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">02</div>
              <div>
                <h3 className="text-2xl font-black uppercase mb-2">Eliminasi Riba</h3>
                <p className="text-sm font-bold text-gray-500 italic">"Transformasi saldo dari Rebase ke Valuasi Organik (NAV)."</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="text-4xl font-black bg-brand-yellow w-20 h-20 flex items-center justify-center border-4 border-black rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">03</div>
              <div>
                <h3 className="text-2xl font-black uppercase mb-2">Hifzul Mal</h3>
                <p className="text-sm font-bold text-gray-500 italic">"Perlindungan harta investor via Automated Emergency Pause."</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 11: Phase B: Business Architecture (BPMN)
    {
      id: "phase-b",
      content: (
        <div className="w-full max-w-6xl space-y-8">
          <h2 className="text-4xl md:text-6xl font-black font-serif uppercase tracking-tight text-left">Phase B: <span className="text-brand-emerald italic">Business Architecture</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="text-left space-y-6">
                <div className="bg-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                   <h4 className="text-2xl font-black uppercase mb-4 italic underline decoration-brand-emerald decoration-4 underline-offset-4">BPMN Usulan</h4>
                   <p className="font-bold text-gray-700 leading-relaxed italic">
                      "Proses bisnis dirancang untuk memastikan setiap langkah transaksi divalidasi oleh Sharia Logic Engine sebelum masuk ke mempool jaringan."
                   </p>
                </div>
                <div className="flex gap-4">
                   <div className="bg-black text-white p-4 font-black uppercase text-xs tracking-widest border-2 border-black">Investor</div>
                   <div className="bg-brand-emerald text-black p-4 font-black uppercase text-xs tracking-widest border-2 border-black">System</div>
                   <div className="bg-brand-blue text-black p-4 font-black uppercase text-xs tracking-widest border-2 border-black">Contract</div>
                </div>
             </div>
             <div className="brutal-box p-1 bg-white -rotate-1 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <ImageWithZoom src="/content/paper-images/skema-staking-usulan.png" alt="Skema Staking Usulan" />
             </div>
          </div>
        </div>
      )
    },
    // Slide 12: Phase C: Information Systems (Data Model)
    {
      id: "phase-c",
      content: (
        <div className="w-full max-w-6xl space-y-10">
          <h2 className="text-4xl md:text-6xl font-black font-serif uppercase tracking-tight text-left">Phase C: <span className="text-brand-blue italic">Information Systems</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="brutal-box p-1 bg-white rotate-1 shadow-[59,130,246,1)]">
                <ImageWithZoom src="/content/paper-images/conceptual-data-model.jpeg" alt="Data Model" />
             </div>
             <div className="text-left space-y-8">
                <div className="bg-brand-blue/10 border-[4px] border-brand-blue p-8 shadow-[8px_8px_0px_0px_rgba(59,130,246,1)]">
                   <h4 className="text-2xl font-black uppercase mb-4 italic">Conceptual Data Model</h4>
                   <p className="font-bold text-gray-700 leading-relaxed mb-6 italic">
                      "Pemetaan entitas data mencakup parameter penalti, skor kepatuhan, dan record valuasi NAV harian untuk transparansi audit."
                   </p>
                   <div className="flex flex-wrap gap-2">
                      <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase">Contract_ID</span>
                      <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase">Sharia_Score</span>
                      <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase">NAV_Valuation</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      )
    },
    // Slide 13: Phase D: Technology Architecture (System Layers)
    {
      id: "phase-d",
      content: (
        <div className="w-full max-w-6xl space-y-10">
          <h2 className="text-4xl md:text-6xl font-black font-serif uppercase tracking-tight text-left">Phase D: <span className="text-brand-emerald italic">Technology Architecture</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="text-left space-y-6 order-2 md:order-1">
                <div className="space-y-4">
                   <div className="flex items-center gap-4 bg-white border-2 border-black p-4 group hover:bg-brand-emerald transition-colors">
                      <LayoutIcon className="group-hover:text-white" />
                      <p className="font-black uppercase group-hover:text-white">UI Layer (Next.js & Tailwind)</p>
                   </div>
                   <div className="flex items-center gap-4 bg-white border-2 border-black p-4 group hover:bg-brand-blue transition-colors">
                      <Settings className="group-hover:text-white" />
                      <p className="font-black uppercase group-hover:text-white">API Services (Risk Engine)</p>
                   </div>
                   <div className="flex items-center gap-4 bg-white border-2 border-black p-4 group hover:bg-brand-yellow transition-colors">
                      <Code2 className="group-hover:text-black" />
                      <p className="font-black uppercase group-hover:text-black">On-Chain Layer (Smart Contracts)</p>
                   </div>
                   <div className="flex items-center gap-4 bg-black text-white border-2 border-black p-4">
                      <HardDrive />
                      <p className="font-black uppercase">Infrastructure (Validator Nodes)</p>
                   </div>
                </div>
             </div>
             <div className="brutal-box p-1 bg-white -rotate-1 shadow-[12px_12px_0px_0px_rgba(16,185,129,1)] order-1 md:order-2">
                <ImageWithZoom src="/content/paper-images/lapisan-aplikasi.jpeg" alt="Lapisan Aplikasi" />
             </div>
          </div>
        </div>
      )
    },
    // Slide 14: Risk Indicators (Radar Chart)
    {
      id: "indicators",
      content: (
        <div className="w-full max-w-6xl space-y-12">
          <h2 className="text-5xl font-black font-serif uppercase italic underline decoration-brand-emerald decoration-8 underline-offset-8">Risk & Compliance <span className="text-brand-emerald italic">Indicators</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="brutal-box p-1 bg-white rotate-1 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                <ImageWithZoom src="/content/paper-images/manajemen-risiko.png" alt="Manajemen Risiko" />
             </div>
             <div className="text-left space-y-6">
                <h4 className="text-2xl font-black uppercase italic text-brand-emerald">Matriks Manajemen Risiko:</h4>
                <div className="grid grid-cols-2 gap-4">
                   <div className="font-bold text-lg italic border-l-4 border-black pl-3">Financial Risks <span className="text-xs block text-gray-400">(Liquidity, Slashing)</span></div>
                   <div className="font-bold text-lg italic border-l-4 border-black pl-3">Operational Risks <span className="text-xs block text-gray-400">(Key Mgmt, Centralization)</span></div>
                   <div className="font-bold text-lg italic border-l-4 border-brand-emerald pl-3">Compliance Risks <span className="text-xs block text-gray-400">(Gharar, Riba, Hifzul Mal)</span></div>
                   <div className="font-bold text-lg italic border-l-4 border-brand-emerald pl-3">Technical Risks <span className="text-xs block text-gray-400">(Smart Contract, Infrastructure)</span></div>
                </div>
             </div>
          </div>
        </div>
      )
    },
    // Slide 15: UI Showcase (Risk Explorer)
    {
      id: "ui-explorer",
      content: (
        <div className="w-full max-w-6xl space-y-10">
          <h2 className="text-5xl font-black font-serif uppercase tracking-tighter italic text-left border-b-4 border-brand-blue inline-block">UI: <span className="text-brand-blue">Risk Explorer</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             <div className="space-y-4">
                <div className="brutal-box p-1 bg-white shadow-[10px_10px_0px_0px_rgba(59,130,246,1)]">
                   <ImageWithZoom src="/content/paper-images/ui-solo-staking.png" alt="Explorer Dashboard" />
                </div>
                <p className="font-black uppercase text-xs tracking-[0.3em] text-gray-400 italic text-center">Validator Risk Ranking</p>
             </div>
             <div className="space-y-6 text-left flex flex-col justify-center">
                <h3 className="text-3xl font-black uppercase italic underline decoration-brand-blue">Transparency Layer</h3>
                <p className="text-xl font-bold text-gray-600 italic leading-relaxed">
                   "Investor dapat memantau Client Diversity & Nakamoto Coefficient secara aktual untuk memitigasi risiko sentralisasi dan memastikan kepatuhan syariah."
                </p>
                <div className="flex gap-3">
                   <div className="bg-black text-white p-3 font-black text-xs uppercase border-2 border-black">Verified Code</div>
                   <div className="bg-brand-emerald text-black p-3 font-black text-xs uppercase border-2 border-black">Sharia Verified</div>
                </div>
             </div>
          </div>
        </div>
      )
    },
    // Slide 16: Conclusion (Academic Version)
    {
      id: "conclusion",
      content: (
        <div className="space-y-16 text-center">
           <motion.div
             initial={{ rotate: -180, scale: 0 }}
             animate={{ rotate: 0, scale: 1 }}
             transition={{ duration: 0.8, type: "spring" }}
             className="inline-block bg-brand-emerald p-8 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
           >
              <CheckCircle2 size={120} className="text-white" />
           </motion.div>
           <div className="space-y-8">
              <h2 className="text-6xl md:text-9xl font-black font-serif uppercase tracking-tighter italic underline decoration-brand-emerald decoration-[16px]">Conclusion</h2>
              <div className="max-w-4xl mx-auto space-y-10">
                <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-left">
                   <p className="text-xl md:text-2xl font-bold leading-relaxed italic">
                      "Model Nilai Aktiva Bersih (NAV) terbukti mampu mengeliminasi titik kritis <span className="text-red-500 underline">Riba</span> & <span className="text-red-500 underline">Gharar</span> secara fundamental, selaras dengan prinsip <span className="text-brand-emerald underline">Hifzul Mal</span>."
                   </p>
                </div>
                <p className="text-lg font-black uppercase tracking-[0.5em] text-gray-400 italic">Blockchain • Fikih Muamalah • TOGAF ADM</p>
              </div>
           </div>
        </div>
      )
    },
    // Slide 17: Terimakasih
    {
      id: "thank-you",
      content: (
        <div className="space-y-16 text-center">
           <div className="inline-block bg-black text-white p-12 border-8 border-brand-emerald shadow-[16px_16px_0px_0px_rgba(16,185,129,1)]">
              <h2 className="text-6xl md:text-9xl font-black font-serif uppercase tracking-widest italic">TERIMAKASIH</h2>
           </div>
           <div className="space-y-6">
              <p className="text-2xl font-black uppercase italic tracking-tighter">Maulana Asykari Muhammad</p>
              <div className="flex justify-center gap-4">
                 <div className="bg-white border-2 border-black px-6 py-2 font-black italic">@maulana.am</div>
                 <div className="bg-white border-2 border-black px-6 py-2 font-black italic">muhammad.maulana22@mhs.uinjkt.ac.id</div>
              </div>
           </div>
           <div className="pt-12">
              <Link to="/" className="inline-block bg-black text-white px-16 py-5 font-black border-[4px] border-brand-emerald shadow-[10px_10px_0px_0px_rgba(16,185,129,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all uppercase tracking-widest text-xl">
                KEMBALI KE BERANDA
              </Link>
           </div>
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 z-[1000] bg-background overflow-hidden flex flex-col selection:bg-brand-emerald selection:text-white">
      {/* Top Header Navigation */}
      <div className="p-6 md:p-8 flex justify-between items-center z-[1001]">
        <div className="flex items-center gap-4">
          <Link to="/" className="bg-black text-white font-black px-4 py-2 text-sm border-2 border-black rotate-1 hover:rotate-0 transition-transform">
            MUALSKRIPSI
          </Link>
          <div className="h-8 w-[2px] bg-gray-200 dark:bg-gray-700"></div>
          <span className="font-black text-xs uppercase tracking-widest text-gray-500">
            Slide {currentSlide + 1} <span className="text-gray-300 mx-2">/</span> {slides.length}
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleFullscreen} 
            className="p-3 border-2 border-black bg-white dark:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>
          <Link 
            to="/" 
            className="p-3 border-2 border-black bg-white dark:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-red-500 hover:text-white transition-all"
            title="Close Presentation (Esc)"
          >
            <X size={20} />
          </Link>
        </div>
      </div>

      {/* Main Slide Area */}
      <div className="flex-grow relative flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <SlideContainer 
            key={currentSlide} 
            index={currentSlide} 
            content={slides[currentSlide].content} 
          />
        </AnimatePresence>
      </div>

      {/* Bottom Controls */}
      <div className="p-8 md:p-12 flex justify-between items-center z-[1001]">
        <div className="w-1/4 flex justify-start">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`group p-5 border-[4px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all disabled:opacity-20 disabled:pointer-events-none`}
          >
            <ChevronLeft size={40} className="group-hover:scale-125 transition-transform" />
          </button>
        </div>
        
        {/* Visual Progress Bar */}
        <div className="flex-grow max-w-xl mx-8">
          <div className="flex justify-between mb-3 px-2">
             <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">Introduction</span>
             <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">Conclusion</span>
          </div>
          <div className="h-[14px] bg-white border-[3px] border-black rounded-full overflow-hidden flex shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
            {slides.map((_, i) => (
              <div 
                key={i} 
                className={`h-full border-r-[1px] border-black last:border-0 transition-all duration-700 ${i <= currentSlide ? 'flex-grow bg-brand-emerald' : 'w-2 bg-transparent'}`}
              />
            ))}
          </div>
        </div>

        <div className="w-1/4 flex justify-end">
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`group p-5 border-[4px] border-black bg-brand-emerald shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all disabled:opacity-20 disabled:pointer-events-none`}
          >
            <ChevronRight size={40} className="group-hover:scale-125 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative Branding */}
      <div className="absolute bottom-6 left-12 hidden lg:block overflow-hidden">
        <div className="flex items-center gap-3 animate-pulse">
           <div className="w-3 h-3 bg-brand-emerald rounded-full"></div>
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 italic">Thesis Presentation • 2026 • Maulana Asykari Muhammad</span>
        </div>
      </div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-8 right-8 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={32} />
            </motion.button>
            <motion.img 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              src={zoomedImage} 
              className="max-w-full max-h-full object-contain shadow-2xl border-4 border-white/30" 
              alt="Zoomed view" 
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs font-black uppercase tracking-widest italic">Click anywhere to close</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
