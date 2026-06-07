export interface Person {
  id: string;
  name: string;
  // Updated with all the specific academic roles
  role: 'PI' | 'PhD' | 'Project Staff' | 'Intern' | 'MTech' | 'MSc' | 'BTech' | 'Alumni';
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
  date: string;
  category: 'Achievement' | 'Research' | 'Event' | 'Media';
  imageUrl: string; // Added for the left-side image
  link: string;     // Added for the "Read Full Story" link
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

export interface Expertise {
  category: string;
  title: string;
  description: string;
  image: string;
}

export interface AboutData {
  labName: string;
  tagline: string;
  missionStatement: string;
  heroImage: string;
  expertise: Expertise[];
}