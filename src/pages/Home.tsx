import { Link } from "react-router-dom";
import { FileText, Presentation, Globe, ArrowRight } from "lucide-react";

export default function Home() {
  const cards = [
    {
      id: "slides",
      title: "Slides",
      description: "Presentasi komprehensif mengenai arsitektur manajemen risiko staking Ethereum berbasis kepatuhan syariah.",
      icon: <Presentation size={48} className="text-brand-emerald" />,
      color: "bg-white",
      link: "/slides",
      buttonText: "View Presentation",
      external: false
    },
    {
      id: "paper",
      title: "Paper",
      description: "Naskah lengkap skripsi dengan pendekatan TOGAF ADM, analisis risiko, dan standarisasi kepatuhan syariah.",
      icon: <FileText size={48} className="text-brand-blue" />,
      color: "bg-white",
      link: "/paper/paper-skripsi",
      buttonText: "Read Paper",
      external: false
    },
    {
      id: "website",
      title: "Website",
      description: "Dashboard Web3 interaktif untuk eksplorasi metrik risiko, skor kepatuhan, dan integrasi smart contract.",
      icon: <Globe size={48} className="text-brand-yellow" />,
      color: "bg-white",
      link: "https://skripsistaking.netlify.app/",
      buttonText: "Launch App",
      external: true
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:px-8 mt-12 md:mt-24">
      {/* 3 Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className="brutal-box p-8 flex flex-col items-center text-center group hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all duration-300"
          >
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {card.icon}
            </div>
            
            <h3 className="text-3xl font-black font-serif mb-4 uppercase tracking-tight">
              {card.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-8 flex-grow leading-relaxed">
              {card.description}
            </p>
            
            {card.external ? (
              <a 
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black text-white dark:bg-white dark:text-black font-black py-4 border-[3px] border-black flex items-center justify-center gap-2 hover:bg-brand-emerald hover:text-black transition-colors"
              >
                <span>{card.buttonText}</span>
                <ArrowRight size={20} />
              </a>
            ) : (
              <Link 
                to={card.link}
                className="w-full bg-black text-white dark:bg-white dark:text-black font-black py-4 border-[3px] border-black flex items-center justify-center gap-2 hover:bg-brand-emerald hover:text-black transition-colors"
              >
                <span>{card.buttonText}</span>
                <ArrowRight size={20} />
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Decorative Pixel Background Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-brand-emerald/10 -z-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-brand-blue/10 -z-10 rounded-full blur-3xl"></div>
    </div>
  );
}
