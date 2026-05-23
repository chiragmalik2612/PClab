export interface Person {
  id: string;
  name: string;
  role: 'PI' | 'Postdoc' | 'PhD Student' | 'Master Student' | 'Alumni';
  image: string;
  email: string;
  bio: string;
  education: string[];
  googleScholar?: string;
  linkedin?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  pdfUrl?: string;
  tags: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string; // YYYY-MM-DD
  category: 'Achievement' | 'Research' | 'Event' | 'Media';
}

export interface Career {
  id: string;
  title: string;
  type: 'Postdoc' | 'PhD' | 'Internship' | 'Research Assistant';
  description: string;
  requirements: string[];
  postedDate: string;
  deadline: string;
}

export interface ContactInfo {
  labName: string;
  piName: string;
  email: string;
  phone: string;
  address: string;
  institution: string;
  officeLocation: string;
}

export interface AboutData {
  labName: string;
  tagline: string;
  missionStatement: string;
  researchInterests: string[];
  heroImage: string;
}