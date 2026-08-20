import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/caseStudies';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { CaseStudy } from '../types';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';

interface WorkPageProps {
  navigate: (path: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ navigate }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const filters = [
    { id: 'all', label: `All Case Studies (${CASE_STUDIES.length})` },
    { id: 'indian', label: 'Indian Startups & Offline Transitions (10)' },
    { id: 'international', label: 'International Deployments (4)' },
    { id: 'media', label: 'Commercial Media & Video Shoots' },
    { id: 'seo_identity', label: 'Brand SEO & Digital Identity' },
    { id: 'pr', label: 'Public Relations & Press' },
  ];

  const filteredCases = CASE_STUDIES.filter((c) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'indian') return c.region === 'INDIAN';
    if (activeFilter === 'international') return c.region === 'INTERNATIONAL';
    if (activeFilter === 'media') {
      return (
        c.services.some((s) => s.toLowerCase().includes('shoot') || s.toLowerCase().includes('photo') || s.toLowerCase().includes('video')) ||
        (c.tags && c.tags.some((t) => t.toLowerCase().includes('shoot') || t.toLowerCase().includes('photo') || t.toLowerCase().includes('video')))
      );
    }
    if (activeFilter === 'seo_identity') {
      return (
        c.services.some((s) => s.toLowerCase().includes('seo') || s.toLowerCase().includes('identity') || s.toLowerCase().includes('web') || s.toLowerCase().includes('indexing')) ||
        (c.tags && c.tags.some((t) => t.toLowerCase().includes('seo') || t.toLowerCase().includes('indexing') || t.toLowerCase().includes('identity')))
      );
    }
    if (activeFilter === 'pr') {
      return (
        c.services.some((s) => s.toLowerCase().includes('pr') || s.toLowerCase().includes('press') || s.toLowerCase().includes('pitching') || s.toLowerCase().includes('media')) ||
        (c.tags && c.tags.some((t) => t.toLowerCase().includes('pr') || t.toLowerCase().includes('press')))
      );
    }
    return true;
  });

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
    <div style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '6rem' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ maxWidth: '880px', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-cyan)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
              VERIFIED CLIENT PORTFOLIO & ARCHIVES
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.08,
              marginBottom: '1.5rem',
              color: 'var(--text-primary)',
            }}
          >
            Ground-zero digital onboarding & global market leadership
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Explore our verified client transformations across India, Europe, Japan, and the Middle East—taking traditional offline businesses from zero digital footprint to verified search ranking, viral commercial media, and high-ROI revenue channels.
          </p>
        </div>

        {/* Filter Bar with Smooth Expanding Glow Pills */}
        <div className="filter-pills-bar" style={{ marginBottom: '3.5rem' }}>
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`filter-pill ${activeFilter === f.id ? 'active' : ''}`}
            >
              <span>{f.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Agency Grid with 3D Tilt Cards */}
        <div className="case-card-grid" style={{ marginBottom: '5rem' }}>
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              className="agency-case-card"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              onClick={() => setSelectedCaseStudy(cs)}
            >
              <div className="agency-case-img-wrap">
                <img src={cs.heroImage} alt={cs.title} className="agency-case-img" />
                
                {/* Top Tags */}
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

                {/* Location Badge on Card Image */}
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
                    <MapPin size={12} color="var(--accent-cyan)" />
                    <span>{cs.location}</span>
                  </div>
                )}
              </div>

              <div className="agency-case-body">
                <div>
                  {cs.baselineStatus && (
                    <div style={{ marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#ff9800', fontWeight: 700, textTransform: 'uppercase' }}>
                        BASELINE: {cs.baselineStatus}
                      </span>
                    </div>
                  )}

                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '0.65rem',
                    }}
                  >
                    {cs.title}
                  </h2>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {cs.headline}
                  </p>
                </div>

                {/* Tags */}
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
                    <span>View Case</span>
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking & Inquiries Banner */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-medium)',
            borderRadius: '24px',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              READY TO COMMENCE YOUR TRANSFORMATION?
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
              }}
            >
              Partner with PR Group Today
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Custom Production Schedules, Ground-Zero Digital Identity Buildout & Strategic Brand Consultations.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <button
              onClick={() => navigate('/book-a-project')}
              className="btn-pill btn-pill-light"
              style={{ padding: '0.85rem 1.85rem' }}
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight size={16} />
            </button>
            <a
              href="tel:+917282943120"
              className="btn-pill btn-pill-outline"
              style={{ padding: '0.85rem 1.85rem' }}
            >
              <Phone size={16} />
              <span>+91 7282943120</span>
            </a>
          </div>
        </div>

        {/* Case Study Modal */}
        {selectedCaseStudy && (
          <CaseStudyModal
            caseStudy={selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
            navigate={navigate}
          />
        )}

      </div>
    </div>
  );
};


