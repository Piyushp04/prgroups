import React, { useState } from 'react';
import { Play, ArrowUpRight } from 'lucide-react';

interface CinematicHeroBannerProps {
  onNavigate: (path: string) => void;
  onOpenShowreel: (reelId?: string) => void;
}

export const CinematicHeroBanner: React.FC<CinematicHeroBannerProps> = ({
  onNavigate,
  onOpenShowreel,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '85vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#040406',
        paddingTop: 'calc(var(--header-height) + 2rem)',
        paddingBottom: '4rem',
      }}
      aria-label="Cinematic Hero"
    >
      {/* Background Cinematic Visual with Vignette Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=2000&q=85"
          alt="Cinematic production studio set"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            filter: 'brightness(0.38) contrast(1.15) saturate(1.1)',
            transform: isHovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Top Vignette Gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '35%',
            background: 'linear-gradient(to bottom, #040406 0%, rgba(4, 4, 6, 0.75) 45%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Bottom Vignette Gradient */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '45%',
            background: 'linear-gradient(to top, #040406 0%, rgba(4, 4, 6, 0.85) 50%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Radial Center Spotlight */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.08) 0%, rgba(4, 4, 6, 0.6) 75%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Hero Foreground Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '1080px',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top Minimal HUD Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            border: '1px solid rgba(0, 255, 136, 0.35)',
            padding: '0.4rem 1.1rem',
            borderRadius: '9999px',
            backdropFilter: 'blur(16px)',
            marginBottom: '1.75rem',
            boxShadow: '0 0 25px rgba(0, 255, 136, 0.15)',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-cyan)',
              boxShadow: '0 0 10px var(--accent-cyan)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
            }}
          >
            BANGALORE STUDIO // COMMERCIAL AD AGENCY & 3D PRODUCTION
          </span>
        </div>

        {/* Massive White Headline matching viyana.productions reference */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 7.5vw, 6.25rem)',
            fontWeight: 900,
            letterSpacing: '-0.035em',
            lineHeight: 1.02,
            color: '#ffffff',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            textShadow: '0 4px 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 255, 136, 0.2)',
          }}
        >
          VISUALS INTO BRANDS
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
            lineHeight: 1.5,
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '780px',
            marginBottom: '2.5rem',
            fontWeight: 400,
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
          }}
        >
          PR Groups crafts cinematic commercials, 3D spatial web experiences, and brand ecosystems designed for market authority.
        </p>

        {/* Dual Pill Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.15rem',
          }}
        >
          {/* Primary Solid White Pill Button */}
          <button
            onClick={() => onNavigate('/book-a-project')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              backgroundColor: '#ffffff',
              color: '#000000',
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.95rem 2.25rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 10px 30px rgba(255, 255, 255, 0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.25)';
            }}
          >
            <span>START A PROJECT</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Secondary Ghost Outline Pill Button with Play Icon */}
          <button
            onClick={() => onOpenShowreel()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.95rem 2.25rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(12px)',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)';
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Play size={11} color="#000" fill="#000" style={{ marginLeft: '1px' }} />
            </div>
            <span>WATCH SHOWREEL</span>
          </button>
        </div>

        {/* Bottom Technical Spec Badges Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            width: '100%',
          }}
        >
          {[
            '4K / 8K RAW CINEMATOGRAPHY',
            'ORIGINAL SCORE & SOUND DESIGN',
            '3D SPATIAL & VFX MASTERING',
            'HIGH-VELOCITY PRODUCTION'
          ].map((tag) => (
            <div
              key={tag}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
              }}
            >
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
              <span>{tag}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
