import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { LEADERSHIP, STUDIO_PRINCIPLES } from '../data/team';
import { ArrowUpRight, MapPin, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigate }) => {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '6rem' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              ABOUT PR GROUPS
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '1.5rem',
              color: 'var(--text-primary)',
            }}
          >
            CREATIVE STRATEGY.<br />
            INTELLIGENT SYSTEMS.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: 1.65 }}>
            PR Groups brings strategy, design, technology and intelligent systems together to help ambitious businesses build stronger identities, better experiences and more connected digital ecosystems.
          </p>
        </div>

        {/* Narrative & Studio Overview */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
            marginBottom: '6rem',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.15,
              }}
            >
              STRUCTURED AS A COMPANY, NOT A FREELANCE COLLECTIVE.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <p>
                PR Groups operates as a unified multidisciplinary company headquartered in Bangalore. We do not operate as solo freelancers or fragmented sub-contractors. We assemble dedicated squads across brand strategy, 3D Web engineering, custom AI automation, and communications.
              </p>
              <p>
                Under the leadership of Founder & CEO <strong>Pratyush Kumar Jha</strong>, our team works directly with founders and enterprise executives to solve high-stakes product and brand challenges.
              </p>
              <p>
                Whether architecting a generative design system, building 60 FPS WebGL experiences, or deploying multi-agent LLM pipelines, we deliver production-ready assets and systems designed for long-term category durability.
              </p>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              border: '1px solid var(--border-subtle)',
              borderRadius: '26px',
              overflow: 'hidden',
              backgroundColor: '#07070b',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 25px var(--accent-glow-primary)',
            }}
          >
            <img
              src="/assets/images/office.jpg"
              alt="PR Groups Studio in Bangalore"
              style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block', opacity: 0.95 }}
              onError={(e) => {
                e.currentTarget.src = '/assets/images/studio.jpg';
              }}
            />
            <div
              style={{
                backgroundColor: '#07070c',
                padding: '1.75rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <MapPin size={16} color="var(--accent-cyan)" />
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>Office Location</strong>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                {COMPANY_INFO.studioOffice.address}
              </p>
            </div>
          </div>
        </div>

        {/* Operating Principles */}
        <div style={{ marginBottom: '6rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                PRINCIPLES
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
              }}
            >
              OPERATING PRINCIPLES
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {STUDIO_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                style={{
                  backgroundColor: 'rgba(15, 15, 22, 0.65)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '24px',
                  padding: '2.25rem 2rem',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'var(--accent-cyan)',
                    marginBottom: '1rem',
                  }}
                >
                  {principle.number}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {principle.title}
                </h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Leadership & Statutory Entity Box */}
        <div
          style={{
            backgroundColor: '#07070c',
            border: '1px solid var(--border-medium)',
            borderRadius: '28px',
            padding: 'clamp(1.5rem, 4vw, 3.5rem)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                maxHeight: '400px',
                minHeight: '280px',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#111118',
                boxShadow: '0 18px 45px rgba(0, 0, 0, 0.55)',
              }}
            >
              <img
                src={LEADERSHIP.imagePlaceholder}
                alt={`${LEADERSHIP.name}, Founder and Sole Proprietor of PR Groups`}
                style={{ width: '100%', height: '100%', minHeight: '280px', maxHeight: '400px', objectFit: 'cover', display: 'block' }}
                onError={(event) => {
                  event.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>

            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                  LEADERSHIP
                </span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem',
                }}
              >
                {LEADERSHIP.name}
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--accent-cyan)',
                  marginBottom: '1.25rem',
                }}
              >
                Founder & Sole Proprietor, PR Groups
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                {LEADERSHIP.bio}
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={() => navigate('/people')}
                  className="btn-pill btn-pill-light"
                >
                  <span>View People & Squads</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>

            {/* Entity Architecture Box */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <ShieldCheck size={18} color="var(--accent-cyan)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  REGISTERED ENTITY STRUCTURE
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>PUBLIC BRAND</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{COMPANY_INFO.brandName}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>LEGAL ENTITY</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{COMPANY_INFO.legalEntity}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>OFFICE LOCATION</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{COMPANY_INFO.studioOffice.address}</span>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>REGISTERED JURISDICTION</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{COMPANY_INFO.registeredOffice.address}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

