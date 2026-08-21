import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/caseStudies';
import { DISCIPLINES } from '../data/disciplines';
import { RATE_CARD_MODULES, CELEBRATION_OFFER_INFO } from '../data/rateCard';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { ArticleModal } from '../components/ArticleModal';
import { SpatialDeviceScene } from '../components/SpatialDeviceScene';
import { ThreeHeroScene } from '../components/ThreeHeroScene';
import { InstagramReelPhone } from '../components/InstagramReelPhone';
import { CaseStudy, InsightArticle } from '../types';
import { useCurrency } from '../utils/currency';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Cpu,
  Layers,
  Volume2,
  Flame
} from 'lucide-react';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [activeDisciplineTab, setActiveDisciplineTab] = useState(DISCIPLINES[0].id);
  const [selectedWorkFilter, setSelectedWorkFilter] = useState('ALL');
  const [currency, setCurrency] = useCurrency();

  const activeDiscipline = DISCIPLINES.find((d) => d.id === activeDisciplineTab) || DISCIPLINES[0];

  const filteredCases = CASE_STUDIES.filter((cs) => {
    if (selectedWorkFilter === 'ALL') return true;
    if (selectedWorkFilter === 'INDIAN') return cs.region === 'INDIAN';
    if (selectedWorkFilter === 'INTERNATIONAL') return cs.region === 'INTERNATIONAL';
    if (selectedWorkFilter === 'DIGITAL_3D') return cs.projectType === 'CONCEPT' || cs.category.toLowerCase().includes('3d') || cs.category.toLowerCase().includes('brand');
    return true;
  });

  // Card 3D tilt tracking handler
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const nx = (x - rect.width / 2) / (rect.width / 2);
    const ny = (y - rect.height / 2) / (rect.height / 2);

    card.style.transform = `perspective(1000px) rotateX(${-ny * 7}deg) rotateY(${nx * 7}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)`;
  };

  return (
    <div style={{ position: 'relative' }}>
      
      {/* Studio Background Ambience & Lighting Grid */}
      <div className="studio-backdrop">
        <div className="studio-grid-panels" />
        <div className="studio-wire wire-left" />
        <div className="studio-wire wire-right" />
      </div>

      {/* Real-time 3D Particle Cloud & Monolith Scene */}
      <ThreeHeroScene />

      {/* =========================================================================
          1. 3D SPATIAL DEVICE HERO SHOWCASE
          ========================================================================= */}
      <section
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - var(--header-height))',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 'calc(var(--header-height) + 1.25rem)',
          paddingBottom: '2.5rem',
          zIndex: 5,
        }}
        aria-label="3D Spatial Showcase"
      >
        <div className="container" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SpatialDeviceScene
            onNavigate={navigate}
          />
        </div>
      </section>

      {/* Marquee Ticker Bar with Continuous Smooth Scroll */}
      <div className="marquee-ticker" style={{ position: 'relative', zIndex: 10 }} aria-hidden="true">
        <div className="marquee-track">
          <div className="marquee-item">
            <span className="highlight">$120M+</span> RAISED BY CLIENTS
            <span className="marquee-separator">/</span>
            <span className="highlight">+30%</span> MARGIN GAIN POST-REBRAND
            <span className="marquee-separator">/</span>
            <span className="highlight">2.3X</span> CONVERSION LIFT POST-LAUNCH
            <span className="marquee-separator">/</span>
            <span className="highlight">60 FPS</span> 3D SPATIAL WEB
            <span className="marquee-separator">/</span>
            <span className="highlight">TOP 1%</span> CRAFT & STRATEGY
            <span className="marquee-separator">/</span>
          </div>
          <div className="marquee-item">
            <span className="highlight">$120M+</span> RAISED BY CLIENTS
            <span className="marquee-separator">/</span>
            <span className="highlight">+30%</span> MARGIN GAIN POST-REBRAND
            <span className="marquee-separator">/</span>
            <span className="highlight">2.3X</span> CONVERSION LIFT POST-LAUNCH
            <span className="marquee-separator">/</span>
            <span className="highlight">60 FPS</span> 3D SPATIAL WEB
            <span className="marquee-separator">/</span>
            <span className="highlight">TOP 1%</span> CRAFT & STRATEGY
            <span className="marquee-separator">/</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. NARRATIVE SECTION: "• Who we are" / The Perception Gap
          ========================================================================= */}
      <section
        className="agency-section"
        style={{ backgroundColor: 'rgba(15, 15, 21, 0.75)', backdropFilter: 'blur(20px)', position: 'relative', zIndex: 10 }}
        aria-label="Who We Are"
      >
        <div className="container">
          <div className="agency-grid">
            
            {/* Left Sidebar Indicator */}
            <div className="agency-sidebar">
              <div className="agency-indicator">
                <span className="agency-indicator-dot" />
                <span>Who we are</span>
              </div>
            </div>

            {/* Right Main Content Grid */}
            <div className="agency-content">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: 'clamp(2.5rem, 6vw, 5rem)',
                  alignItems: 'center',
                }}
              >
                {/* Left Column: Narrative Copy matching reference screenshot */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                        fontWeight: 800,
                        lineHeight: 1.08,
                        letterSpacing: '-0.035em',
                        color: 'var(--text-primary)',
                        marginBottom: '1rem',
                      }}
                    >
                      The Perception Gap.
                    </h2>

                    <p
                      style={{
                        fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                        color: 'var(--text-primary)',
                        lineHeight: 1.45,
                        fontWeight: 500,
                        marginBottom: '2rem',
                      }}
                    >
                      We distill your company's core ambition into category-defining digital presence and 3D web experiences.
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      Strategy. Execution. Impact.
                    </h3>

                    <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                      We find the exact pressure points between how you operate and how the market perceives you. Every brand architecture, 3D WebGL platform, and AI automation engine is engineered to cut through noise and command market leadership.
                    </p>

                    <div>
                      <button
                        onClick={() => navigate('/about')}
                        className="btn-pill btn-pill-dark"
                        style={{ padding: '0.85rem 1.85rem' }}
                      >
                        <span>About us</span>
                        <Volume2 size={16} color="var(--text-primary)" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column: Interactive Instagram Reel iPhone with "pr" logo & floating badge */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <InstagramReelPhone />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SELECTED WORK SECTION: "• Selected Work" / Ground-Zero Client Transformations
          ========================================================================= */}
      <section
        className="agency-section"
        style={{ backgroundColor: 'var(--bg-primary)', position: 'relative', zIndex: 10 }}
        aria-label="Selected Work"
      >
        <div className="container">
          <div className="agency-grid">
            
            {/* Left Sidebar Indicator */}
            <div className="agency-sidebar">
              <div className="agency-indicator">
                <span className="agency-indicator-dot" />
                <span>Client Portfolio</span>
              </div>
            </div>

            {/* Right Main Content */}
            <div className="agency-content">
              
              <div style={{ maxWidth: '850px', marginBottom: '2.5rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 700, letterSpacing: '0.08em' }}>
                    GROUND-ZERO TO MARKET LEADERSHIP
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
                    fontWeight: 800,
                    lineHeight: 1.12,
                    letterSpacing: '-0.035em',
                    color: 'var(--text-primary)',
                    marginBottom: '0.85rem',
                  }}
                >
                  Enterprises & startups that closed the perception gap
                </h2>
                <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  From offline storefronts and traditional workshops in India to bespoke ateliers in Europe and Japan—we build end-to-end digital footprints, commercial media shoots, brand SEO, and PR systems that command market authority.
                </p>
              </div>

              {/* Filter Pills with Smooth Glowing Expansion */}
              <div className="filter-pills-bar">
                {[
                  { id: 'ALL', label: `All Case Studies (${CASE_STUDIES.length})` },
                  { id: 'INDIAN', label: 'Indian Startups & Offline Transitions (10)' },
                  { id: 'INTERNATIONAL', label: 'International Deployments (4)' },
                  { id: 'DIGITAL_3D', label: '3D Web & Brand Systems' },
                ].map((pill) => (
                  <button
                    key={pill.id}
                    onClick={() => setSelectedWorkFilter(pill.id)}
                    className={`filter-pill ${selectedWorkFilter === pill.id ? 'active' : ''}`}
                  >
                    <span>{pill.label}</span>
                  </button>
                ))}
              </div>

              {/* Grid of Modern Agency Case Cards with 3D Tilt Physics */}
              <div className="case-card-grid">
                {filteredCases.map((cs) => (
                  <div
                    key={cs.id}
                    className="agency-case-card animate-spatial-in"
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                    onClick={() => setSelectedCaseStudy(cs)}
                  >
                    <div className="agency-case-img-wrap">
                      <img
                        src={cs.heroImage}
                        alt={cs.title}
                        className="agency-case-img"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80';
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '1rem',
                          left: '1rem',
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.4rem',
                          zIndex: 5,
                        }}
                      >
                        {cs.projectType === 'CONCEPT' ? (
                          <span className="badge-tag badge-tag--concept">Concept</span>
                        ) : (
                          <span className="badge-tag" style={{ borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }}>
                            Real Client
                          </span>
                        )}
                        <span className="badge-tag">{cs.category}</span>
                      </div>

                      {/* Location Chip Bottom-Right of Image */}
                      {cs.location && (
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '0.85rem',
                            right: '0.85rem',
                            backgroundColor: 'rgba(5, 5, 8, 0.85)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '999px',
                            padding: '0.3rem 0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.75rem',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-mono)',
                            zIndex: 5,
                          }}
                        >
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
                          <span>{cs.location}</span>
                        </div>
                      )}
                    </div>

                    <div className="agency-case-body">
                      <div>
                        {/* Baseline Status Warning Tag if Offline */}
                        {cs.baselineStatus && (
                          <div style={{ marginBottom: '0.45rem' }}>
                            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#ff9800', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                              BASELINE: {cs.baselineStatus}
                            </span>
                          </div>
                        )}

                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.35rem',
                            fontWeight: 800,
                            color: 'var(--text-primary)',
                            marginBottom: '0.65rem',
                          }}
                        >
                          {cs.title}
                        </h3>
                        <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                          {cs.headline}
                        </p>
                      </div>

                      {/* Tags Bar */}
                      {cs.tags && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                          {cs.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              style={{
                                fontSize: '0.72rem',
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--text-muted)',
                                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                padding: '0.2rem 0.5rem',
                                borderRadius: '4px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingTop: '1rem',
                          borderTop: '1px solid var(--border-subtle)',
                        }}
                      >
                        <span style={{ fontSize: '0.825rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                          {cs.impactMetrics[0]?.value} {cs.impactMetrics[0]?.label}
                        </span>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 600 }}>
                          <span>View Case Study</span>
                          <ArrowUpRight size={15} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Works CTA */}
              <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                <button
                  onClick={() => navigate('/work')}
                  className="btn-pill btn-pill-outline"
                  style={{ padding: '0.95rem 2.25rem' }}
                >
                  <span>Explore Complete Portfolio & Archives</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3.5. DUAL-CURRENCY RATE CARD & 30% CELEBRATION OFFER SECTION
          ========================================================================= */}
      <section
        className="agency-section"
        style={{
          backgroundColor: '#050508',
          position: 'relative',
          zIndex: 10,
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
        aria-label="Core Service Offerings and Rate Card"
      >
        <div className="container">
          <div className="agency-grid">
            
            {/* Left Sidebar Indicator */}
            <div className="agency-sidebar">
              <div className="agency-indicator">
                <span className="agency-indicator-dot" style={{ backgroundColor: '#ff9800' }} />
                <span>Rate Card & Offer</span>
              </div>
            </div>

            {/* Right Main Content */}
            <div className="agency-content">
              
              {/* Limited Time Celebration Banner */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.12) 0%, rgba(0, 229, 255, 0.08) 100%)',
                  border: '1px solid rgba(255, 152, 0, 0.4)',
                  borderRadius: '24px',
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  marginBottom: '3.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 0 35px rgba(255, 152, 0, 0.15)',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', backgroundColor: 'rgba(255, 152, 0, 0.2)', padding: '0.4rem 0.9rem', borderRadius: '999px', border: '1px solid rgba(255, 152, 0, 0.5)' }}>
                    <Flame size={16} color="#ff9800" />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#ffb74d', fontWeight: 800, letterSpacing: '0.08em' }}>
                      LIMITED TIME CELEBRATION OFFER
                    </span>
                  </div>

                  {/* Currency Switcher */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      borderRadius: '999px',
                      padding: '0.25rem',
                      border: '1px solid var(--border-subtle)',
                      gap: '0.25rem',
                    }}
                  >
                    <button
                      onClick={() => setCurrency('INR')}
                      style={{
                        padding: '0.4rem 0.9rem',
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        backgroundColor: currency === 'INR' ? 'var(--accent-cyan)' : 'transparent',
                        color: currency === 'INR' ? '#000' : 'var(--text-secondary)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      ₹ INR (India)
                    </button>
                    <button
                      onClick={() => setCurrency('USD')}
                      style={{
                        padding: '0.4rem 0.9rem',
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        backgroundColor: currency === 'USD' ? 'var(--accent-cyan)' : 'transparent',
                        color: currency === 'USD' ? '#000' : 'var(--text-secondary)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      $ USD (Global)
                    </button>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                    marginBottom: '0.6rem',
                  }}
                >
                  {CELEBRATION_OFFER_INFO.title}
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '720px', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {CELEBRATION_OFFER_INFO.subheading}. {CELEBRATION_OFFER_INFO.validity}.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <button
                    onClick={() => navigate('/book-a-project')}
                    className="btn-pill btn-pill-light"
                    style={{ backgroundColor: '#ff9800', color: '#000', borderColor: '#ff9800' }}
                  >
                    <span>{CELEBRATION_OFFER_INFO.ctaText}</span>
                    <ArrowUpRight size={16} />
                  </button>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#ffb74d' }}>
                    *Direct execution by senior PR Groups specialists with zero agency overhead.
                  </span>
                </div>
              </div>

              {/* Rate Card Heading */}
              <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
                    color: 'var(--text-primary)',
                    marginBottom: '0.85rem',
                  }}
                >
                  Core Service Offerings & Dual-Currency Rate Card
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  Transparent, dual-currency pricing structure engineered for Indian startups, traditional offline merchants, and global enterprises.
                </p>
              </div>

              {/* 3 Categories Rate Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {[
                  'Commercial Production & Visual Media',
                  'Brand SEO & Digital Footprint',
                  'Public Relations & Media Distribution'
                ].map((catName) => {
                  const catModules = RATE_CARD_MODULES.filter((m) => m.category === catName);
                  return (
                    <div key={catName}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          paddingBottom: '0.85rem',
                          borderBottom: '1px solid var(--border-subtle)',
                          marginBottom: '1.5rem',
                        }}
                      >
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
                        <h4
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--text-primary)',
                          }}
                        >
                          {catName}
                        </h4>
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                          gap: '1.5rem',
                        }}
                      >
                        {catModules.map((module) => {
                          const standard = currency === 'INR' ? module.standardRateINR : module.standardRateUSD;
                          const celebration = currency === 'INR' ? module.celebrationOfferINR : module.celebrationOfferUSD;

                          return (
                            <div
                              key={module.id}
                              style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: '20px',
                                padding: '1.75rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 12px 30px var(--accent-glow-primary)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                              }}
                            >
                              <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.85rem' }}>
                                  <h5
                                    style={{
                                      fontFamily: 'var(--font-display)',
                                      fontSize: '1.25rem',
                                      fontWeight: 800,
                                      color: 'var(--text-primary)',
                                    }}
                                  >
                                    {module.name}
                                  </h5>
                                  <span
                                    style={{
                                      fontSize: '0.72rem',
                                      fontFamily: 'var(--font-mono)',
                                      fontWeight: 800,
                                      color: '#10b981',
                                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                      border: '1px solid rgba(16, 185, 129, 0.3)',
                                      padding: '0.2rem 0.55rem',
                                      borderRadius: '999px',
                                      whiteSpace: 'nowrap',
                                    }}
                                  >
                                    {module.discountBadge}
                                  </span>
                                </div>

                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                  {module.scope}
                                </p>
                              </div>

                              <div>
                                <div
                                  style={{
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    gap: '0.85rem',
                                    paddingTop: '1.25rem',
                                    borderTop: '1px solid var(--border-subtle)',
                                    marginBottom: '1.25rem',
                                  }}
                                >
                                  <div>
                                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>
                                      Standard Rate
                                    </span>
                                    <span style={{ fontSize: '1rem', color: 'var(--text-muted)', textDecoration: 'line-through', fontFamily: 'var(--font-mono)' }}>
                                      {standard}
                                    </span>
                                  </div>

                                  <div>
                                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#ff9800', display: 'block', fontWeight: 700, textTransform: 'uppercase' }}>
                                      30% Celebration Rate
                                    </span>
                                    <span
                                      style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.5rem',
                                        fontWeight: 800,
                                        color: 'var(--accent-cyan)',
                                        lineHeight: 1,
                                      }}
                                    >
                                      {celebration}
                                    </span>
                                  </div>
                                </div>

                                <button
                                  onClick={() => navigate('/book-a-project')}
                                  className="btn-pill btn-pill-outline"
                                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.65rem 1rem' }}
                                >
                                  <span>Commission Module</span>
                                  <ArrowUpRight size={14} />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <p
                style={{
                  marginTop: '2.75rem',
                  maxWidth: '720px',
                  fontSize: '0.7rem',
                  lineHeight: 1.65,
                  color: 'var(--text-muted)',
                  opacity: 0.55,
                  fontWeight: 400,
                }}
              >
                Note: All services are delivered on a best-effort basis. No specific reach, impressions, engagement, followers, conversions, revenue, or performance outcome is guaranteed. Results may vary due to audience behaviour, market dynamics, platform algorithms, competition, and third-party policies. Past results do not constitute a guarantee of future performance.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SERVICES & PRACTICES SECTION
          ========================================================================= */}
      <section
        className="agency-section"
        style={{ backgroundColor: 'var(--bg-surface)', position: 'relative', zIndex: 10 }}
        aria-label="Services and Practices"
      >
        <div className="container">
          <div className="agency-grid">
            
            {/* Left Sidebar Indicator */}
            <div className="agency-sidebar">
              <div className="agency-indicator">
                <span className="agency-indicator-dot" />
                <span>Services & Practices</span>
              </div>
            </div>

            {/* Right Main Content */}
            <div className="agency-content">
              <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: '-0.035em',
                    color: 'var(--text-primary)',
                    marginBottom: '0.85rem',
                  }}
                >
                  Unified multidisciplinary capability under one roof
                </h2>
                <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)' }}>
                  We bridge the divide between brand strategy, high-fidelity engineering, 3D WebGL, and custom AI automation.
                </p>
              </div>

              {/* Discipline Tabs with Smooth Expandable Transition */}
              <div className="filter-pills-bar">
                {DISCIPLINES.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setActiveDisciplineTab(d.id)}
                    className={`filter-pill ${activeDisciplineTab === d.id ? 'active' : ''}`}
                  >
                    <span>{d.number} {d.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Discipline Feature Card with 3D Spatial Depth Transition */}
              <div
                key={activeDiscipline.id}
                className="animate-spatial-in"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '24px',
                  padding: 'clamp(1.75rem, 4vw, 3rem)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px var(--accent-glow-primary)',
                }}
              >
                <div style={{ marginBottom: '2rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                    PRACTICE {activeDiscipline.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginTop: '0.4rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {activeDiscipline.title}
                  </h3>
                  <p style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '1rem' }}>
                    {activeDiscipline.tagline}
                  </p>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '780px' }}>
                    {activeDiscipline.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '2rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--border-subtle)',
                    marginBottom: '2rem',
                  }}
                >
                  {/* Capabilities */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <Layers size={16} color="var(--accent-cyan)" />
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        Core Capabilities
                      </span>
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {activeDiscipline.capabilities.map((cap, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                          <Check size={14} color="var(--accent-cyan)" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack & Deliverables */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <Cpu size={16} color="var(--accent-cyan)" />
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        Technology & Tooling
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                      {activeDiscipline.stack.map((st) => (
                        <span key={st} className="badge-tag">
                          {st}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                        Deliverables
                      </span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {activeDiscipline.deliverables.join(' • ')}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <button
                    onClick={() => navigate('/book-a-project')}
                    className="btn-pill btn-pill-light"
                    style={{ fontSize: '0.875rem' }}
                  >
                    <span>Commission This Practice</span>
                    <ArrowUpRight size={15} />
                  </button>
                  <button
                    onClick={() => navigate('/services')}
                    className="btn-pill btn-pill-outline"
                    style={{ fontSize: '0.875rem' }}
                  >
                    <span>View All Services</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. FINAL CTA SECTION: "• Let's Talk"
          ========================================================================= */}
      <section
        className="agency-section"
        style={{ backgroundColor: '#09090e', borderBottom: 'none', padding: 'clamp(5rem, 8vw, 8rem) 0' }}
        aria-label="Contact PR Groups"
      >
        <div className="container">
          <div className="agency-grid">
            <div className="agency-sidebar">
              <div className="agency-indicator">
                <span>05 — Contact</span>
              </div>
            </div>

            <div className="agency-content">
              <div style={{ maxWidth: '850px' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    lineHeight: 1.05,
                    color: 'var(--text-primary)',
                    marginBottom: '1.75rem',
                  }}
                >
                  Ready to start?
                </h2>
                <p
                  style={{
                    fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '2.5rem',
                  }}
                >
                  Tell us about your project — funding prep, market expansion, rebrand, or a new digital product. We respond within one business day.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                  <button
                    onClick={() => navigate('/book-a-project')}
                    className="btn-pill btn-pill-light"
                    style={{ fontSize: '1rem', padding: '0.95rem 2rem' }}
                  >
                    <span>Book a call</span>
                  </button>

                  <a
                    href="mailto:support@prgroups.in"
                    className="btn-pill btn-pill-outline"
                    style={{ fontSize: '1.0625rem', padding: '1rem 2.25rem' }}
                  >
                    <span>support@prgroups.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          navigate={navigate}
        />
      )}

      {/* Article Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          navigate={navigate}
        />
      )}

    </div>
  );
};

