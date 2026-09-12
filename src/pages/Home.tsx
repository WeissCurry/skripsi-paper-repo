import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Download,
  ExternalLink,
  GraduationCap,
  Presentation,
  CheckCircle2,
  Clock,
  Search,
  BookOpen,
  ChevronDown,
  ChevronUp,
  // UserCheck,
  Laptop
} from "lucide-react";
import {
  publications,
  type OutputCategory,
  type OutputTag,
  slidesUrl,
  dashboardUrl,
  advisors,
  examiners
} from "../data/publications";
import RequestThesisModal from "../components/RequestThesisModal";

const getTagColor = (tag: OutputTag) => {
  switch (tag) {
    case 'Tugas Akhir':
      return 'bg-brand-blue text-white';
    case 'Journal':
      return 'bg-brand-emerald text-black';
    case 'Conference':
      return 'bg-purple-300 text-black';
    case 'Manuscript':
      return 'bg-brand-yellow text-black';
    case 'Prototype':
      return 'bg-cyan-300 text-black';
    case 'Slides':
      return 'bg-amber-300 text-black';
    default:
      return 'bg-gray-200 text-black';
  }
};

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | OutputCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const counts = useMemo(() => ({
    all: publications.length,
    publikasi: publications.filter(p => p.category === 'publikasi').length,
    prototype: publications.filter(p => p.category === 'prototype').length,
    slides: publications.filter(p => p.category === 'slides').length,
  }), []);

  const filteredPublications = useMemo(() => {
    return publications.filter(pub => {
      const matchesFilter = selectedFilter === 'all' || pub.category === selectedFilter;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesFilter;

      const matchesSearch =
        pub.title.toLowerCase().includes(query) ||
        pub.venue.toLowerCase().includes(query) ||
        pub.tag.toLowerCase().includes(query) ||
        pub.authors.toLowerCase().includes(query) ||
        pub.keywords.some(k => k.toLowerCase().includes(query));

      return matchesFilter && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:px-8 space-y-10">
      {/* Hero Section */}
      <section className="brutal-box p-6 md:p-10 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="bg-brand-emerald text-black font-black text-xs uppercase px-3 py-1 border-2 border-black tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-md">
            Skripsi 2026
          </span>
          <span className="bg-brand-yellow text-black font-bold text-xs uppercase px-3 py-1 border-2 border-black tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-md">
            UIN Syarif Hidayatullah Jakarta
          </span>
        </div>

        {/* Author Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight leading-tight mb-3">
          Maulana Asykari Muhammad
        </h1>

        {/* Thesis Title */}
        <div className="bg-gray-50 dark:bg-gray-800/80 border-l-4 border-black dark:border-white p-4 mb-6 rounded-r-xl">
          <p className="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
            Judul Tugas Akhir / Skripsi
          </p>
          <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 leading-snug">
            Rancangan Arsitektur Manajemen Risiko dan Kepatuhan Syariah pada Staking Ethereum Menggunakan Pendekatan TOGAF ADM
          </p>
        </div>

        {/* Academic Committee: Pembimbing & Penguji */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Pembimbing */}
          <div className="p-4 border-2 border-black dark:border-white bg-white dark:bg-gray-800 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
            <div className="flex items-center gap-2 mb-2">
              {/* <UserCheck size={16} className="text-brand-emerald" /> */}
              <span className="text-xs font-black uppercase tracking-wider text-gray-600 dark:text-gray-300">
                Dosen Pembimbing
              </span>
            </div>
            <ul className="space-y-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
              {advisors.map((adv, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-xs px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 border border-black/30 dark:border-white/30 text-gray-600 dark:text-gray-300 font-mono rounded">
                    {adv.role}
                  </span>
                  <span>{adv.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Penguji */}
          <div className="p-4 border-2 border-black dark:border-white bg-white dark:bg-gray-800 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
            <div className="flex items-center gap-2 mb-2">
              {/* <UserCheck size={16} className="text-brand-blue" /> */}
              <span className="text-xs font-black uppercase tracking-wider text-gray-600 dark:text-gray-300">
                Dosen Penguji
              </span>
            </div>
            <ul className="space-y-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
              {examiners.map((exm, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-xs px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 border border-black/30 dark:border-white/30 text-gray-600 dark:text-gray-300 font-mono rounded">
                    {exm.role}
                  </span>
                  <span>{exm.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>

      {/* Output Feed with Categories Filter & Search */}
      <section className="space-y-6" id="outputs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-serif tracking-tight">
              Output Skripsi & Publikasi
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
              Pilih kategori output untuk melihat publikasi karya ilmiah, prototipe sistem, atau slide presentasi.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari judul, tag, kata kunci..."
              className="w-full bg-white dark:bg-gray-900 border-2 border-black dark:border-white pl-10 pr-4 py-2 font-medium text-sm rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] focus:outline-none focus:ring-2 focus:ring-brand-emerald"
            />
          </div>
        </div>

        {/* Unified Category Filters */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          {([
            { id: 'all' as const, label: `Semua (${counts.all})` },
            { id: 'publikasi' as const, label: `Publikasi (${counts.publikasi})` },
            { id: 'prototype' as const, label: `Prototipe (${counts.prototype})` },
            { id: 'slides' as const, label: `Slides (${counts.slides})` },
          ]).map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 text-sm font-black border-2 border-black dark:border-white transition-all cursor-pointer rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] ${selectedFilter === filter.id
                ? 'bg-black text-white dark:bg-white dark:text-black translate-x-[-1px] translate-y-[-1px]'
                : 'bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Output Cards List */}
        <div className="space-y-6">
          {filteredPublications.length === 0 ? (
            <div className="brutal-box p-12 text-center bg-white dark:bg-gray-900 rounded-2xl">
              <p className="text-lg font-bold text-gray-600 dark:text-gray-400">
                Tidak ada output yang cocok dengan kata kunci "{searchQuery}".
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedFilter('all'); }}
                className="mt-4 px-5 py-2.5 bg-brand-emerald text-black font-black border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer"
              >
                Reset Pencarian
              </button>
            </div>
          ) : (
            filteredPublications.map((pub, index) => {
              const isExpanded = !!expandedAbstracts[pub.id];

              return (
                <article
                  key={pub.id}
                  className="brutal-box p-6 md:p-8 bg-white dark:bg-gray-900 flex flex-col justify-between transition-all"
                >
                  <div>
                    {/* Header Badges: Number, Simplified Tag, Venue, Status */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Number Badge */}
                        <span className="w-7 h-7 flex items-center justify-center font-black text-xs bg-black text-white dark:bg-white dark:text-black rounded-md border border-black dark:border-white">
                          #{index + 1}
                        </span>

                        {/* Simplified Clean Tag Badge */}
                        <span className={`text-xs font-black uppercase px-3 py-1 border-2 border-black dark:border-white rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${getTagColor(pub.tag)}`}>
                          {pub.tag}
                        </span>

                        {/* Clean Venue / Format Text */}
                        <span className="text-xs font-bold px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-2 border-black dark:border-white rounded-md">
                          {pub.venue}
                        </span>
                      </div>

                      {/* Status Badge */}
                      <div>
                        {pub.status === 'published' && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase px-3 py-1 bg-emerald-100 text-emerald-900 dark:bg-emerald-900/60 dark:text-emerald-200 border-2 border-emerald-800 rounded-md">
                            <CheckCircle2 size={14} className="text-emerald-700 dark:text-emerald-400" />
                            {pub.statusLabel}
                          </span>
                        )}

                        {pub.status === 'accepted' && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase px-3 py-1 bg-amber-100 text-amber-900 dark:bg-amber-900/60 dark:text-amber-200 border-2 border-amber-800 rounded-md">
                            <Clock size={14} className="text-amber-700 dark:text-amber-400" />
                            {pub.statusLabel}
                          </span>
                        )}

                        {pub.status === 'coming_soon' && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase px-3 py-1 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-2 border-gray-600 rounded-md">
                            <Clock size={14} className="text-gray-600 dark:text-gray-400" />
                            {pub.statusLabel}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-black font-serif tracking-tight leading-snug mb-3">
                      {pub.title}
                    </h3>

                    {/* Authors and Affiliation */}
                    {pub.authors && (
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span><strong>Penulis:</strong> {pub.authors}</span>
                        <span>•</span>
                        <span><strong>Tahun:</strong> {pub.year}</span>
                        {pub.institution && (
                          <>
                            <span>•</span>
                            <span className="text-gray-500 dark:text-gray-400">{pub.institution}</span>
                          </>
                        )}
                      </div>
                    )}

                    {/* Content Section: Prototype / Slides / Coming Soon / Regular abstract */}
                    {pub.tag === 'Prototype' ? (
                      <div className="mb-6 bg-gray-50 dark:bg-gray-800/60 border-l-4 border-cyan-400 p-4 rounded-r-xl">
                        <a
                          href={pub.externalUrl || dashboardUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-sm md:text-base font-bold text-brand-blue hover:underline break-all flex items-center gap-2"
                        >
                          <span>https://skripsistaking.netlify.app/</span>
                          <ExternalLink size={15} />
                        </a>
                      </div>
                    ) : pub.tag === 'Slides' ? (
                      <div className="mb-6 bg-gray-50 dark:bg-gray-800/60 border-l-4 border-amber-400 p-4 rounded-r-xl">
                        <a
                          href={pub.slidesUrl || slidesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-sm md:text-base font-bold text-amber-600 hover:underline break-all flex items-center gap-2"
                        >
                          <span>{slidesUrl}</span>
                          <ExternalLink size={15} />
                        </a>
                      </div>
                    ) : pub.abstract === "Coming soon." ? (
                      <div className="mb-6 bg-gray-50 dark:bg-gray-800/60 border-l-4 border-gray-400 dark:border-gray-600 p-4 rounded-r-xl">
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 italic">
                          Coming soon.
                        </p>
                      </div>
                    ) : (
                      <div className="mb-6 bg-gray-50 dark:bg-gray-800/60 border-l-4 border-black dark:border-white p-4 rounded-r-xl">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-black uppercase tracking-wider text-gray-600 dark:text-gray-400">
                            Ringkasan / Deskripsi
                          </span>
                          <button
                            onClick={() => toggleAbstract(pub.id)}
                            className="text-xs font-bold text-brand-emerald hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            {isExpanded ? (
                              <>Tutup <ChevronUp size={14} /></>
                            ) : (
                              <>Baca Selengkapnya <ChevronDown size={14} /></>
                            )}
                          </button>
                        </div>

                        <p className={`text-sm text-gray-700 dark:text-gray-300 leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}>
                          {pub.abstract}
                        </p>
                      </div>
                    )}

                    {/* Keywords */}
                    {pub.keywords.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 mb-6">
                        <span className="text-xs font-bold text-gray-500 mr-1">Kata Kunci:</span>
                        {pub.keywords.map((kw, kIndex) => (
                          <span
                            key={kIndex}
                            className="text-xs font-medium px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-md"
                          >
                            #{kw}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t-2 border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      {/* Request Full Thesis (For Skripsi) */}
                      {pub.requestThesis && (
                        <button
                          onClick={() => setIsRequestModalOpen(true)}
                          className="flex items-center gap-2 bg-brand-emerald text-black font-black px-4 py-2.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all text-sm rounded-xl cursor-pointer"
                        >
                          <Download size={16} />
                          <span>{pub.tag === 'Conference' ? 'Unduh Draft PDF' : 'Unduh PDF'}</span>
                        </button>
                      )}
                      {/* Interactive MDX Reader Link (For Skripsi) */}
                      {pub.readerUrl && (
                        <Link
                          to={pub.readerUrl}
                          className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black font-black px-4 py-2.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-brand-emerald hover:text-black dark:hover:bg-brand-emerald dark:hover:text-black transition-colors text-sm rounded-xl"
                        >
                          <BookOpen size={16} />
                          <span>Baca Naskah (MDX)</span>
                        </Link>
                      )}


                      {/* Direct Download PDF (For JAIC & CITSM) */}
                      {pub.pdfPath && (
                        <a
                          href={pub.pdfPath}
                          download={pub.pdfDownloadName}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-brand-emerald text-black font-black px-4 py-2.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all text-sm rounded-xl"
                        >
                          <Download size={16} />
                          <span>{pub.tag === 'Conference' ? 'Unduh Draft PDF' : 'Unduh PDF'}</span>
                        </a>
                      )}

                      {/* DOI Link (Replaces Laman Jurnal JAIC directly) */}
                      {pub.doiUrl && (
                        <a
                          href={pub.doiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-white dark:bg-gray-800 text-black dark:text-white font-black px-4 py-2.5 border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm rounded-xl"
                        >
                          <span>Link DOI</span>
                          <ExternalLink size={15} className="text-brand-blue" />
                        </a>
                      )}

                      {/* Prototype Launch Action (For Prototype Card) */}
                      {pub.externalUrl && (
                        <a
                          href={pub.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-brand-blue text-white font-black px-5 py-2.5 border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all text-sm rounded-xl"
                        >
                          <Laptop size={16} />
                          <span>Buka Prototype Sistem</span>
                          <ExternalLink size={15} />
                        </a>
                      )}

                      {/* Slides Canva Action (Dedicated Slides Card) */}
                      {pub.tag === 'Slides' && pub.slidesUrl && (
                        <a
                          href={pub.slidesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-brand-yellow text-black font-black px-4 py-2.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all text-sm rounded-xl"
                        >
                          <Presentation size={16} />
                          <span>Buka Slide Presentasi</span>
                          <ExternalLink size={15} />
                        </a>
                      )}

                      {/* Status indicator for manuscript coming soon */}
                      {pub.status === 'coming_soon' && (
                        <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-bold text-xs border border-gray-300 dark:border-gray-700 rounded-xl">
                          <span>Naskah Sedang Dalam Proses Penulisan</span>
                        </div>
                      )}
                    </div>

                    {/* Citation Action: Specific Google Scholar Citation Link (JAIC only) */}
                    {pub.scholarCitationUrl && (
                      <div className="flex items-center gap-2 ml-auto">
                        <a
                          href={pub.scholarCitationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-2 text-xs font-black border-2 border-black dark:border-white rounded-xl bg-brand-emerald text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
                          title="Buka Sitasi di Google Scholar"
                        >
                          <GraduationCap size={15} />
                          <span>Cite di Scholar</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>

      {/* Modal Permintaan Naskah Skripsi */}
      <RequestThesisModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
      />
    </div>
  );
}
