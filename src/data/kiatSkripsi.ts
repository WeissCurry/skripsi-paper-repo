import type { Localized } from "../i18n/strings";

export interface KelompokKeahlian {
  id: string;
  code: string;
  name: string;
  description: Localized;
  suitableFor: Localized;
  color: string;
  topics: string[];
  examples: {
    category: string;
    title: Localized;
  }[];
}

export interface DocumentItem {
  id: number;
  name: Localized;
  format: string;
  maxSize: string;
  fileNameRule: string;
  notes?: Localized;
}

export interface PortalLink {
  title: Localized;
  description: Localized;
  url: string;
  badge?: Localized;
}

export const GOOGLE_DOC_URL =
  'https://docs.google.com/document/d/1m3Lj-wmMqN1gHBjU7tB4TiLYkZZmg0AMFIthC6VzbA4/edit?tab=t.amby3fbg6alm';

export const PORTAL_LINKS: PortalLink[] = [
  {
    title: {
      id: 'Pendaftaran Sidang / Semhas / Sempro',
      en: 'Defense / Results / Proposal Seminar Registration',
    },
    description: {
      id: 'Portal resmi pendaftaran seminar dan sidang Program Studi Sistem Informasi UIN Jakarta.',
      en: 'The official seminar and defense registration portal of the Information Systems Program at UIN Jakarta.',
    },
    url: 'https://s.id/layananSIUINJkt',
    badge: { id: 'Prodi SI', en: 'IS Program' },
  },
  {
    title: {
      id: 'E-Letter FST (Permohonan SK & Surat)',
      en: 'E-Letter FST (Decree & Letter Requests)',
    },
    description: {
      id: 'Pengajuan surat pengantar, SK Pembimbing, dan administrasi akademik fakultas.',
      en: 'Requesting cover letters, the supervisor appointment decree, and faculty academic administration.',
    },
    url: 'https://e-letter.fst.uinjkt.ac.id/login',
    badge: { id: 'Fakultas', en: 'Faculty' },
  },
  {
    title: {
      id: 'Ujian Bahasa TOEFL & TOAFL',
      en: 'TOEFL & TOAFL Language Tests',
    },
    description: {
      id: 'Portal tes bahasa resmi (UIN Malang Rp100.000 / UIN Jakarta Rp75.000).',
      en: 'The official language-test portal (UIN Malang IDR 100,000 / UIN Jakarta IDR 75,000).',
    },
    url: 'https://alba.uin-malang.ac.id/login',
    badge: { id: 'Sertifikasi', en: 'Certification' },
  },
];

