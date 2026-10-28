import { useLang, type Lang } from "./LanguageContext";

// A translatable value. `de` is optional while German is still being filled in;
// `pick` falls back en -> id so a missing locale never renders blank.
export type Localized = { id: string; en: string; de?: string };

export function pick(v: Localized, lang: Lang): string {
  if (lang === "de") return v.de ?? v.en;
  if (lang === "en") return v.en;
  return v.id;
}

// UI chrome / navigation / shared labels. Page-specific copy lives in the
// `t()` map too, grouped by section comment. Add keys here as pages migrate.
export const UI = {
  // --- Header / nav ---
  brand_subtitle: {
    id: "Skripsi Maulana Asykari Muhammad",
    en: "A Thesis by Maulana Asykari Muhammad",
    de: "Eine Bachelorarbeit von Maulana Asykari Muhammad",
  },
  nav_tips: { id: "Kiat Skripsi", en: "Thesis Tips", de: "Thesis-Tipps" },
  tt_tips: {
    id: "Kiat & Tips Skripsi",
    en: "Thesis Tips & Tricks",
    de: "Thesis-Tipps & Tricks",
  },
  tt_roadmap: {
    id: "Perjalanan Skripsi",
    en: "Thesis Journey",
    de: "Thesis-Weg",
  },
  tt_dashboard: {
    id: "Web3 Staking Dashboard",
    en: "Web3 Staking Dashboard",
    de: "Web3-Staking-Dashboard",
  },
  tt_slides: {
    id: "Slides Presentasi Sidang",
    en: "Thesis Defense Slides",
    de: "Folien der Verteidigung",
  },
  tt_scholar: {
    id: "Google Scholar Profile",
    en: "Google Scholar Profile",
    de: "Google-Scholar-Profil",
  },
  tt_dark: {
    id: "Ganti Mode Gelap",
    en: "Toggle Dark Mode",
    de: "Dunkelmodus umschalten",
  },
  tt_lang: { id: "Ganti Bahasa", en: "Change Language", de: "Sprache wechseln" },

  // --- Mobile menu ---
  menu_pages: { id: "Halaman", en: "Pages", de: "Seiten" },
  menu_home: { id: "Beranda", en: "Home", de: "Startseite" },
  menu_external: {
    id: "Tautan Eksternal",
    en: "External Links",
    de: "Externe Links",
  },

  // --- Footer ---
  footer_by: {
    id: "Karya Penulisan & Skripsi oleh",
    en: "Writing & Thesis Work by",
    de: "Schreib- & Abschlussarbeit von",
  },

  // --- Home page (German filled later; falls back to EN) ---
  home_thesis_label: {
    id: "Judul Tugas Akhir / Skripsi",
    en: "Final Project / Thesis Title",
  },
  home_thesis_title: {
    id: "Rancangan Arsitektur Manajemen Risiko dan Kepatuhan Syariah pada Staking Ethereum Menggunakan Pendekatan TOGAF ADM",
    en: "An Architecture Design for Risk Management and Sharia Compliance in Ethereum Staking Using the TOGAF ADM Approach",
  },
  home_advisors: { id: "Dosen Pembimbing", en: "Supervisors" },
  home_examiners: { id: "Dosen Penguji", en: "Examiners" },
  home_outputs_title: {
    id: "Output Skripsi & Publikasi",
    en: "Thesis Output & Publications",
  },
  home_outputs_sub: {
    id: "Pilih kategori output untuk melihat publikasi karya ilmiah, prototipe sistem, atau slide presentasi.",
    en: "Choose an output category to view scholarly publications, the system prototype, or presentation slides.",
  },
  home_search_ph: {
    id: "Cari judul, tag, kata kunci...",
    en: "Search title, tag, keyword...",
  },
  f_all: { id: "Semua", en: "All" },
  f_publikasi: { id: "Publikasi", en: "Publications" },
  f_prototipe: { id: "Prototipe", en: "Prototypes" },
  home_no_results: {
    id: 'Tidak ada output yang cocok dengan kata kunci "{q}".',
    en: 'No output matches the keyword "{q}".',
  },
  home_reset: { id: "Reset Pencarian", en: "Reset Search" },
  lbl_authors: { id: "Penulis:", en: "Authors:" },
  lbl_year: { id: "Tahun:", en: "Year:" },
  lbl_summary: { id: "Ringkasan / Deskripsi", en: "Summary / Description" },
  act_close: { id: "Tutup", en: "Close" },
  act_readmore: { id: "Baca Selengkapnya", en: "Read More" },
  lbl_keywords: { id: "Kata Kunci:", en: "Keywords:" },
  act_dl_draft: { id: "Unduh Draft PDF", en: "Download Draft PDF" },
  act_dl_pdf: { id: "Unduh PDF", en: "Download PDF" },
  act_read_mdx: { id: "Baca Naskah (MDX)", en: "Read Manuscript (MDX)" },
  act_open_prototype: {
    id: "Buka Prototype Sistem",
    en: "Open System Prototype",
  },
  act_open_slides: {
    id: "Buka Slide Presentasi",
    en: "Open Presentation Slides",
  },
  status_in_progress: {
    id: "Naskah Sedang Dalam Proses Penulisan",
    en: "Manuscript in Progress",
  },
  act_cite_scholar: { id: "Cite di Scholar", en: "Cite on Scholar" },
  tt_cite_scholar: {
    id: "Buka Sitasi di Google Scholar",
    en: "Open Citation on Google Scholar",
  },
  vs_entire_site: { id: "Seluruh Situs", en: "Entire Site" },

  // --- Paper detail ---
  paper_back: { id: "Kembali ke Beranda", en: "Back to Home" },
  paper_date: { id: "Mei 2026", en: "May 2026" },
  proposal_title: {
    id: "Proposal: Rancangan Arsitektur Manajemen Risiko dan Kepatuhan Syariah pada Staking Ethereum",
    en: "Proposal: An Architecture Design for Risk Management and Sharia Compliance in Ethereum Staking",
  },
  act_dl_manuscript: {
    id: "Unduh PDF Naskah",
    en: "Download Manuscript PDF",
  },

  // --- NotFound ---
  nf_badge: { id: "404 — Halaman Tidak Ditemukan", en: "404 — Page Not Found" },
  nf_title: { id: "Tersesat di Luar Radar?", en: "Lost Off the Radar?" },
  nf_desc: {
    id: "Halaman yang Anda tuju tidak ditemukan atau telah dipindahkan. Sistem sedang mengalihkan Anda kembali ke beranda.",
    en: "The page you were looking for was not found or has been moved. The system is redirecting you back to the home page.",
  },
  nf_redirect_in: { id: "Otomatis dialihkan dalam:", en: "Auto-redirecting in:" },
  nf_home_now: { id: "Kembali ke Beranda Sekarang", en: "Back to Home Now" },
  nf_footer: { id: "Repositori Karya Ilmiah", en: "Scholarly Work Repository" },

  // --- PageLoader ---
  pl_aria: { id: "Memuat Halaman", en: "Loading Page" },
  pl_loading: { id: "Memuat Halaman...", en: "Loading Page..." },
  pl_sub: {
    id: "Mengunduh komponen, visual & data karya ilmiah...",
    en: "Downloading components, visuals & scholarly data...",
  },
  pl_network: { id: "Status Jaringan", en: "Network Status" },
  pl_active: { id: "Aktif", en: "Active" },
  pl_downloaded: { id: "Aset Aktual Diunduh", en: "Actual Assets Downloaded" },
  pl_total_files: { id: "Total Berkas", en: "Total Files" },
  pl_files: { id: "berkas", en: "files" },

  // --- Request Thesis modal ---
  rtm_close_dialog: { id: "Tutup dialog", en: "Close dialog" },
  rtm_eyebrow: { id: "Akses Naskah Skripsi", en: "Thesis Manuscript Access" },
  rtm_title: {
    id: "Permintaan Berkas Skripsi Lengkap",
    en: "Request the Full Thesis File",
  },
  rtm_intro: {
    id: "Naskah lengkap skripsi belum dipublikasikan secara terbuka di repositori publik. Jika Anda memerlukan berkas PDF lengkap (6.2 MB) untuk keperluan sitasi, studi literatur, atau diskusi riset, silakan hubungi saya melalui saluran otomatis berikut:",
    en: "The full thesis manuscript has not been openly published in a public repository. If you need the complete PDF file (6.2 MB) for citation, literature study, or research discussion, please contact me through the automated channels below:",
  },
  rtm_opt1_title: {
    id: "Opsi 1: Kirim Email (Format Otomatis)",
    en: "Option 1: Send an Email (Auto-formatted)",
  },
  rtm_recommended: { id: "Direkomendasikan", en: "Recommended" },
  rtm_opt1_desc_pre: {
    id: "Membuka aplikasi email dengan subjek dan draf permohonan yang sudah terisi otomatis ke alamat ",
    en: "Opens your email app with a pre-filled subject and request draft addressed to ",
  },
  rtm_open_email: {
    id: "Buka Aplikasi Email & Kirim",
    en: "Open Email App & Send",
  },
  rtm_email_copied: { id: "Email Tersalin!", en: "Email Copied!" },
  rtm_copy_email: { id: "Salin Alamat Email", en: "Copy Email Address" },
  rtm_opt2_title: { id: "Opsi 2: Chat via LinkedIn", en: "Option 2: Chat via LinkedIn" },
  rtm_opt2_desc: {
    id: "Kirim pesan langsung ke LinkedIn saya dengan template permohonan yang sudah disiapkan.",
    en: "Send a direct message to my LinkedIn using the prepared request template.",
  },
  rtm_open_linkedin: { id: "Buka LinkedIn Penulis", en: "Open Author's LinkedIn" },
  rtm_tpl_copied: { id: "Template Tersalin!", en: "Template Copied!" },
  rtm_copy_tpl: { id: "Salin Draf Pesan", en: "Copy Message Draft" },
  rtm_email_subject: {
    id: "[Permintaan Naskah Skripsi] - Maulana Asykari Muhammad",
    en: "[Thesis Manuscript Request] - Maulana Asykari Muhammad",
  },
  rtm_email_body: {
    id: 'Halo Maulana Asykari Muhammad,\n\nSaya tertarik membaca naskah lengkap Skripsi Anda yang berjudul:\n"Rancangan Arsitektur Manajemen Risiko dan Kepatuhan Syariah pada Staking Ethereum Menggunakan Pendekatan TOGAF ADM"\n\nData Pemohon:\n- Nama: \n- Institusi / Kampus / Organisasi: \n- Keperluan: (Contoh: Riset Akademik / Referensi Tugas Akhir / Diskusi FinTech)\n\nMohon kesediaannya untuk berbagi salinan berkas naskah lengkap (PDF). Terima kasih banyak!',
    en: 'Hello Maulana Asykari Muhammad,\n\nI am interested in reading the full manuscript of your thesis titled:\n"An Architecture Design for Risk Management and Sharia Compliance in Ethereum Staking Using the TOGAF ADM Approach"\n\nRequester details:\n- Name: \n- Institution / University / Organization: \n- Purpose: (e.g. Academic research / Final-project reference / FinTech discussion)\n\nI would be grateful if you could share a copy of the full manuscript file (PDF). Thank you very much!',
  },
  rtm_linkedin_msg: {
    id: "Halo Mas Maul, saya tertarik membaca naskah skripsi Anda mengenai Risiko & Syariah Staking Ethereum. Boleh minta berkas PDF lengkapnya untuk referensi riset? Terima kasih!",
    en: "Hello Maul, I'm interested in reading your thesis manuscript on Risk & Sharia in Ethereum Staking. Could I request the full PDF file for research reference? Thank you!",
  },

  // --- Visitor stats ---
  vs_this_page: { id: "Halaman Ini", en: "This Page" },
  vs_title: { id: "Statistik Pengunjung", en: "Visitor Statistics" },
  vs_refresh: { id: "Muat ulang statistik", en: "Reload statistics" },
  vs_open_dash: { id: "Buka Dashboard GoatCounter", en: "Open GoatCounter Dashboard" },
  vs_update: { id: "Update:", en: "Updated:" },
  vs_updated: { id: "Diperbarui:", en: "Updated:" },
  vs_retry: { id: "Coba Lagi", en: "Try Again" },
  vs_30d: { id: "30 Hari Terakhir", en: "Last 30 Days" },
  vs_unique: { id: "Pengunjung Unik", en: "Unique Visitors" },
  vs_lifetime_sub: {
    id: "Total Pengunjung Seumur Hidup",
    en: "Total Lifetime Visitors",
  },
  vs_views_sub: {
    id: "Total Tayangan Halaman (Views)",
    en: "Total Page Views",
  },
  vs_cache: { id: "cache data setiap ~4 jam", en: "data cached every ~4 hours" },
  vs_warn_title: {
    id: "Langkah Terakhir: Aktifkan Visitor Counter di GoatCounter",
    en: "Final Step: Enable the Visitor Counter in GoatCounter",
  },
  vs_warn_msg: {
    id: "GoatCounter mengembalikan pesan:",
    en: "GoatCounter returned the message:",
  },
  vs_warn_s1: {
    id: "Buka dashboard GoatCounter kamu di",
    en: "Open your GoatCounter dashboard at",
  },
  vs_warn_s2: { id: "Masuk ke menu", en: "Go to the menu" },
  vs_warn_s3: { id: "Centang kotak", en: "Tick the box" },
  vs_warn_s4: { id: "Klik tombol", en: "Click the button" },
  vs_warn_recheck: {
    id: "Saya Sudah Centang, Cek Lagi",
    en: "I've Ticked It, Check Again",
  },

  // --- Perjalanan (Roadmap) ---
  pj_eyebrow: { id: "Jejak halusinasi", en: "Hallucination trail" },
  pj_title: { id: "Perjalanan Ceklipci", en: "The Thesis Journey" },
  pj_sub: {
    id: "Menyusuri setiap fase, proses revisi, dan momen krusial sejak penentuan dosen pembimbing hingga lembar pengesahan ditandatangani. Dokumentasi visual perjalanan tugas akhir di Sistem Informasi UIN Jakarta.",
    en: "Tracing every phase, revision, and crucial moment from the appointment of the supervisor to the signing of the approval sheet. A visual record of the final-project journey in Information Systems at UIN Jakarta.",
  },
  pj_milestones_count: { id: "8 Tahapan Milestone", en: "8 Milestone Stages" },
  pj_view_docs: { id: "Lihat Dokumentasi", en: "View Documentation" },
  pj_photos: { id: "Foto", en: "Photos" },
  pj_hover_preview: { id: "Hover / Klik untuk preview", en: "Hover / click to preview" },
  pj_doc: { id: "dokumentasi", en: "documentation" },
  pj_click_zoom: { id: "Klik untuk perbesar foto", en: "Click to enlarge photo" },
  pj_photos_count: { id: "Foto Dokumentasi", en: "Documentation Photos" },
  pj_hover_pause: { id: "Arahkan kursor untuk pause", en: "Hover to pause" },
  pj_slow_mode: { id: "Mode Perlambat (2 Detik)", en: "Slow-down Mode (2 Seconds)" },
  pj_alt_survive: { id: "Dokumentasi survive", en: "Survive documentation" },
  pj_view_full: { id: "Lihat Ukuran Penuh", en: "View Full Size" },
  pj_documentation: { id: "Dokumentasi", en: "Documentation" },
  pj_prev_photo: { id: "Foto Sebelumnya", en: "Previous Photo" },
  pj_next_photo: { id: "Foto Selanjutnya", en: "Next Photo" },
  pj_kbd_hint: {
    id: "Gunakan keyboard ← / → atau tombol di samping untuk navigasi",
    en: "Use the ← / → keys or the side buttons to navigate",
  },

  // --- KiatSkripsi (Thesis Tips) ---
  ks_tt_gdoc: { id: "Buka Dokumen Asli di Google Docs", en: "Open the Original Document in Google Docs" },
  ks_eyebrow: { id: "jembatan keledai", en: "mnemonic cheat sheet" },
  ks_title: { id: "Kiat-kiat Skripsi", en: "Thesis Tips" },
  ks_sub: {
    id: "Dokumen ini disusun sebagai wujud rasa terima kasih kepada seluruh pihak yang telah mendukung kelulusan skripsi. Di dalamnya terangkum arahan pemilihan Kelompok Keahlian (KK), checklist berkas dari Sempro hingga Wisuda, etika bimbingan, serta template chat praktis.",
    en: "This document is a thank-you to everyone who supported this thesis to completion. It gathers guidance on choosing an Expertise Group (KK), a document checklist from the proposal seminar to graduation, supervision etiquette, and a practical chat template.",
  },
  ks_callout_badge: { id: "Poin Utama & Sumber Asli", en: "Key Point & Original Source" },
  ks_callout_title: { id: "Akses Dokumen Lengkap di Google Docs", en: "Access the Full Document in Google Docs" },
  ks_callout_desc: {
    id: "Seluruh panduan, tabel persyaratan lengkap, rincian format berkas, serta update berkala dikelola langsung pada dokumen Google Docs. Buka untuk membaca versi terlengkap!",
    en: "All the guidance, the full requirement tables, file-format details, and periodic updates are maintained directly in the Google Docs document. Open it to read the most complete version!",
  },
  ks_jump: { id: "Lompat ke Seksi:", en: "Jump to Section:" },
  ks_nav1: { id: "1. Pemilihan Dospem & KK", en: "1. Choosing a Supervisor & KK" },
  ks_nav2: { id: "2. Portal & Jadwal Sidang", en: "2. Portals & Defense Schedule" },
  ks_nav3: { id: "3. Checklist Dokumen", en: "3. Document Checklist" },
  ks_nav4: { id: "4. Tips Bimbingan", en: "4. Supervision Tips" },
  ks_nav5: { id: "5. Template Chat & Notes", en: "5. Chat Template & Notes" },
  ks_s1_title: { id: "Pemilihan Dospem & Kelompok Keahlian (KK)", en: "Choosing a Supervisor & Expertise Group (KK)" },
  ks_s1_sub: {
    id: "Pilih rumpun keilmuan yang paling relevan dengan minat dan kemampuanmu",
    en: "Pick the field that best matches your interest and ability",
  },
  ks_kk_label: { id: "Kelompok Keahlian", en: "Expertise Group" },
  ks_characteristic: { id: "Karakteristik:", en: "Characteristics:" },
  ks_focus_area: { id: "Area Fokus:", en: "Focus Areas:" },
  ks_hide_examples: { id: "Sembunyikan Contoh Judul", en: "Hide Example Titles" },
  ks_show_examples: { id: "Lihat Contoh Judul Skripsi", en: "View Example Thesis Titles" },
  ks_s2_title: { id: "Portal Akses & Jadwal Pendaftaran", en: "Access Portals & Registration Schedule" },
  ks_s2_sub: {
    id: "Tautan administrasi resmi serta aturan pembukaan gelombang ujian",
    en: "Official administration links and the rules for each exam-registration wave",
  },
  ks_visit_portal: { id: "Kunjungi Portal", en: "Visit Portal" },
  ks_rules_sempro: { id: "Aturan Sempro & Sidang Skripsi", en: "Proposal Seminar & Thesis Defense Rules" },
  ks_rules_semhas: { id: "Aturan Seminar Hasil (Semhas)", en: "Results Seminar Rules" },
  ks_s3_title: { id: "Checklist Dokumen Per Tahapan", en: "Document Checklist by Stage" },
  ks_s3_sub: {
    id: "Daftar persyaratan berkas, format file, batas ukuran, dan ketentuan nama file",
    en: "The list of required files, file formats, size limits, and file-naming rules",
  },
  ks_tab_sempro: { id: "1. Sempro", en: "1. Proposal" },
  ks_tab_semhas: { id: "2. Semhas", en: "2. Results" },
  ks_tab_sidang: { id: "3. Sidang Skripsi", en: "3. Thesis Defense" },
  ks_tab_distribusi: { id: "4. Distribusi Skripsi", en: "4. Thesis Distribution" },
  ks_documents: { id: "Dokumen", en: "Documents" },
  ks_stage_sempro_title: { id: "Seminar Proposal (Sempro)", en: "Proposal Seminar (Sempro)" },
  ks_stage_semhas_title: { id: "Seminar Hasil (Semhas)", en: "Results Seminar (Semhas)" },
  ks_stage_sidang_title: { id: "Sidang Munaqasyah (Skripsi)", en: "Munaqasyah Defense (Thesis)" },
  ks_stage_distribusi_title: { id: "Distribusi Tugas Akhir Pasca Sidang", en: "Final-Project Distribution After the Defense" },
  ks_stage1: { id: "Tahap 1", en: "Stage 1" },
  ks_stage2: { id: "Tahap 2", en: "Stage 2" },
  ks_stage3: { id: "Tahap 3", en: "Stage 3" },
  ks_stage_final: { id: "Tahap Akhir", en: "Final Stage" },
  ks_tip_checkbox: {
    id: "💡 Tip: Klik checkbox di bawah untuk menandai berkas yang sudah kamu siapkan.",
    en: "💡 Tip: Click the checkboxes below to mark the files you have prepared.",
  },
  ks_progress: { id: "Progres Kesiapan Berkas", en: "File Readiness Progress" },
  ks_ready_mid: { id: "dari", en: "of" },
  ks_ready_tail: { id: "berkas siap", en: "files ready" },
  ks_all_done: {
    id: "Selamat! Seluruh berkas persyaratan tahap ini sudah lengkap kamu siapkan!",
    en: "Congratulations! You've prepared every required file for this stage!",
  },
  ks_max: { id: "Maks.", en: "Max." },
  ks_name_rule: { id: "Aturan nama:", en: "Naming rule:" },
  ks_ready: { id: "Siap / Terkumpul", en: "Ready / Collected" },
  ks_not_yet: { id: "Belum", en: "Not yet" },
  ks_s4_title: { id: "Tips Praktis & Mindset Bimbingan", en: "Practical Tips & Supervision Mindset" },
  ks_s4_sub: {
    id: "Tiga prinsip utama yang terbukti menyelamatkan dari jeratan revisi berulang",
    en: "Three core principles proven to save you from endless revision loops",
  },
  ks_tips_label: { id: "Tips", en: "Tip" },
  ks_s5_title: { id: "Template Chat Sopan & Notes Revisi", en: "Polite Chat Template & Revision Notes" },
  ks_s5_sub: {
    id: "Contoh komunikasi efektif dengan dosen pembimbing dan cara mendokumentasikan revisi",
    en: "Examples of effective communication with your supervisor and how to document revisions",
  },
  ks_wa_title: { id: "Template Chat WhatsApp Dospem", en: "Supervisor WhatsApp Chat Template" },
  ks_copied: { id: "Tersalin!", en: "Copied!" },
  ks_copy_chat: { id: "Salin Chat", en: "Copy Chat" },
  ks_wa_desc: {
    id: "Format chat sopan untuk meminta jadwal bimbingan secara kolektif atau mandiri:",
    en: "A polite chat format for requesting a supervision slot, as a group or on your own:",
  },
  ks_wa_note: {
    id: "💡 Selalu sesuaikan jam kirim pesan (pada jam kerja: 08.00–16.00 WIB) dan gunakan bahasa yang santun.",
    en: "💡 Always send during working hours (08:00–16:00 WIB) and use polite language.",
  },
  ks_notes_title: { id: "Contoh Format Notes Revisi", en: "Example Revision-Notes Format" },
  ks_case: { id: "Contoh Kasus:", en: "Example Case:" },
  ks_revision_point: { id: "Poin Revisi:", en: "Revision Point:" },
  ks_action: { id: "Tindakan:", en: "Action:" },
  ks_notes_note: {
    id: "💡 Simpan file notes setiap bimbingan di Google Docs / Notion agar mudah ditinjau saat sidang nanti.",
    en: "💡 Save your notes from each session in Google Docs / Notion so they're easy to review before the defense.",
  },
  ks_banner_title: {
    id: "Semoga Dimudahkan dan Lancar Sampai Wisuda! 🎓",
    en: "May It Be Made Easy and Smooth All the Way to Graduation! 🎓",
  },
  ks_banner_sub: {
    id: "Skripsi adalah maraton, bukan sprint. Jangan ragu bertanya, jangan simpan kebingungan sendirian, dan nikmati setiap proses pembelajarannya.",
    en: "A thesis is a marathon, not a sprint. Don't hesitate to ask, don't keep your confusion to yourself, and enjoy every step of the learning process.",
  },
  ks_open_full_gdoc: { id: "Buka Dokumen Lengkap di Google Docs", en: "Open the Full Document in Google Docs" },
  ks_scroll_top: { id: "Kembali ke Atas", en: "Back to Top" },

  // --- German-fallback notice (shown only while lang = de) ---
  de_only_title: {
    id: "Hanya Bahasa Inggris",
    en: "English only",
    de: "Nur auf Englisch",
  },
  de_only_body: {
    id: "Halaman ini belum tersedia dalam bahasa Jerman dan ditampilkan dalam bahasa Inggris.",
    en: "This page isn't available in German yet, so it's shown in English.",
    de: "Diese Seite ist noch nicht auf Deutsch verfügbar und wird daher auf Englisch angezeigt.",
  },
  de_only_dismiss: { id: "Mengerti", en: "Got it", de: "Verstanden" },
} satisfies Record<string, Localized>;

export type UIKey = keyof typeof UI;

export function useT() {
  const { lang } = useLang();
  return {
    lang,
    t: (key: UIKey) => pick(UI[key], lang),
    // pick() re-exported bound to current lang, for inline Localized data
    p: (v: Localized) => pick(v, lang),
  };
}
