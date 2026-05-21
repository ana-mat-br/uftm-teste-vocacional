"use client";

import {
  Activity,
  AlertTriangle,
  Award,
  BarChart3,
  Beaker,
  Brain,
  Camera,
  Circle,
  Clock,
  Compass,
  Eye,
  Flame,
  FlaskConical,
  Globe,
  HandHeart,
  HardHat,
  Leaf,
  Mail,
  MapPin,
  MessageSquare,
  Mountain,
  Pause,
  PenLine,
  Play,
  Radar,
  Radio,
  Repeat,
  Rocket,
  Satellite,
  Scale,
  Shield,
  Sparkles,
  Sprout,
  Stethoscope,
  Tent,
  TreePine,
  Trophy,
  Volume2,
  VolumeX,
  Waves,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Aliases redundantes (radio/comms, chart/logs, video/camera, brain/thinking)
// existem de propósito: data/cenas.ts ganha vocabulário narrativo por cena.
const MAP = {
  thinking: Brain,
  uncertain: Eye,
  flame: Flame,
  sprout: Sprout,
  stethoscope: Stethoscope,
  wrench: Wrench,
  radio: Radio,
  leaf: Leaf,
  chart: BarChart3,
  satellite: Satellite,
  voice: MessageSquare,
  shield: Shield,
  hug: HandHeart,
  scale: Scale,
  tools: HardHat,
  logs: BarChart3,
  alarm: AlertTriangle,
  wind: Wind,
  video: Camera,
  letter: PenLine,
  brain: Brain,
  globe: Globe,
  mountain: Mountain,
  tree: TreePine,
  waves: Waves,
  tent: Tent,
  camera: Camera,
  offering: Mail,
  lab: FlaskConical,
  comms: Radio,
  battery: Zap,
  dna: Beaker,
  pin: MapPin,
  trophy: Trophy,
  sparkles: Sparkles,
  target: Award,
  shuffle: Activity,
  warning: AlertTriangle,
  play: Play,
  pause: Pause,
  "volume-on": Volume2,
  "volume-off": VolumeX,
  compass: Compass,
  rocket: Rocket,
  clock: Clock,
  repeat: Repeat,
  radar: Radar,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof MAP;

type Props = {
  name: IconName;
  size?: number | string;
  className?: string;
  color?: string;
  strokeWidth?: number;
  "aria-hidden"?: boolean;
};

/**
 * Ícone Lucide unificado. Default `size="1em"` faz o ícone acompanhar a
 * font-size do contexto; o wrapper inline-flex garante alinhamento vertical
 * com o texto irmão sem precisar de hacks de line-height.
 */
export default function Icon({
  name,
  size = "1em",
  className = "",
  color,
  strokeWidth = 2,
  ...rest
}: Props) {
  const LucideCmp = MAP[name] ?? Circle;
  return (
    <span
      className={`inline-flex items-center align-middle leading-none ${className}`}
      style={color ? { color } : undefined}
      aria-hidden={rest["aria-hidden"] ?? true}
    >
      <LucideCmp size={size} strokeWidth={strokeWidth} absoluteStrokeWidth />
    </span>
  );
}
