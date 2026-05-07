import { useParams, Link } from "react-router-dom";
import { Download, GitBranch as Github, ExternalLink, Calendar, MapPin } from "lucide-react";
import React, { Suspense } from "react";
import { MDXProvider } from "@mdx-js/react";
import GlossaryTerm from "../components/GlossaryTerm";

const components = {
  Glossary: GlossaryTerm,
};

interface PaperData {
  title: string;
  authors: string;
  institution: string;
  date: string;
}

const getPaperData = (slug: string): PaperData | null => {
  const data: Record<string, PaperData> = {
    "paper-skripsi": {
      title: "Rancangan Arsitektur Manajemen Risiko dan Kepatuhan Syariah pada Staking Ethereum Menggunakan Pendekatan TOGAF ADM",
      authors: "Maulana Asykari Muhammad, Fitroh, Rinda Hesti Kusumaningtyas",
      institution: "UIN Syarif Hidayatullah Jakarta",
      date: "May 2026",
    },
    "proposal-tugas-akhir": {
      title: "Proposal: Rancangan Arsitektur Manajemen Risiko dan Kepatuhan Syariah pada Staking Ethereum",
      authors: "Maulana Asykari Muhammad",
      institution: "UIN Syarif Hidayatullah Jakarta",
      date: "May 2026",
    }
  };
  return data[slug] || null;
};

// Declare components outside of render to avoid ESLint errors and performance issues
const PaperContentMap: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  "paper-skripsi": React.lazy(() => import("../content/paper-skripsi.mdx")),
  "proposal-tugas-akhir": React.lazy(() => import("../content/proposal-tugas-akhir.mdx")),
};

export default function PaperDetail() {
  const { slug } = useParams();
  const paper = getPaperData(slug || "");

  if (!paper) {
    return (
      <div className="text-center py-24 flex flex-col items-center gap-6">
        <h2 className="text-4xl font-black">Paper Not Found</h2>
        <Link to="/" className="bg-black text-white px-6 py-3 font-bold border-2 border-black">
          Back Home
        </Link>
      </div>
    );
  }

  // Get the component from the map
  const Content = slug ? PaperContentMap[slug] : null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:px-8">
      {/* Header Article */}
      <header className="mb-12 border-b-[3px] border-black dark:border-white pb-8">
        <Link to="/" className="inline-block mb-6 font-bold text-brand-emerald hover:underline underline-offset-4">
          &larr; Back to Publications
        </Link>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight">
          {paper.title}
        </h1>
        
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-lg text-gray-700 dark:text-gray-300">
          <div className="text-xl text-black dark:text-white">
            {paper.authors}
          </div>
          
          <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-brand-emerald" />
              {paper.institution}
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-brand-emerald" />
              {paper.date}
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout: 2 Columns on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Content Area (MDX) */}
        <div className="lg:col-span-8 xl:col-span-9 order-2 lg:order-1">
          <article className="prose dark:prose-invert prose-p:text-justify prose-headings:font-serif prose-headings:font-bold prose-a:text-brand-emerald prose-a:font-bold hover:prose-a:underline prose-img:border-[3px] prose-img:border-black dark:prose-img:border-white prose-table:border-[3px] prose-table:border-black dark:prose-table:border-white max-w-none">
            <Suspense fallback={<div className="animate-pulse py-12">Loading content...</div>}>
              <MDXProvider components={components}>
                {Content ? <Content /> : <div className="py-12 text-center">Loading content...</div>}
              </MDXProvider>
            </Suspense>
          </article>
        </div>

        {/* Sticky Sidebar */}
        <aside className="lg:col-span-4 xl:col-span-3 order-1 lg:order-2">
          <div className="sticky top-28 flex flex-col gap-4">
            <h3 className="font-black text-xl font-serif mb-2 border-b-2 border-black dark:border-white pb-2">
              Resources & Links
            </h3>
            
            <a 
              href="#" 
              className="flex items-center gap-3 bg-brand-yellow text-black font-black px-4 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <Download size={20} />
              <span>Download PDF</span>
            </a>

            <a 
              href="#" 
              className="flex items-center gap-3 bg-white text-black font-black px-4 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <Github size={20} />
              <span>View GitHub Repo</span>
            </a>

            <a 
              href="https://skripsistaking.netlify.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-brand-blue text-black font-black px-4 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <ExternalLink size={20} />
              <span>to Dashboard</span>
            </a>
          </div>
        </aside>

      </div>
    </div>
  );
}
