export type ProjectType = 'REAL CLIENT' | 'CONCEPT' | 'EXPERIMENTAL' | 'INTERNAL';

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client?: string;
  location?: string;
  baselineStatus?: string;
  region?: 'INDIAN' | 'INTERNATIONAL' | 'GLOBAL';
  disciplineId?: string;
  isConcept?: boolean;
  description: string;
  services: string[];
  servicesExecuted?: string[];
  tags?: string[];
  technology: string[];
  technologies?: string[];
  projectType: ProjectType;
  year: string;
  heroImage: string;
  headline: string;
  summary: string;
  outcomeAndImpact?: string;
  challenge?: string;
  solution?: string;
  impactMetrics: {
    label: string;
    value: string;
  }[];
  deliverables: string[];
  featured?: boolean;
}

export interface RateCardModule {
  id: string;
  category: 'Commercial Production & Visual Media' | 'Brand SEO & Digital Footprint' | 'Public Relations & Media Distribution';
  name: string;
  scope: string;
  isMonthly?: boolean;
  standardRateINR: string;
  standardRateUSD: string;
  prGroupOfferINR: string;
  prGroupOfferUSD: string;
  celebrationOfferINR: string;
  celebrationOfferUSD: string;
  discountBadge: string;
}

export interface Discipline {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  serviceList: string[];
  capabilities: string[];
  stack: string[];
  deliverables: string[];
}

export interface TeamMember {
  id?: string;
  name: string;
  role: string;
  bio: string;
  location: string;
  imagePlaceholder?: string;
  isLeadership?: boolean;
  badge?: string;
}

export interface Testimonial {
  testimonialId: string;
  clientName: string;
  company: string;
  designation: string;
  country: string;
  testimonial: string;
  rating: 4 | 4.5 | 5;
  verified: boolean;
  approved: boolean;
  project: string;
  createdAt: string;
}

export interface ProjectEnquiry {
  enquiryId: string;
  fullName: string;
  companyName: string;
  email: string;
  contactNumber: string;
  country: string;
  servicesNeeded: string[];
  projectDescription: string;
  budgetRange: string;
  expectedTimeline: string;
  status: 'NEW' | 'REVIEWING' | 'CONTACTED' | 'ARCHIVED';
  createdAt: string;
}

export interface AppointmentRequest {
  appointmentId: string;
  name: string;
  business: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  purpose: string;
  services: string[];
  status: 'PENDING' | 'CONFIRMED' | 'RESCHEDULED' | 'COMPLETED' | 'CANCELLED';
  createdAt: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: 'AI' | 'Design' | 'Branding' | 'Technology' | 'Marketing' | 'Digital Culture' | 'Business' | 'Spatial Tech & 3D Web' | 'AI & Automation' | 'Brand Strategy' | string;
  readingTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  coverImage?: string;
  summary: string;
  takeaways: string[];
  contentParagraphs: string[];
  seoKeywords?: string[];
}
