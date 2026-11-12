import { useT } from '../i18n/strings';

interface VennDiagramKKProps {
  className?: string;
}

export default function VennDiagramKK({ className = '' }: VennDiagramKKProps) {
  const { t } = useT();

  const title = t('ks_fig_venn_title');
  const emptyLabel = t('ks_venn_empty');

  return (
    <div className={`w-full overflow-x-auto pb-3 pt-1 touch-pan-x overscroll-x-contain ${className}`}>
      <svg
        viewBox="0 0 1300 1200"
        width="100%"
        className="w-full h-auto min-w-[720px] md:min-w-0 text-gray-900 dark:text-gray-100 block mx-auto"
        role="img"
        aria-label={title}
        style={{
          fontFamily: "'Times New Roman', Times, Cambria, 'DejaVu Serif', serif",
        }}
      >
        <title>{title}</title>

        {/* Circle Outlines (IEEE style: thin monochrome stroke, transparent fill) */}
        <circle
          cx="650"
          cy="430"
          r="380"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="transparent"
        />
        <circle
          cx="420"
          cy="740"
          r="380"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="transparent"
        />
        <circle
          cx="880"
          cy="740"
          r="380"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="transparent"
        />

        {/* Set Labels (KK1, KK2, KK3) */}
        <g
          fontSize="48"
          fontWeight="bold"
          textAnchor="middle"
          fill="currentColor"
          letterSpacing="0.05em"
        >
          <text x="650" y="115">
            KK1
          </text>
          <text x="200" y="630">
            KK2
          </text>
          <text x="1100" y="630">
            KK3
          </text>
        </g>

        {/* Group: Hanya KK1 (3 dosen) */}
        <g fontSize="28" textAnchor="middle" fill="currentColor">
          <text x="650" y="175">
            Bayu Waspodo
          </text>
          <text x="650" y="220">
            <tspan x="650">Rinda Hesti</tspan>
            <tspan x="650" dy="32">Kusumaningtyas</tspan>
          </text>
          <text x="650" y="298">
            <tspan x="650">Asep Fajar</tspan>
            <tspan x="650" dy="32">Firmansyah</tspan>
          </text>
        </g>

        {/* Group: Hanya KK2 (5 dosen) */}
        <g fontSize="28" textAnchor="middle" fill="currentColor">
          <text x="260" y="700">
            Evy Nurmiati
          </text>
          <text x="260" y="742">
            <tspan x="260">Meinarini</tspan>
            <tspan x="260" dy="32">Catur Utami</tspan>
          </text>
          <text x="260" y="820">
            Elvi Fetrina
          </text>
          <text x="260" y="865">
            Eva Khudzaeva
          </text>
          <text x="260" y="910">
            A'ang Subiyakto
          </text>
        </g>

        {/* Group: Hanya KK3 (5 dosen) */}
        <g fontSize="28" textAnchor="middle" fill="currentColor">
          <text x="1040" y="700">
            Nurbojatmiko
          </text>
          <text x="1040" y="742">
            <tspan x="1040">Muhamad</tspan>
            <tspan x="1040" dy="32">Nur Gunawan</tspan>
          </text>
          <text x="1040" y="820">
            Nuryasin
          </text>
          <text x="1040" y="865">
            Zainul Arham
          </text>
          <text x="1040" y="910">
            Eri Rustamaji
          </text>
        </g>

        {/* Group: KK1 ∩ KK2 (bukan KK3) (6 dosen) */}
        <g fontSize="28" textAnchor="middle" fill="currentColor">
          <text x="460" y="405">
            Fitroh
          </text>
          <text x="450" y="438">
            <tspan x="450">Sarip</tspan>
            <tspan x="450" dy="28">Hidayatuloh</tspan>
          </text>
          <text x="442" y="502">
            Elsy Rahajeng
          </text>
          <text x="438" y="538">
            Nia Kumaladewi
          </text>
          <text x="430" y="574">
            <tspan x="430">Muhammad</tspan>
            <tspan x="430" dy="28">Qomarul Huda</tspan>
          </text>
          <text x="425" y="636">
            <tspan x="425">Nur Aeni</tspan>
            <tspan x="425" dy="28">Hidayah</tspan>
          </text>
        </g>

        {/* Group: KK1 ∩ KK3 (bukan KK2) (3 dosen) */}
        <g fontSize="28" textAnchor="middle" fill="currentColor">
          <text x="860" y="470">
            Zulfiandri
          </text>
          <text x="865" y="520">
            <tspan x="865">Syopiansyah</tspan>
            <tspan x="865" dy="30">Jaya Putra</tspan>
          </text>
          <text x="875" y="600">
            <tspan x="875">Yusuf</tspan>
            <tspan x="875" dy="30">Durachman</tspan>
          </text>
        </g>

        {/* Group: KK2 ∩ KK3 (bukan KK1) (3 dosen) */}
        <g fontSize="28" textAnchor="middle" fill="currentColor">
          <text x="650" y="845">
            Yuni Sugiarti
          </text>
          <text x="650" y="890">
            Nida'ul Hasanati
          </text>
          <text x="650" y="935">
            Qurrotul Aini
          </text>
        </g>

        {/* Group: KK1 ∩ KK2 ∩ KK3 (kosong) */}
        <g
          fontSize="24"
          fontStyle="italic"
          textAnchor="middle"
          fill="currentColor"
          opacity="0.5"
        >
          <text x="650" y="625">
            {emptyLabel}
          </text>
        </g>
      </svg>
    </div>
  );
}
