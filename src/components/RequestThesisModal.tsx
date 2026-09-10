import { useState, useEffect } from 'react';
import { Mail, Copy, Check, ExternalLink, X, Send, ShieldAlert } from 'lucide-react';
import { authorEmail, linkedinProfileUrl } from '../data/publications';

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
    </svg>
  );
}

interface RequestThesisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestThesisModal({ isOpen, onClose }: RequestThesisModalProps) {
  const [copiedType, setCopiedType] = useState<'email' | 'linkedin' | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const emailSubject = encodeURIComponent("[Permintaan Naskah Skripsi] - Maulana Asykari Muhammad");
  const emailBody = encodeURIComponent(
    `Halo Maulana Asykari Muhammad,\n\nSaya tertarik membaca naskah lengkap Skripsi Anda yang berjudul:\n"Rancangan Arsitektur Manajemen Risiko dan Kepatuhan Syariah pada Staking Ethereum Menggunakan Pendekatan TOGAF ADM"\n\nData Pemohon:\n- Nama: \n- Institusi / Kampus / Organisasi: \n- Keperluan: (Contoh: Riset Akademik / Referensi Tugas Akhir / Diskusi FinTech)\n\nMohon kesediaannya untuk berbagi salinan berkas naskah lengkap (PDF). Terima kasih banyak!`
  );
  const mailtoLink = `mailto:${authorEmail}?subject=${emailSubject}&body=${emailBody}`;

  const linkedInMessage = `Halo Mas Maul, saya tertarik membaca naskah skripsi Anda mengenai Risiko & Syariah Staking Ethereum. Boleh minta berkas PDF lengkapnya untuk referensi riset? Terima kasih!`

  const copyToClipboard = (text: string, type: 'email' | 'linkedin') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-gray-900 border-[3px] border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-6 md:p-8 rounded-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border-2 border-black dark:border-white rounded-xl transition-colors cursor-pointer"
          aria-label="Tutup dialog"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 bg-brand-yellow text-black border-2 border-black rounded-md">
            <ShieldAlert size={20} />
          </span>
          <span className="text-xs font-black uppercase tracking-wider text-gray-600 dark:text-gray-400">
            Akses Naskah Skripsi
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-black font-serif tracking-tight mb-3">
          Permintaan Berkas Skripsi Lengkap
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-6">
          Naskah lengkap skripsi belum dipublikasikan secara terbuka di repositori publik. Jika Anda memerlukan berkas PDF lengkap (6.2 MB) untuk keperluan sitasi, studi literatur, atau diskusi riset, silakan hubungi saya melalui saluran otomatis berikut:
        </p>

        {/* Options Grid */}
        <div className="space-y-4">
          {/* Option 1: Email */}
          <div className="p-5 border-[3px] border-black dark:border-white bg-gray-50 dark:bg-gray-800/80 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-emerald text-black flex items-center justify-center border-2 border-black rounded-lg font-black">
                  <Mail size={16} />
                </div>
                <h4 className="font-serif font-black text-base md:text-lg">
                  Opsi 1: Kirim Email (Format Otomatis)
                </h4>
              </div>
              <span className="text-xs font-bold uppercase px-2 py-0.5 bg-brand-emerald/30 border border-brand-emerald text-emerald-900 dark:text-emerald-300 rounded-md">
                Direkomendasikan
              </span>
            </div>

            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-4">
              Membuka aplikasi email dengan subjek dan draf permohonan yang sudah terisi otomatis ke alamat <strong>{authorEmail}</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={mailtoLink}
                className="flex items-center gap-2 bg-brand-emerald text-black font-black px-4 py-2.5 border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all text-xs md:text-sm"
              >
                <Send size={16} />
                <span>Buka Aplikasi Email & Kirim</span>
              </a>

              <button
                onClick={() => copyToClipboard(authorEmail, 'email')}
                className="flex items-center gap-2 bg-white dark:bg-gray-800 text-black dark:text-white font-bold px-3.5 py-2.5 border-2 border-black dark:border-white rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 dark:hover:bg-gray-700 text-xs cursor-pointer"
              >
                {copiedType === 'email' ? (
                  <>
                    <Check size={14} className="text-emerald-600" />
                    <span className="text-emerald-600 font-black">Email Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Salin Alamat Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Option 2: LinkedIn */}
          <div className="p-5 border-[3px] border-black dark:border-white bg-gray-50 dark:bg-gray-800/80 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center border-2 border-black rounded-lg font-black">
                <LinkedInIcon size={18} />
              </div>
              <h4 className="font-serif font-black text-base md:text-lg">
                Opsi 2: Chat via LinkedIn
              </h4>
            </div>

            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3">
              Kirim pesan langsung ke LinkedIn saya dengan template permohonan yang sudah disiapkan.
            </p>

            {/* Template Box */}
            <div className="bg-white dark:bg-gray-900 border-2 border-dashed border-gray-400 dark:border-gray-600 p-3 mb-4 rounded-xl text-xs text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
              "{linkedInMessage}"
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={linkedinProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white font-black px-4 py-2.5 border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all text-xs md:text-sm"
              >
                <LinkedInIcon size={16} />
                <span>Buka LinkedIn Penulis</span>
                <ExternalLink size={14} />
              </a>

              <button
                onClick={() => copyToClipboard(linkedInMessage, 'linkedin')}
                className="flex items-center gap-2 bg-white dark:bg-gray-800 text-black dark:text-white font-bold px-3.5 py-2.5 border-2 border-black dark:border-white rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 dark:hover:bg-gray-700 text-xs cursor-pointer"
              >
                {copiedType === 'linkedin' ? (
                  <>
                    <Check size={14} className="text-emerald-600" />
                    <span className="text-emerald-600 font-black">Template Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Salin Draf Pesan</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
