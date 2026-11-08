import React, { useEffect, useState } from 'react';
import { X, Volume2, VolumeX, Play, Pause, ArrowUpRight } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (path: string) => void;
  initialReelTitle?: string;
}

interface ModalReel {
  id: string;
  title: string;
  category: string;
  image: string;
  duration: string;
  specs: string;
  description: string;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  navigate,
  initialReelTitle,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeReelIndex, setActiveReelIndex] = useState(0);

  const reelsList: ModalReel[] = [
    {
      id: 'master',
      title: 'PR GROUPS MASTER PRODUCTION FILM',
      category: 'CULTURAL LUXURY & HERITAGE',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85',
      duration: '01:45',
      specs: '4K UHD • 60 FPS • DOLBY ATMOS',
      description: 'Comprehensive brand film capturing the soul, craftsmanship, and timeless elegance of heritage luxury reimagined for modern global audiences.',
    },
    {
      id: 'devotional',
      title: 'PR GROUPS DEVOTIONAL & HERITAGE FILM',
      category: 'SACRED CRAFT & TRADITION',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=85',
      duration: '02:10',
      specs: '4K 60FPS • CUSTOM SCORE • SACRED HERITAGE',
      description: 'A visually reverent piece honoring craft, heritage, and devotion through dramatic chiaroscuro lighting and an emotive original devotional score.',
    },
    {
      id: 'fashion',
      title: 'PR GROUPS COMMERCIAL & COUTURE REEL',
      category: 'HIGH-FASHION & EDITORIAL',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85',
      duration: '01:15',
      specs: '4K UHD • RAPID PACING • HIGH FASHION',
      description: 'Fashion-forward commercial film blending high-fashion aesthetics, rapid choreography, dynamic pacing, and editorial color mastering.',
    },
  ];

  useEffect(() => {
    if (initialReelTitle) {
      const idx = reelsList.findIndex((r) =>
        r.title.toLowerCase().includes(initialReelTitle.toLowerCase())
      );
      if (idx !== -1) {
        setActiveReelIndex(idx);
      }
    }
  }, [initialReelTitle]);

  const currentReel = reelsList[activeReelIndex] || reelsList[0];

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
        backgroundColor: 'rgba(3, 3, 5, 0.94)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2.5rem)',
        animation: 'fadeIn 0.25s ease-out forwards',
      }}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          backgroundColor: '#0a0a0e',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 30px 90px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 255, 136, 0.15)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: '1.15rem 1.75rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#07070a',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-cyan)',
                boxShadow: '0 0 10px var(--accent-cyan)',
              }}
            />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: '#ffffff' }}>
              {currentReel.title}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button
              onClick={() => setIsMuted(!isMuted)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
              }}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} color="var(--accent-cyan)" />}
              <span>{isMuted ? 'Muted' : 'Spatial Audio'}</span>
            </button>

            <button
              onClick={onClose}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
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
            backgroundColor: '#000000',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Main Cinematic Visual Frame */}
          <img
            src={currentReel.image}
            alt={currentReel.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: isPlaying ? 'brightness(0.85) contrast(1.1)' : 'brightness(0.55)',
              transform: isPlaying ? 'scale(1.02)' : 'scale(1)',
              transition: 'all 0.6s ease',
            }}
          />

          {/* Vignette Gradients */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%, rgba(0,0,0,0.5) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Reel Central Overlay Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 3,
              textAlign: 'center',
              padding: '2rem',
              maxWidth: '680px',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.9rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                border: '1px solid rgba(0, 255, 136, 0.35)',
                backdropFilter: 'blur(10px)',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-cyan)',
                }}
              />
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-cyan)' }}>
                {currentReel.category}
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.025em',
                color: '#ffffff',
                marginBottom: '0.75rem',
                textShadow: '0 4px 20px rgba(0,0,0,0.8)',
              }}
            >
              {currentReel.title}
            </h2>

            <p style={{ fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5, marginBottom: '1.5rem', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
              {currentReel.description}
            </p>

            {/* Play / Pause Toggle Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.85rem 2rem',
                borderRadius: '9999px',
                backgroundColor: '#ffffff',
                color: '#000000',
                fontWeight: 800,
                fontSize: '0.825rem',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 30px rgba(255, 255, 255, 0.35)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {isPlaying ? <Pause size={15} fill="#000" /> : <Play size={15} fill="#000" />}
              <span>{isPlaying ? 'PAUSE REEL' : 'RESUME PLAYBACK'}</span>
            </button>
          </div>

          {/* Equalizer Visualizer overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              padding: '0.4rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
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
            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
              {currentReel.specs}
            </span>
          </div>

          {/* Duration Badge Bottom Right */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.25rem',
              right: '1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#ffffff',
              backgroundColor: 'rgba(0,0,0,0.75)',
              padding: '0.4rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              zIndex: 3,
            }}
          >
            {currentReel.duration}
          </div>
        </div>

        {/* Film Switcher Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.75rem',
            backgroundColor: '#0e0e14',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            overflowX: 'auto',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginRight: '0.5rem', whiteSpace: 'nowrap' }}>
            SELECT FILM:
          </span>
          {reelsList.map((r, idx) => (
            <button
              key={r.id}
              onClick={() => setActiveReelIndex(idx)}
              style={{
                padding: '0.45rem 0.95rem',
                borderRadius: '999px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                backgroundColor: activeReelIndex === idx ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.04)',
                color: activeReelIndex === idx ? '#000000' : 'var(--text-secondary)',
                border: activeReelIndex === idx ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {r.id.toUpperCase()} // {r.category}
            </button>
          ))}
        </div>

        {/* Footer info & CTA */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            backgroundColor: '#07070a',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
              Ready to commission a commercial, brand film or 3D campaign?
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Direct senior execution by PR Groups specialists across India and international markets.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => {
                onClose();
                navigate('/work');
              }}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                padding: '0.65rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
                cursor: 'pointer',
              }}
            >
              <span>EXPLORE WORK</span>
            </button>

            <button
              onClick={() => {
                onClose();
                navigate('/book-a-project');
              }}
              style={{
                backgroundColor: '#ffffff',
                border: 'none',
                color: '#000000',
                padding: '0.65rem 1.35rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 800,
                fontFamily: 'var(--font-display)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <span>START A PROJECT</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
