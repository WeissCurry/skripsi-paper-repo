import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Languages, Check } from "lucide-react";
import { useLang, LANGS, type Lang } from "../i18n/LanguageContext";
import { useT } from "../i18n/strings";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  const choose = (code: Lang) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 p-2.5 border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] bg-white dark:bg-gray-800 transition-all rounded-lg cursor-pointer"
        title={t("tt_lang")}
        aria-label={t("tt_lang")}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Languages size={20} />
        <span className="text-sm font-black uppercase leading-none">{current.code}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 top-[calc(100%+10px)] w-56 bg-white dark:bg-gray-900 border-[3px] border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] rounded-2xl p-2 z-50 origin-top-right"
          >
            {LANGS.map((l) => (
              <li key={l.code}>
                <button
                  role="option"
                  aria-selected={lang === l.code}
                  onClick={() => choose(l.code)}
                  className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl font-bold text-sm transition-colors cursor-pointer ${
                    lang === l.code
                      ? "bg-brand-emerald text-black"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{l.flag}</span>
                    {l.label}
                  </span>
                  {lang === l.code && <Check size={16} />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
