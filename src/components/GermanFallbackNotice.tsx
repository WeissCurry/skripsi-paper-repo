import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Info, X } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { useT } from "../i18n/strings";

// Paths whose content is fully translated to German. Add entries here as German
// lands (exact match or prefix, e.g. "/paper/"); everything else shows the
// "English only" fallback notice while the language is set to German.
const DE_READY: string[] = [];

const isDeReady = (path: string) =>
  DE_READY.some((p) => path === p || path.startsWith(p));

export default function GermanFallbackNotice() {
  const { lang } = useLang();
  const { pathname } = useLocation();
  const { t } = useT();
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({});

  const show = lang === "de" && !isDeReady(pathname) && !dismissed[pathname];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md z-[60]"
        >
          <div className="flex items-start gap-3 bg-brand-yellow text-black border-[3px] border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4">
            <div className="p-1.5 bg-black text-brand-yellow rounded-lg border-2 border-black flex-shrink-0">
              <Info size={18} />
            </div>
            <div className="flex-grow min-w-0">
              <p className="font-black text-sm leading-tight">{t("de_only_title")}</p>
              <p className="text-xs font-medium mt-1 leading-relaxed">{t("de_only_body")}</p>
              <button
                onClick={() => setDismissed((prev) => ({ ...prev, [pathname]: true }))}
                className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white font-black text-xs rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
              >
                {t("de_only_dismiss")}
              </button>
            </div>
            <button
              onClick={() => setDismissed((prev) => ({ ...prev, [pathname]: true }))}
              className="p-1 hover:bg-black/10 rounded-lg transition-colors flex-shrink-0 cursor-pointer"
              aria-label={t("de_only_dismiss")}
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
