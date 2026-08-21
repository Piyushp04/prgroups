import { TeamMember } from '../types';
import { DISCIPLINES as RAW_DISCIPLINES } from './disciplines';

export const FOUNDER_DATA = {
  name: "Pratyush Kumar Jha",
  title: "Founder & Sole Proprietor, PR Groups",
  headline: "BUILDING AT THE INTERSECTION OF CREATIVITY AND TECHNOLOGY.",
  bio: "Pratyush Kumar Jha is the Founder & Sole Proprietor of PR Groups, leading a multidisciplinary creative-technology company focused on brand transformation, digital experiences, intelligent automation and emerging technology. His approach combines creative direction with technology-led thinking, with an emphasis on building distinctive systems and experiences that help ambitious businesses communicate, operate and grow in a digital-first world.",
  location: "Bangalore, Karnataka, India",
  imagePlaceholder: "/assets/images/founder-placeholder.jpg",
};

export const OPERATIONAL_ROLES_DISCLAIMER = "Important: These are internal operational roles within the PR Projects Studio/PR Group’s setup and do not imply a separate partnership, LLP, corporation, or independent ownership structure. Pratyush Kumar Jha remains the sole proprietor.";

export const PEOPLE_DATA: TeamMember[] = [
  {
    id: "pratyush-kumar-jha",
    name: "Pratyush Kumar Jha",
    role: "Founder & Sole Proprietor",
    bio: "Leads strategic vision, creative direction, and creative-technology architecture across all active practices and client engagements.",
    location: "Bangalore, Karnataka, India",
    isLeadership: true,
  },
  {
    id: "nisha-jha",
    name: "Nisha Jha",
    role: "Studio Operations Lead",
    bio: "Drives internal operational workflows, project execution quality, and collaborative studio practice delivery.",
    location: "Bangalore, Karnataka, India",
    isLeadership: true,
  },
  {
    id: "prerna-chaudhary",
    name: "Prerna Chaudhary",
    role: "Client Strategy & Practice Lead",
    bio: "Oversees multidisciplinary client delivery pipelines, strategic communications, and cross-practice coordination.",
    location: "Bangalore, Karnataka, India",
    isLeadership: true,
  },
  {
    id: "devesh-kumar-jha",
    name: "Devesh Kumar Jha",
    role: "Studio Finance & Commercial Operations",
    bio: "Manages studio budgeting, commercial billing schedules, financial operations, and contract administration.",
    location: "Bangalore, Karnataka, India",
    isLeadership: true,
  },
  {
    id: "diya-pandey",
    name: "Diya Pandey",
    role: "Project Manager",
    bio: "Directs client communication pipelines, sprint timelines, deliverable milestones, and multidisciplinary execution squads.",
    location: "Bangalore, Karnataka, India",
  },
  {
    id: "piyush-pathak",
    name: "Piyush Pathak",
    role: "Head of Technology & Web Operations",
    bio: "Leads technical infrastructure, WebGL 3D graphics engineering, high-performance web systems, and custom automation architecture.",
    location: "Bangalore, Karnataka, India",
  },
];

export const LEADERSHIP: TeamMember = {
  id: "leadership-founder",
  name: FOUNDER_DATA.name,
  role: FOUNDER_DATA.title,
  bio: FOUNDER_DATA.bio,
  location: FOUNDER_DATA.location,
  imagePlaceholder: FOUNDER_DATA.imagePlaceholder,
  isLeadership: true,
};

export const STUDIO_PRINCIPLES = [
  { number: '01', title: 'Design for Durability', description: 'Build systems and identities designed to last across industry cycles.' },
  { number: '02', title: 'Performance First', description: 'Ship high-performance web and 3D experiences engineered for speed and reliability.' },
  { number: '03', title: 'Systems Thinking', description: 'Combine creative strategy with technical systems and automation for scalable outcomes.' },
];

export const DISCIPLINES_COLLECTIVE = RAW_DISCIPLINES.map((d) => ({
  team: d.title,
  focus: d.tagline,
  location: 'Bangalore',
  headcount: '3-6',
}));