export const KELOMPOK_KEAHLIAN: KelompokKeahlian[] = [
  {
    id: 'kk1',
    code: 'KK 1',
    name: 'Digital Transformation and Innovation',
    color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-500',
    description: {
      id: 'Membahas bagaimana teknologi mengubah wajah bisnis, organisasi, dan pelayanan publik. Fokus pada adopsi teknologi baru, tata kelola IT, arsitektur enterprise, UI/UX, hingga E-Government.',
      en: 'Explores how technology reshapes business, organizations, and public services. Focused on new-technology adoption, IT governance, enterprise architecture, UI/UX, and E-Government.',
    },
    suitableFor: {
      id: 'Cocok untuk kamu yang berminat pada tata kelola IT, strategi bisnis digital, perancangan blueprint enterprise, dan desain pengalaman pengguna (UX).',
      en: 'A good fit if you are interested in IT governance, digital business strategy, enterprise blueprint design, and user-experience (UX) design.',
    },
    topics: [
      'Enterprise Architecture (TOGAF ADM / Zachman)',
      'UI/UX & Human-Computer Interaction (UCD / Design Thinking)',
      'Digital Transformation & E-Government',
      'IT Governance & Audit (COBIT 2019 / ITIL)',
    ],
    examples: [
      {
        category: 'Enterprise Architecture',
        title: {
          id: 'Perancangan Arsitektur Enterprise Menggunakan Framework TOGAF ADM pada Instansi XYZ',
          en: 'Designing an Enterprise Architecture Using the TOGAF ADM Framework at Institution XYZ',
        },
      },
      {
        category: 'UI/UX & HCI',
        title: {
          id: 'Analisis dan Evaluasi User Experience (UX) pada Aplikasi Layanan Publik XYZ Menggunakan Metode User Centered Design (UCD)',
          en: 'Analysis and Evaluation of the User Experience (UX) of the XYZ Public-Service App Using the User-Centered Design (UCD) Method',
        },
      },
      {
        category: 'Digital Transformation & E-Gov',
        title: {
          id: 'Evaluasi Kematangan Transformasi Digital (Digital Maturity) Pelayanan Pajak Daerah Menggunakan Model XYZ',
          en: 'Evaluating the Digital Maturity of Regional Tax Services Using the XYZ Model',
        },
      },
      {
        category: 'IT Governance',
        title: {
          id: 'Audit Tata Kelola Teknologi Informasi pada Perusahaan ABC Menggunakan Framework COBIT 2019',
          en: 'IT Governance Audit at Company ABC Using the COBIT 2019 Framework',
        },
      },
    ],
  },
  {
    id: 'kk2',
    code: 'KK 2',
    name: 'Information System and Management',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-500',
    description: {
      id: 'Menitikberatkan pada perancangan sistem informasi yang membantu manajemen mengambil keputusan strategis, mengelola pengetahuan (KMS), dan mengevaluasi performa organisasi.',
      en: 'Emphasizes designing information systems that help management make strategic decisions, manage knowledge (KMS), and evaluate organizational performance.',
    },
    suitableFor: {
      id: 'Menengahi sisi manajerial/bisnis dan teknis. Ideal bagi yang ingin meneliti integrasi proses bisnis, sistem penunjang keputusan, atau efisiensi alur kerja.',
      en: 'Bridges the managerial/business and technical sides. Ideal if you want to research business-process integration, decision-support systems, or workflow efficiency.',
    },
    topics: [
      'Decision Support System (DSS / SPK - AHP, TOPSIS, SAW)',
      'Knowledge Management System (KMS)',
      'Organizational Performance & Enterprise Resource Planning (ERP)',
      'Geographic Information Systems (GIS / SIG)',
    ],
    examples: [
      {
        category: 'Decision Support System (DSS)',
        title: {
          id: 'Sistem Pendukung Keputusan Pemilihan Pemasok (Supplier) Terbaik pada PT XYZ Menggunakan Metode Analytical Hierarchy Process (AHP)',
          en: 'A Decision Support System for Selecting the Best Supplier at PT XYZ Using the Analytical Hierarchy Process (AHP) Method',
        },
      },
      {
        category: 'Knowledge Management',
        title: {
          id: 'Perancangan Knowledge Management System (KMS) Berbasis Web untuk Mengelola Pengetahuan Karyawan di Divisi IT PT ABC',
          en: 'Designing a Web-Based Knowledge Management System (KMS) to Manage Employee Knowledge in the IT Division of PT ABC',
        },
      },
      {
        category: 'Organizational Performance & IT',
        title: {
          id: 'Analisis Pengaruh Implementasi Sistem ERP Terhadap Kinerja Supply Chain Management di Perusahaan XYZ',
          en: 'Analysis of the Effect of ERP System Implementation on Supply Chain Management Performance at Company XYZ',
        },
      },
      {
        category: 'Geographic Information Systems (GIS)',
        title: {
          id: 'Sistem Informasi Geografis Pemetaan Daerah Rawan Bencana Banjir di Kota XYZ Menggunakan Metode K-Means',
          en: 'A Geographic Information System for Mapping Flood-Prone Areas in City XYZ Using the K-Means Method',
        },
      },
    ],
  },
  {
    id: 'kk3',
    code: 'KK 3',
    name: 'Information Processing',
    color: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-500',
    description: {
      id: 'Kelompok yang paling teknis dan coding-heavy. Fokus pada pengolahan data tingkat lanjut, algoritma, Artificial Intelligence (AI), Machine Learning, Software Engineering, dan Image Processing.',
      en: 'The most technical, coding-heavy group. Focused on advanced data processing, algorithms, Artificial Intelligence (AI), Machine Learning, Software Engineering, and Image Processing.',
    },
    suitableFor: {
      id: 'Sangat cocok bagi yang gemar programming, eksplorasi algoritma, analisis data mendalam, pemrosesan bahasa alami (NLP), atau computer vision.',
      en: 'A great fit if you enjoy programming, exploring algorithms, deep data analysis, natural language processing (NLP), or computer vision.',
    },
    topics: [
      'Data Mining & Machine Learning (Clustering, Klasifikasi)',
      'Artificial Intelligence & Natural Language Processing (Sentiment Analysis)',
      'Computer Vision & Image Processing (CNN, Object Detection)',
      'Software Engineering & Full-stack Architecture',
    ],
    examples: [
      {
        category: 'Data Mining & Machine Learning',
        title: {
          id: 'Penerapan Algoritma Apriori untuk Menentukan Pola Pembelian Konsumen sebagai Strategi Penempatan Barang pada Minimarket XYZ',
          en: 'Applying the Apriori Algorithm to Determine Consumer Purchasing Patterns as a Product-Placement Strategy at Minimarket XYZ',
        },
      },
      {
        category: 'AI / Sentiment Analysis',
        title: {
          id: 'Analisis Sentimen Pengguna Media Sosial X (Twitter) Terhadap Pemindahan Ibu Kota Negara Menggunakan Algoritma Naïve Bayes',
          en: 'Sentiment Analysis of X (Twitter) Users Toward the Relocation of the National Capital Using the Naïve Bayes Algorithm',
        },
      },
      {
        category: 'Image Processing',
        title: {
          id: 'Klasifikasi Tingkat Kematangan Buah Tomat Berdasarkan Pengolahan Citra Digital Menggunakan Convolutional Neural Network (CNN)',
          en: 'Classification of Tomato Ripeness Based on Digital Image Processing Using a Convolutional Neural Network (CNN)',
        },
      },
      {
        category: 'Software Engineering',
        title: {
          id: 'Rancang Bangun Sistem Informasi Rekam Medis Elektronik Berbasis Web Menggunakan Framework Laravel',
          en: 'Design and Development of a Web-Based Electronic Medical Record Information System Using the Laravel Framework',
        },
      },
    ],
  },
];

