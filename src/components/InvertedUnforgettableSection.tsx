import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Clock } from 'lucide-react';

interface InvertedUnforgettableSectionProps {
  onNavigate: (path: string) => void;
}

interface PhaseStep {
  id: string;
  step: string;
  title: string;
  timeframe: string;
  deliverables: string[];
}

export const InvertedUnforgettableSection: React.FC<InvertedUnforgettableSectionProps> = ({
  onNavigate,
}) => {
  const [activeStepId, setActiveStepId] = useState<string>('01');

  const roadmapSteps: PhaseStep[] = [
    {
      id: '01',
      step: '01',
      title: 'CONCEPT & SCRIPTING',
      timeframe: '5–7 Business Days',
      deliverables: [
        'Creative brief & narrative direction',
        'Director visual moodboards & script treatments',
        'Shot list, storyboard & talent casting roadmap',
      ],
    },
    {
      id: '02',
      step: '02',
      title: 'CINEMATOGRAPHY & SHOOT',
      timeframe: 'On-Location / Studio Days',
      deliverables: [
        '4K/8K cinema camera rigs (ARRI / RED / Sony Cine)',
        'Gaffer, grip, steadicam & licensed aerial drone crew',
        'Directorial leadership & client live-monitor link',
      ],
    },
    {
      id: '03',
      step: '03',
      title: 'EDIT & VFX',
      timeframe: '7–10 Business Days',
      deliverables: [
        'High-paced editorial storytelling & pacing cuts',
        '3D spatial motion graphics & typography animation',
        'Visual cleanup, screen replacements & CGI integrations',
      ],
    },
    {
      id: '04',
      step: '04',
      title: 'COLOR & SOUND MASTER',
      timeframe: '3–5 Business Days',
      deliverables: [
        'ACES color pipeline & cinema film stock emulation',
        'Custom music composition & multi-track sound design',
        'Multi-format export for 9:16 mobile, broadcast & web',
      ],
    },
  ];

  const activeStep = roadmapSteps.find((s) => s.id === activeStepId) || roadmapSteps[0];

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        color: '#000000',
        position: 'relative',
        zIndex: 10,
        paddingTop: 'clamp(4.5rem, 8vw, 7.5rem)',
        paddingBottom: 'clamp(4.5rem, 8vw, 7.5rem)',
        overflow: 'hidden',
      }}
      aria-label="Let's Create Something Unforgettable"
    >
      {/* Subtle background tech grid for architectural depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2.5rem, 6vw, 5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Massive Grotesk Typography (matching Screenshot 3) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Top Micro Label */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.25rem',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#000000',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#000000',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                PRODUCTION ROADMAP // Q1–Q2 2026
              </span>
            </div>

            {/* Massive Bold Headline */}
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.75rem, 6vw, 4.75rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.02,
                color: '#000000',
                textTransform: 'uppercase',
                marginBottom: '1.75rem',
              }}
            >
              LET’S CREATE
              <br />
              SOMETHING
              <br />
              UNFORGETTABLE.
            </h2>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                color: '#444444',
                lineHeight: 1.6,
                maxWidth: '520px',
                marginBottom: '2.5rem',
                fontWeight: 450,
              }}
            >
              From pre-production through final cut, we architect visuals that define brand categories and captivate audiences globally.
            </p>

            {/* Direct Project Inquiry Pill Button */}
            <div>
              <button
                onClick={() => onNavigate('/book-a-project')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.875rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '1rem 2.25rem',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.25)';
                }}
              >
                <span>COMMISSION A PROJECT</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Dark Floating Interactive Roadmap Card (matching Screenshot 3) */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '480px',
                backgroundColor: '#07070a',
                color: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35), 0 0 35px rgba(0, 255, 136, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '0.2rem',
                    }}
                  >
                    PHASE ARCHITECTURE
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: '#ffffff',
                    }}
                  >
                    PRODUCTION ROADMAP
                  </h3>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    border: '1px solid rgba(0, 255, 136, 0.3)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '999px',
                  }}
                >
                  <Clock size={12} color="var(--accent-cyan)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                    {activeStep.timeframe}
                  </span>
                </div>
              </div>

              {/* Step Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {roadmapSteps.map((s) => {
                  const isSelected = s.id === activeStepId;
                  return (
                    <div
                      key={s.id}
                      onClick={() => setActiveStepId(s.id)}
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '14px',
                        backgroundColor: isSelected ? 'rgba(0, 255, 136, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                        border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.06)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.75rem',
                              fontWeight: 800,
                              color: isSelected ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.4)',
                            }}
                          >
                            {s.step}
                          </span>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.8rem',
                              fontWeight: 700,
                              color: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.75)',
                              letterSpacing: '0.04em',
                            }}
                          >
                            {s.title}
                          </span>
                        </div>
                        <ChevronRight
                          size={14}
                          color={isSelected ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.3)'}
                          style={{
                            transform: isSelected ? 'rotate(90deg)' : 'none',
                            transition: 'transform 0.2s ease',
                          }}
                        />
                      </div>

                      {/* Expanded Deliverables inside selected step */}
                      {isSelected && (
                        <div
                          style={{
                            marginTop: '0.75rem',
                            paddingTop: '0.65rem',
                            borderTop: '1px solid rgba(0, 255, 136, 0.15)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.4rem',
                          }}
                        >
                          {s.deliverables.map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                              <CheckCircle2 size={13} color="var(--accent-cyan)" style={{ marginTop: '2px', flexShrink: 0 }} />
                              <span style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.45 }}>
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Estimate Trigger Button */}
              <div style={{ paddingTop: '0.5rem' }}>
                <button
                  onClick={() => onNavigate('/book-a-project')}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--accent-cyan)',
                    color: '#000000',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.825rem',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '0.85rem',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'transform 0.2s ease, opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.92')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <span>START YOUR ESTIMATE</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
