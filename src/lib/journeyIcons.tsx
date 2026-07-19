import type { ComponentType } from "react";
import {
  GraduationCap,
  HeartHandshake,
  Landmark,
  Plane,
  Flame,
  Trophy,
  Award,
  Target,
  Satellite,
  Crosshair,
  BrainCircuit,
  ShieldAlert,
  Rocket,
  Sparkles,
} from "lucide-react";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

const journeyIconMap: Record<string, IconComponent> = {
  "graduation-cap": GraduationCap,
  "heart-handshake": HeartHandshake,
  landmark: Landmark,
  plane: Plane,
  flame: Flame,
  trophy: Trophy,
  award: Award,
  target: Target,
  satellite: Satellite,
  crosshair: Crosshair,
  "brain-circuit": BrainCircuit,
  "shield-alert": ShieldAlert,
  rocket: Rocket,
};

export function JourneyIcon({ icon, size = 18, className = "" }: { icon: string; size?: number; className?: string }) {
  const Icon = journeyIconMap[icon] ?? Sparkles;
  return <Icon size={size} className={className} />;
}