export const JADWAL_INFO: { semproSidang: Localized[]; semhas: Localized[] } = {
  semproSidang: [
    {
      id: 'Pendaftaran dibuka setiap rentang tanggal 1–7 dan 15–21 setiap bulannya.',
      en: 'Registration opens every month during the 1st–7th and 15th–21st.',
    },
    {
      id: 'Bisa ditutup lebih cepat di setiap penghujung semester akademik.',
      en: 'It may close earlier toward the end of each academic semester.',
    },
    {
      id: 'Dihadiri oleh Dosen Pembimbing dan Dosen Penguji.',
      en: 'Attended by the supervisors and the examiners.',
    },
    {
      id: 'Jadwal dan ruangan/ruang daring ditentukan langsung oleh Program Studi.',
      en: 'The schedule and the room / online room are set directly by the Program.',
    },
  ],
  semhas: [
    {
      id: 'Pendaftaran dapat dibuka kapan pun (fleksibel selama semester aktif).',
      en: 'Registration can open at any time (flexible during the active semester).',
    },
    {
      id: 'Jadwal, waktu, dan pelaksanaan disepakati langsung bersama Dosen Pembimbing.',
      en: 'The date, time, and arrangements are agreed directly with the supervisor.',
    },
    {
      id: 'Syarat utama: minimal telah bimbingan 10x dan mendapat tanda tangan ACC Semhas.',
      en: 'Main requirement: at least 10 supervision sessions and a signed Results-Seminar approval.',
    },
  ],
};

export const CHECKLIST_SEMPRO: DocumentItem[] = [
  {
    id: 1,
    name: { id: 'Proposal Skripsi', en: 'Thesis Proposal' },
    format: 'PDF',
    maxSize: '5 MB',
    fileNameRule: 'nama_NIM_Proposal',
    notes: {
      id: 'Berisi Bab 1 sampai Bab 3 yang telah disetujui dospem.',
      en: 'Contains Chapters 1 to 3 as approved by the supervisor.',
    },
  },
  {
    id: 2,
    name: { id: 'Slide Presentasi Sempro', en: 'Proposal Seminar Slides' },
    format: 'PPT / PPTX / PDF',
    maxSize: '10 MB',
    fileNameRule: 'nama_NIM_Slide_Sempro',
    notes: {
      id: 'Format ringkas 10-15 slide memuat latar belakang, rumusan, dan metodologi.',
      en: 'A concise 10–15 slide deck covering the background, problem statement, and methodology.',
    },
  },
  {
    id: 3,
    name: {
      id: 'Surat Penunjukan (SK) Dosen Pembimbing',
      en: 'Supervisor Appointment Decree (SK)',
    },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_SK Dospem',
    notes: {
      id: 'Diunduh melalui portal e-letter FST.',
      en: 'Downloaded through the FST e-letter portal.',
    },
  },
  {
    id: 4,
    name: { id: 'Sertifikat TOEFL', en: 'TOEFL Certificate' },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_TOEFL-1',
    notes: {
      id: 'Sertifikat tes ke-1 hasil tes setelah MABA.',
      en: 'The 1st-attempt certificate from the test taken after new-student orientation.',
    },
  },
  {
    id: 5,
    name: { id: 'Sertifikat TOAFL', en: 'TOAFL Certificate' },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_TOAFL-1',
    notes: {
      id: 'Sertifikat tes ke-1 hasil tes bahasa Arab.',
      en: 'The 1st-attempt certificate from the Arabic-language test.',
    },
  },
  {
    id: 6,
    name: {
      id: 'Bukti Persetujuan Pembimbing (ACC Sempro)',
      en: 'Supervisor Approval Proof (Proposal Seminar)',
    },
    format: 'PDF / Image',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_ACC_Sempro',
    notes: {
      id: 'Scan lembar ACC kartu bimbingan atau screenshot persetujuan WA dospem.',
      en: 'A scan of the approval on the supervision card or a screenshot of the supervisor\'s WhatsApp approval.',
    },
  },
];

