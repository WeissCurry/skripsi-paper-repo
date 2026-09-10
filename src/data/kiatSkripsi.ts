export interface KelompokKeahlian {
  id: string;
  code: string;
  name: string;
  description: string;
  suitableFor: string;
  color: string;
  topics: string[];
  examples: {
    category: string;
    title: string;
  }[];
}

export interface DocumentItem {
  id: number;
  name: string;
  format: string;
  maxSize: string;
  fileNameRule: string;
  notes?: string;
}

export interface PortalLink {
  title: string;
  description: string;
  url: string;
  badge?: string;
}

export const GOOGLE_DOC_URL =
  'https://docs.google.com/document/d/1m3Lj-wmMqN1gHBjU7tB4TiLYkZZmg0AMFIthC6VzbA4/edit?tab=t.amby3fbg6alm';

export const PORTAL_LINKS: PortalLink[] = [
  {
    title: 'Pendaftaran Sidang / Semhas / Sempro',
    description: 'Portal resmi pendaftaran seminar dan sidang Program Studi Sistem Informasi UIN Jakarta.',
    url: 'https://s.id/layananSIUINJkt',
    badge: 'Prodi SI',
  },
  {
    title: 'E-Letter FST (Permohonan SK & Surat)',
    description: 'Pengajuan surat pengantar, SK Pembimbing, dan administrasi akademik fakultas.',
    url: 'https://e-letter.fst.uinjkt.ac.id/login',
    badge: 'Fakultas',
  },
  {
    title: 'Ujian Bahasa TOEFL & TOAFL',
    description: 'Portal tes bahasa resmi (UIN Malang Rp100.000 / UIN Jakarta Rp75.000).',
    url: 'https://alba.uin-malang.ac.id/login',
    badge: 'Sertifikasi',
  },
];

export const KELOMPOK_KEAHLIAN: KelompokKeahlian[] = [
  {
    id: 'kk1',
    code: 'KK 1',
    name: 'Digital Transformation and Innovation',
    color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-500',
    description:
      'Membahas bagaimana teknologi mengubah wajah bisnis, organisasi, dan pelayanan publik. Fokus pada adopsi teknologi baru, tata kelola IT, arsitektur enterprise, UI/UX, hingga E-Government.',
    suitableFor:
      'Cocok untuk kamu yang berminat pada tata kelola IT, strategi bisnis digital, perancangan blueprint enterprise, dan desain pengalaman pengguna (UX).',
    topics: [
      'Enterprise Architecture (TOGAF ADM / Zachman)',
      'UI/UX & Human-Computer Interaction (UCD / Design Thinking)',
      'Digital Transformation & E-Government',
      'IT Governance & Audit (COBIT 2019 / ITIL)',
    ],
    examples: [
      {
        category: 'Enterprise Architecture',
        title:
          'Perancangan Arsitektur Enterprise Menggunakan Framework TOGAF ADM pada Instansi XYZ',
      },
      {
        category: 'UI/UX & HCI',
        title:
          'Analisis dan Evaluasi User Experience (UX) pada Aplikasi Layanan Publik XYZ Menggunakan Metode User Centered Design (UCD)',
      },
      {
        category: 'Digital Transformation & E-Gov',
        title:
          'Evaluasi Kematangan Transformasi Digital (Digital Maturity) Pelayanan Pajak Daerah Menggunakan Model XYZ',
      },
      {
        category: 'IT Governance',
        title:
          'Audit Tata Kelola Teknologi Informasi pada Perusahaan ABC Menggunakan Framework COBIT 2019',
      },
    ],
  },
  {
    id: 'kk2',
    code: 'KK 2',
    name: 'Information System and Management',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-500',
    description:
      'Menitikberatkan pada perancangan sistem informasi yang membantu manajemen mengambil keputusan strategis, mengelola pengetahuan (KMS), dan mengevaluasi performa organisasi.',
    suitableFor:
      'Menengahi sisi manajerial/bisnis dan teknis. Ideal bagi yang ingin meneliti integrasi proses bisnis, sistem penunjang keputusan, atau efisiensi alur kerja.',
    topics: [
      'Decision Support System (DSS / SPK - AHP, TOPSIS, SAW)',
      'Knowledge Management System (KMS)',
      'Organizational Performance & Enterprise Resource Planning (ERP)',
      'Geographic Information Systems (GIS / SIG)',
    ],
    examples: [
      {
        category: 'Decision Support System (DSS)',
        title:
          'Sistem Pendukung Keputusan Pemilihan Pemasok (Supplier) Terbaik pada PT XYZ Menggunakan Metode Analytical Hierarchy Process (AHP)',
      },
      {
        category: 'Knowledge Management',
        title:
          'Perancangan Knowledge Management System (KMS) Berbasis Web untuk Mengelola Pengetahuan Karyawan di Divisi IT PT ABC',
      },
      {
        category: 'Organizational Performance & IT',
        title:
          'Analisis Pengaruh Implementasi Sistem ERP Terhadap Kinerja Supply Chain Management di Perusahaan XYZ',
      },
      {
        category: 'Geographic Information Systems (GIS)',
        title:
          'Sistem Informasi Geografis Pemetaan Daerah Rawan Bencana Banjir di Kota XYZ Menggunakan Metode K-Means',
      },
    ],
  },
  {
    id: 'kk3',
    code: 'KK 3',
    name: 'Information Processing',
    color: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-500',
    description:
      'Kelompok yang paling teknis dan coding-heavy. Fokus pada pengolahan data tingkat lanjut, algoritma, Artificial Intelligence (AI), Machine Learning, Software Engineering, dan Image Processing.',
    suitableFor:
      'Sangat cocok bagi yang gemar programming, eksplorasi algoritma, analisis data mendalam, pemrosesan bahasa alami (NLP), atau computer vision.',
    topics: [
      'Data Mining & Machine Learning (Clustering, Klasifikasi)',
      'Artificial Intelligence & Natural Language Processing (Sentiment Analysis)',
      'Computer Vision & Image Processing (CNN, Object Detection)',
      'Software Engineering & Full-stack Architecture',
    ],
    examples: [
      {
        category: 'Data Mining & Machine Learning',
        title:
          'Penerapan Algoritma Apriori untuk Menentukan Pola Pembelian Konsumen sebagai Strategi Penempatan Barang pada Minimarket XYZ',
      },
      {
        category: 'AI / Sentiment Analysis',
        title:
          'Analisis Sentimen Pengguna Media Sosial X (Twitter) Terhadap Pemindahan Ibu Kota Negara Menggunakan Algoritma Naïve Bayes',
      },
      {
        category: 'Image Processing',
        title:
          'Klasifikasi Tingkat Kematangan Buah Tomat Berdasarkan Pengolahan Citra Digital Menggunakan Convolutional Neural Network (CNN)',
      },
      {
        category: 'Software Engineering',
        title:
          'Rancang Bangun Sistem Informasi Rekam Medis Elektronik Berbasis Web Menggunakan Framework Laravel',
      },
    ],
  },
];

