import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Calendar,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  BookmarkCheck,
  CheckCheck,
} from 'lucide-react';
import {
  KELOMPOK_KEAHLIAN,
  PORTAL_LINKS,
  JADWAL_INFO,
  CHECKLIST_SEMPRO,
  CHECKLIST_SEMHAS,
  CHECKLIST_SIDANG,
  CHECKLIST_DISTRIBUSI,
  TIPS_BIMBINGAN,
  TEMPLATE_CHAT,
  CONTOH_NOTES_BIMBINGAN,
  GOOGLE_DOC_URL,
} from '../data/kiatSkripsi';

const GoogleDocsIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="#4285F4" />
    <path d="M14 2V8H20L14 2Z" fill="#A1C2FA" />
    <path d="M8 13H16M8 17H13M8 9H11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

type StageType = 'sempro' | 'semhas' | 'sidang' | 'distribusi';

export default function KiatSkripsi() {
  const [activeStage, setActiveStage] = useState<StageType>('sidang');
  const [expandedKk, setExpandedKk] = useState<string | null>('kk1');
  const [copiedChat, setCopiedChat] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCheck = (stage: string, id: number) => {
    const key = `${stage}-${id}`;
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCopyChat = () => {
    navigator.clipboard.writeText(TEMPLATE_CHAT);
    setCopiedChat(true);
    setTimeout(() => setCopiedChat(false), 2500);
  };

  const getStageData = () => {
    switch (activeStage) {
      case 'sempro':
        return {
          title: 'Seminar Proposal (Sempro)',
          badge: 'Tahap 1',
          items: CHECKLIST_SEMPRO,
        };
      case 'semhas':
        return {
          title: 'Seminar Hasil (Semhas)',
          badge: 'Tahap 2',
          items: CHECKLIST_SEMHAS,
        };
      case 'sidang':
        return {
          title: 'Sidang Munaqasyah (Skripsi)',
          badge: 'Tahap 3',
          items: CHECKLIST_SIDANG,
        };
      case 'distribusi':
        return {
          title: 'Distribusi Tugas Akhir Pasca Sidang',
          badge: 'Tahap Akhir',
          items: CHECKLIST_DISTRIBUSI,
        };
    }
  };

  const currentStageData = getStageData();
  const completedCount = currentStageData.items.filter(
    (doc) => !!checkedItems[`${activeStage}-${doc.id}`]
  ).length;
  const totalCount = currentStageData.items.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-8 font-sans">
      {/* Top Breadcrumb / Back Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-black text-sm px-4 py-2 bg-white dark:bg-gray-800 border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all rounded-lg"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Beranda</span>
        </Link>

        <div className="flex items-center gap-3">

          {/* Primary Top Action: Google Docs */}
          <a
            href={GOOGLE_DOC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-black text-xs md:text-sm px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all rounded-lg cursor-pointer group"
            title="Buka Dokumen Asli di Google Docs"
          >
            <GoogleDocsIcon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span>Google Docs</span>
            <ExternalLink size={14} className="opacity-80" />
          </a>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-white dark:bg-gray-900 border-[3px] border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-6 md:p-10 rounded-2xl mb-12 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/15 dark:bg-blue-500/25 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-emerald text-black text-xs font-black uppercase tracking-wider rounded-md border-2 border-black">
            <BookOpen size={14} />
            Knowledge Hub & Panduan Praktis
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 text-xs font-bold rounded-md border border-blue-300 dark:border-blue-700">
            ⭐ Dokumen Resmi Google Docs
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-serif font-black tracking-tight leading-tight mb-4">
          Kiat & Tips Sukses Skripsi
        </h1>

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed mb-6">
          Dokumen ini disusun sebagai wujud rasa terima kasih kepada seluruh pihak yang telah mendukung kelulusan skripsi. Di dalamnya terangkum arahan pemilihan Kelompok Keahlian (KK), checklist berkas dari Sempro hingga Wisuda, etika bimbingan, serta template chat praktis.
        </p>

        {/* PROMINENT PRIMARY CALLOUT: BUKA GOOGLE DOCS */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-[3px] border-blue-500 dark:border-blue-400 p-5 md:p-6 rounded-2xl mb-8 shadow-[5px_5px_0px_0px_rgba(59,130,246,1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white dark:bg-gray-800 border-2 border-blue-500 rounded-xl shadow-[3px_3px_0px_0px_rgba(59,130,246,1)] flex-shrink-0">
              <GoogleDocsIcon className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-black uppercase tracking-wider bg-blue-600 text-white px-2 py-0.5 rounded">
                  Poin Utama & Sumber Asli
                </span>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                  Real-time Update
                </span>
              </div>
              <h3 className="font-serif font-black text-lg md:text-xl text-blue-950 dark:text-blue-100">
                Akses Dokumen Lengkap di Google Docs
              </h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1 max-w-xl">
                Seluruh panduan, tabel persyaratan lengkap, rincian format berkas, serta update berkala dikelola langsung pada dokumen Google Docs. Buka untuk membaca versi terlengkap!
              </p>
            </div>
          </div>

          <a
            href={GOOGLE_DOC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm md:text-base rounded-xl border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer flex-shrink-0 text-center"
          >
            <span>Google Docs</span>
            <ExternalLink size={18} />
          </a>
        </div>

        {/* Quick Nav Anchors with Smooth Transitions */}
        <div className="pt-3 border-t-2 border-gray-100 dark:border-gray-800">
          <p className="text-[11px] font-black uppercase tracking-wider text-gray-400 mb-2">
            Lompat ke Seksi:
          </p>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <a
              href="#kelompok-keahlian"
              className="text-xs font-bold px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg border border-black/20 dark:border-white/20 hover:border-black transition-all duration-200 whitespace-nowrap active:scale-95"
            >
              1. Pemilihan Dospem & KK
            </a>
            <a
              href="#portal-jadwal"
              className="text-xs font-bold px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg border border-black/20 dark:border-white/20 hover:border-black transition-all duration-200 whitespace-nowrap active:scale-95"
            >
              2. Portal & Jadwal Sidang
            </a>
            <a
              href="#checklist-dokumen"
              className="text-xs font-bold px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg border border-black/20 dark:border-white/20 hover:border-black transition-all duration-200 whitespace-nowrap active:scale-95"
            >
              3. Checklist Dokumen
            </a>
            <a
              href="#tips-bimbingan"
              className="text-xs font-bold px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg border border-black/20 dark:border-white/20 hover:border-black transition-all duration-200 whitespace-nowrap active:scale-95"
            >
              4. Tips Bimbingan
            </a>
            <a
              href="#template-chat"
              className="text-xs font-bold px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-lg border border-black/20 dark:border-white/20 hover:border-black transition-all duration-200 whitespace-nowrap active:scale-95"
            >
              5. Template Chat & Notes
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: Pemilihan Dospem & Kelompok Keahlian */}
      <section id="kelompok-keahlian" className="mb-14 scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-lg bg-brand-emerald text-black font-black flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            1
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-black">Pemilihan Dospem & Kelompok Keahlian (KK)</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Pilih rumpun keilmuan yang paling relevan dengan minat dan kemampuanmu</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {KELOMPOK_KEAHLIAN.map((kk) => {
            const isExpanded = expandedKk === kk.id;
            return (
              <div
                key={kk.id}
                className="bg-white dark:bg-gray-900 border-[3px] border-black dark:border-white rounded-xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] flex flex-col justify-between overflow-hidden"
              >
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-black px-2.5 py-1 bg-black text-white dark:bg-white dark:text-black rounded">
                      {kk.code}
                    </span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Kelompok Keahlian
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold font-serif mb-2 leading-snug">
                    {kk.name}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {kk.description}
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-800/60 p-3 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 mb-4">
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      💡 <strong>Karakteristik:</strong> {kk.suitableFor}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-black uppercase tracking-wider text-gray-500 mb-2">Area Fokus:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {kk.topics.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-bold px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 border border-black/20 dark:border-white/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Collapsible Examples with Smooth Animation */}
                <div className="border-t-2 border-black dark:border-white bg-gray-50 dark:bg-gray-800/40">
                  <button
                    onClick={() => setExpandedKk(isExpanded ? null : kk.id)}
                    className="w-full py-3 px-5 flex items-center justify-between font-bold text-xs hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left cursor-pointer group"
                  >
                    <span>{isExpanded ? 'Sembunyikan Contoh Judul' : 'Lihat Contoh Judul Skripsi'}</span>
                    <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                      <ChevronDown size={16} className="text-gray-500 group-hover:text-black dark:group-hover:text-white" />
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="px-5 pb-5 pt-1 space-y-3">
                      {kk.examples.map((ex, idx) => (
                        <div
                          key={idx}
                          className="bg-white dark:bg-gray-900 p-3 rounded-lg border border-black/30 dark:border-white/30 text-xs hover:border-brand-blue hover:translate-x-1 transition-all duration-200"
                        >
                          <span className="font-bold text-brand-blue dark:text-blue-400 block mb-1">
                            [{ex.category}]
                          </span>
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            "{ex.title}"
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: Portal Administrasi & Jadwal Sidang */}
      <section id="portal-jadwal" className="mb-14 scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-lg bg-brand-blue text-white font-black flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            2
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-black">Portal Akses & Jadwal Pendaftaran</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Tautan administrasi resmi serta aturan pembukaan gelombang ujian</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {PORTAL_LINKS.map((portal, idx) => (
            <a
              key={idx}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 border-[3px] border-black dark:border-white p-5 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-black uppercase px-2 py-0.5 bg-gray-100 dark:bg-gray-800 border border-black dark:border-white rounded">
                    {portal.badge}
                  </span>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-base md:text-lg mb-2 group-hover:text-brand-blue transition-colors">
                  {portal.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {portal.description}
                </p>
              </div>
              <span className="font-mono text-xs font-bold text-brand-blue dark:text-blue-400 flex items-center gap-1.5">
                Kunjungi Portal &rarr;
              </span>
            </a>
          ))}
        </div>

        {/* Info Rules Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-brand-yellow/10 dark:bg-brand-yellow/5 border-[3px] border-black dark:border-white p-6 rounded-xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Calendar size={18} className="text-amber-600 dark:text-amber-400" />
              <h3 className="font-bold text-base md:text-lg font-serif">Aturan Sempro & Sidang Skripsi</h3>
            </div>
            <ul className="space-y-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
              {JADWAL_INFO.semproSidang.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 size={18} className="text-brand-emerald" />
              <h3 className="font-bold text-base md:text-lg font-serif">Aturan Seminar Hasil (Semhas)</h3>
            </div>
            <ul className="space-y-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
              {JADWAL_INFO.semhas.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-brand-emerald font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: Checklist Dokumen Interaktif */}
      <section id="checklist-dokumen" className="mb-14 scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-lg bg-amber-400 text-black font-black flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            3
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-black">Checklist Dokumen Per Tahapan</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Daftar persyaratan berkas, format file, batas ukuran, dan ketentuan nama file</p>
          </div>
        </div>

        {/* Stage Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          {(
            [
              { id: 'sempro', label: '1. Sempro', count: CHECKLIST_SEMPRO.length },
              { id: 'semhas', label: '2. Semhas', count: CHECKLIST_SEMHAS.length },
              { id: 'sidang', label: '3. Sidang Skripsi', count: CHECKLIST_SIDANG.length },
              { id: 'distribusi', label: '4. Distribusi Skripsi', count: CHECKLIST_DISTRIBUSI.length },
            ] as const
          ).map((tab) => {
            const isActive = activeStage === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveStage(tab.id)}
                className={`px-4 py-2.5 rounded-lg font-bold text-xs md:text-sm border-2 border-black dark:border-white transition-all flex items-center gap-2 cursor-pointer ${isActive
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-[3px_3px_0px_0px_rgba(16,185,129,1)]'
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]'
                  }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-white/20 text-white dark:bg-black/20 dark:text-black' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                >
                  {tab.count} Dokumen
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="bg-white dark:bg-gray-900 border-[3px] border-black dark:border-white rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] p-5 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 mb-4 border-b-2 border-gray-100 dark:border-gray-800">
            <div>
              <span className="text-xs font-black uppercase text-brand-blue tracking-wider">
                {currentStageData.badge}
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-black">{currentStageData.title}</h3>
            </div>
            <p className="text-xs text-gray-500">
              💡 Tip: Klik checkbox di bawah untuk menandai berkas yang sudah kamu siapkan.
            </p>
          </div>

          {/* Animated Progress Bar */}
          <div className="mb-6 p-4 rounded-xl border-2 border-black dark:border-white bg-gray-50 dark:bg-gray-800/80 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                <BookmarkCheck size={16} className="text-brand-emerald" />
                Progres Kesiapan Berkas
              </span>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white dark:bg-gray-900 border border-black/20 dark:border-white/20">
                {completedCount} dari {totalCount} berkas siap ({progressPercentage}%)
              </span>
            </div>
            <div className="w-full h-3.5 bg-gray-200 dark:bg-gray-700 rounded-full border-2 border-black dark:border-white overflow-hidden p-0.5">
              <div
                className="h-full bg-brand-emerald rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            {progressPercentage === 100 && (
              <p className="text-xs font-black text-emerald-600 dark:text-emerald-400 mt-2 flex items-center gap-1.5 animate-pulse">
                <CheckCheck size={16} />
                <span>Selamat! Seluruh berkas persyaratan tahap ini sudah lengkap kamu siapkan!</span>
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4">
            {currentStageData.items.map((doc) => {
              const isChecked = !!checkedItems[`${activeStage}-${doc.id}`];
              return (
                <div
                  key={doc.id}
                  onClick={() => toggleCheck(activeStage, doc.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group ${isChecked
                    ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-brand-emerald shadow-[3px_3px_0px_0px_rgba(16,185,129,1)] -translate-y-0.5'
                    : 'bg-white dark:bg-gray-800/60 border-black/30 dark:border-white/30 hover:border-black dark:hover:border-white hover:-translate-y-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'
                    }`}
                >
                  <div className="flex items-start gap-3.5 flex-grow">
                    <div
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors ${isChecked
                        ? 'bg-brand-emerald border-black text-black'
                        : 'border-gray-400 bg-white dark:bg-gray-800'
                        }`}
                    >
                      {isChecked && <Check size={16} strokeWidth={3} />}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`font-bold text-sm md:text-base ${isChecked ? 'line-through text-gray-500' : ''}`}>
                          {doc.name}
                        </span>
                        {doc.format !== '-' && (
                          <span className="text-[10px] font-mono px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600">
                            {doc.format}
                          </span>
                        )}
                        {doc.maxSize !== '-' && (
                          <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 rounded">
                            Maks. {doc.maxSize}
                          </span>
                        )}
                      </div>

                      {doc.notes && (
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1.5">
                          {doc.notes}
                        </p>
                      )}

                      {doc.fileNameRule && doc.fileNameRule !== '-' && (
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-gray-700 dark:text-gray-300">
                          <span className="text-gray-400">Aturan nama:</span>
                          <strong className="text-black dark:text-white">{doc.fileNameRule}</strong>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="self-end md:self-center flex-shrink-0">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${isChecked
                        ? 'bg-brand-emerald text-black border-black'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-500 border-gray-300 dark:border-gray-600'
                        }`}
                    >
                      {isChecked ? 'Siap / Terkumpul' : 'Belum'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: Tips Bimbingan & Mindset */}
      <section id="tips-bimbingan" className="mb-14 scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-lg bg-purple-500 text-white font-black flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            4
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-black">Tips Praktis & Mindset Bimbingan</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Tiga prinsip utama yang terbukti menyelamatkan dari jeratan revisi berulang</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIPS_BIMBINGAN.map((tip, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 border-[3px] border-black dark:border-white p-6 rounded-xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-2 right-3 font-mono text-5xl font-black text-gray-100 dark:text-gray-800 -z-0 pointer-events-none select-none">
                {tip.number}
              </div>
              <div className="relative z-10">
                <span className="inline-block px-2.5 py-1 bg-black text-white text-xs font-mono font-bold rounded mb-3">
                  Tips {tip.number}
                </span>
                <h3 className="font-serif font-black text-lg md:text-xl mb-3 leading-snug">
                  {tip.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {tip.description}
                </p>
              </div>

              <div className="pt-3 border-t-2 border-dashed border-gray-200 dark:border-gray-800 relative z-10">
                <span className="text-xs font-black text-brand-emerald">
                  ⭐ {tip.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: Template Chat & Format Catatan Bimbingan */}
      <section id="template-chat" className="mb-14 scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-lg bg-pink-500 text-white font-black flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            5
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-black">Template Chat Sopan & Notes Revisi</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Contoh komunikasi efektif dengan dosen pembimbing dan cara mendokumentasikan revisi</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Template Chat WA */}
          <div className="bg-white dark:bg-gray-900 border-[3px] border-black dark:border-white rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare size={18} className="text-emerald-600" />
                  <h3 className="font-serif font-bold text-lg">Template Chat WhatsApp Dospem</h3>
                </div>
                <button
                  onClick={handleCopyChat}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-emerald text-black font-bold text-xs rounded-md border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
                >
                  {copiedChat ? (
                    <>
                      <Check size={14} />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Salin Chat</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                Format chat sopan untuk meminta jadwal bimbingan secara kolektif atau mandiri:
              </p>

              <pre className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-xs font-mono whitespace-pre-wrap leading-relaxed text-gray-800 dark:text-gray-200 overflow-x-auto">
                {TEMPLATE_CHAT}
              </pre>
            </div>

            <p className="text-[11px] text-gray-500 mt-4 italic">
              💡 Selalu sesuaikan jam kirim pesan (pada jam kerja: 08.00–16.00 WIB) dan gunakan bahasa yang santun.
            </p>
          </div>

          {/* Contoh Notes Bimbingan */}
          <div className="bg-white dark:bg-gray-900 border-[3px] border-black dark:border-white rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText size={18} className="text-brand-blue" />
                <h3 className="font-serif font-bold text-lg">Contoh Format Notes Revisi</h3>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/40 p-3 rounded-lg border border-blue-200 dark:border-blue-900 mb-4">
                <span className="text-xs font-bold text-blue-800 dark:text-blue-300 block">
                  Contoh Kasus: {CONTOH_NOTES_BIMBINGAN.topik}
                </span>
              </div>

              <div className="space-y-3.5">
                {CONTOH_NOTES_BIMBINGAN.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border-2 border-black/20 dark:border-white/20 bg-gray-50 dark:bg-gray-800/60 text-xs"
                  >
                    <span className="font-bold font-serif text-sm block mb-1 text-black dark:text-white">
                      {item.bab}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <strong className="text-amber-600 dark:text-amber-400">Poin Revisi:</strong> {item.poinRevisi}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 p-2.5 rounded border border-gray-200 dark:border-gray-700">
                      <strong className="text-brand-emerald">Tindakan:</strong> {item.tindakan}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-gray-500 mt-4 italic">
              💡 Simpan file notes setiap bimbingan di Google Docs / Notion agar mudah ditinjau saat sidang nanti.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Big Banner & CTAs */}
      <section className="bg-gradient-to-r from-brand-emerald/20 via-brand-yellow/20 to-brand-blue/20 border-[3px] border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-8 md:p-12 rounded-2xl text-center">
        <h2 className="text-2xl md:text-4xl font-serif font-black mb-4">
          Semoga Dimudahkan dan Lancar Sampai Wisuda! 🎓
        </h2>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Skripsi adalah maraton, bukan sprint. Jangan ragu bertanya, jangan simpan kebingungan sendirian, dan nikmati setiap proses pembelajarannya.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={GOOGLE_DOC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-base rounded-xl border-[3px] border-black dark:border-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer"
          >
            <GoogleDocsIcon className="w-6 h-6 flex-shrink-0" />
            <span>Buka Dokumen Lengkap di Google Docs</span>
            <ExternalLink size={18} />
          </a>


          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-gray-800 text-black dark:text-white font-black text-sm rounded-xl border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
          >
            <ArrowLeft size={18} />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </section>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 bg-brand-yellow text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[1px] transition-all rounded-full cursor-pointer group"
          title="Kembali ke Atas"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} strokeWidth={3} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
}