export const CHECKLIST_SEMHAS: DocumentItem[] = [
  {
    id: 1,
    name: { id: 'SK Pembimbing Skripsi', en: 'Thesis Supervisor Decree (SK)' },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_SK Dospem',
    notes: {
      id: 'SK aktif dari dekanat yang masih berlaku.',
      en: 'An active, still-valid decree from the dean\'s office.',
    },
  },
  {
    id: 2,
    name: { id: 'Laporan Skripsi Semhas', en: 'Results-Seminar Thesis Report' },
    format: 'PDF',
    maxSize: '5 MB',
    fileNameRule: 'nama_NIM_Skripsi_Semhas',
    notes: {
      id: 'Draft lengkap Bab 1–5. Lembar pengesahan belum wajib ditandatangani lengkap.',
      en: 'A complete draft of Chapters 1–5. The approval sheet does not yet need to be fully signed.',
    },
  },
  {
    id: 3,
    name: { id: 'Slide Presentasi SEMHAS', en: 'Results-Seminar Slides' },
    format: 'PPT / Presentation',
    maxSize: '2 MB',
    fileNameRule: 'nama_NIM_PPT_Semhas',
    notes: {
      id: 'Fokus pada hasil penelitian, implementasi, dan pengujian sistem.',
      en: 'Focused on the research results, implementation, and system testing.',
    },
  },
  {
    id: 4,
    name: {
      id: 'Bukti Persetujuan Dosen Pembimbing (ACC Semhas)',
      en: 'Supervisor Approval Proof (Results Seminar)',
    },
    format: 'PDF / Image',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_ACC_Semhas',
    notes: {
      id: 'Screenshot chat WA atau tanda tangan ACC Semhas pada kartu bimbingan.',
      en: 'A WhatsApp screenshot or the signed Results-Seminar approval on the supervision card.',
    },
  },
  {
    id: 5,
    name: { id: 'Sertifikat TOEFL (Tes 1 & 2)', en: 'TOEFL Certificate (Attempts 1 & 2)' },
    format: 'PDF',
    maxSize: '1 MB per file',
    fileNameRule: 'nama_NIM_TOEFL1-2',
    notes: {
      id: 'Sertifikat hasil tes ke-1 dan ke-2 setelah MABA.',
      en: 'The 1st- and 2nd-attempt certificates taken after new-student orientation.',
    },
  },
  {
    id: 6,
    name: { id: 'Sertifikat TOAFL (Tes 1 & 2)', en: 'TOAFL Certificate (Attempts 1 & 2)' },
    format: 'PDF',
    maxSize: '1 MB per file',
    fileNameRule: 'nama_NIM_TOAFL1-2',
    notes: {
      id: 'Sertifikat hasil tes ke-1 dan ke-2 bahasa Arab setelah MABA.',
      en: 'The 1st- and 2nd-attempt Arabic-language certificates taken after new-student orientation.',
    },
  },
  {
    id: 7,
    name: { id: 'KRS Seminar Hasil', en: 'Results-Seminar Study Plan (KRS)' },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_KRS',
    notes: {
      id: 'Screenshot halaman AIS yang menunjukkan mata kuliah Semhas terdaftar.',
      en: 'A screenshot of the AIS page showing the Results-Seminar course is registered.',
    },
  },
  {
    id: 8,
    name: { id: 'Kartu Bimbingan Lengkap', en: 'Complete Supervision Card' },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_Bimbingan',
    notes: {
      id: 'Sudah ditandatangani kedua dospem, bertuliskan ACC Semhas, minimal 10 kali bimbingan.',
      en: 'Signed by both supervisors, marked Results-Seminar approved, with at least 10 supervision sessions.',
    },
  },
];

