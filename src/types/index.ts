export interface NavLink {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: SkillItem[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  challenges: string[];
  features: string[];
  technologies: string[];
  timeline: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Achievement {
  title: string;
  org: string;
  date: string;
  description: string;
}

export interface LeadershipRole {
  role: string;
  org: string;
  description: string;
}

export interface EducationEntry {
  institution: string;
  affiliation: string;
  degree: string;
  duration: string;
  coursework: string[];
}
