export type OutputCategory = 'publikasi' | 'prototype' | 'slides';
export type OutputTag = 'Tugas Akhir' | 'Slides' | 'Prototype' | 'Journal' | 'Conference' | 'Manuscript';

export interface Publication {
  id: string;
  slug?: string;
  category: OutputCategory;
  tag: OutputTag;
  title: string;
  authors: string;
  institution: string;
  venue: string;
  status: 'published' | 'accepted' | 'coming_soon';
  statusLabel: string;
  year: string;
  abstract: string;
  keywords: string[];
  pdfPath?: string;
  pdfDownloadName?: string;
  doiUrl?: string;
  slidesUrl?: string;
  externalUrl?: string;
  readerUrl?: string;
  scholarCitationUrl?: string;
  requestThesis?: boolean;
}

export const authorEmail = "maulanasykari@gmail.com";
export const scholarProfileUrl = "https://scholar.google.com/citations?user=YKcLScoAAAAJ&hl=en";
export const linkedinProfileUrl = "https://www.linkedin.com/in/maulanasykari/";
export const dashboardUrl = "https://skripsistaking.netlify.app/";
export const slidesUrl = "https://canva.link/61gja8sos0zt711";

export const advisors = [
  { name: "Fitroh, M.Kom.", role: "1" },
  { name: "Rinda Hesti Kusumaningtyas, M.M.S.I.", role: "2" }
];

export const examiners = [
  { name: "Nur Aeni Hidayah, S.E., M.M.S.I.", role: "1" },
  { name: "Sarip Hidayatuloh, M.M.S.I.", role: "2" }
];