export const JADWAL_INFO = {
  semproSidang: [
    'Pendaftaran dibuka setiap rentang tanggal 1–7 dan 15–21 setiap bulannya.',
    'Bisa ditutup lebih cepat di setiap penghujung semester akademik.',
    'Dihadiri oleh Dosen Pembimbing dan Dosen Penguji.',
    'Jadwal dan ruangan/ruang daring ditentukan langsung oleh Program Studi.',
  ],
  semhas: [
    'Pendaftaran dapat dibuka kapan pun (fleksibel selama semester aktif).',
    'Jadwal, waktu, dan pelaksanaan disepakati langsung bersama Dosen Pembimbing.',
    'Syarat utama: minimal telah bimbingan 10x dan mendapat tanda tangan ACC Semhas.',
  ],
};

export const CHECKLIST_SEMPRO: DocumentItem[] = [
  {
    id: 1,
    name: 'Proposal Skripsi',
    format: 'PDF',
    maxSize: '5 MB',
    fileNameRule: 'nama_NIM_Proposal',
    notes: 'Berisi Bab 1 sampai Bab 3 yang telah disetujui dospem.',
  },
  {
    id: 2,
    name: 'Slide Presentasi Sempro',
    format: 'PPT / PPTX / PDF',
    maxSize: '10 MB',
    fileNameRule: 'nama_NIM_Slide_Sempro',
    notes: 'Format ringkas 10-15 slide memuat latar belakang, rumusan, dan metodologi.',
  },
  {
    id: 3,
    name: 'Surat Penunjukan (SK) Dosen Pembimbing',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_SK Dospem',
    notes: 'Diunduh melalui portal e-letter FST.',
  },
  {
    id: 4,
    name: 'Sertifikat TOEFL',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_TOEFL-1',
    notes: 'Sertifikat tes ke-1 hasil tes setelah MABA.',
  },
  {
    id: 5,
    name: 'Sertifikat TOAFL',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_TOAFL-1',
    notes: 'Sertifikat tes ke-1 hasil tes bahasa Arab.',
  },
  {
    id: 6,
    name: 'Bukti Persetujuan Pembimbing (ACC Sempro)',
    format: 'PDF / Image',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_ACC_Sempro',
    notes: 'Scan lembar ACC kartu bimbingan atau screenshot persetujuan WA dospem.',
  },
];

