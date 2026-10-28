# 🎓 MualSkripsi
### Repositori Publikasi Ilmiah, Roadmap Perjalanan & Kiat Skripsi
**Maulana Asykari Muhammad** — Program Studi Sistem Informasi, UIN Syarif Hidayatullah Jakarta

[![Deploy Status](https://img.shields.io/badge/Live-mualskripsi.netlify.app-10b981?style=for-the-badge&logo=netlify)](https://mualskripsi.netlify.app/)
[![Tech Stack](https://img.shields.io/badge/Stack-React%2019%20%7C%20Vite%20%7C%20Tailwind%20v4-blue?style=for-the-badge)](https://react.dev/)
[![i18n](https://img.shields.io/badge/i18n-ID%20%7C%20EN%20%7C%20DE-10b981?style=for-the-badge)](#-dukungan-multi-bahasa--i18n)
[![Aesthetic](https://img.shields.io/badge/Design-Neo--Brutalist-yellow?style=for-the-badge)](#-desain-antarmuka-neo-brutalism)
[![GitHub Repo](https://img.shields.io/badge/GitHub-WeissCurry%2Fskripsi--paper--repo-black?style=for-the-badge&logo=github)](https://github.com/WeissCurry/skripsi-paper-repo)

---

## 📖 Tentang Proyek

**MualSkripsi** adalah repositori digital dan aplikasi web interaktif yang mendokumentasikan karya tulis ilmiah, perjalanan, serta panduan praktis penyelesaian skripsi sarjana:
> **"Rancangan Arsitektur Manajemen Risiko dan Kepatuhan Syariah pada Staking Ethereum Menggunakan Pendekatan TOGAF ADM"**  
> *Penulis:* Maulana Asykari Muhammad, Fitroh, Rinda Hesti Kusumaningtyas (2026)

Web ini dibangun tidak hanya sebagai etalase publikasi akademik, tetapi juga sebagai portal dedikasi bagi pihak-pihak yang telah membersamai perjalanan skripsi, serta wadah berbagi ilmu (*knowledge sharing*) komprehensif bagi sesama mahasiswa tingkat akhir.

---

## 🌟 Fitur Unggulan

### 1. 🏠 Beranda & Repositori Publikasi (`/`)
- **Daftar Publikasi Terindeks**: Menampilkan artikel jurnal ilmiah, manuskrip penelitian, prototipe sistem, dan slide presentasi lengkap dengan metadata, abstrak, kata kunci, serta tautan dokumen PDF.
- **Filter & Pencarian Real-Time**: Pencarian instan berdasarkan judul, kategori output, penulis, nama konferensi/jurnal, dan kata kunci penelitian.
- **Form Permohonan Naskah**: Modal interaktif berbasis *mailto generator* yang memudahkan akademisi atau peneliti meminta akses salinan lengkap skripsi secara etis dan terstruktur.
- **Tautan Eksternal Terintegrasi**: Akses cepat ke Dashboard Web3 Staking Ethereum (`https://skripsistaking.netlify.app/`), Slide Presentasi Sidang Canva, dan Profil Google Scholar.

### 2. 📄 Pembaca Naskah Ilmiah Interaktif (`/paper/:slug`)
- **Rendering Manuskrip Berbasis MDX**: Membaca artikel ilmiah lengkap dan proposal tugas akhir dengan tipografi artikel akademik yang nyaman dan responsif.
- **Glosarium Istilah Interaktif**: Komponen `<Glossary />` interaktif dengan tooltip definisi untuk mempermudah pemahaman istilah teknis blockchain dan Fiqh Muamalah (seperti *DeFi*, *Staking*, *TOGAF ADM*, *Rebasing*, *Slashing*, *Wakalah bil Istithmar*, *Hifzul Mal*, dll.).
- **Dukungan Naskah Terjemahan**: Membaca naskah langsung dalam Bahasa Indonesia maupun versi terjemahan Bahasa Inggris (`paper-skripsi.en.mdx` dan `proposal-tugas-akhir.en.mdx`).

### 3. 🌐 Dukungan Multi-Bahasa / i18n
- **3 Bahasa Didukung**: Bahasa Indonesia (🇮🇩 `id`), English (🇬🇧 `en`), dan Deutsch (🇩🇪 `de`).
- **Language Switcher Dinamis**: Penggantian bahasa instan pada header navigasi (desktop & mobile) tanpa reload halaman.
- **Persistensi Preferensi**: Menyimpan bahasa pilihan pengguna secara otomatis di `localStorage`.
- **Mekanisme Fallback Cerdas & Banner Notifikasi**: Menyediakan notifikasi status fallback ketika konten Bahasa Jerman merujuk ke versi Bahasa Inggris atau Indonesia.

### 4. 🗺️ Roadmap Perjalanan Ceklipci (`/perjalanan`)
- **Milestone Timeline Interaktif**: Kronologi penting mulai dari penunjukan dospem, ACC judul, Sempro, Semhas, Sidang Munaqasyah, hingga penandatanganan lembar pengesahan.
- **Hover Photo Popup**: Hover pada milestone Sempro, Semhas, dan Sidang untuk memunculkan preview kartu foto dokumentasi.
- **Infinite 5-Row Photo Wall**: Marquee slider 5 baris yang bergerak otomatis menampilkan lebih dari 70 foto dokumentasi teman, kerabat, dan dosen yang membantu bertahan selama masa skripsi (*"Those Who Help Me Survive Ceklipci"*).
- **Special Slowdown Detection**: Slider otomatis melambat selama 2 detik ketika foto kenangan khusus muncul 100% di viewport.
- **Lightbox Preview Modal**: Klik foto manapun untuk melihat tampilan layar penuh (*fullscreen*) resolusi tinggi dengan kontrol navigasi keyboard (panah kiri/kanan/Esc).

### 5. 📚 Kiat & Tips Skripsi (`/kiat-skripsi`)
- **Panduan Kelompok Keahlian (KK)**: Kupas tuntas karakteristik, area fokus, dan contoh judul skripsi untuk KK1 (*Digital Transformation*), KK2 (*IS & Management*), dan KK3 (*Information Processing*).
- **Portal Akses & Aturan Sidang**: Tautan langsung ke portal pendaftaran Layanan SI UIN Jakarta, E-Letter FST, serta informasi ujian bahasa TOEFL/TOAFL.
- **Checklist Dokumen Interaktif**: Rekap berkas persyaratan untuk Sempro (6 dokumen), Semhas (8 dokumen), Sidang (14 dokumen), dan Distribusi Pasca Sidang (10 dokumen), lengkap dengan format, ukuran maksimal, aturan penamaan file, dan checkbox interaktif tersimpan lokal.
- **Tips Bimbingan & Golden Rules**: Prinsip praktis agar bimbingan produktif dan terhindar dari revisi berulang.
- **Template Chat & Notes Revisi**: Template chat WhatsApp sopan ke dosen pembimbing (dengan tombol *1-click copy*) serta format pencatatan revisi per bab.
- **Link Dokumen Asli**: Akses langsung ke dokumen kerja Google Docs.

### 6. 📊 Statistik Pengunjung Privasi-Aman (GoatCounter)
- **Metrik Kunjungan Transparan**: Menampilkan statistik pengunjung 30 hari terakhir, total pengunjung seumur hidup (*lifetime*), dan jumlah tayangan (*pageviews*).
- **Penghitung Beranimasi**: Efek animasi kenaikan angka (*animated number counter*) saat data dimuat.
- **Cache Data Cerdas**: Sistem cache lokal (~4 jam) untuk menghemat permintaan API dan mempercepat waktu muat.
- **Privasi Terjamin**: Menggunakan analitik tanpa pelacak cookie atau penyimpanan data pribadi pengguna.

### 7. ⚡ Preloader & Pemuatan Aset Asinkron
- **Indikator Metrik Jaringan**: Menampilkan ukuran aktual data aset yang diunduh (kB/MB) dan jumlah file yang dimuat secara real-time.
- **Lazy Loading Cepat**: Komponen halaman dan manuskrip MDX dimuat secara asinkron (*lazy-loaded*) dengan transisi visual yang halus.

---

## 🎨 Desain Antarmuka: Neo-Brutalism

Aplikasi ini mengadopsi estetika **Neo-Brutalisme Modern**:
- Border hitam tegas (`border-[3px] border-black` / `dark:border-white`)
- Hard shadow tanpa blur (`shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`)
- Palet warna kontras tinggi: *Brand Emerald* (`#10b981`), *Brand Yellow* (`#fde047`), dan *Brand Blue* (`#3b82f6`)
- Tipografi kombinasi: *Merriweather* (serif elegan untuk judul karya) dan *Inter* (sans-serif modern untuk keterbacaan data)
- Dukungan penuh mode gelap (*Dark Mode*) dengan toggle instan

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool & Bundler** | [Vite 8](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) + [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Content Authoring** | [@mdx-js/react](https://mdxjs.com/) + [@mdx-js/rollup](https://mdxjs.com/) |
| **Animations & Transitions** | [Framer Motion](https://www.framer.com/motion/) + CSS Keyframe Animations |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom Brand SVGs |
| **Web Analytics** | [GoatCounter](https://www.goatcounter.com/) API (Privacy-friendly analytics) |
| **Asset Optimization** | Format gambar WebP resolusi tinggi teroptimasi |

---

## 📁 Struktur Direktori

```text
skripsi-paper-repo/
├── public/
│   ├── Documents/              # Berkas PDF naskah skripsi & publikasi ilmiah
│   ├── Sempro/                 # Foto dokumentasi Seminar Proposal (.webp)
│   ├── Semhas/                 # Foto dokumentasi Seminar Hasil (.webp)
│   ├── Sidang/                 # Foto dokumentasi Sidang Munaqasyah (.webp)
│   ├── ThoseWhohelpMeSurvive/  # Galeri foto orang-orang berjasa (.webp)
│   ├── content/                # Aset gambar diagram & ilustrasi untuk naskah MDX
│   └── favicon.svg             # Favicon aplikasi
├── src/
│   ├── components/             # Komponen UI modular
│   │   ├── AnalyticsTracker.tsx     # Tracker rute halaman untuk analitik
│   │   ├── GermanFallbackNotice.tsx # Banner status translasi bahasa Jerman
│   │   ├── GlossaryTerm.tsx         # Tooltip penjelasan istilah naskah
│   │   ├── LanguageSwitcher.tsx     # Selector pemilihan bahasa (ID/EN/DE)
│   │   ├── PageLoader.tsx           # Indikator pemuatan halaman & metrik aset
│   │   ├── RequestThesisModal.tsx   # Modal permohonan naskah lengkap via email
│   │   ├── ScrollToTop.tsx          # Pengatur reset scroll pada navigasi rute
│   │   └── VisitorStats.tsx         # Widget statistik pengunjung GoatCounter
│   ├── content/                # Naskah akademik berbasis MDX
│   │   ├── paper-skripsi.mdx            # Naskah lengkap skripsi (Bahasa Indonesia)
│   │   ├── paper-skripsi.en.mdx         # Naskah lengkap skripsi (English)
│   │   ├── proposal-tugas-akhir.mdx     # Proposal tugas akhir (Bahasa Indonesia)
│   │   └── proposal-tugas-akhir.en.mdx  # Proposal tugas akhir (English)
│   ├── data/                   # Sumber data terstruktur
│   │   ├── publications.ts     # Metadata publikasi, tautan sitasi & abstrak
│   │   ├── perjalanan.ts       # Milestone, galeri foto & konfigurasi slider
│   │   └── kiatSkripsi.ts      # Panduan KK, portal, berkas sidang & template
│   ├── i18n/                   # Sistem Internasionalisasi
│   │   ├── LanguageContext.tsx # Context Provider bahasa & persistensi storage
│   │   └── strings.ts          # Kamus terjemahan (ID, EN, DE) & helper teks
│   ├── pages/                  # Halaman Aplikasi
│   │   ├── Home.tsx            # Beranda publikasi ilmiah
│   │   ├── PaperDetail.tsx     # Tampilan pembaca naskah MDX
│   │   ├── Perjalanan.tsx      # Roadmap dan galeri foto
│   │   ├── KiatSkripsi.tsx     # Panduan dan kiat sukses skripsi
│   │   └── NotFound.tsx        # Halaman 404 dengan redirect otomatis
│   ├── App.tsx                 # Layout aplikasi, header navigasi & routing
│   ├── main.tsx                # Entry point React DOM & LanguageProvider
│   └── index.css               # Setup Tailwind CSS v4 & custom utilities
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🏃 Menjalankan Secara Lokal

### Prasyarat
- Node.js versi 18 atau lebih tinggi
- [pnpm](https://pnpm.io/) (disarankan) atau npm / yarn

### Langkah Instalasi
1. Clone repositori:
   ```bash
   git clone https://github.com/WeissCurry/skripsi-paper-repo.git
   cd skripsi-paper-repo
   ```

2. Pasang dependensi:
   ```bash
   pnpm install
   ```

3. Jalankan server pengembangan:
   ```bash
   pnpm run dev
   ```
   Buka `http://localhost:5173` pada browser Anda.

4. Build produksi & verifikasi tipe:
   ```bash
   pnpm run build
   ```
   Bundle yang siap dideploy akan dibuat pada direktori `dist/`.

---

## 👨‍💻 Profil & Kontak

**Maulana Asykari Muhammad**  
Program Studi Sistem Informasi, Fakultas Sains dan Teknologi  
Universitas Islam Negeri (UIN) Syarif Hidayatullah Jakarta

- 🌐 **Live Website**: [mualskripsi.netlify.app](https://mualskripsi.netlify.app/)
- 💼 **LinkedIn**: [linkedin.com/in/maulanasykari](https://www.linkedin.com/in/maulanasykari/)
- 🎓 **Google Scholar**: [Maulana Asykari Muhammad](https://scholar.google.com/citations?user=YKcLScoAAAAJ&hl=en)
- 🐙 **GitHub**: [@WeissCurry](https://github.com/WeissCurry)
