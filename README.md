# 🎓 MualSkripsi
### Repositori Publikasi Ilmiah, Roadmap Perjalanan & Kiat Skripsi
**Maulana Asykari Muhammad** — Program Studi Sistem Informasi, UIN Syarif Hidayatullah Jakarta

[![Deploy Status](https://img.shields.io/badge/Live-mualskripsi.netlify.app-10b981?style=for-the-badge&logo=netlify)](https://mualskripsi.netlify.app/)
[![Tech Stack](https://img.shields.io/badge/Stack-React%2019%20%7C%20Vite%20%7C%20Tailwind%20v4-blue?style=for-the-badge)](https://react.dev/)
[![Aesthetic](https://img.shields.io/badge/Design-Neo--Brutalist-yellow?style=for-the-badge)](#-desain-antarmuka)
[![GitHub Repo](https://img.shields.io/badge/GitHub-WeissCurry%2Fskripsi--paper--repo-black?style=for-the-badge&logo=github)](https://github.com/WeissCurry/skripsi-paper-repo)

---

## 📖 Tentang Proyek

**MualSkripsi** adalah repositori digital dan web interaktif yang mendokumentasikan karya tulis ilmiah, perjalanan, serta panduan praktis penyelesaian skripsi:
> **"Rancangan Arsitektur Manajemen Risiko dan Kepatuhan Syariah pada Staking Ethereum Menggunakan Pendekatan TOGAF ADM"**  
> *Penulis:* Maulana Asykari Muhammad, Fitroh, Rinda Hesti Kusumaningtyas (2026)

Web ini dibangun tidak hanya sebagai etalase publikasi akademik, tetapi juga sebagai portal dedikasi bagi pihak-pihak yang telah membersamai perjalanan skripsi, serta media berbagi ilmu (*knowledge sharing*) bagi sesama mahasiswa.

---

## 🌟 Fitur Unggulan

### 1. 🏠 Beranda & Repositori Publikasi (`/`)
- **Daftar Publikasi Terindeks**: Menampilkan artikel ilmiah dan skripsi lengkap dengan metadata, abstrak, dan tautan dokumen PDF.
- **Form Permohonan Naskah**: Modal interaktif berbasis *mailto generator* yang memudahkan akademisi atau peneliti meminta akses salinan lengkap skripsi secara etis dan terstruktur.
- **Tautan Eksternal Terintegrasi**: Akses cepat ke Dashboard Web3 Staking Ethereum (`https://skripsistaking.netlify.app/`), Slide Presentasi Sidang Canva, dan Profil Google Scholar.

### 2. 🗺️ Roadmap Perjalanan Ceklipci (`/perjalanan`)
- **Milestone Timeline Interaktif**: Kronologi penting mulai dari penunjukan dospem, ACC judul, Sempro, Semhas, Sidang Munaqasyah, hingga penandatanganan lembar pengesahan.
- **Hover Photo Popup**: Hover pada milestone Sempro, Semhas, dan Sidang untuk memunculkan preview kartu foto dokumentasi.
- **Infinite 5-Row Photo Wall**: Marquee slider 5 baris yang bergerak otomatis menampilkan lebih dari 70 foto dokumentasi teman, kerabat, dan dosen yang membantu bertahan selama masa skripsi (*"Those Who Help Me Survive Ceklipci"*).
- **Special Slowdown Detection**: Slider otomatis melambat selama 2 detik ketika foto kenangan khusus muncul 100% di viewport.
- **Lightbox Preview Modal**: Klik foto manapun untuk melihat tampilan layar penuh (*fullscreen*) resolusi tinggi dengan kontrol navigasi keyboard (panah kiri/kanan/Esc).

### 3. 📚 Kiat & Tips Skripsi (`/kiat-skripsi`)
- **Panduan Kelompok Keahlian (KK)**: Kupas tuntas karakteristik, area fokus, dan contoh judul skripsi untuk KK1 (*Digital Transformation*), KK2 (*IS & Management*), dan KK3 (*Information Processing*).
- **Portal Akses & Aturan Sidang**: Tautan langsung ke portal pendaftaran Layanan SI UIN Jakarta, E-Letter FST, serta informasi ujian bahasa TOEFL/TOAFL.
- **Checklist Dokumen Interaktif**: Rekap berkas persyaratan untuk Sempro (6 dokumen), Semhas (8 dokumen), Sidang (14 dokumen), dan Distribusi Pasca Sidang (10 dokumen), lengkap dengan format, ukuran maksimal, aturan penamaan file, dan checkbox interaktif.
- **Tips Bimbingan & Golden Rules**: Prinsip praktis agar bimbingan produktif dan terhindar dari revisi berulang.
- **Template Chat & Notes Revisi**: Template chat WhatsApp sopan ke dosen pembimbing (dengan tombol *1-click copy*) serta format pencatatan revisi per bab.
- **Link Dokumen Asli**: Akses ke dokumen kerja Google Docs.

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
| **Build Tool & Bundler** | [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (modern CSS import) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom Brand SVGs |
| **Effects & Animations** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) + CSS Keyframes |
| **Asset Optimization** | Format gambar WebP resolusi teroptimasi |

---

## 📁 Struktur Direktori

```text
skripsi-paper-repo/
├── public/
│   ├── Sempro/                 # Foto dokumentasi Seminar Proposal (.webp)
│   ├── Semhas/                 # Foto dokumentasi Seminar Hasil (.webp)
│   ├── Sidang/                 # Foto dokumentasi Sidang Munaqasyah (.webp)
│   ├── ThoseWhohelpMeSurvive/  # Galeri foto orang-orang berjasa (.webp)
│   └── favicon.svg             # Favicon aplikasi
├── src/
│   ├── components/             # Modal Permohonan Naskah & komponen UI
│   │   └── RequestThesisModal.tsx
│   ├── data/                   # Sumber data terstruktur
│   │   ├── publications.ts     # Data publikasi, abstrak, dan sitasi
│   │   ├── perjalanan.ts       # Milestone, galeri foto, dan konfigurasi slider
│   │   └── kiatSkripsi.ts       # Data KK, portal, checklist berkas, template chat
│   ├── pages/                  # Halaman Aplikasi
│   │   ├── Home.tsx            # Beranda publikasi ilmiah
│   │   ├── PaperDetail.tsx     # Tampilan detail makalah
│   │   ├── Perjalanan.tsx      # Roadmap dan galeri foto
│   │   └── KiatSkripsi.tsx     # Panduan dan kiat sukses skripsi
│   ├── App.tsx                 # Layout, header navigasi, footer logo, dan routes
│   ├── main.tsx                # Entry point React DOM
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

4. Build produksi:
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
