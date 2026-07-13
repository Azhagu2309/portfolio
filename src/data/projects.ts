import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "inframind-ai",
    title: "InfraMind AI",
    tagline: "AI-powered predictive infrastructure intelligence platform",
    description:
      "A full-stack platform that predicts failures in roads, bridges, transformers, water pipelines, and street lights before they happen — trained on sensor-pattern data so maintenance teams can act proactively instead of reactively. Built end-to-end across a React/TypeScript frontend and a FastAPI backend with role-based dashboards for admins, engineers, and government officers.",
    challenges: [
      "No physical IoT hardware available, so the ML pipeline runs on a generated, sensor-pattern-realistic dataset",
      "Cross-checking a React/TypeScript frontend against a FastAPI backend (types mirrored 1:1 from Pydantic schemas) without a live network to install and run both stacks together",
      "Comparing Random Forest, Gradient Boosting, and XGBoost for the best precision/latency trade-off on failure prediction",
    ],
    features: [
      "Role-based dashboards (Admin, Engineer, Government Officer) with JWT auth",
      "AI risk-prediction dashboard with live charts (Recharts) and map-based asset views",
      "Automated PDF/Excel maintenance report generation (reportlab, openpyxl)",
      "8-phase build, each phase independently documented and verified",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "scikit-learn",
      "XGBoost",
      "pandas",
    ],
    timeline: "8 phases: dataset → AI training → backend → frontend → AI dashboard → auth → reports → deployment",
    github: "https://github.com/Azhagu2309",
    featured: true,
  },
  {
    slug: "rtl-design-verification",
    title: "RTL Design & Verification using Verilog",
    tagline: "Synthesizable RTL modules with self-checking testbenches",
    description:
      "Designed synthesizable RTL modules — ALUs, finite state machines, and counters — in Verilog/SystemVerilog with proper clocked-logic implementation, then verified them with self-checking testbenches.",
    challenges: [
      "Ensuring clean clocked-logic implementation across combinational and sequential blocks",
      "Building testbenches that self-check outputs rather than relying on manual waveform inspection",
    ],
    features: [
      "ALU, FSM, and counter modules written in Verilog/SystemVerilog",
      "Self-checking testbenches for functional verification",
      "Timing verification and simulation in ModelSim",
    ],
    technologies: ["Verilog", "SystemVerilog", "ModelSim"],
    timeline: "Academic / personal RTL coursework project",
    github: "https://github.com/Azhagu2309",
  },
  {
    slug: "fpga-gunshot-doa",
    title: "FPGA-Based Gun Shooting Detection & DOA System",
    tagline: "Real-time gunshot detection with TDOA-based direction of arrival",
    description:
      "An FPGA-based real-time gunshot detection system built on DSP techniques and multi-sensor data acquisition, with TDOA (Time Difference of Arrival) based Direction of Arrival estimation tuned for low latency.",
    challenges: [
      "Acquiring and synchronizing multi-sensor data in real time on FPGA fabric",
      "Keeping TDOA-based DOA estimation latency low enough for real-time response",
    ],
    features: [
      "Real-time gunshot event detection using DSP techniques",
      "Multi-sensor data acquisition pipeline",
      "TDOA-based Direction of Arrival (DOA) estimation",
    ],
    technologies: ["FPGA", "Verilog", "DSP", "Multi-sensor Acquisition"],
    timeline: "Academic / personal embedded systems project",
    github: "https://github.com/Azhagu2309",
  },
  {
    slug: "cubesat-adcs",
    title: "Low-Cost CubeSat ADCS",
    tagline: "Sensor-fused attitude determination and control system",
    description:
      "A low-cost CubeSat Attitude Determination and Control System (ADCS) using sensor fusion and PID-based feedback control for attitude stabilization, with simulated disturbance rejection under dynamic operating conditions.",
    challenges: [
      "Fusing multiple sensor sources into a stable attitude estimate on a low-cost budget",
      "Tuning PID feedback control for stabilization under simulated dynamic disturbances",
    ],
    features: [
      "Sensor fusion for attitude estimation",
      "PID-based feedback control loop",
      "Simulated stabilization and disturbance-rejection testing",
    ],
    technologies: ["Control Systems", "PID Control", "Sensor Fusion", "MATLAB"],
    timeline: "Academic / personal control-systems project",
    github: "https://github.com/Azhagu2309",
  },
  {
    slug: "graph-financial-crime-detection",
    title: "Graph-Based Financial Crime Detection Engine",
    tagline: "Modular fraud-detection engine built on graph traversal algorithms",
    description:
      "A modular graph-based fraud-detection engine built with Python, HTML, JavaScript, and CSS, using DFS, BFS, and cycle-detection algorithms to surface suspicious transaction patterns, with STL data structures optimized for time and memory efficiency.",
    challenges: [
      "Modeling transaction networks as graphs suitable for cycle and pattern detection",
      "Optimizing STL data structures for better time complexity and memory footprint at scale",
    ],
    features: [
      "DFS/BFS traversal for suspicious pattern discovery",
      "Cycle detection for money-muling-style transaction loops",
      "Modular engine separated from the presentation layer",
    ],
    technologies: ["Python", "JavaScript", "HTML", "CSS", "Graph Algorithms"],
    timeline: "Academic / personal algorithms project",
    github: "https://github.com/Azhagu2309",
  },
];