export const CHECKLIST_SIDANG: DocumentItem[] = [
  {
    id: 1,
    name: { id: 'Laporan Skripsi Lengkap', en: 'Complete Thesis Report' },
    format: 'PDF',
    maxSize: '3 MB',
    fileNameRule: 'LAPORAN SKRIPSI_NAMA_NIM',
    notes: {
      id: 'Lembar pengesahan sudah bertanda tangan lengkap dari kedua pembimbing.',
      en: 'The approval sheet is fully signed by both supervisors.',
    },
  },
  {
    id: 2,
    name: { id: 'Slide Presentasi Sidang', en: 'Defense Slides' },
    format: 'PPT',
    maxSize: '2 MB',
    fileNameRule: 'PPT_SIDANG_NAMA_NIM',
    notes: {
      id: 'Presentasi komprehensif 15 menit mencakup background, solusi, dan demo.',
      en: 'A comprehensive 15-minute presentation covering the background, solution, and demo.',
    },
  },
  {
    id: 3,
    name: { id: 'Scan Lembar Pengesahan Skripsi', en: 'Scan of the Thesis Approval Sheet' },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'NAMA_NIM_PENGESAHAN',
    notes: {
      id: 'Tanda tangan basah atau digital resmi kedua dospem.',
      en: 'A wet or official digital signature from both supervisors.',
    },
  },
  {
    id: 4,
    name: { id: 'Hasil Cek Plagiasi Turnitin', en: 'Turnitin Plagiarism Check Result' },
    format: 'PDF',
    maxSize: '2 MB',
    fileNameRule: 'TURNITIN_NAMA_NIM',
    notes: {
      id: 'Bab 1 s.d Bab 5, similarity < 25%. Wajib terlihat nama mahasiswa dan skor similarity.',
      en: 'Chapters 1 to 5, similarity < 25%. The student name and similarity score must be visible.',
    },
  },
  {
    id: 5,
    name: {
      id: 'File Bukti Persetujuan Pembimbing (ACC Sidang)',
      en: 'Supervisor Approval Proof File (Defense)',
    },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'PERSETUJUAN_NAMA_NIM',
    notes: {
      id: 'Screenshot WA atau scan ACC Sidang pada kartu bimbingan.',
      en: 'A WhatsApp screenshot or a scan of the defense approval on the supervision card.',
    },
  },
  {
    id: 6,
    name: { id: 'Sertifikat PBAK', en: 'PBAK Certificate' },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'PBAK_NAMA_NIM',
    notes: {
      id: 'Harus tercantum nama Anda (bukan form template kosong).',
      en: 'Your name must appear on it (not a blank template form).',
    },
  },
  {
    id: 7,
    name: { id: 'Surat Pernyataan Bebas Plagiasi', en: 'Plagiarism-Free Declaration Letter' },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'PLAGIASI_NAMA_NIM',
    notes: {
      id: 'Ditandatangani di atas meterai Rp10.000.',
      en: 'Signed over an IDR 10,000 duty stamp.',
    },
  },
  {
    id: 8,
    name: { id: 'Sertifikat TOEFL', en: 'TOEFL Certificate' },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'TOEFL_NAMA_NIM',
    notes: {
      id: '1 sertifikat skor minimal 450, atau rekap 3 sertifikat setelah hasil MABA.',
      en: 'One certificate with a minimum score of 450, or a recap of 3 certificates taken after orientation.',
    },
  },
  {
    id: 9,
    name: { id: 'Sertifikat TOAFL', en: 'TOAFL Certificate' },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'TOAFL_NAMA_NIM',
    notes: {
      id: '1 sertifikat skor minimal 375, atau rekap 3 sertifikat setelah hasil MABA.',
      en: 'One certificate with a minimum score of 375, or a recap of 3 certificates taken after orientation.',
    },
  },
  {
    id: 10,
    name: { id: 'Transkrip Nilai Terakhir dari AIS', en: 'Latest Grade Transcript from AIS' },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'TRANSKRIP_NAMA_NIM',
    notes: {
      id: 'Transkrip resmi terbaru yang diunduh dari AIS.',
      en: 'The latest official transcript downloaded from AIS.',
    },
  },
  {
    id: 11,
    name: { id: 'Scan Kartu Bimbingan', en: 'Scan of the Supervision Card' },
    format: 'PDF',
    maxSize: '2 MB',
    fileNameRule: 'KARTU_BIMBINGAN_NAMA_NIM',
    notes: {
      id: 'Minimal 10 kali bimbingan dan bertanda tangan lengkap.',
      en: 'At least 10 supervision sessions and fully signed.',
    },
  },
  {
    id: 12,
    name: {
      id: 'Scan Kartu Seminar Hasil (Audience & Moderator)',
      en: 'Scan of the Results-Seminar Card (Audience & Moderator)',
    },
    format: 'PDF',
    maxSize: '2 MB',
    fileNameRule: 'KARTU_SEMHAS_NAMA_NIM',
    notes: {
      id: 'Minimal 11 kali: sebagai peserta/audiens 10x, dan sebagai moderator 1x.',
      en: 'At least 11 times: as an audience member 10x and as a moderator 1x.',
    },
  },
  {
    id: 13,
    name: { id: 'Screenshot KRS 2 Semester Terakhir', en: 'Screenshot of the Last 2 Semesters\' Study Plan' },
    format: 'PDF / Image',
    maxSize: '1 MB',
    fileNameRule: 'KRS_NAMA_NIM',
    notes: {
      id: 'Dari AIS, menunjukkan mata kuliah skripsi sudah disetujui Dosen Pembimbing Akademik (DPA).',
      en: 'From AIS, showing the thesis course has been approved by the Academic Advisor (DPA).',
    },
  },
  {
    id: 14,
    name: {
      id: 'Transkrip & Daftar MK Kurikulum Bertanda Tangan DPA',
      en: 'Transcript & Curriculum Course List Signed by the Academic Advisor',
    },
    format: 'PDF',
    maxSize: '2 MB',
    fileNameRule: 'MK_KURIKULUM_NAMA_NIM',
    notes: {
      id: 'Daftar MK dicek bahwa semua MK wajib sudah ada di transkrip dengan nilai minimal C.',
      en: 'The course list is checked so that all required courses appear on the transcript with at least a C grade.',
    },
  },
];

