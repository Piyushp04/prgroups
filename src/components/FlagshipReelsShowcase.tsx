import React, { useState, useEffect } from 'react';
import {
  Play,
  Volume2,
  VolumeX,
  ArrowUpRight,
  Maximize2
} from 'lucide-react';

interface FlagshipReelsShowcaseProps {
  onNavigate: (path: string) => void;
  onOpenShowreel: (reelTitle: string) => void;
}

interface ReelItem {
  id: string;
  number: string;
  categoryBadge: string;
  title: string;
  description: string;
  tags: string[];
  specsHeader: string;
  image: string;
  duration: string;
  audioTrack: string;
}

export const FlagshipReelsShowcase: React.FC<FlagshipReelsShowcaseProps> = ({
  onNavigate,
  onOpenShowreel,
}) => {
  const [activePlayingId, setActivePlayingId] = useState<string | null>('reel-1');
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({
    'reel-1': true,
    'reel-2': true,
    'reel-3': true,
  });
  const [progressValues, setProgressValues] = useState<Record<string, number>>({
    'reel-1': 35,
    'reel-2': 60,
    'reel-3': 15,
  });

  // Continuous subtle timeline progress for active playing reel
  useEffect(() => {
    if (!activePlayingId) return;

    const interval = setInterval(() => {
      setProgressValues((prev) => {
        const curr = prev[activePlayingId] || 0;
        const next = curr >= 100 ? 0 : curr + 1.2;
        return { ...prev, [activePlayingId]: next };
      });
    }, 120);

    return () => clearInterval(interval);
  }, [activePlayingId]);

  const togglePlay = (id: string) => {
    setActivePlayingId((prev) => (prev === id ? null : id));
  };

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMutedStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const reelsData: ReelItem[] = [
    {
      id: 'reel-1',
      number: '001 // CULTURAL REEL',
      categoryBadge: 'FLAGSHIP CULTURAL REEL',
      title: 'PR GROUPS MASTER PRODUCTION FILM',
      description:
        'Comprehensive brand film capturing the soul, craftsmanship, and timeless elegance of heritage luxury reimagined for modern global audiences.',
      tags: ['4K UHD', 'CINEMATIC AUDIO', 'FULL COLOR GRADE', 'STEADICAM'],
      specsHeader: '4K UHD • 60 FPS • SOUND DESIGN',
      // High-resolution moody commercial luxury portrait with gold jewelry and dark backdrop
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
      duration: '01:45',
      audioTrack: 'Original Cinematic Score // Dolby Atmos',
    },
    {
      id: 'reel-2',
      number: '002 // DEVOTIONAL REEL',
      categoryBadge: 'SACRED CRAFT & DEVOTIONAL',
      title: 'PR GROUPS DEVOTIONAL & HERITAGE FILM',
      description:
        'A visually reverent piece honoring craft, heritage, and devotion through dramatic chiaroscuro lighting, slow-motion choreography, and an emotive original devotional score.',
      tags: ['4K 60FPS', 'CUSTOM SCORE', 'DEVOTIONAL CAMPAIGN', 'MACRO CINEMATOGRAPHY'],
      specsHeader: '4K 60FPS • CUSTOM SCORE • SACRED HERITAGE',
      // Traditional Indian cultural portrait in golden warm lighting
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85',
      duration: '02:10',
      audioTrack: 'Sacred Flute & String Ensemble // Custom Mix',
    },
    {
      id: 'reel-3',
      number: '003 // COMMERCIAL & STYLE REEL',
      categoryBadge: 'COMMERCIAL & STYLE REEL',
      title: 'PR GROUPS COMMERCIAL & COUTURE REEL',
      description:
        'Fashion-forward commercial film blending high-fashion aesthetics, rapid choreography, dynamic pacing, and editorial color mastering for digital and broadcast screens.',
      tags: ['4K UHD', 'RAPID CUT PACING', 'FASHION GRADE', 'VFX GRAPHICS'],
      specsHeader: '4K UHD • RAPID PACING • HIGH FASHION',
      // Dramatic high-fashion couture portrait in cinematic lighting
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85',
      duration: '01:15',
      audioTrack: 'Electronic Bass & High-Pace Percussion',
    },
  ];

  return (
    <section
      id="showreel"
      style={{
        backgroundColor: '#050505',
        position: 'relative',
        zIndex: 10,
        paddingTop: '5rem',
        paddingBottom: '6rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
      aria-label="Flagship & Cultural Reels"
    >
      <div className="container">
        
        {/* =====================================================================
            1. SECTION HEADER (matching Screenshot 1)
            ===================================================================== */}
        <div style={{ maxWidth: '880px', marginBottom: '3.5rem' }}>
          {/* Green Indicator Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(0, 255, 136, 0.08)',
              border: '1px solid rgba(0, 255, 136, 0.3)',
              borderRadius: '9999px',
              padding: '0.35rem 0.95rem',
              marginBottom: '1.25rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-cyan)',
                boxShadow: '0 0 8px var(--accent-cyan)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--accent-cyan)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              FLAGSHIP & CULTURAL REELS
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              color: '#ffffff',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            FLAGSHIP & CULTURAL REELS
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
            }}
          >
            Expressive showcase of commercials, vertical series, and cultural brand films engineered for high engagement and market recall.
          </p>

          {/* Technical Specs Tags Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['PRODUCED IN ULTRA-HIGH RESOLUTION 4K', 'ORIGINAL SOUNDTRACKS', 'CINEMATIC COLOR GRADE'].map((spec) => (
              <span
                key={spec}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  padding: '0.3rem 0.65rem',
                  letterSpacing: '0.04em',
                }}
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* =====================================================================
            2. THE 3 ALTERNATING SHOWCASE CARDS (matching Screenshot 1 & 2)
            ===================================================================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {reelsData.map((reel, index) => {
            const isMediaLeft = index % 2 === 1; // Alternating layout: card 0: text left, card 1: media left, card 2: text left
            const isPlaying = activePlayingId === reel.id;
            const isMuted = mutedStates[reel.id] ?? true;
            const progress = progressValues[reel.id] || 0;

            const textColumn = (
              <div
                key="text-col"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                }}
              >
                {/* Category Badge */}
                <div style={{ marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--accent-cyan)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    [ {reel.categoryBadge} ]
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.025em',
                    lineHeight: 1.15,
                    color: '#ffffff',
                    marginBottom: '1rem',
                  }}
                >
                  {reel.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.75rem',
                  }}
                >
                  {reel.description}
                </p>

                {/* Technical Specs Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.45rem',
                    marginBottom: '2.25rem',
                  }}
                >
                  {reel.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: 'var(--accent-cyan)',
                        backgroundColor: 'rgba(0, 255, 136, 0.06)',
                        border: '1px solid rgba(0, 255, 136, 0.25)',
                        borderRadius: '9999px',
                        padding: '0.25rem 0.65rem',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                  <button
                    onClick={() => onOpenShowreel(reel.title)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      backgroundColor: '#ffffff',
                      color: '#000000',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '0.75rem 1.65rem',
                      borderRadius: '9999px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      boxShadow: '0 6px 20px rgba(255, 255, 255, 0.2)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                  >
                    <Play size={13} fill="#000" color="#000" />
                    <span>WATCH FILM</span>
                  </button>

                  <button
                    onClick={() => onNavigate('/work')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '0.75rem 1.65rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease, border-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    }}
                  >
                    <span>CASE STUDY</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            );

            const mediaColumn = (
              <div
                key="media-col"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                }}
              >
                {/* 9:16 Vertical Portrait Reel Player Frame */}
                <div
                  onClick={() => togglePlay(reel.id)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '310px',
                    aspectRatio: '9 / 16',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    backgroundColor: '#000000',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 255, 136, 0.12)',
                    cursor: 'pointer',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.95), 0 0 45px rgba(0, 255, 136, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 255, 136, 0.12)';
                  }}
                >
                  {/* Portrait Visual Image */}
                  <img
                    src={reel.image}
                    alt={reel.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: isPlaying ? 'brightness(0.95) contrast(1.05)' : 'brightness(0.75)',
                      transition: 'filter 0.5s ease',
                    }}
                  />

                  {/* Gradient Vignette Overlays */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.6) 100%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Top Bar inside frame */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      right: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      zIndex: 5,
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.65)',
                        backdropFilter: 'blur(10px)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '999px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: isPlaying ? 'var(--accent-cyan)' : '#ff3b30',
                          boxShadow: isPlaying ? '0 0 8px var(--accent-cyan)' : 'none',
                        }}
                      />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#fff', fontWeight: 600 }}>
                        {isPlaying ? 'PLAYING' : 'PAUSED'}
                      </span>
                    </div>

                    {/* Sound Toggle */}
                    <button
                      onClick={(e) => toggleMute(reel.id, e)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.65)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        cursor: 'pointer',
                      }}
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} color="var(--accent-cyan)" />}
                    </button>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      pointerEvents: 'none',
                    }}
                  >
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        border: '1.5px solid rgba(255, 255, 255, 0.4)',
                        backdropFilter: 'blur(12px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        opacity: isPlaying ? 0 : 0.9,
                        transform: isPlaying ? 'scale(0.8)' : 'scale(1)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                      }}
                    >
                      <Play size={24} fill="#ffffff" style={{ marginLeft: '3px' }} />
                    </div>
                  </div>

                  {/* Bottom Meta & Timeline inside frame */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      zIndex: 5,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.65rem',
                            color: 'var(--accent-cyan)',
                            display: 'block',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {reel.audioTrack}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            color: '#ffffff',
                          }}
                        >
                          {reel.duration}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenShowreel(reel.title);
                        }}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '6px',
                          padding: '0.3rem',
                          color: '#fff',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        title="Expand Full Screen"
                      >
                        <Maximize2 size={13} />
                      </button>
                    </div>

                    {/* Progress Scrubber */}
                    <div
                      style={{
                        width: '100%',
                        height: '3px',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '999px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: `${progress}%`,
                          height: '100%',
                          backgroundColor: 'var(--accent-cyan)',
                          borderRadius: '999px',
                          transition: 'width 0.12s linear',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );

            return (
              <div
                key={reel.id}
                style={{
                  backgroundColor: 'rgba(12, 12, 16, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
                }}
              >
                {/* Top Card HUD bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1.75rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {reel.number}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {reel.specsHeader}
                  </span>
                </div>

                {/* Alternating 2-Column Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    alignItems: 'center',
                  }}
                >
                  {isMediaLeft ? [mediaColumn, textColumn] : [textColumn, mediaColumn]}
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================================
            3. TECHNICAL CAPABILITIES STRIP (matching Screenshot 2 bottom)
            ===================================================================== */}
        <div
          style={{
            marginTop: '5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2.5rem',
            paddingBottom: '2.5rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                number: '01',
                title: 'PRODUCTION SERVICES',
                desc: 'Commercials, Brand Films, TVCs, and full 4K/8K cinematography direction.',
              },
              {
                number: '02',
                title: 'POST-PRODUCTION & VFX',
                desc: 'Editorial pacing, 3D spatial motion graphics, CGI, and digital asset creation.',
              },
              {
                number: '03',
                title: 'SOUND DESIGN',
                desc: 'Original music compositions, spatial audio mixing, voice direction, and foley.',
              },
              {
                number: '04',
                title: 'COLOR MASTERING',
                desc: 'ACES workflow, HDR color grading, film stock emulation, and DCI-P3 mastering.',
              },
            ].map((cap) => (
              <div key={cap.number} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: 700,
                    }}
                  >
                    {cap.number}
                  </span>
                  <h4
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {cap.title}
                  </h4>
                </div>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                  }}
                >
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================================
            4. MID-PAGE DARK CTA BANNER (matching Screenshot 2 bottom)
            ===================================================================== */}
        <div
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              marginBottom: '1.75rem',
            }}
          >
            HAVE A COMMERCIAL OR FILM TO PRODUCE?
          </h3>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <button
              onClick={() => onNavigate('/book-a-project')}
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                fontFamily: 'var(--font-display)',
                fontSize: '0.825rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '0.85rem 2rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              START A PROJECT
            </button>

            <button
              onClick={() => onNavigate('/services')}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                fontSize: '0.825rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '0.85rem 2rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)')}
            >
              EXPLORE SERVICES
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