export const CHECKLIST_SEMHAS: DocumentItem[] = [
  {
    id: 1,
    name: 'SK Pembimbing Skripsi',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_SK Dospem',
    notes: 'SK aktif dari dekanat yang masih berlaku.',
  },
  {
    id: 2,
    name: 'Laporan Skripsi Semhas',
    format: 'PDF',
    maxSize: '5 MB',
    fileNameRule: 'nama_NIM_Skripsi_Semhas',
    notes: 'Draft lengkap Bab 1–5. Lembar pengesahan belum wajib ditandatangani lengkap.',
  },
  {
    id: 3,
    name: 'Slide Presentasi SEMHAS',
    format: 'PPT / Presentation',
    maxSize: '2 MB',
    fileNameRule: 'nama_NIM_PPT_Semhas',
    notes: 'Fokus pada hasil penelitian, implementasi, dan pengujian sistem.',
  },
  {
    id: 4,
    name: 'Bukti Persetujuan Dosen Pembimbing (ACC Semhas)',
    format: 'PDF / Image',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_ACC_Semhas',
    notes: 'Screenshot chat WA atau tanda tangan ACC Semhas pada kartu bimbingan.',
  },
  {
    id: 5,
    name: 'Sertifikat TOEFL (Tes 1 & 2)',
    format: 'PDF',
    maxSize: '1 MB per file',
    fileNameRule: 'nama_NIM_TOEFL1-2',
    notes: 'Sertifikat hasil tes ke-1 dan ke-2 setelah MABA.',
  },
  {
    id: 6,
    name: 'Sertifikat TOAFL (Tes 1 & 2)',
    format: 'PDF',
    maxSize: '1 MB per file',
    fileNameRule: 'nama_NIM_TOAFL1-2',
    notes: 'Sertifikat hasil tes ke-1 dan ke-2 bahasa Arab setelah MABA.',
  },
  {
    id: 7,
    name: 'KRS Seminar Hasil',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_KRS',
    notes: 'Screenshot halaman AIS yang menunjukkan mata kuliah Semhas terdaftar.',
  },
  {
    id: 8,
    name: 'Kartu Bimbingan Lengkap',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'nama_NIM_Bimbingan',
    notes: 'Sudah ditandatangani kedua dospem, bertuliskan ACC Semhas, minimal 10 kali bimbingan.',
  },
];