export const CHECKLIST_DISTRIBUSI: DocumentItem[] = [
  {
    id: 1,
    name: { id: 'Bukti Distribusi Dosen', en: 'Lecturer Distribution Receipt' },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'Nama_NIM_Bukti_Distribusi',
    notes: {
      id: 'Tanda terima penyerahan naskah skripsi kepada dospem dan penguji.',
      en: 'The receipt for handing the thesis manuscript to the supervisors and examiners.',
    },
  },
  {
    id: 2,
    name: { id: 'Form Distribusi Skripsi', en: 'Thesis Distribution Form' },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'Nama_NIM_Form_Distribusi',
    notes: {
      id: 'Formulir resmi distribusi dari program studi.',
      en: 'The official distribution form from the program.',
    },
  },
  {
    id: 3,
    name: { id: 'Bundel Skripsi Final', en: 'Final Thesis Bundle' },
    format: 'PDF',
    maxSize: '10 MB',
    fileNameRule: 'Nama_NIM_Skripsi Final',
    notes: {
      id: 'Laporan utuh dari halaman judul sampai lampiran yang sudah revisi pasca sidang.',
      en: 'The complete report from the title page to the appendices, revised after the defense.',
    },
  },
  {
    id: 4,
    name: { id: 'Flipbook Skripsi', en: 'Thesis Flipbook' },
    format: 'Link / File',
    maxSize: '-',
    fileNameRule: 'Nama_NIM_Flipbook',
    notes: {
      id: 'Tautan atau dokumen versi flipbook digital interaktif.',
      en: 'A link or document of the interactive digital flipbook version.',
    },
  },
  {
    id: 5,
    name: {
      id: 'Paper / Artikel Skripsi (Indo/Inggris)',
      en: 'Thesis Paper / Article (Indonesian/English)',
    },
    format: 'WORD (.docx)',
    maxSize: '10 MB',
    fileNameRule: 'Nama_NIM_Paper_Indo/Ing',
    notes: {
      id: 'Format manuskrip jurnal sesuai template publikasi.',
      en: 'A journal manuscript format following the publication template.',
    },
  },
  {
    id: 6,
    name: {
      id: 'Curriculum Vitae (CV) Indo & Inggris',
      en: 'Curriculum Vitae (CV) in Indonesian & English',
    },
    format: 'PDF',
    maxSize: '5–10 MB',
    fileNameRule: 'Nama_NIM_CV_Indo/Ing',
    notes: { id: 'CV profesional terbaru.', en: 'An up-to-date professional CV.' },
  },
  {
    id: 7,
    name: { id: 'File Lampiran Skripsi', en: 'Thesis Appendix Files' },
    format: 'PDF',
    maxSize: '10 MB',
    fileNameRule: 'Nama_NIM_Lampiran',
    notes: {
      id: 'Kode sumber, kuesioner, output wawancara, atau data pendukung lainnya.',
      en: 'Source code, questionnaires, interview outputs, or other supporting data.',
    },
  },
  {
    id: 8,
    name: { id: 'Lembar Pengesahan Resmi', en: 'Official Approval Sheet' },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'Nama_NIM_Pengesahan',
    notes: {
      id: 'Sudah ditandatangani dospem, penguji, dan Dekan FST.',
      en: 'Signed by the supervisors, examiners, and the Dean of FST.',
    },
  },
  {
    id: 9,
    name: { id: 'SK Penunjukkan Dospem', en: 'Supervisor Appointment Decree' },
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'Nama_NIM_SK_Dospem',
    notes: {
      id: 'Dokumen SK awal penunjukan pembimbing.',
      en: 'The initial decree document appointing the supervisor.',
    },
  },
  {
    id: 10,
    name: { id: 'Pengisian SKPI di AIS', en: 'SKPI Entry in AIS' },
    format: 'Sistem AIS',
    maxSize: '-',
    fileNameRule: 'Input Data AIS',
    notes: {
      id: 'Surat Keterangan Pendamping Ijazah diinput melalui akun mahasiswa di AIS.',
      en: 'The Diploma Supplement (SKPI) is entered through the student account in AIS.',
    },
  },
];

