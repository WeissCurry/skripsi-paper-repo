import type { Localized } from "../i18n/strings";

export type OutputCategory = 'publikasi' | 'prototype' | 'slides';
export type OutputTag = 'Tugas Akhir' | 'Slides' | 'Prototype' | 'Journal' | 'Conference' | 'Manuscript';

export interface Publication {
  id: string;
  slug?: string;
  category: OutputCategory;
  tag: OutputTag;
  title: Localized;
  authors: string;
  institution: string;
  venue: Localized;
  status: 'published' | 'accepted' | 'coming_soon';
  statusLabel: Localized;
  year: string;
  abstract: Localized;
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
    title: {
      id: "Rancangan Arsitektur Manajemen Risiko dan Kepatuhan Syariah pada Staking Ethereum Menggunakan Pendekatan TOGAF ADM",
      en: "An Architecture Design for Risk Management and Sharia Compliance in Ethereum Staking Using the TOGAF ADM Approach",
    },
    authors: "Maulana Asykari Muhammad, Fitroh, Rinda Hesti Kusumaningtyas",
    institution: "Program Studi Sistem Informasi, UIN Syarif Hidayatullah Jakarta",
    venue: {
      id: "Tugas Akhir / Skripsi Sarjana Komputer",
      en: "Undergraduate Final Project / Bachelor of Computer Science Thesis",
    },
    status: "published",
    statusLabel: { id: "Selesai", en: "Completed" },
    year: "2026",
    abstract: {
      id: "Perkembangan ekosistem investasi digital menunjukkan pertumbuhan signifikan dengan dominasi aset kripto pada lanskap Decentralize Finance (DeFi). Akan tetapi, peningkatan kuantitas adopsi tidak selalu diimbangi dengan kualitas mitigasi risiko dan kepatuhan syariah yang rasional serta terukur. Ekosistem staking Ethereum, yang mayoritas dikuasai oleh pihak ketiga, menghadirkan pilihan prospektif yang kompleks dan memerlukan metode evaluasi yang objektif. Penelitian ini mengimplementasikan kerangka kerja The Open Group Architecture Framework Architecture Development Method (TOGAF ADM) untuk memberikan perancangan arsitektur manajemen risiko yang terstruktur. Pendekatan kualitatif deskriptif diterapkan untuk mengevaluasi mekanisme Solo staking dan Liquid staking (Lido Finance) berdasarkan parameter Fikih Muamalah. Hasil penelitian menunjukkan bahwa protokol Liquid staking konvensional melanggar kelayakan syariat akibat penerapan mekanisme penambahan saldo otomatis (rebasing) yang memicu Riba al-Nasi'ah serta distribusi penalti (slashing) yang memicu Zulm. Sebagai penyelesaian atas kompleksitas tersebut, penelitian ini mengusulkan arsitektur bisnis dengan menerapkan model Net Asset Value (NAV) berbasis akad Wakalah bil Istithmar. Berdasarkan pengujian simulasi pada 10 kriteria risiko menggunakan data periode 25 April 2026, metode usulan terbukti efektif menghasilkan stabilitas kelayakan investasi pada peringkat Speculative Grade dengan nilai skor 14. Sebaliknya, alternatif pada protokol konvensional mendapatkan penalti Veto otomatis akibat ketidakpatuhan syariah. Kerangka kerja TOGAF ADM hingga phase D terbukti mampu menghasilkan rancangan arsitektur yang rasional dan sistematis dalam mengintegrasikan keamanan smart contract dengan prinsip pelindungan harta (Hifzul Mal) pada DeFi.",
      en: "The digital investment ecosystem has grown significantly, with crypto assets dominating the Decentralized Finance (DeFi) landscape. However, the rising quantity of adoption is not always matched by rational, measurable quality in risk mitigation and Sharia compliance. The Ethereum staking ecosystem, largely controlled by third parties, presents complex prospective choices that require an objective evaluation method. This study implements The Open Group Architecture Framework Architecture Development Method (TOGAF ADM) to deliver a structured risk-management architecture design. A descriptive qualitative approach is applied to evaluate Solo staking and Liquid staking (Lido Finance) against the parameters of Fiqh Muamalah. The results show that the conventional Liquid staking protocol violates Sharia eligibility due to its automatic balance-increase mechanism (rebasing), which triggers Riba al-Nasi'ah, and its penalty distribution (slashing), which triggers Zulm. To resolve this complexity, the study proposes a business architecture that applies a Net Asset Value (NAV) model based on the Wakalah bil Istithmar contract. Based on a simulation test across 10 risk criteria using data from the 25 April 2026 period, the proposed method proved effective, yielding investment-eligibility stability at Speculative Grade with a score of 14. In contrast, the conventional-protocol alternative received an automatic Veto penalty for Sharia non-compliance. The TOGAF ADM framework, carried through to Phase D, proved capable of producing a rational and systematic architecture design that integrates smart contract security with the principle of wealth protection (Hifzul Mal) in DeFi.",
    },
    keywords: ["Tugas Akhir", "TOGAF ADM", "Ethereum", "Manajemen Risiko", "Kepatuhan Syariah"],
    readerUrl: "/paper/paper-skripsi",
    requestThesis: true,
  },
  {
    id: "jurnal-sinta3-jaic",
    category: "publikasi",
    tag: "Journal",
    title: {
      id: "Risk Management and Sharia Compliance in Crypto Staking: A Systematic Literature Review",
      en: "Risk Management and Sharia Compliance in Crypto Staking: A Systematic Literature Review",
    },
    authors: "Maulana Asykari Muhammad, Fitroh, Rinda Hesti Kusumaningtyas",
    institution: "UIN Syarif Hidayatullah Jakarta",
    venue: {
      id: "Journal of Applied Informatics and Computing (JAIC)",
      en: "Journal of Applied Informatics and Computing (JAIC)",
    },
    status: "published",
    statusLabel: { id: "Published", en: "Published" },
    year: "2026",
    abstract: {
      id: "The adoption of Decentralized Finance (DeFi) introduces multidimensional risks that challenge institutional stability and Sharia jurisprudential standards. Existing studies often isolate technical security measures from theological compliance, creating a gap in governing digital assets under Sharia principles. This study aims to systematically review the intersection of technical risk mitigation and Sharia compliance in crypto-asset mechanisms. A Systematic Literature Review (SLR) was conducted following the PRISMA guidelines, analyzing 32 peer-reviewed articles published between 2023 and 2025. The synthesis reveals that technological and operational vulnerabilities in smart contracts induce elements of Gharar or uncertainty and Maysir or speculation, which conflict with the Maqasid al-Shariah objective of Hifzul Mal or protection of wealth. To bridge the gap between cryptographic protocols and Fiqh Muamalah or Islamic commercial law, this review identifies Enterprise Architecture (EA), specifically the TOGAF Architecture Development Method (ADM), as a structural integration framework. EA functions as a governance framework that systematically maps Sharia constraints directly into executable IT control layers. Specifically, the Business Architecture layer enforces contract validity, the Information Systems Architecture layer standardizes auditable data flows, and the Technology Architecture layer secures the consensus mechanics. The findings conclude that future research must transition from conceptual reviews to empirical implementations, particularly by designing Sharia-compliant enterprise architectures for post-Merge Ethereum staking protocols",
      en: "The adoption of Decentralized Finance (DeFi) introduces multidimensional risks that challenge institutional stability and Sharia jurisprudential standards. Existing studies often isolate technical security measures from theological compliance, creating a gap in governing digital assets under Sharia principles. This study aims to systematically review the intersection of technical risk mitigation and Sharia compliance in crypto-asset mechanisms. A Systematic Literature Review (SLR) was conducted following the PRISMA guidelines, analyzing 32 peer-reviewed articles published between 2023 and 2025. The synthesis reveals that technological and operational vulnerabilities in smart contracts induce elements of Gharar or uncertainty and Maysir or speculation, which conflict with the Maqasid al-Shariah objective of Hifzul Mal or protection of wealth. To bridge the gap between cryptographic protocols and Fiqh Muamalah or Islamic commercial law, this review identifies Enterprise Architecture (EA), specifically the TOGAF Architecture Development Method (ADM), as a structural integration framework. EA functions as a governance framework that systematically maps Sharia constraints directly into executable IT control layers. Specifically, the Business Architecture layer enforces contract validity, the Information Systems Architecture layer standardizes auditable data flows, and the Technology Architecture layer secures the consensus mechanics. The findings conclude that future research must transition from conceptual reviews to empirical implementations, particularly by designing Sharia-compliant enterprise architectures for post-Merge Ethereum staking protocols",
    },
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
    title: {
      id: "Prototype of Operational Security and Sharia Compliance Risk for Ethereum Staking",
      en: "Prototype of Operational Security and Sharia Compliance Risk for Ethereum Staking",
    },
    authors: "Maulana Asykari Muhammad, Fitroh, Rinda Hesti Kusumaningtyas",
    institution: "UIN Syarif Hidayatullah Jakarta",
    venue: {
      id: "14th International Conference on Cyber and IT Service Management (CITSM 2026)",
      en: "14th International Conference on Cyber and IT Service Management (CITSM 2026)",
    },
    status: "accepted",
    statusLabel: { id: "Accepted", en: "Accepted" },
    year: "2026",
    abstract: {
      id: "Ethereum’s transition to Proof-of-Stake has expanded opportunities for users to participate in digital asset staking. However, different staking architectures expose users to distinct operational, technical, financial, and Sharia-related risks. This study develops a qualitative document-based comparative framework to assess Solo Staking and decentralized Liquid Staking through Lido Finance and to translate the findings into an interface-based risk disclosure design. The study was conducted in four phases: problem identification and criteria definition, evidence collection and architecture analysis, multidimensional risk assessment, and interface-based mitigation design. The analysis applied PIECES framework and Fishbone analysis to categorize the issues in the identified problems and to analyze the possible problems related to gharar, maysir, riba, dharar, and hifz al-mal using the parameters of Fiqh Muamalah. We then modeled the proposed user interactions and disclosure mechanisms using UML use case diagrams and interface prototypes. The results show that Solo Staking retains a one-to-one correspondence between validator duties and protocol rewards, but shifts the responsibility of node availability, key management, infrastructure upkeep and withdrawal management to individual validators. Lido Finance lowers the minimum capital and technical participation requirements and offers tokenized liquidity. But it introduces additional dependencies on smart contracts, validator operators, token accounting, secondary-market pricing, and DeFi composability. The Sharia implications of liquid staking depend on the contract structure and how it is used, especially when liquid staking tokens are used for lending, leverage, recursive-yield or speculative activities. From these findings, the proposed interface includes a contractual acknowledgment based on Wakalah bil Istithmar, information transparency about the transaction, indicators of risk, and a dashboard for monitoring risks called the Risk Explorer. This research postulates a comparative risk taxonomy and a conceptual interface framework to enhance disclosure, informed consent, operational risk awareness and Sharia-oriented governance in Ethereum staking.",
      en: "Ethereum’s transition to Proof-of-Stake has expanded opportunities for users to participate in digital asset staking. However, different staking architectures expose users to distinct operational, technical, financial, and Sharia-related risks. This study develops a qualitative document-based comparative framework to assess Solo Staking and decentralized Liquid Staking through Lido Finance and to translate the findings into an interface-based risk disclosure design. The study was conducted in four phases: problem identification and criteria definition, evidence collection and architecture analysis, multidimensional risk assessment, and interface-based mitigation design. The analysis applied PIECES framework and Fishbone analysis to categorize the issues in the identified problems and to analyze the possible problems related to gharar, maysir, riba, dharar, and hifz al-mal using the parameters of Fiqh Muamalah. We then modeled the proposed user interactions and disclosure mechanisms using UML use case diagrams and interface prototypes. The results show that Solo Staking retains a one-to-one correspondence between validator duties and protocol rewards, but shifts the responsibility of node availability, key management, infrastructure upkeep and withdrawal management to individual validators. Lido Finance lowers the minimum capital and technical participation requirements and offers tokenized liquidity. But it introduces additional dependencies on smart contracts, validator operators, token accounting, secondary-market pricing, and DeFi composability. The Sharia implications of liquid staking depend on the contract structure and how it is used, especially when liquid staking tokens are used for lending, leverage, recursive-yield or speculative activities. From these findings, the proposed interface includes a contractual acknowledgment based on Wakalah bil Istithmar, information transparency about the transaction, indicators of risk, and a dashboard for monitoring risks called the Risk Explorer. This research postulates a comparative risk taxonomy and a conceptual interface framework to enhance disclosure, informed consent, operational risk awareness and Sharia-oriented governance in Ethereum staking.",
    },
    keywords: ["Ethereum Staking", "operational risk", "smart contract security", "Liquid Staking", "Islamic fintech"],
    pdfPath: "/Documents/Prototype of Operational Security and Sharia Compliance Risk for Ethereum Staking.pdf",
    pdfDownloadName: "CITSM - Prototype of Operational Security and Sharia Compliance Risk.pdf",
  },
  {
    id: "manuscript-sukuk-smart-contract",
    category: "publikasi",
    tag: "Manuscript",
    title: {
      id: "Implementasi Smart Contract pada Prototipe Sukuk Ritel Terdesentralisasi Berbasis Staking",
      en: "Smart Contract Implementation in a Staking-Based Decentralized Retail Sukuk Prototype",
    },
    authors: "Fitroh,  Zainul Arham, Maulana Asykari Muhammad, Zahra Sabila Nugraha, Riyan Ainur Rahman",
    institution: "UIN Syarif Hidayatullah Jakarta",
    venue: { id: "Draf Naskah Ilmiah", en: "Scientific Manuscript Draft" },
    status: "coming_soon",
    statusLabel: { id: "Coming Soon", en: "Coming Soon" },
    year: "Coming Soon",
    abstract: { id: "Coming soon.", en: "Coming soon." },
    keywords: ["Coming Soon"],
  },
  {
    id: "manuscript-sukuk-csvlod",
    category: "publikasi",
    tag: "Manuscript",
    title: {
      id: "Architecting Staking-Based Retail Sukuk: A CSVLOD Model Approach",
      en: "Architecting Staking-Based Retail Sukuk: A CSVLOD Model Approach",
    },
    authors: "Fitroh,  Zainul Arham, Maulana Asykari Muhammad, Zahra Sabila Nugraha",
    institution: "UIN Syarif Hidayatullah Jakarta",
    venue: { id: "Draf Naskah Ilmiah", en: "Scientific Manuscript Draft" },
    status: "coming_soon",
    statusLabel: { id: "Coming Soon", en: "Coming Soon" },
    year: "Coming Soon",
    abstract: { id: "Coming soon.", en: "Coming soon." },
    keywords: ["Coming Soon"],
  },
  {
    id: "prototype-system",
    category: "prototype",
    tag: "Prototype",
    title: {
      id: "Sistem Evaluasi Risiko & Kepatuhan Syariah Staking Ethereum",
      en: "Ethereum Staking Risk & Sharia Compliance Evaluation System",
    },
    authors: "",
    institution: "",
    venue: { id: "https://skripsistaking.netlify.app/", en: "https://skripsistaking.netlify.app/" },
    status: "published",
    statusLabel: { id: "Live Demo", en: "Live Demo" },
    year: "2026",
    abstract: { id: "https://skripsistaking.netlify.app/", en: "https://skripsistaking.netlify.app/" },
    keywords: [],
    externalUrl: dashboardUrl,
  },
  {
    id: "slides-presentation",
    category: "slides",
    tag: "Slides",
    title: {
      id: "Slide Presentasi Sidang Tugas Akhir",
      en: "Final Project Defense Presentation Slides",
    },
    authors: "",
    institution: "",
    venue: { id: "Canva Presentation", en: "Canva Presentation" },
    status: "published",
    statusLabel: { id: "Slide Canva", en: "Canva Slides" },
    year: "2026",
    abstract: {
      id: "Dek slide presentasi visual lengkap untuk Sidang Tugas Akhir / Skripsi Sarjana Komputer.",
      en: "A complete visual presentation slide deck for the undergraduate Final Project / Bachelor of Computer Science thesis defense.",
    },
    keywords: [],
    slidesUrl: slidesUrl,
  }
];
