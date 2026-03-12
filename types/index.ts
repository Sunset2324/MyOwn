export interface Project {
  id: string;
  title: string;
  description: string;
  tag: string;
  year: string;
  image: string;
  link: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: "code" | "video" | "photo";
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Stat {
  number: string;
  label: string;
}
