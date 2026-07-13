import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Props {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ value, suffix = "", label }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
        {inView ? <CountUp end={value} duration={2} suffix={suffix} /> : `0${suffix}`}
      </div>
      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-400">{label}</p>
    </div>
  );
}
