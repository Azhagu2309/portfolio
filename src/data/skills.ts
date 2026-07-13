import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description: "Languages used across firmware, tooling, and web layers.",
    items: [
      { name: "C", icon: "c" },
      { name: "C++", icon: "cpp" },
      { name: "Embedded C", icon: "cpu" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "js" },
      { name: "HTML / CSS", icon: "html" },
      { name: "React", icon: "react" },
    ],
  },
  {
    title: "Embedded & Real-Time Systems",
    description: "Hardware-software integration and real-time constraints.",
    items: [
      { name: "Embedded Systems", icon: "cpu" },
      { name: "Real-Time Systems", icon: "clock" },
      { name: "Hardware-Software Integration", icon: "chip" },
      { name: "System Validation", icon: "check" },
      { name: "Debugging", icon: "bug" },
    ],
  },
  {
    title: "FPGA & VLSI",
    description: "RTL design through simulation and functional verification.",
    items: [
      { name: "Verilog", icon: "chip" },
      { name: "SystemVerilog", icon: "chip" },
      { name: "RTL Design", icon: "layers" },
      { name: "FSM Implementation", icon: "workflow" },
      { name: "Combinational & Sequential Logic", icon: "binary" },
      { name: "ModelSim / QuestaSim", icon: "waveform" },
      { name: "CMOS Fundamentals", icon: "chip" },
    ],
  },
  {
    title: "AI & Data",
    description: "Applied on InfraMind AI's predictive-maintenance engine.",
    items: [
      { name: "scikit-learn", icon: "brain" },
      { name: "XGBoost", icon: "brain" },
      { name: "pandas", icon: "database" },
      { name: "Graph Algorithms (DFS/BFS)", icon: "graph" },
    ],
  },
  {
    title: "Core Engineering",
    description: "The signal-and-systems backbone behind every build.",
    items: [
      { name: "Digital Signal Processing", icon: "waveform" },
      { name: "Control Systems", icon: "sliders" },
      { name: "Signal Processing", icon: "waveform" },
      { name: "Data Structures & Algorithms", icon: "graph" },
    ],
  },
  {
    title: "Tools",
    description: "Daily drivers for building, versioning, and shipping.",
    items: [
      { name: "Git", icon: "git" },
      { name: "VS Code", icon: "code" },
      { name: "ModelSim", icon: "waveform" },
      { name: "KiCad", icon: "chip" },
    ],
  },
];
