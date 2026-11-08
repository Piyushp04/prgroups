import React, { useState } from 'react';
import { DISCIPLINES } from '../data/disciplines';
import { Check, ArrowUpRight, Layers } from 'lucide-react';

interface InteractiveServiceMatrixProps {
  onSelectDisciplineForBooking?: (disciplineId: string) => void;
  onViewWork?: () => void;
}

export const InteractiveServiceMatrix: React.FC<InteractiveServiceMatrixProps> = ({
  onSelectDisciplineForBooking,
  onViewWork,
}) => {
  const [activeDisciplineId, setActiveDisciplineId] = useState(DISCIPLINES[0].id);

  const activeDiscipline = DISCIPLINES.find((d) => d.id === activeDisciplineId) || DISCIPLINES[0];

  return (
    <div
      style={{
        backgroundColor: 'rgba(15, 15, 22, 0.75)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '32px',
        padding: 'clamp(1.75rem, 4vw, 3.5rem)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
      }}
    >
      {/* Header Info */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '1.5rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '2.5rem',
        }}
      >
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              PRACTICE MATRIX
            </span>
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
            }}
          >
            TEN BUSINESS VERTICALS
          </h3>
        </div>

        <p style={{ maxWidth: '460px', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
          Select a vertical to explore the services PR Groups offers across its diversified business.
        </p>
      </div>

      {/* Main Grid: Left Tabs / Right Details */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}
      >
        {/* Left Discipline Navigation Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {DISCIPLINES.map((discipline) => {
            const isSelected = discipline.id === activeDisciplineId;
            return (
              <button
                key={discipline.id}
                onClick={() => setActiveDisciplineId(discipline.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.15rem 1.35rem',
                  borderRadius: '18px',
                  backgroundColor: isSelected ? 'rgba(0, 229, 255, 0.1)' : 'rgba(255, 255, 255, 0.025)',
                  border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  textAlign: 'left',
                  transition: 'all var(--transition-expand)',
                  transform: isSelected ? 'translateX(6px)' : 'none',
                  boxShadow: isSelected ? '0 0 24px var(--accent-glow-primary)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: isSelected ? 'var(--accent-cyan)' : 'var(--text-muted)',
                    }}
                  >
                    {discipline.number}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: isSelected ? 800 : 600,
                      color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                    }}
                  >
                    {discipline.title}
                  </span>
                </div>

                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? 'var(--accent-cyan)' : 'transparent',
                    boxShadow: isSelected ? '0 0 10px var(--accent-cyan)' : 'none',
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Right Detail Pane */}
        <div
          style={{
            backgroundColor: '#07070b',
            border: '1px solid var(--border-medium)',
            borderRadius: '26px',
            padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            position: 'relative',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6), 0 0 25px var(--accent-glow-primary)',
          }}
        >
          {/* Practice Number */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
              VERTICAL {activeDiscipline.number}
            </span>
          </div>

          <h4
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
            }}
          >
            {activeDiscipline.title}
          </h4>

          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              color: 'var(--accent-cyan)',
              fontWeight: 600,
              marginBottom: '1.25rem',
            }}
          >
            {activeDiscipline.tagline}
          </p>

          <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
            {activeDiscipline.description}
          </p>

          {/* Services List */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Layers size={15} color="var(--accent-cyan)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Services
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {activeDiscipline.serviceList.map((service) => (
                <div
                  key={service}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Check size={14} color="var(--accent-cyan)" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            {onViewWork && (
              <button
                onClick={onViewWork}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                View Case Studies →
              </button>
            )}

            <button
              onClick={() => onSelectDisciplineForBooking && onSelectDisciplineForBooking(activeDiscipline.id)}
              className="btn-pill btn-pill-light"
              style={{ padding: '0.75rem 1.65rem', fontSize: '0.875rem' }}
            >
              <span>Discuss This Vertical</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
