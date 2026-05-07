import React, { useState } from 'react';

interface GlossaryTermProps {
  term: string;
  definition: string;
  children?: React.ReactNode;
}

const GlossaryTerm: React.FC<GlossaryTermProps> = ({ term, definition, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="relative inline-block group">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-help border-b-2 border-dotted border-brand-emerald hover:bg-brand-emerald/10 transition-colors font-medium decoration-brand-emerald"
      >
        {children || term}
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-white dark:bg-gray-800 border-[3px] border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] z-[999] text-sm leading-relaxed pointer-events-none animate-in fade-in zoom-in duration-200">
          <div className="font-black mb-1 uppercase tracking-wider text-xs text-brand-emerald">Glossary</div>
          <div className="font-bold mb-2 text-black dark:text-white border-b border-gray-200 dark:border-gray-700 pb-1">{term}</div>
          <div className="text-gray-700 dark:text-gray-300 font-medium">
            {definition}
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-black dark:border-t-white"></div>
        </div>
      )}
    </span>
  );
};

export default GlossaryTerm;
