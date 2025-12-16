
import { Project, Skill } from '../types';
import { IMAGES } from './assets';

export const WORK_EXPERIENCE: Project[] = [
  {
    id: 'work-1',
    title: 'Software Engineer III',
    subtitle: 'Global Infrastructure',
    role: 'Google',
    description: 'Global Infrastructure',
    techStack: ['C++', 'Go', 'Statistical Analysis', 'Network Analytics', 'Multi-Agent AI Architecture'],
    imageUrl: IMAGES.LOGOS.GOOGLE,
    date: 'Jul 2025',
    startDate: 'Jul 2025',
    endDate: 'Present',
    location: 'Dublin, Ireland',
    bullets: [
      "Network Insights & AIOps in Google Cloud, building large-scale data pipelines for global WAN telemetry.",
      "Designing scalable algorithms and statistical models for WAN health insights and automated anomaly detection and diagnosis."
    ]
  },
  {
    id: 'work-2',
    title: 'Software Development Engineer II',
    subtitle: 'People eXperience & Technology (PXT)',
    role: 'Amazon',
    description: 'People eXperience & Technology (PXT)',
    techStack: ['Python', 'Java', 'TypeScript', 'AWS', 'Operational Excellence'],
    imageUrl: IMAGES.LOGOS.AMAZON,
    date: 'Sep 2022',
    startDate: 'Sep 2022',
    endDate: 'July 2025',
    location: 'Dublin, Ireland',
    bullets: [
      "Control Plane for TimeHub, Amazon's cloud-native Time, Pay & Attendance platform.",
      "ADS, Core employee segmentation engine for 3.5M+ Amazonians, powering 60+ internal systems."
    ]
  },
  {
    id: 'work-3',
    title: 'Financial Analyst Intern',
    subtitle: 'Global Wealth Management',
    role: 'UBS',
    description: 'Global Wealth Management',
    techStack: ['Excel', 'Financial Modeling'],
    imageUrl: IMAGES.LOGOS.UBS,
    date: 'Jan 2022',
    startDate: 'Jan 2022',
    endDate: 'Feb 2022',
    location: 'Pune, India',
    bullets: [
      "Conducted EOD reconciliation analysis on financial transactions to detect breaks and ensure data integrity."
    ]
  },
  {
    id: 'work-4',
    title: 'Software Engineer Intern',
    subtitle: 'Oracle Fusion Cloud Applications',
    role: 'Oracle',
    description: 'Oracle Fusion Cloud Applications',
    techStack: ['Java EE', 'WebLogic', 'Oracle Database', 'PL/SQL'],
    imageUrl: IMAGES.LOGOS.ORACLE,
    date: 'May 2021',
    startDate: 'May 2021',
    endDate: 'Jul 2021',
    location: 'Bengaluru, India',
    bullets: [
      "Developed enterprise-grade APIs for middleware integrations, enabling secure interoperability with third-party systems.",
    ]
  },
  {
    id: 'work-5',
    title: 'Data Science Intern',
    subtitle: 'Insurance Analytics',
    role: 'Edelweiss Tokio',
    description: 'Insurance Analytics',
    techStack: ['Python', 'TensorFlow', 'Pandas', 'Deep Learning'],
    imageUrl: IMAGES.LOGOS.EDELWEISS,
    date: 'Apr 2020',
    startDate: 'Apr 2020',
    endDate: 'May 2020',
    location: 'Mumbai, India',
    bullets: [
      "Developed a topic modeling and summarization engine to analyze insurance claim call recordings using NLP techniques.",
    ]
  },
  {
    id: 'work-6',
    title: 'Quantitative Research Intern',
    subtitle: 'Data & Analytics',
    role: 'LSEG',
    description: 'Data & Analytics',
    techStack: ['Python', 'Scikit-learn', 'Numpy', 'Quantitative Research', 'Backtesting', 'Machine Learning'],
    imageUrl: IMAGES.LOGOS.LSEG,
    date: 'Dec 2019',
    startDate: 'Dec 2019',
    endDate: 'Dec 2019',
    location: 'Mumbai, India',
    bullets: [
      "Developed portfolio optimization algorithms and conducted risk analytics.",
    ]
  },
];

export const EDUCATION: Project[] = [
  {
    id: 'edu-1',
    title: 'IIT Kharagpur',
    subtitle: 'B.Tech (Honours)',
    role: '2018 - 2022',
    description: 'Major in Mechanical Engineering.',
    techStack: ['Computational Fluid Dynamics', 'Control Systems', 'Thermal Engineering', 'Soft Computing'],
    imageUrl: IMAGES.INSTITUTES.IIT,
    date: '2022',
    startDate: 'Aug 2018',
    endDate: 'May 2022',
    stats: 'GPA 9.16',
    bullets: [
      "Co-founder, Manga & Anime Society",
      "Member, ShARE Consulting Club",
      "Member, Autonomous Ground Vehicle Group",
      "Nationally ranked in top 0.1% across JEE Main (AIR 706) and JEE Advanced (AIR 1503) in 2018."
    ]
  },
  {
    id: 'edu-2',
    title: 'ISI Kolkata',
    subtitle: 'B.Stat (Honours)',
    role: '2018',
    description: 'Bachelor of Statistics (Completed 1st Year).',
    techStack: ['Probability', 'Statistics', 'Real Analysis', 'Linear Algebra'],
    imageUrl: IMAGES.INSTITUTES.ISI,
    date: '2018',
    startDate: 'Jul 2018',
    endDate: 'Aug 2018',
    stats: 'Dropped out',
    bullets: [
      "Nationally ranked 13th in ISI B.Stat Entrance Exam.",
      "Switched to engineering very quickly!"
    ]
  },
];

