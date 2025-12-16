
export interface Project {
  id: string;
  title: string;
  subtitle?: string; // e.g. "Software Engineer III"
  description: string;
  role: string; // Used as "Artist" name
  techStack: string[];
  imageUrl: string;
  link?: string;

  date: string; // Used for sorting or display
  startDate?: string;
  endDate?: string;
  stats?: string; // e.g. "Rating: 2116"
  bullets?: string[]; // For the "Lyrics" accordion feature
  location?: string; // e.g. "Dublin"
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills' | 'Cloud' | 'ML';
  imageUrl: string;
  proficiency: number; // 0 to 100 representing percentage
}