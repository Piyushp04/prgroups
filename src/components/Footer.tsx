import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { DISCIPLINES } from '../data/disciplines';
import { ArrowUpRight, ShieldCheck, Mail, MapPin, Building2 } from 'lucide-react';

interface FooterProps {
  navigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer
      style={{
        backgroundColor: '#040406',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '5rem',
        paddingBottom: '3.5rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        
        {/* Top Section: Editorial Heading & Project CTA */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(255, 180, 0, 0.5)',
                  boxShadow: '0 0 18px rgba(255, 180, 0, 0.35), 0 0 30px var(--accent-glow-primary)',
                  backgroundColor: '#050508',
                }}
              >
                <img src="/pr-groups-logo.jpg" alt="PR Groups Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '0.04em', color: 'var(--text-primary)', display: 'block', lineHeight: 1.1 }}>
                  PR GROUPS
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: '#ff3b30', textTransform: 'uppercase' }}>
                  BEYOND MARKETING. WE BUILD LEGACIES.
                </span>
              </div>
            </div>

            <div className="section-kicker">
              <span>Open for projects</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
              }}
            >
              Let's build something worth showing.
            </h2>
            <p style={{ maxWidth: '480px', color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.65 }}>
              Brand, digital, 3D, and production — tell us what you're working on.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => navigate('/book-a-project')}
                className="btn-pill btn-pill-light"
                style={{ fontSize: '0.9rem', padding: '0.75rem 1.6rem' }}
              >
                <span>Book a call</span>
                <ArrowUpRight size={16} />
              </button>
              <a
                href="mailto:support@prgroups.in"
                className="btn-pill btn-pill-outline"
                style={{ fontSize: '0.9rem', padding: '0.75rem 1.6rem' }}
              >
                <Mail size={16} />
                <span>support@prgroups.in</span>
              </a>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* Column 1: Exploration */}
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '1.25rem',
                }}
              >
                DIRECTORY
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  { label: 'Selected Work', path: '/work' },
                  { label: 'Capabilities & Services', path: '/services' },
                  { label: 'Company Story', path: '/about' },
                  { label: 'Leadership & People', path: '/people' },
                  { label: 'Editorial Insights', path: '/insights' },
                  { label: 'Book a Project', path: '/book-a-project' },
                ].map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => navigate(link.path)}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        transition: 'color var(--transition-fast)',
                        textAlign: 'left',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: 6 Disciplines */}
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '1.25rem',
                }}
              >
                6 DISCIPLINES
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {DISCIPLINES.map((discipline) => (
                  <li key={discipline.id}>
                    <button
                      onClick={() => navigate('/services')}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        textAlign: 'left',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {discipline.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Office & Contact */}
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '1.25rem',
                }}
              >
                OFFICE LOCATION
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.875rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.2rem' }}>
                    <MapPin size={14} color="var(--accent-cyan)" />
                    <span>Bangalore Office</span>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    {COMPANY_INFO.studioOffice.address}
                  </p>
                </div>

                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>
                    GENERAL INQUIRIES
                  </span>
                  <a href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>
                    {COMPANY_INFO.contact.primaryEmail}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Middle Section: Clean Statutory Entity Disclosures */}
        <div
          style={{
            padding: '2.5rem 0',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.015)',
            margin: '0 -1.5rem',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          }}
        >
          {/* Public Brand & Leadership */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Building2 size={16} color="var(--accent-cyan)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                ORGANIZATIONAL LEADERSHIP
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Public Brand: <strong style={{ color: 'var(--text-primary)' }}>{COMPANY_INFO.brandName}</strong>
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Founder & Sole Proprietor: <strong style={{ color: 'var(--text-primary)' }}>{COMPANY_INFO.founderAndCEO}</strong>
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Operational Studio: {COMPANY_INFO.studioOffice.address}
            </p>
          </div>

          {/* Legal Entity & Registered Address (Strictly separated) */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <ShieldCheck size={16} color="var(--accent-cyan)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                LEGAL ENTITY & JURISDICTION
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Legal Entity: <strong style={{ color: 'var(--text-primary)' }}>{COMPANY_INFO.legalEntity}</strong>
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              GST / Registered Address: {COMPANY_INFO.registeredOffice.address}
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '0.25rem' }}>
              Official Domain: <a href="https://prgroups.in" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)' }}>prgroups.in</a>
            </p>
          </div>

          {/* Grievance & Privacy Redressal Channel */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <ShieldCheck size={16} color="var(--accent-cyan)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                DPDP & GRIEVANCE REDRESSAL
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Privacy Officer: <strong style={{ color: 'var(--text-primary)' }}>{COMPANY_INFO.grievance.officer}</strong>
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Grievance Email: <a href={`mailto:${COMPANY_INFO.grievance.email}`} style={{ color: 'var(--accent-cyan)' }}>{COMPANY_INFO.grievance.email}</a>
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              SLA: Acknowledgement &lt; 48h • Resolution &lt; 30 days
            </p>
          </div>
        </div>

        {/* Discreet Best-Effort Performance Disclaimer Footnote */}
        <div
          style={{
            padding: '1.5rem 0',
            borderBottom: '1px solid var(--border-subtle)',
            fontSize: '0.72rem',
            lineHeight: 1.65,
            color: 'var(--text-muted)',
            opacity: 0.7,
          }}
        >
          {COMPANY_INFO.disclaimer.bestEffortNote}
        </div>

        {/* Bottom Section: Copyright & 7 Legal Policy Links */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.25rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            Registered under {COMPANY_INFO.legalEntity}.
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <button
              onClick={() => navigate('/privacy')}
              style={{ color: 'var(--text-muted)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              Privacy Policy (DPDP 2025)
            </button>
            <span>•</span>
            <button
              onClick={() => navigate('/terms')}
              style={{ color: 'var(--text-muted)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => navigate('/refund')}
              style={{ color: 'var(--text-muted)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              Refund Policy
            </button>
            <span>•</span>
            <button
              onClick={() => navigate('/disclaimer')}
              style={{ color: 'var(--text-muted)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              Disclaimers
            </button>
            <span>•</span>
            <button
              onClick={() => navigate('/grievance')}
              style={{ color: 'var(--text-muted)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              Grievance Redressal
            </button>
            <span>•</span>
            <button
              onClick={() => navigate('/cookies')}
              style={{ color: 'var(--text-muted)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              Cookie Notice
            </button>
            <span>•</span>
            <button
              onClick={() => navigate('/copyright')}
              style={{ color: 'var(--text-muted)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              Copyright & IP
            </button>
          </div>
        </div>

        <div
          style={{
            paddingTop: '1.5rem',
            marginTop: '1.25rem',
            borderTop: '1px solid var(--border-subtle)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.02em',
          }}
        >
          © 2026 PR Groups ({COMPANY_INFO.legalEntity}). All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};