export const publications: Publication[] = [
  {
    id: "skripsi-full",
    slug: "paper-skripsi",
    category: "publikasi",
    tag: "Tugas Akhir",
    title: "Rancangan Arsitektur Manajemen Risiko dan Kepatuhan Syariah pada Staking Ethereum Menggunakan Pendekatan TOGAF ADM",
    authors: "Maulana Asykari Muhammad, Fitroh, Rinda Hesti Kusumaningtyas",
    institution: "Program Studi Sistem Informasi, UIN Syarif Hidayatullah Jakarta",
    venue: "Tugas Akhir / Skripsi Sarjana Komputer",
    status: "published",
    statusLabel: "Selesai",
    year: "2026",
    abstract: "Perkembangan ekosistem investasi digital menunjukkan pertumbuhan signifikan dengan dominasi aset kripto pada lanskap Decentralize Finance (DeFi). Akan tetapi, peningkatan kuantitas adopsi tidak selalu diimbangi dengan kualitas mitigasi risiko dan kepatuhan syariah yang rasional serta terukur. Ekosistem staking Ethereum, yang mayoritas dikuasai oleh pihak ketiga, menghadirkan pilihan prospektif yang kompleks dan memerlukan metode evaluasi yang objektif. Penelitian ini mengimplementasikan kerangka kerja The Open Group Architecture Framework Architecture Development Method (TOGAF ADM) untuk memberikan perancangan arsitektur manajemen risiko yang terstruktur. Pendekatan kualitatif deskriptif diterapkan untuk mengevaluasi mekanisme Solo staking dan Liquid staking (Lido Finance) berdasarkan parameter Fikih Muamalah. Hasil penelitian menunjukkan bahwa protokol Liquid staking konvensional melanggar kelayakan syariat akibat penerapan mekanisme penambahan saldo otomatis (rebasing) yang memicu Riba al-Nasi'ah serta distribusi penalti (slashing) yang memicu Zulm. Sebagai penyelesaian atas kompleksitas tersebut, penelitian ini mengusulkan arsitektur bisnis dengan menerapkan model Net Asset Value (NAV) berbasis akad Wakalah bil Istithmar. Berdasarkan pengujian simulasi pada 10 kriteria risiko menggunakan data periode 25 April 2026, metode usulan terbukti efektif menghasilkan stabilitas kelayakan investasi pada peringkat Speculative Grade dengan nilai skor 14. Sebaliknya, alternatif pada protokol konvensional mendapatkan penalti Veto otomatis akibat ketidakpatuhan syariah. Kerangka kerja TOGAF ADM hingga phase D terbukti mampu menghasilkan rancangan arsitektur yang rasional dan sistematis dalam mengintegrasikan keamanan smart contract dengan prinsip pelindungan harta (Hifzul Mal) pada DeFi.",
    keywords: ["Tugas Akhir", "TOGAF ADM", "Ethereum", "Manajemen Risiko", "Kepatuhan Syariah"],
    readerUrl: "/paper/paper-skripsi",
    requestThesis: true,
  },
  {
    id: "jurnal-sinta3-jaic",
    category: "publikasi",
    tag: "Journal",
    title: "Risk Management and Sharia Compliance in Crypto Staking: A Systematic Literature Review",
    authors: "Maulana Asykari Muhammad, Fitroh, Rinda Hesti Kusumaningtyas",
    institution: "UIN Syarif Hidayatullah Jakarta",
    venue: "Journal of Applied Informatics and Computing (JAIC)",
    status: "published",
    statusLabel: "Published",
    year: "2026",
    abstract: "The adoption of Decentralized Finance (DeFi) introduces multidimensional risks that challenge institutional stability and Sharia jurisprudential standards. Existing studies often isolate technical security measures from theological compliance, creating a gap in governing digital assets under Sharia principles. This study aims to systematically review the intersection of technical risk mitigation and Sharia compliance in crypto-asset mechanisms. A Systematic Literature Review (SLR) was conducted following the PRISMA guidelines, analyzing 32 peer-reviewed articles published between 2023 and 2025. The synthesis reveals that technological and operational vulnerabilities in smart contracts induce elements of Gharar or uncertainty and Maysir or speculation, which conflict with the Maqasid al-Shariah objective of Hifzul Mal or protection of wealth. To bridge the gap between cryptographic protocols and Fiqh Muamalah or Islamic commercial law, this review identifies Enterprise Architecture (EA), specifically the TOGAF Architecture Development Method (ADM), as a structural integration framework. EA functions as a governance framework that systematically maps Sharia constraints directly into executable IT control layers. Specifically, the Business Architecture layer enforces contract validity, the Information Systems Architecture layer standardizes auditable data flows, and the Technology Architecture layer secures the consensus mechanics. The findings conclude that future research must transition from conceptual reviews to empirical implementations, particularly by designing Sharia-compliant enterprise architectures for post-Merge Ethereum staking protocols",
    keywords: ["Crypto Staking", "Decentralized Finance", "Enterprise Architecture", "Risk Management", "Sharia Compliance"],
    pdfPath: "/Documents/Risk Management and Sharia Compliance in Crypto Staking- A Systematic Literature Review.pdf",
    pdfDownloadName: "JAIC - Risk Management and Sharia Compliance in Crypto Staking.pdf",
    doiUrl: "https://doi.org/10.30871/jaic.v10i4.13241",
    scholarCitationUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=YKcLScoAAAAJ&citation_for_view=YKcLScoAAAAJ:ufrVoPGSRksC",
  },
  {
    id: "conference-citsm",
    category: "publikasi",
    tag: "Conference",
    title: "Prototype of Operational Security and Sharia Compliance Risk for Ethereum Staking",
    authors: "Maulana Asykari Muhammad, Fitroh, Rinda Hesti Kusumaningtyas",
    institution: "UIN Syarif Hidayatullah Jakarta",
    venue: "14th International Conference on Cyber and IT Service Management (CITSM 2026)",
    status: "accepted",
    statusLabel: "Accepted",
    year: "2026",
    abstract: "Ethereum’s transition to Proof-of-Stake has expanded opportunities for users to participate in digital asset staking. However, different staking architectures expose users to distinct operational, technical, financial, and Sharia-related risks. This study develops a qualitative document-based comparative framework to assess Solo Staking and decentralized Liquid Staking through Lido Finance and to translate the findings into an interface-based risk disclosure design. The study was conducted in four phases: problem identification and criteria definition, evidence collection and architecture analysis, multidimensional risk assessment, and interface-based mitigation design. The analysis applied PIECES framework and Fishbone analysis to categorize the issues in the identified problems and to analyze the possible problems related to gharar, maysir, riba, dharar, and hifz al-mal using the parameters of Fiqh Muamalah. We then modeled the proposed user interactions and disclosure mechanisms using UML use case diagrams and interface prototypes. The results show that Solo Staking retains a one-to-one correspondence between validator duties and protocol rewards, but shifts the responsibility of node availability, key management, infrastructure upkeep and withdrawal management to individual validators. Lido Finance lowers the minimum capital and technical participation requirements and offers tokenized liquidity. But it introduces additional dependencies on smart contracts, validator operators, token accounting, secondary-market pricing, and DeFi composability. The Sharia implications of liquid staking depend on the contract structure and how it is used, especially when liquid staking tokens are used for lending, leverage, recursive-yield or speculative activities. From these findings, the proposed interface includes a contractual acknowledgment based on Wakalah bil Istithmar, information transparency about the transaction, indicators of risk, and a dashboard for monitoring risks called the Risk Explorer. This research postulates a comparative risk taxonomy and a conceptual interface framework to enhance disclosure, informed consent, operational risk awareness and Sharia-oriented governance in Ethereum staking.",
    keywords: ["Ethereum Staking", "operational risk", "smart contract security", "Liquid Staking", "Islamic fintech"],
    pdfPath: "/Documents/Prototype of Operational Security and Sharia Compliance Risk for Ethereum Staking.pdf",
    pdfDownloadName: "CITSM - Prototype of Operational Security and Sharia Compliance Risk.pdf",
  },
  {
    id: "manuscript-sukuk-smart-contract",
    category: "publikasi",
    tag: "Manuscript",
    title: "Implementasi Smart Contract pada Prototipe Sukuk Ritel Terdesentralisasi Berbasis Staking",
    authors: "Fitroh,  Zainul Arham, Maulana Asykari Muhammad, Zahra Sabila Nugraha, Riyan Ainur Rahman",
    institution: "UIN Syarif Hidayatullah Jakarta",
    venue: "Draf Naskah Ilmiah",
    status: "coming_soon",
    statusLabel: "Coming Soon",
    year: "Coming Soon",
    abstract: "Coming soon.",
    keywords: ["Coming Soon"],
  },
  {
    id: "manuscript-sukuk-csvlod",
    category: "publikasi",
    tag: "Manuscript",
    title: "Architecting Staking-Based Retail Sukuk: A CSVLOD Model Approach",
    authors: "Fitroh,  Zainul Arham, Maulana Asykari Muhammad, Zahra Sabila Nugraha",
    institution: "UIN Syarif Hidayatullah Jakarta",
    venue: "Draf Naskah Ilmiah",
    status: "coming_soon",
    statusLabel: "Coming Soon",
    year: "Coming Soon",
    abstract: "Coming soon.",
    keywords: ["Coming Soon"],
  },
  {
    id: "prototype-system",
    category: "prototype",
    tag: "Prototype",
    title: "Sistem Evaluasi Risiko & Kepatuhan Syariah Staking Ethereum",
    authors: "",
    institution: "",
    venue: "https://skripsistaking.netlify.app/",
    status: "published",
    statusLabel: "Live Demo",
    year: "2026",
    abstract: "https://skripsistaking.netlify.app/",
    keywords: [],
    externalUrl: dashboardUrl,
  },
  {
    id: "slides-presentation",
    category: "slides",
    tag: "Slides",
    title: "Slide Presentasi Sidang Tugas Akhir",
    authors: "",
    institution: "",
    venue: "Canva Presentation",
    status: "published",
    statusLabel: "Slide Canva",
    year: "2026",
    abstract: "Dek slide presentasi visual lengkap untuk Sidang Tugas Akhir / Skripsi Sarjana Komputer.",
    keywords: [],
    slidesUrl: slidesUrl,
  }
];
