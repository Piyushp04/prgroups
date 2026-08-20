import React from 'react';
import { LEADERSHIP, DISCIPLINES_COLLECTIVE } from '../data/team';
import { UserCheck, Mail, MapPin } from 'lucide-react';

interface PeoplePageProps {
  navigate?: (path: string) => void;
}

export const PeoplePage: React.FC<PeoplePageProps> = () => {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '6rem' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              PEOPLE & LEADERSHIP
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
            PEOPLE & PRACTICE ARCHITECTURE.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: 1.65 }}>
            A multidisciplinary team of creative technologists, brand architects, 3D artists, and AI engineers operating from Bangalore under direct senior leadership.
          </p>
        </div>

        {/* Founder & CEO Card */}
        <div
          style={{
            padding: 'clamp(2rem, 5vw, 3.75rem)',
            marginBottom: '5rem',
            border: '1px solid var(--border-medium)',
            backgroundColor: '#07070c',
            borderRadius: '32px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 30px var(--accent-glow-primary)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(220px, 0.75fr) minmax(300px, 1.25fr) minmax(260px, 0.95fr)',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                minHeight: '360px',
                border: '1px solid var(--border-subtle)',
                borderRadius: '22px',
                overflow: 'hidden',
                backgroundColor: '#111118',
                boxShadow: '0 18px 45px rgba(0, 0, 0, 0.55)',
              }}
            >
              <img
                src={LEADERSHIP.imagePlaceholder}
                alt={`${LEADERSHIP.name}, Founder and CEO of PR Groups`}
                style={{ width: '100%', height: '100%', minHeight: '360px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <UserCheck size={16} color="var(--accent-cyan)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                  FOUNDER & CEO
                </span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.03em',
                  marginBottom: '0.25rem',
                }}
              >
                {LEADERSHIP.name}
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  color: 'var(--accent-cyan)',
                  marginBottom: '1.5rem',
                }}
              >
                {LEADERSHIP.role}
              </p>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {LEADERSHIP.bio}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', fontFamily: 'var(--font-mono)' }}>
                <MapPin size={15} color="var(--accent-cyan)" />
                <span>Office: {LEADERSHIP.location}</span>
              </div>
            </div>

            {/* Quote Box */}
            <div
              style={{
                backgroundColor: 'rgba(15, 15, 22, 0.65)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '24px',
                padding: '2.5rem',
                position: 'relative',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '4rem',
                  lineHeight: 0.8,
                  color: 'var(--accent-cyan)',
                  opacity: 0.3,
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                “
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.5,
                  marginBottom: '1.5rem',
                }}
              >
                We do not build generic software or superficial design. We build durable digital ecosystems and brand architectures engineered to withstand technological shifts.
              </p>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                — {LEADERSHIP.name}, Founder & CEO
              </span>
            </div>
          </div>
        </div>

        {/* Squads Matrix */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                SQUAD STRUCTURE
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
              THE DISCIPLINE COLLECTIVE
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {DISCIPLINES_COLLECTIVE.map((squad, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(15, 15, 22, 0.65)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '24px',
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                      SQUAD 0{idx + 1}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {squad.location}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '0.85rem',
                    }}
                  >
                    {squad.team}
                  </h3>

                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {squad.focus}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--border-subtle)',
                    marginTop: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    STRUCTURE:
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    {squad.headcount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Careers */}
        <div
          style={{
            backgroundColor: '#07070c',
            border: '1px solid var(--border-subtle)',
            borderRadius: '30px',
            padding: '3rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                CAREERS
              </span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              BANGALORE STUDIO INQUIRIES
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '560px' }}>
              We regularly consider senior creative technologists, GLSL shader engineers, brand architects, and AI systems builders.
            </p>
          </div>

          <a
            href="mailto:contact@prgroups.in?subject=Portfolio%20Submission%20-%20PR%20Groups"
            className="btn-pill btn-pill-light"
            style={{ padding: '0.85rem 1.85rem' }}
          >
            <Mail size={16} />
            <span>Submit Portfolio & Code</span>
          </a>
        </div>

      </div>
    </div>
  );
};