export const CHECKLIST_SIDANG: DocumentItem[] = [
  {
    id: 1,
    name: 'Laporan Skripsi Lengkap',
    format: 'PDF',
    maxSize: '3 MB',
    fileNameRule: 'LAPORAN SKRIPSI_NAMA_NIM',
    notes: 'Lembar pengesahan sudah bertanda tangan lengkap dari kedua pembimbing.',
  },
  {
    id: 2,
    name: 'Slide Presentasi Sidang',
    format: 'PPT',
    maxSize: '2 MB',
    fileNameRule: 'PPT_SIDANG_NAMA_NIM',
    notes: 'Presentasi komprehensif 15 menit mencakup background, solusi, dan demo.',
  },
  {
    id: 3,
    name: 'Scan Lembar Pengesahan Skripsi',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'NAMA_NIM_PENGESAHAN',
    notes: 'Tanda tangan basah atau digital resmi kedua dospem.',
  },
  {
    id: 4,
    name: 'Hasil Cek Plagiasi Turnitin',
    format: 'PDF',
    maxSize: '2 MB',
    fileNameRule: 'TURNITIN_NAMA_NIM',
    notes: 'Bab 1 s.d Bab 5, similarity < 25%. Wajib terlihat nama mahasiswa dan skor similarity.',
  },
  {
    id: 5,
    name: 'File Bukti Persetujuan Pembimbing (ACC Sidang)',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'PERSETUJUAN_NAMA_NIM',
    notes: 'Screenshot WA atau scan ACC Sidang pada kartu bimbingan.',
  },
  {
    id: 6,
    name: 'Sertifikat PBAK',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'PBAK_NAMA_NIM',
    notes: 'Harus tercantum nama Anda (bukan form template kosong).',
  },
  {
    id: 7,
    name: 'Surat Pernyataan Bebas Plagiasi',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'PLAGIASI_NAMA_NIM',
    notes: 'Ditandatangani di atas meterai Rp10.000.',
  },
  {
    id: 8,
    name: 'Sertifikat TOEFL',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'TOEFL_NAMA_NIM',
    notes: '1 sertifikat skor minimal 450, atau rekap 3 sertifikat setelah hasil MABA.',
  },
  {
    id: 9,
    name: 'Sertifikat TOAFL',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'TOAFL_NAMA_NIM',
    notes: '1 sertifikat skor minimal 375, atau rekap 3 sertifikat setelah hasil MABA.',
  },
  {
    id: 10,
    name: 'Transkrip Nilai Terakhir dari AIS',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'TRANSKRIP_NAMA_NIM',
    notes: 'Transkrip resmi terbaru yang diunduh dari AIS.',
  },
  {
    id: 11,
    name: 'Scan Kartu Bimbingan',
    format: 'PDF',
    maxSize: '2 MB',
    fileNameRule: 'KARTU_BIMBINGAN_NAMA_NIM',
    notes: 'Minimal 10 kali bimbingan dan bertanda tangan lengkap.',
  },
  {
    id: 12,
    name: 'Scan Kartu Seminar Hasil (Audience & Moderator)',
    format: 'PDF',
    maxSize: '2 MB',
    fileNameRule: 'KARTU_SEMHAS_NAMA_NIM',
    notes: 'Minimal 11 kali: sebagai peserta/audiens 10x, dan sebagai moderator 1x.',
  },
  {
    id: 13,
    name: 'Screenshot KRS 2 Semester Terakhir',
    format: 'PDF / Image',
    maxSize: '1 MB',
    fileNameRule: 'KRS_NAMA_NIM',
    notes: 'Dari AIS, menunjukkan mata kuliah skripsi sudah disetujui Dosen Pembimbing Akademik (DPA).',
  },
  {
    id: 14,
    name: 'Transkrip & Daftar MK Kurikulum Bertanda Tangan DPA',
    format: 'PDF',
    maxSize: '2 MB',
    fileNameRule: 'MK_KURIKULUM_NAMA_NIM',
    notes: 'Daftar MK dicek bahwa semua MK wajib sudah ada di transkrip dengan nilai minimal C.',
  },
];

export const CHECKLIST_DISTRIBUSI: DocumentItem[] = [
  {
    id: 1,
    name: 'Bukti Distribusi Dosen',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'Nama_NIM_Bukti_Distribusi',
    notes: 'Tanda terima penyerahan naskah skripsi kepada dospem dan penguji.',
  },
  {
    id: 2,
    name: 'Form Distribusi Skripsi',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'Nama_NIM_Form_Distribusi',
    notes: 'Formulir resmi distribusi dari program studi.',
  },
  {
    id: 3,
    name: 'Bundel Skripsi Final',
    format: 'PDF',
    maxSize: '10 MB',
    fileNameRule: 'Nama_NIM_Skripsi Final',
    notes: 'Laporan utuh dari halaman judul sampai lampiran yang sudah revisi pasca sidang.',
  },
  {
    id: 4,
    name: 'Flipbook Skripsi',
    format: 'Link / File',
    maxSize: '-',
    fileNameRule: 'Nama_NIM_Flipbook',
    notes: 'Tautan atau dokumen versi flipbook digital interaktif.',
  },
  {
    id: 5,
    name: 'Paper / Artikel Skripsi (Indo/Inggris)',
    format: 'WORD (.docx)',
    maxSize: '10 MB',
    fileNameRule: 'Nama_NIM_Paper_Indo/Ing',
    notes: 'Format manuskrip jurnal sesuai template publikasi.',
  },
  {
    id: 6,
    name: 'Curriculum Vitae (CV) Indo & Inggris',
    format: 'PDF',
    maxSize: '5–10 MB',
    fileNameRule: 'Nama_NIM_CV_Indo/Ing',
    notes: 'CV profesional terbaru.',
  },
  {
    id: 7,
    name: 'File Lampiran Skripsi',
    format: 'PDF',
    maxSize: '10 MB',
    fileNameRule: 'Nama_NIM_Lampiran',
    notes: 'Kode sumber, kuesioner, output wawancara, atau data pendukung lainnya.',
  },
  {
    id: 8,
    name: 'Lembar Pengesahan Resmi',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'Nama_NIM_Pengesahan',
    notes: 'Sudah ditandatangani dospem, penguji, dan Dekan FST.',
  },
  {
    id: 9,
    name: 'SK Penunjukkan Dospem',
    format: 'PDF',
    maxSize: '1 MB',
    fileNameRule: 'Nama_NIM_SK_Dospem',
    notes: 'Dokumen SK awal penunjukan pembimbing.',
  },
  {
    id: 10,
    name: 'Pengisian SKPI di AIS',
    format: 'Sistem AIS',
    maxSize: '-',
    fileNameRule: 'Input Data AIS',
    notes: 'Surat Keterangan Pendamping Ijazah diinput melalui akun mahasiswa di AIS.',
  },
];

