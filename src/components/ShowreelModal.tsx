import React, { useEffect, useState } from 'react';
import { X, Volume2, VolumeX, Play, Pause, Sparkles, ArrowUpRight } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (path: string) => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose, navigate }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(5, 5, 7, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2.5rem)',
        animation: 'fadeIn 0.3s ease-out forwards',
      }}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1080px',
          backgroundColor: '#0c0c10',
          border: '1px solid var(--border-medium)',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(12, 12, 16, 0.95)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
              PR Groups — 2026 Studio Reel
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => setIsMuted(!isMuted)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                fontSize: '0.8rem',
              }}
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              <span>{isMuted ? 'Muted' : 'Spatial Audio'}</span>
            </button>

            <button
              onClick={onClose}
              className="btn-circle"
              style={{ width: '36px', height: '36px' }}
              aria-label="Close showreel"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Cinematic Media Player Viewport */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            backgroundColor: '#040406',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Ambient Video Simulation / Motion Canvas */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at center, rgba(0, 229, 255, 0.15) 0%, rgba(5,5,7,0.95) 75%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(rgba(245, 242, 236, 0.08) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                position: 'absolute',
                inset: 0,
                opacity: 0.6,
              }}
            />

            {/* Reel Central Dynamic Graphic */}
            <div style={{ textAlign: 'center', zIndex: 2, padding: '2rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(8px)',
                  marginBottom: '1.25rem',
                }}
              >
                <Sparkles size={14} color="var(--accent-cyan)" />
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
                  Interactive Showreel Experience
                </span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                  maxWidth: '650px',
                }}
              >
                Shaping the digital presence that commands category leadership.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
                Featuring high-impact commissions across Strategy, 3D Web, AI Platforms, and Creative Direction.
              </p>

              {/* Play / Pause Interactive Floating Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '9999px',
                  backgroundColor: '#ffffff',
                  color: '#070709',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  boxShadow: '0 8px 30px rgba(255, 255, 255, 0.3)',
                  transition: 'transform var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span>{isPlaying ? 'Pause Reel' : 'Resume Showreel'}</span>
              </button>
            </div>
          </div>

          {/* Equalizer Visualizer overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              backdropFilter: 'blur(8px)',
              zIndex: 3,
            }}
          >
            <div className="audio-equalizer">
              <span className="eq-bar" />
              <span className="eq-bar" />
              <span className="eq-bar" />
              <span className="eq-bar" />
              <span className="eq-bar" />
            </div>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
              4K 60FPS MASTER
            </span>
          </div>
        </div>

        {/* Footer info & CTA */}
        <div
          style={{
            padding: '1.5rem 2rem',
            backgroundColor: '#09090d',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              Ready to elevate your company's brand & digital perception?
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              We partner directly with founder and executive teams worldwide.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => {
                onClose();
                navigate('/work');
              }}
              className="btn-pill btn-pill-outline"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
            >
              <span>Explore Work</span>
            </button>

            <button
              onClick={() => {
                onClose();
                navigate('/book-a-project');
              }}
              className="btn-pill btn-pill-light"
              style={{ padding: '0.65rem 1.35rem', fontSize: '0.85rem' }}
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