export const CP_PROFILES: Project[] = [
  {
    id: 'cp-1',
    title: 'Master @Codeforces',
    subtitle: '@arijitgd',
    role: 'Codeforces',
    description: 'Max Rating: 2116',
    techStack: [],
    imageUrl: IMAGES.LOGOS.CODEFORCES,
    date: '2025',
    link: 'https://codeforces.com/profile/arijitgd',
    stats: 'Max Rating: 2116'
  },
  {
    id: 'cp-2',
    title: '6 Star @CodeChef',
    subtitle: '@arijitgd',
    role: 'CodeChef',
    description: 'Max Rating: 2243',
    techStack: [],
    imageUrl: IMAGES.LOGOS.CODECHEF,
    date: '2025',
    link: 'https://www.codechef.com/users/arijitgd',
    stats: 'Max Rating: 2243'
  },
  {
    id: 'cp-3',
    title: 'Guardian @LeetCode',
    subtitle: '@arijitgd',
    role: 'LeetCode',
    description: 'Max Rating: 2349',
    techStack: [],
    imageUrl: IMAGES.LOGOS.LEETCODE,
    date: '2025',
    link: 'https://leetcode.com/arijitgd/',
    stats: 'Max Rating: 2349'
  },
];


export const PERSONAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'AniCompass',
    subtitle: 'AI-powered hybrid recommendation engine for personalized anime discovery.',
    role: 'Personal Project',
    description: 'Built a system combining collaborative filtering and content-based modeling, using neural architectures to learn latent user–item interactions and semantic embeddings for efficient similarity-based retrieval in a full-stack application.',
    techStack: ['Python', 'TensorFlow', 'Flask', 'ChromaDB', 'NextJS'],
    imageUrl: IMAGES.PROJECTS.ANICOMPASS,
    date: '2024',
    link: 'https://github.com/dastidarag01/anicompass'
  }
];

export const SKILL_SET: Skill[] = [
  { name: "AWS", category: 'Cloud', imageUrl: IMAGES.SKILLS.AWS, proficiency: 90 },
  { name: "Java", category: 'Backend', imageUrl: IMAGES.SKILLS.JAVA, proficiency: 90 },
  { name: "C++", category: 'Backend', imageUrl: IMAGES.SKILLS.CPP, proficiency: 90 },
  { name: "Python", category: 'Backend', imageUrl: IMAGES.SKILLS.PYTHON, proficiency: 90 },
  { name: "Go", category: 'Backend', imageUrl: IMAGES.SKILLS.GO, proficiency: 50 },
  { name: "Javascript", category: 'Frontend', imageUrl: IMAGES.SKILLS.JAVASCRIPT, proficiency: 60 },
  { name: "React", category: 'Frontend', imageUrl: IMAGES.SKILLS.REACT, proficiency: 50 },
  { name: "NextJS", category: 'Frontend', imageUrl: IMAGES.SKILLS.NEXTJS, proficiency: 30 },
  { name: "Bash", category: 'Tools', imageUrl: IMAGES.SKILLS.BASH, proficiency: 70 },
  { name: "Git", category: 'Tools', imageUrl: IMAGES.SKILLS.GIT, proficiency: 90 },
  { name: "Docker", category: 'Tools', imageUrl: IMAGES.SKILLS.DOCKER, proficiency: 70 },
  { name: "PostgreSQL", category: 'Backend', imageUrl: IMAGES.SKILLS.POSTGRESQL, proficiency: 80 },
  { name: "Redis", category: 'Backend', imageUrl: IMAGES.SKILLS.REDIS, proficiency: 70 },
  { name: "Elasticsearch", category: 'Backend', imageUrl: IMAGES.SKILLS.ELASTICSEARCH, proficiency: 70 },
  { name: "MongoDB", category: 'Backend', imageUrl: IMAGES.SKILLS.MONGODB, proficiency: 60 },
  { name: "GCP", category: 'Cloud', imageUrl: IMAGES.SKILLS.GCP, proficiency: 50 },
  { name: "TensorFlow", category: 'ML', imageUrl: IMAGES.SKILLS.TENSORFLOW, proficiency: 60 },
  { name: "Numpy", category: 'ML', imageUrl: IMAGES.SKILLS.NUMPY, proficiency: 80 },
  { name: "Pandas", category: 'ML', imageUrl: IMAGES.SKILLS.PANDAS, proficiency: 80 },
  { name: "Scikit Learn", category: 'ML', imageUrl: IMAGES.SKILLS.SCIKIT_LEARN, proficiency: 70 },
];
