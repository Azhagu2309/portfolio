interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Chip({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300 ${className}`}
    >
      {children}
    </span>
  );
}