export const TIPS_BIMBINGAN: { number: string; title: Localized; description: Localized; highlight: Localized }[] = [
  {
    number: '01',
    title: {
      id: 'Seminggu Minimal 2 Kali Bimbingan',
      en: 'At Least 2 Supervision Sessions a Week',
    },
    description: {
      id: 'Bagi jadwal secara disiplin: 1 kali bimbingan dengan Dosen Pembimbing 1, dan 1 kali bimbingan dengan Dosen Pembimbing 2. Ritme yang konsisten mencegah skripsi tertunda berbulan-bulan.',
      en: 'Split the schedule with discipline: one session with Supervisor 1 and one with Supervisor 2. A consistent rhythm keeps the thesis from stalling for months.',
    },
    highlight: {
      id: 'Dosbing 1 (1x) & Dosbing 2 (1x)',
      en: 'Supervisor 1 (1x) & Supervisor 2 (1x)',
    },
  },
  {
    number: '02',
    title: {
      id: 'Paksa Bimbingan Meski Belum Siap',
      en: 'Push for Supervision Even When Not Ready',
    },
    description: {
      id: 'Jangan menunggu draft kamu sempurna 100% baru berani bimbingan. Datanglah membawa pertanyaan, kerangka ide, atau progress sekecil apapun. Dosen hadir untuk membimbing arah, bukan hanya menguji hasil akhir.',
      en: 'Don\'t wait for a 100% perfect draft before daring to meet. Come with questions, an outline, or any small progress. Supervisors are there to guide direction, not just to judge the final result.',
    },
    highlight: { id: 'kapan siapnya?', en: 'when will it ever be ready?' },
  },
  {
    number: '03',
    title: {
      id: 'Keluar Bimbingan Wajib Tahu Harus Ngapain',
      en: 'Leave Supervision Knowing Exactly What to Do',
    },
    description: {
      id: 'Setelah sesi bimbingan selesai, jangan biarkan diri kamu bingung. Sebelum pamit, simpulkan kembali: "Berarti untuk minggu depan poin yang saya perbaiki adalah X, Y, dan Z ya pak/bu?". Catat semuanya!',
      en: 'After a session ends, don\'t leave yourself confused. Before you go, recap: "So for next week, the points I need to fix are X, Y, and Z, right?" Write it all down!',
    },
    highlight: { id: 'bingung? tanya AI', en: 'confused? ask AI' },
  },
];

