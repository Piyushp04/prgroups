import React from 'react';
import { LEADERSHIP, PEOPLE_DATA, OPERATIONAL_ROLES_DISCLAIMER, DISCIPLINES_COLLECTIVE } from '../data/team';
import { UserCheck, Mail, MapPin, Shield, Users, Info } from 'lucide-react';

interface PeoplePageProps {
  navigate?: (path: string) => void;
}

export const PeoplePage: React.FC<PeoplePageProps> = () => {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '6rem' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              PEOPLE & LEADERSHIP ARCHITECTURE
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.08,
              marginBottom: '1.25rem',
              color: 'var(--text-primary)',
            }}
          >
            PEOPLE & PRACTICE LEADERSHIP.
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: 1.65 }}>
            A multidisciplinary collective of creative technologists, brand architects, 3D engineers, and financial strategists operating from Bangalore under direct senior leadership.
          </p>
        </div>

        {/* Founder & Sole Proprietor Hero Feature Card (Responsive) */}
        <div
          style={{
            padding: 'clamp(1.5rem, 4vw, 3.5rem)',
            marginBottom: '4.5rem',
            border: '1px solid var(--border-medium)',
            backgroundColor: '#07070c',
            borderRadius: '28px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 30px var(--accent-glow-primary)',
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
            {/* Founder Image */}
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
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>

            {/* Founder Details */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <UserCheck size={16} color="var(--accent-cyan)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                  FOUNDER & SOLE PROPRIETOR
                </span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
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
                  marginBottom: '1.25rem',
                }}
              >
                Founder & Sole Proprietor, PR Groups
              </p>

              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                {LEADERSHIP.bio}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                <MapPin size={15} color="var(--accent-cyan)" />
                <span>Operational Office: Bangalore, Karnataka, India</span>
              </div>
            </div>

            {/* Quote Box */}
            <div
              style={{
                backgroundColor: 'rgba(15, 15, 22, 0.75)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '2rem',
                position: 'relative',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3.5rem',
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
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.5,
                  marginBottom: '1.25rem',
                }}
              >
                We do not build generic software or superficial design. We build durable digital ecosystems and brand architectures engineered to withstand technological shifts.
              </p>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                — {LEADERSHIP.name}
              </span>
            </div>
          </div>
        </div>

        {/* Key Established Members Grid */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <Users size={16} color="var(--accent-cyan)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                ESTABLISHED KEY MEMBERS & PRACTICE LEADS
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
              }}
            >
              Core Team & Operational Leads
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '720px' }}>
              Direct senior specialists heading technological architecture, creative strategy, financial governance, project timelines, and operational delivery.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
              marginBottom: '2.5rem',
            }}
          >
            {PEOPLE_DATA.map((member, idx) => (
              <div
                key={member.id || idx}
                style={{
                  backgroundColor: 'rgba(15, 15, 22, 0.65)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '22px',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.45)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                      0{idx + 1}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '999px',
                        backgroundColor: member.badge ? 'rgba(0, 240, 255, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                        border: member.badge ? '1px solid rgba(0, 240, 255, 0.4)' : '1px solid var(--border-subtle)',
                        color: member.badge ? 'var(--accent-cyan)' : 'var(--text-muted)',
                        fontWeight: member.badge ? 700 : 500,
                      }}
                    >
                      {member.badge || (member.isLeadership ? 'Executive Lead' : 'Practice Specialist')}
                    </span>
                  </div>

                  {member.badge && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {member.badge}
                      </span>
                    </div>
                  )}

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {member.name}
                  </h3>

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.825rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: 600,
                      marginBottom: '1rem',
                    }}
                  >
                    {member.role}
                  </div>

                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {member.bio}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <MapPin size={13} color="var(--accent-cyan)" />
                  <span>{member.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Operational Roles Statutory Disclaimer Box */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '18px',
              padding: '1.35rem 1.75rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
            }}
          >
            <Info size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
              {OPERATIONAL_ROLES_DISCLAIMER}
            </p>
          </div>
        </div>

        {/* Squads Matrix */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <Shield size={16} color="var(--accent-cyan)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                SQUAD STRUCTURE
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
              }}
            >
              The Discipline Collective
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {DISCIPLINES_COLLECTIVE.map((squad, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(15, 15, 22, 0.65)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '22px',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.45)',
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
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {squad.team}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {squad.focus}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-subtle)',
                    marginTop: '1.25rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    STRUCTURE:
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-primary)', fontWeight: 600 }}>
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
            borderRadius: '26px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                CAREERS
              </span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              BANGALORE STUDIO INQUIRIES
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', fontSize: '0.95rem' }}>
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


