export interface MethodStage {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const METHOD_STAGES: MethodStage[] = [
  {
    number: "01",
    title: "Discover",
    tagline: "First-principles research & market immersion",
    description: "We deconstruct the business model, technical constraints, category landscape, and target audience expectations to identify clear operational levers.",
    deliverables: ["Systems Architecture Audit", "Competitive Landscape Matrix", "Technical Feasibility Study"]
  },
  {
    number: "02",
    title: "Define",
    tagline: "Strategic positioning & scope blueprint",
    description: "We crystallize the strategic positioning, narrative framework, technical stack choices, and delivery milestone roadmaps.",
    deliverables: ["Strategic Positioning Brief", "Functional Technical Spec", "Sprint Milestone Schedule"]
  },
  {
    number: "03",
    title: "Design",
    tagline: "Brand systems & spatial 3D interfaces",
    description: "We craft custom typographic hierarchies, visual identity tokens, high-fidelity UI layouts, and interactive 3D spatial prototypes.",
    deliverables: ["Design Token Registry", "Interactive 3D Prototypes", "Component System Specs"]
  },
  {
    number: "04",
    title: "Build",
    tagline: "High-performance engineering & AI pipelines",
    description: "We write clean, typed codebases, integrate custom multi-agent LLM workflows, optimize WebGL frame rates, and establish CI/CD pipelines.",
    deliverables: ["Production Web Application", "AI Agent Pipelines", "Automated Testing Suite"]
  },
  {
    number: "05",
    title: "Amplify",
    tagline: "Launch execution & narrative distribution",
    description: "We execute coordinated market launches, digital PR syndication, paid growth testing, and search index optimization.",
    deliverables: ["Tier-1 Media Distribution", "Performance Growth Funnels", "Telemetry Monitoring"]
  },
  {
    number: "06",
    title: "Evolve",
    tagline: "Continuous iteration & intelligent automation",
    description: "We monitor telemetry, user retention, and system reliability—iterating features and automating operational bottlenecks for long-term category durability.",
    deliverables: ["Quarterly System Upgrades", "Automated Knowledge Extraction", "Performance Retainers"]
  }
];