export const TEMPLATE_CHAT: Localized = {
  id: `Assalamualaikum Wr. Wb. Selamat Pagi/Siang, Ibu/Bapak [Nama Dosen Beserta Gelar]

Izin memperkenalkan diri:
- Nama: [Nama Anda]
- NIM: [NIM Anda]

Saya mewakili rekan satu bimbingan:
- [Nama Teman 1] ([NIM])
- [Nama Teman 2] ([NIM])

Izin konfirmasi, jikalau diperkenankan tahu, untuk minggu ini apakah Ibu/Bapak bersedia untuk membimbing kami?

Jikalau berkenan, kira-kira bisa di hari apa dan pukul berapa ya Bu/Pak?

Atas pengertian, waktu, dan keridhaannya kami ucapkan terima kasih banyak Ibu/Bapak.

Wassalamu'alaikum Wr. Wb.`,
  en: `Assalamualaikum Wr. Wb. Good morning/afternoon, Ms./Mr. [Lecturer Name and Title]

Allow me to introduce myself:
- Name: [Your Name]
- Student ID: [Your Student ID]

I represent my fellow supervisees:
- [Friend 1 Name] ([Student ID])
- [Friend 2 Name] ([Student ID])

May I confirm, if I may ask, whether you would be willing to supervise us this week?

If you are willing, what day and time would work for you?

Thank you very much for your understanding, time, and blessing.

Wassalamu'alaikum Wr. Wb.`,
};

export const CONTOH_NOTES_BIMBINGAN: {
  topik: Localized;
  items: { bab: Localized; poinRevisi: Localized; tindakan: Localized }[];
} = {
  topik: {
    id: 'ACC Sempro & Revisi Bab 1–2 serta Persiapan Metodologi',
    en: 'Proposal Seminar Approval & Revision of Chapters 1–2 and Methodology Prep',
  },
  items: [
    {
      bab: {
        id: 'Bab 1: Pendahuluan (Latar Belakang)',
        en: 'Chapter 1: Introduction (Background)',
      },
      poinRevisi: {
        id: 'Masukkan referensi Fatwa / Keputusan DSN MUI terkait aset kripto.',
        en: 'Add references to the DSN-MUI fatwa / decision on crypto assets.',
      },
      tindakan: {
        id: 'Cari dan kutip Hasil Ijtima Ulama / Fatwa DSN MUI (Tahun 2021) terkait hukum cryptocurrency. Tuliskan intisarinya di paragraf latar belakang untuk memperkuat urgensi penelitian dari sisi kepatuhan syariah.',
        en: 'Find and cite the Ijtima Ulama result / DSN-MUI fatwa (2021) on the legal status of cryptocurrency. Summarize its essence in the background paragraph to strengthen the study\'s urgency from the Sharia-compliance angle.',
      },
    },
    {
      bab: { id: 'Bab 2: Landasan Teori', en: 'Chapter 2: Theoretical Basis' },
      poinRevisi: {
        id: 'Penambahan materi tanpa mengubah atau memecah struktur bab yang sudah ada.',
        en: 'Add material without changing or splitting the existing chapter structure.',
      },
      tindakan: {
        id: 'Masukkan pembahasan terkait Fatwa / Kripto ke dalam sub-bab Fiqh Muamalah yang sudah ada. Selipkan narasinya secara mengalir dengan paragraf eksisting — jangan buat sub-bab baru.',
        en: 'Fold the fatwa / crypto discussion into the existing Fiqh Muamalah sub-section. Weave the narrative smoothly into the existing paragraphs — don\'t create a new sub-section.',
      },
    },
    {
      bab: { id: 'Bab 4: Pembahasan & Analisis', en: 'Chapter 4: Discussion & Analysis' },
      poinRevisi: {
        id: 'Integrasi standar ISO 31000:2018 dengan kepatuhan syariah.',
        en: 'Integrate the ISO 31000:2018 standard with Sharia compliance.',
      },
      tindakan: {
        id: 'Pada analisis risiko, hubungkan ISO 31000:2018 secara spesifik dengan Compliance Risks. Jelaskan bagaimana panduan ISO tersebut memitigasi risiko ketidakpatuhan syariah.',
        en: 'In the risk analysis, link ISO 31000:2018 specifically to Compliance Risks. Explain how the ISO guidance mitigates the risk of Sharia non-compliance.',
      },
    },
  ],
};