export const TIPS_BIMBINGAN = [
  {
    number: '01',
    title: 'Seminggu Minimal 2 Kali Bimbingan',
    description:
      'Bagi jadwal secara disiplin: 1 kali bimbingan dengan Dosen Pembimbing 1, dan 1 kali bimbingan dengan Dosen Pembimbing 2. Ritme yang konsisten mencegah skripsi tertunda berbulan-bulan.',
    highlight: 'Dosbing 1 (1x) & Dosbing 2 (1x)',
  },
  {
    number: '02',
    title: 'Paksa Bimbingan Meski Belum Siap',
    description:
      'Jangan menunggu draft kamu sempurna 100% baru berani bimbingan. Datanglah membawa pertanyaan, kerangka ide, atau progress sekecil apapun. Dosen hadir untuk membimbing arah, bukan hanya menguji hasil akhir.',
    highlight: 'kapan siapnya?',
  },
  {
    number: '03',
    title: 'Keluar Bimbingan Wajib Tahu Harus Ngapain',
    description:
      'Setelah sesi bimbingan selesai, jangan biarkan diri kamu bingung. Sebelum pamit, simpulkan kembali: "Berarti untuk minggu depan poin yang saya perbaiki adalah X, Y, dan Z ya pak/bu?". Catat semuanya!',
    highlight: 'bingung? tanya AI',
  },
];

export const TEMPLATE_CHAT = `Assalamualaikum Wr. Wb. Selamat Pagi/Siang, Ibu/Bapak [Nama Dosen Beserta Gelar]

Izin memperkenalkan diri:
- Nama: [Nama Anda]
- NIM: [NIM Anda]

Saya mewakili rekan satu bimbingan:
- [Nama Teman 1] ([NIM])
- [Nama Teman 2] ([NIM])

Izin konfirmasi, jikalau diperkenankan tahu, untuk minggu ini apakah Ibu/Bapak bersedia untuk membimbing kami?

Jikalau berkenan, kira-kira bisa di hari apa dan pukul berapa ya Bu/Pak?

Atas pengertian, waktu, dan keridhaannya kami ucapkan terima kasih banyak Ibu/Bapak.

Wassalamu'alaikum Wr. Wb.`;

export const CONTOH_NOTES_BIMBINGAN = {
  topik: 'ACC Sempro & Revisi Bab 1–2 serta Persiapan Metodologi',
  items: [
    {
      bab: 'Bab 1: Pendahuluan (Latar Belakang)',
      poinRevisi: 'Masukkan referensi Fatwa / Keputusan DSN MUI terkait aset kripto.',
      tindakan:
        'Cari dan kutip Hasil Ijtima Ulama / Fatwa DSN MUI (Tahun 2021) terkait hukum cryptocurrency. Tuliskan intisarinya di paragraf latar belakang untuk memperkuat urgensi penelitian dari sisi kepatuhan syariah.',
    },
    {
      bab: 'Bab 2: Landasan Teori',
      poinRevisi: 'Penambahan materi tanpa mengubah atau memecah struktur bab yang sudah ada.',
      tindakan:
        'Masukkan pembahasan terkait Fatwa / Kripto ke dalam sub-bab Fiqh Muamalah yang sudah ada. Selipkan narasinya secara mengalir dengan paragraf eksisting — jangan buat sub-bab baru.',
    },
    {
      bab: 'Bab 4: Pembahasan & Analisis',
      poinRevisi: 'Integrasi standar ISO 31000:2018 dengan kepatuhan syariah.',
      tindakan:
        'Pada analisis risiko, hubungkan ISO 31000:2018 secara spesifik dengan Compliance Risks. Jelaskan bagaimana panduan ISO tersebut memitigasi risiko ketidakpatuhan syariah.',
    },
  ],
};
