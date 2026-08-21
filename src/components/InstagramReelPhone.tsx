import React, { useState, useEffect, useRef } from 'react';
import { Heart, MessageCircle, Send, Bookmark, Music, Volume2, VolumeX, CheckCircle, Wifi, Battery, ChevronUp, ChevronDown } from 'lucide-react';

export const InstagramReelPhone: React.FC = () => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42600);
  const [isMuted, setIsMuted] = useState(true);
  const [showHeartBurst, setShowHeartBurst] = useState(false);
  const [progress, setProgress] = useState(0);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const phoneRef = useRef<HTMLDivElement | null>(null);
  const lastScrollTime = useRef(0);

  const reels = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      topBanner: "SPATIAL 3D EDITION ✨",
      title: "Interactive 3D Web & Brand Systems",
      caption: "We distill your brand's essence into impactful digital & 3D experiences. 🚀 #prstudios #brandtech #3dweb",
      audio: "Original Audio — Trending",
      likes: "42.6K",
      comments: "724",
      shares: "3.8K",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      topBanner: "BRAND ARCHITECTURE 🔥",
      title: "Design Tokens & Variable Typography",
      caption: "Closing the perception gap for B2B tech leaders worldwide. ⚡ #prstudios #creativepartner #scale",
      audio: "prstudios • Original Sound",
      likes: "51.3K",
      comments: "892",
      shares: "5.4K",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      topBanner: "AUTONOMOUS AI ENGINE 🧠",
      title: "Custom Multi-Agent Knowledge Graphs",
      caption: "High-velocity production engineering with custom AI automation. 💡 #prstudios #automation",
      audio: "prstudios • Studio Mix",
      likes: "36.8K",
      comments: "512",
      shares: "2.9K",
    },
  ];

  const currentReel = reels[currentReelIndex];

  // Auto-progress continuous timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentReelIndex((curr) => (curr + 1) % reels.length);
          return 0;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentReelIndex, reels.length]);

  // Subtle 3D Pointer Tracking on Phone
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!phoneRef.current) return;
    const rect = phoneRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * 6;
    const rotateY = (x / (rect.width / 2)) * 8;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  // Wheel listener inside phone for vertical reel scrolling
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const now = Date.now();
    if (now - lastScrollTime.current < 400) return;
    lastScrollTime.current = now;

    if (e.deltaY > 20) {
      setProgress(0);
      setCurrentReelIndex((curr) => (curr + 1) % reels.length);
    } else if (e.deltaY < -20) {
      setProgress(0);
      setCurrentReelIndex((curr) => (curr - 1 + reels.length) % reels.length);
    }
  };

  const handleDoubleTap = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLiked) {
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
    }
    setShowHeartBurst(true);
    setTimeout(() => setShowHeartBurst(false), 800);
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const nextReel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setProgress(0);
    setCurrentReelIndex((curr) => (curr + 1) % reels.length);
  };

  const prevReel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setProgress(0);
    setCurrentReelIndex((curr) => (curr - 1 + reels.length) % reels.length);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        perspective: '1400px',
        position: 'relative',
      }}
    >
      {/* Smartphone Chassis Frame (Matching Social Squeeze reference iPhone) */}
      <div
        ref={phoneRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
        style={{
          width: '100%',
          maxWidth: '320px',
          height: '620px',
          backgroundColor: '#000000',
          borderRadius: '50px',
          border: '5px solid #1c1c24',
          boxShadow: `
            0 35px 80px -15px rgba(0, 0, 0, 0.95),
            0 0 40px rgba(0, 0, 0, 0.6),
            inset 0 0 4px rgba(255, 255, 255, 0.25)
          `,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          userSelect: 'none',
          cursor: 'pointer',
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
        }}
        onClick={nextReel}
        onDoubleClick={handleDoubleTap}
        title="Tap or scroll to swipe reels, double tap to like"
      >
        {/* Left Side Volume Buttons on Phone Bezel */}
        <div
          style={{
            position: 'absolute',
            left: '-6px',
            top: '115px',
            width: '3px',
            height: '46px',
            backgroundColor: '#30303e',
            borderRadius: '2px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '-6px',
            top: '175px',
            width: '3px',
            height: '46px',
            backgroundColor: '#30303e',
            borderRadius: '2px',
          }}
        />
        {/* Right Side Power Button on Phone Bezel */}
        <div
          style={{
            position: 'absolute',
            right: '-6px',
            top: '135px',
            width: '3px',
            height: '65px',
            backgroundColor: '#30303e',
            borderRadius: '2px',
          }}
        />

        {/* Dynamic Island Notch Pill */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '110px',
            height: '28px',
            backgroundColor: '#000000',
            borderRadius: '20px',
            zIndex: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Front camera lens */}
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#0a0a16', border: '1px solid #1c1c30' }} />
          {/* Sensor lens */}
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#050510' }} />
        </div>

        {/* Realistic Status Bar */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '0',
            right: '0',
            padding: '0 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.72rem',
            fontWeight: 700,
            color: '#ffffff',
            zIndex: 35,
            pointerEvents: 'none',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span>9:41</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Wifi size={12} />
            <Battery size={13} />
          </div>
        </div>

        {/* Story / Reel Progress Bar */}
        <div
          style={{
            position: 'absolute',
            top: '44px',
            left: '16px',
            right: '16px',
            height: '2.5px',
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            borderRadius: '2px',
            overflow: 'hidden',
            zIndex: 35,
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: 'var(--accent-cyan)',
              borderRadius: '2px',
              transition: 'width 0.1s linear',
              boxShadow: '0 0 8px var(--accent-cyan)',
            }}
          />
        </div>

        {/* Top Banner Text Across Video */}
        <div
          style={{
            position: 'absolute',
            top: '52px',
            left: '16px',
            right: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 30,
          }}
        >
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.03em',
              color: '#ffffff',
              textShadow: '0 2px 10px rgba(0,0,0,0.9)',
              fontFamily: 'var(--font-display)',
              textTransform: 'uppercase',
            }}
          >
            {currentReel.topBanner}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMuted(!isMuted);
            }}
            style={{
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '50%',
              width: '26px',
              height: '26px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
            }}
            aria-label="Toggle audio"
          >
            {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
          </button>
        </div>

        {/* VERTICAL SCROLLING REEL FEED (Slide Animation) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            transform: `translateY(-${currentReelIndex * 100}%)`,
            transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 5,
          }}
        >
          {reels.map((reel, idx) => (
            <div
              key={reel.id}
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
              }}
            >
              <img
                src={reel.image}
                alt={reel.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: idx === currentReelIndex ? 'brightness(1)' : 'brightness(0.7)',
                  transition: 'filter 0.4s ease',
                }}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80';
                }}
              />

              {/* Scrim Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.92) 100%)',
                }}
              />
            </div>
          ))}
        </div>

        {/* FLOATING 3D BRAND BADGE CARD (Matching Social Squeeze card from reference screenshot) */}
        <div
          style={{
            position: 'absolute',
            right: '16px',
            top: '42%',
            transform: 'translateY(-50%)',
            width: '115px',
            backgroundColor: '#000000',
            borderRadius: '20px',
            border: '2px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(255, 0, 50, 0.15)',
            padding: '0.85rem 0.65rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 25,
            pointerEvents: 'none',
          }}
        >
          {/* White Card Top Logo (Red/Black typography matching screenshot style) */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              width: '100%',
              padding: '0.7rem 0.4rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginBottom: '0.65rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '0.85rem',
                color: '#e60028',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              PR
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '0.85rem',
                color: '#e60028',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              Studios
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '0.85rem',
                color: '#e60028',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              Co.
            </span>
          </div>

          {/* Skeleton accent bars */}
          <div style={{ width: '90%', height: '5px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '3px', marginBottom: '4px' }} />
          <div style={{ width: '65%', height: '5px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '3px' }} />
        </div>

        {/* Double Tap Heart Burst Animation */}
        {showHeartBurst && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(1.4)',
              zIndex: 45,
              animation: 'heartPop 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
              pointerEvents: 'none',
            }}
          >
            <Heart size={68} fill="#ff2d55" color="#ff2d55" />
          </div>
        )}

        {/* Mini Reel Navigation Switcher on Left Side */}
        <div
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            zIndex: 30,
            opacity: 0.8,
          }}
        >
          <button
            onClick={prevReel}
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Previous reel"
          >
            <ChevronUp size={14} />
          </button>
          <button
            onClick={nextReel}
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Next reel"
          >
            <ChevronDown size={14} />
          </button>
        </div>

        {/* Right Instagram Action Icons */}
        <div
          style={{
            position: 'absolute',
            right: '12px',
            bottom: '75px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px',
            zIndex: 30,
          }}
        >
          <button
            onClick={toggleLike}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              color: isLiked ? '#ff2d55' : '#ffffff',
              transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Heart size={24} fill={isLiked ? '#ff2d55' : 'none'} />
            <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#ffffff' }}>
              {likeCount >= 1000 ? `${(likeCount / 1000).toFixed(1)}K` : likeCount}
            </span>
          </button>

          <button
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              color: '#ffffff',
            }}
          >
            <MessageCircle size={22} />
            <span style={{ fontSize: '0.68rem', fontWeight: 600 }}>{currentReel.comments}</span>
          </button>

          <button
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              color: '#ffffff',
            }}
          >
            <Send size={20} />
            <span style={{ fontSize: '0.68rem', fontWeight: 600 }}>{currentReel.shares}</span>
          </button>

          <button onClick={(e) => e.stopPropagation()} style={{ color: '#ffffff' }}>
            <Bookmark size={20} />
          </button>
        </div>

        {/* BOTTOM USER INFO BAR (Account name: prstudios) */}
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '14px',
            right: '65px',
            zIndex: 30,
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            color: '#ffffff',
          }}
        >
          {/* User Profile Avatar with "prstudios" logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #e60028, #ff3366)',
                padding: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.65rem',
                  fontWeight: 900,
                  color: '#e60028',
                  letterSpacing: '-0.02em',
                }}
              >
                pr
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                prstudios
              </span>
              <CheckCircle size={14} fill="#00e5ff" color="#070709" />
            </div>

            <span
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                border: '1px solid rgba(255, 255, 255, 0.4)',
                padding: '0.15rem 0.45rem',
                borderRadius: '4px',
              }}
            >
              Follow
            </span>
          </div>

          {/* Caption */}
          <p
            style={{
              fontSize: '0.775rem',
              lineHeight: 1.35,
              color: 'rgba(255, 255, 255, 0.95)',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {currentReel.caption}
          </p>

          {/* Audio Ticker */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.68rem', color: 'rgba(255, 255, 255, 0.85)' }}>
            <Music size={11} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {currentReel.audio}
            </span>
          </div>
        </div>

        {/* Global Keyframes */}
        <style>{`
          @keyframes heartPop {
            0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
            50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
          }
        `}</style>
      </div>
    </div>
  );
};
