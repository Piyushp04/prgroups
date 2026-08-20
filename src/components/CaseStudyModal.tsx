import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CaseStudy } from '../types';
import { X, ArrowUpRight, CheckCircle2, Cpu, Layers, MapPin, Sparkles } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onBookProject?: (disciplineId?: string) => void;
  navigate?: (path: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onBookProject,
  navigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      (window as any).__lenis?.stop();
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      (window as any).__lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  const stackList = caseStudy.technology || caseStudy.technologies || [];

  const handleAction = () => {
    onClose();
    if (onBookProject) {
      onBookProject(caseStudy.disciplineId);
    } else if (navigate) {
      navigate('/book-a-project');
    }
  };

  const modalContent = (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(3, 3, 6, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(1rem, 3vw, 2.5rem)',
        animation: 'fadeIn 0.2s ease-out forwards',
        overflow: 'hidden',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '920px',
          maxHeight: '85vh',
          backgroundColor: '#0c0c10',
          border: '1px solid var(--border-medium)',
          borderRadius: '28px',
          overflowY: 'auto',
          overscrollBehavior: 'contain',
          position: 'relative',
          padding: 'clamp(1.75rem, 4vw, 3.25rem)',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.95), 0 0 35px var(--accent-glow-primary)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn-circle"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '38px',
            height: '38px',
          }}
          aria-label="Close Case Study"
        >
          <X size={18} />
        </button>

        {/* Top Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.25rem' }}>
          {caseStudy.projectType === 'CONCEPT' ? (
            <span className="badge-tag badge-tag--concept">
              CONCEPT PROJECT
            </span>
          ) : (
            <span className="badge-tag" style={{ borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }}>
              VERIFIED CLIENT DEPLOYMENT
            </span>
          )}
          {caseStudy.location && (
            <span className="badge-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <MapPin size={12} color="var(--accent-cyan)" />
              <span>{caseStudy.location}</span>
            </span>
          )}
          <span className="badge-tag">{caseStudy.category}</span>
          <span className="badge-tag">{caseStudy.year}</span>
        </div>

        {/* Title */}
        <h2
          id="modal-case-title"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: '0.75rem',
          }}
        >
          {caseStudy.title}
        </h2>

        {caseStudy.baselineStatus && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              BASELINE STATUS:
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#ff9800', fontWeight: 700, backgroundColor: 'rgba(255, 152, 0, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '6px', border: '1px solid rgba(255, 152, 0, 0.3)' }}>
              {caseStudy.baselineStatus}
            </span>
          </div>
        )}

        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            lineHeight: 1.55,
          }}
        >
          {caseStudy.headline}
        </p>

        {/* Complete project overview */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
          }}
        >
          <div>
            <span className="modal-detail-label">CLIENT</span>
            <p className="modal-detail-value">{caseStudy.client || caseStudy.title}</p>
          </div>
          <div>
            <span className="modal-detail-label">PROJECT OVERVIEW</span>
            <p className="modal-detail-copy">{caseStudy.description}</p>
          </div>
          <div>
            <span className="modal-detail-label">SUMMARY</span>
            <p className="modal-detail-copy">{caseStudy.summary}</p>
          </div>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Layers size={15} color="var(--accent-cyan)" />
            <span className="modal-detail-label">SERVICES EXECUTED</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {(caseStudy.servicesExecuted || caseStudy.services).map((service) => (
              <span key={service} className="badge-tag">{service}</span>
            ))}
          </div>
          {caseStudy.tags && caseStudy.tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem' }}>
              {caseStudy.tags.map((tag) => (
                <span key={tag} style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>#{tag}</span>
              ))}
            </div>
          )}
        </div>

        {/* Hero Visual */}
        <div
          style={{
            width: '100%',
            height: '360px',
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '2.5rem',
            border: '1px solid var(--border-subtle)',
            backgroundColor: '#000',
            position: 'relative',
          }}
        >
          <img
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        {/* Outcome & Impact Highlight Banner */}
        {caseStudy.outcomeAndImpact && (
          <div
            style={{
              backgroundColor: 'rgba(0, 229, 255, 0.06)',
              border: '1px solid var(--accent-cyan)',
              borderRadius: '18px',
              padding: '1.5rem 1.75rem',
              marginBottom: '2.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              boxShadow: '0 0 20px var(--accent-glow-primary)',
            }}
          >
            <Sparkles size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                OUTCOME & MEASURED IMPACT
              </span>
              <p style={{ color: 'var(--text-primary)', fontSize: '1rem', lineHeight: 1.6, fontWeight: 500 }}>
                {caseStudy.outcomeAndImpact}
              </p>
            </div>
          </div>
        )}

        {/* Key Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '16px',
            border: '1px solid var(--border-subtle)',
          }}
        >
          {caseStudy.impactMetrics.map((metric, idx) => (
            <div key={idx}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--accent-cyan)',
                  display: 'block',
                  lineHeight: 1,
                  marginBottom: '0.35rem',
                }}
              >
                {metric.value}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                }}
              >
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Challenge & Solution Architecture */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ backgroundColor: '#07070a', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '1.75rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#ff5722',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.85rem',
              }}
            >
              THE CHALLENGE
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              {caseStudy.challenge || caseStudy.description}
            </p>
          </div>

          <div style={{ backgroundColor: '#07070a', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '1.75rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--accent-cyan)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.85rem',
              }}
            >
              PR GROUPS SOLUTION
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              {caseStudy.solution || caseStudy.summary}
            </p>
          </div>
        </div>

        {/* Technologies & Deliverables */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            marginBottom: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Cpu size={15} color="var(--accent-cyan)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                TECHNOLOGIES & STACK
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {stackList.map((t: string) => (
                <span key={t} className="badge-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Layers size={15} color="var(--accent-cyan)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                CORE DELIVERABLES
              </span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {caseStudy.deliverables.map((d: string, idx: number) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <CheckCircle2 size={14} color="var(--accent-cyan)" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Action CTA */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Require a tailored system for your enterprise?
          </span>
          <button
            onClick={handleAction}
            className="btn-pill btn-pill-light"
          >
            <span>Commission This Practice</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
