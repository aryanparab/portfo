// types/index.ts - All TypeScript type definitions

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // lucide-react icon name
}

export interface NavigationItem {
  id: number;
  label: string;
  section: number;
}

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
}

export interface Interest {
  icon: string;
  title: string;
  description: string;
}

export interface SkillCategory {
  icon: string;
  category: string;
  skills: string[];
}

export interface Passion {
  emoji: string;
  title: string;
  description: string;
}

export interface FunFact {
  icon: string;
  text: string;
}

export interface Value {
  emoji: string;
  title: string;
  description: string;
}

export interface AboutData {
  intro: string;
  interests: Interest[];
  skills: SkillCategory[];
  passions: Passion[];
  funFacts: FunFact[];
  quote: string;
  values: Value[];
}

export interface TimelineItem {
  year: string;
  type: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface ExperienceData {
  timeline: TimelineItem[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    watch?: string;
  };
}

export interface ProjectsData {
  intro: string;
  projects: Project[];
}

export interface ContactData {
  title: string;
  subtitle: string[];
  email: string;
  resumeUrl?: string;
  social: SocialLink[];
}

// Timeline component types (from aceternity)
export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}
