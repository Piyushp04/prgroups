import { TeamMember } from '../types';
import { DISCIPLINES as RAW_DISCIPLINES } from './disciplines';

export const FOUNDER_DATA = {
  name: "Pratyush Kumar Jha",
  title: "Founder & CEO, PR Groups",
  headline: "BUILDING AT THE INTERSECTION OF CREATIVITY AND TECHNOLOGY.",
  bio: "Pratyush Kumar Jha is the Founder & CEO of PR Groups, leading a multidisciplinary creative-technology venture focused on brand transformation, digital experiences, intelligent automation and emerging technology. His approach combines creative direction with technology-led thinking, with an emphasis on building distinctive systems and experiences that help ambitious businesses communicate, operate and grow in a digital-first world.",
  location: "Bangalore, Karnataka, India",
  imagePlaceholder: "/assets/images/founder-placeholder.jpg",
};

export const PEOPLE_DATA: TeamMember[] = [
  {
    id: "pratyush-kumar-jha",
    name: "Pratyush Kumar Jha",
    role: "Founder & CEO",
    bio: "Leads strategic vision, creative direction, and creative-technology architecture across all active disciplines.",
    location: "Bangalore, Karnataka, India",
    isLeadership: true,
  },
  {
    id: "prerna-chaudhary",
    name: "Prerna Chaudhary",
    role: "Co-Founder",
    bio: "Oversees multidisciplinary operations, strategic partnerships, and organizational growth.",
    location: "Bangalore, Karnataka, India",
    isLeadership: true,
  },
  {
    id: "diya-pandey",
    name: "Diya Pandey",
    role: "Project Manager",
    bio: "Directs client communication pipelines, sprint timelines, and multidisciplinary execution squads.",
    location: "Bangalore, Karnataka, India",
  },
  {
    id: "devesh-kumar-jha",
    name: "Devesh Kumar Jha",
    role: "[Title to confirm]",
    bio: "Practice specialist collaborating across digital technology and creative execution.",
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
