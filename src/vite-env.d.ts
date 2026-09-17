/// <reference types="vite/client" />

declare module '*.mdx' {
  let MDXComponent: (props: Record<string, unknown>) => JSX.Element;
  export default MDXComponent;
}

interface Window {
  goatcounter?: {
    count?: (vars?: { path?: string; title?: string; event?: boolean }) => void;
    no_onload?: boolean;
    allow_local?: boolean;
    get_data?: () => { p?: string; r?: string; t?: string; q?: string };
    visit_count?: (opt?: Record<string, unknown>) => void;
  };
}
