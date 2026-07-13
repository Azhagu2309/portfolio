import type { ComponentType } from "react";
import {
  Cpu,
  Clock,
  CircuitBoard,
  CheckCircle2,
  Bug,
  Layers,
  Workflow,
  Binary,
  AudioWaveform,
  Brain,
  Database,
  Share2,
  SlidersHorizontal,
  Code2,
} from "lucide-react";
import { SiC, SiCplusplus, SiPython, SiJavascript, SiHtml5, SiReact, SiGit } from "react-icons/si";
import type { IconType } from "react-icons";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

const lucideMap: Record<string, IconComponent> = {
  cpu: Cpu,
  clock: Clock,
  chip: CircuitBoard,
  check: CheckCircle2,
  bug: Bug,
  layers: Layers,
  workflow: Workflow,
  binary: Binary,
  waveform: AudioWaveform,
  brain: Brain,
  database: Database,
  graph: Share2,
  sliders: SlidersHorizontal,
  code: Code2,
};

const siMap: Record<string, IconType> = {
  c: SiC,
  cpp: SiCplusplus,
  python: SiPython,
  js: SiJavascript,
  html: SiHtml5,
  react: SiReact,
  git: SiGit,
};

export function SkillIcon({ icon, size = 20, className = "" }: { icon: string; size?: number; className?: string }) {
  const SiIcon = siMap[icon];
  if (SiIcon) return <SiIcon size={size} className={className} />;
  const LucideIcon = lucideMap[icon] ?? Code2;
  return <LucideIcon size={size} className={className} />;
}
