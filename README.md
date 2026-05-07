# 🎓 MualSkripsi
### Repositori Skripsi & Presentasi Digital — Maulana Asykari Muhammad

![Version](https://img.shields.io/badge/version-1.0.0-black?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20Tailwind-blue?style=for-the-badge)
![Aesthetic](https://img.shields.io/badge/Design-Neo--Brutalist-yellow?style=for-the-badge)

Repositori ini berisi naskah lengkap skripsi dan slide presentasi interaktif untuk penelitian berjudul:
**"Rancangan Arsitektur Manajemen Risiko & Kepatuhan Syariah pada Staking Ethereum menggunakan Pendekatan TOGAF ADM"**

---

## 🚀 Fitur Utama

- **📄 MDX-Powered Paper**: Naskah skripsi yang ditulis menggunakan MDX (Markdown + React), memungkinkan integrasi komponen interaktif seperti glosarium dan diagram di dalam teks.
- **🖼️ Interactive Slides**: Dek presentasi sinematik yang dibangun dengan Framer Motion, mendukung mode fullscreen dan zoom gambar untuk detail teknis.
- **🎨 Neo-Brutalist UI**: Desain antarmuka modern dengan kontras tinggi, border tebal, dan tipografi tegas yang memberikan kesan profesional sekaligus progresif.
- **🔍 Sharia-Technical Integration**: Visualisasi yang memadukan parameter teknis blockchain dengan indikator kepatuhan syariah (Hifzul Mal, Akad Wakalah, dll).

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Content**: [MDX](https://mdxjs.com/) (Markdown for the component era)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: React Router 7

## 📁 Struktur Proyek

```text
skripsi-paper-repo/
├── public/
│   └── content/            # Aset statis (Gambar Paper & Slides)
├── src/
│   ├── components/         # Komponen UI Reusable
│   ├── content/            # Naskah Skripsi (.mdx)
│   ├── pages/              # Halaman Utama (Home, Slides, PaperDetail)
│   └── main.tsx            # Entry point aplikasi
├── index.html              # Template HTML utama
└── tailwind.config.js      # Konfigurasi desain Neo-Brutalist
```

## 🏃 Cara Menjalankan

### Persyaratan
- Node.js (Versi 18 ke atas)
- pnpm (Direkomendasikan) atau npm

### Instalasi
1. Clone repositori ini
2. Install dependensi:
   ```bash
   pnpm install
   ```

### Jalankan Development
```bash
pnpm run dev
```
Buka `http://localhost:5173` di browser Anda.

### Build untuk Produksi
```bash
pnpm run build
```
Hasil build akan berada di folder `dist/`.

---

## 📝 Lisensi
Proyek ini dibuat khusus untuk keperluan Sidang Skripsi di **UIN Syarif Hidayatullah Jakarta**. Seluruh konten intelektual mengenai manajemen risiko dan analisis syariah adalah milik penulis.

---

> **Maulana Asykari Muhammad**  
> *Sistem Informasi • UIN Syarif Hidayatullah Jakarta*  
> [LinkedIn](https://linkedin.com/in/maulanasykari) • [Website](https://mualskripsi.netlify.app/)
