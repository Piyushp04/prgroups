import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowUpRight,
  Shield,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Palette,
  Activity
} from 'lucide-react';
import { useCurrency } from '../utils/currency';

interface SpatialDeviceSceneProps {
  onNavigate: (path: string) => void;
}

export const SpatialDeviceScene: React.FC<SpatialDeviceSceneProps> = ({
  onNavigate,
}) => {
  const [currency] = useCurrency();
  const [currentStage, setCurrentStage] = useState(1);
  const [activeAura, setActiveAura] = useState<'violet' | 'noir' | 'cyan' | 'emerald' | 'amber'>('violet');
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Smooth lerp physics state
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });

  // Stage angles for smooth 3D interpolation
  const stageAngles: Record<number, { rx: number; ry: number; rz: number; scale: number }> = {
    1: { rx: 3.5, ry: -3.5, rz: 0, scale: 1 },
    2: { rx: 7.5, ry: -14, rz: -1.2, scale: 1.015 },
    3: { rx: 13.5, ry: 6.5, rz: 1.5, scale: 1.01 },
    4: { rx: 7.5, ry: -9.5, rz: -1.8, scale: 1.025 },
    5: { rx: 3.5, ry: 2.5, rz: 0.5, scale: 1 },
  };

  const stageAngleCurrent = useRef({ rx: 3.5, ry: -3.5, rz: 0, scale: 1 });
  const [tiltStyle, setTiltStyle] = useState({ rx: 3.5, ry: -3.5, rz: 0, scale: 1 });

  // Update HTML data-aura when mood changes
  const switchAura = (aura: 'violet' | 'noir' | 'cyan' | 'emerald' | 'amber') => {
    setActiveAura(aura);
    document.documentElement.setAttribute('data-aura', aura);
  };

  // Damped 60fps physics loop with continuous lerping on all axes
  useEffect(() => {
    let animId: number;
    let scrollY = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const updatePhysics = () => {
      // 1. Smoothly lerp base 3D stage rotation angles (silky continuous swooping between stages)
      const targetAngle = stageAngles[currentStage] || stageAngles[1];
      stageAngleCurrent.current.rx += (targetAngle.rx - stageAngleCurrent.current.rx) * 0.08;
      stageAngleCurrent.current.ry += (targetAngle.ry - stageAngleCurrent.current.ry) * 0.08;
      stageAngleCurrent.current.rz += (targetAngle.rz - stageAngleCurrent.current.rz) * 0.08;
      stageAngleCurrent.current.scale += (targetAngle.scale - stageAngleCurrent.current.scale) * 0.08;

      // 2. Smoothly lerp mouse cursor tracking
      mouseCurrent.current.x += (mouseTarget.current.x - mouseCurrent.current.x) * 0.08;
      mouseCurrent.current.y += (mouseTarget.current.y - mouseCurrent.current.y) * 0.08;

      const scrollTilt = Math.min(scrollY * 0.015, 8);

      setTiltStyle({
        rx: stageAngleCurrent.current.rx - mouseCurrent.current.y * 12 + scrollTilt,
        ry: stageAngleCurrent.current.ry + mouseCurrent.current.x * 14,
        rz: stageAngleCurrent.current.rz - mouseCurrent.current.x * 2,
        scale: stageAngleCurrent.current.scale,
      });

      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentStage]);

  // Mouse move handler
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const ny = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    mouseTarget.current = { x: nx, y: ny };
  };

  const handleMouseLeave = () => {
    mouseTarget.current = { x: 0, y: 0 };
    setIsHovered(false);
  };

  // Internal screen canvas animation (3D particle grid & holographic waveforms)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let t = 0;

    const render = () => {
      t += 0.02;
      const w = (canvas.width = canvas.parentElement?.clientWidth || 900);
      const h = (canvas.height = canvas.parentElement?.clientHeight || 500);

      ctx.clearRect(0, 0, w, h);

      // Color based on active aura (Violet default, Noir blackish stylish, Cyan, Emerald, Amber)
      let primaryColor = '199, 125, 255';
      if (activeAura === 'violet') primaryColor = '199, 125, 255';
      if (activeAura === 'noir') primaryColor = '255, 255, 255';
      if (activeAura === 'cyan') primaryColor = '0, 229, 255';
      if (activeAura === 'emerald') primaryColor = '0, 245, 212';
      if (activeAura === 'amber') primaryColor = '255, 183, 3';

      // Subtle 3D Grid Wave in background of screen
      ctx.strokeStyle = `rgba(${primaryColor}, 0.07)`;
      ctx.lineWidth = 1;

      const horizon = h * 0.65;
      const gridLines = 14;

      for (let i = 0; i < gridLines; i++) {
        const y = horizon + Math.pow(i / gridLines, 2) * (h - horizon);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      for (let j = -12; j <= 12; j++) {
        const startX = w * 0.5 + j * (w / 24);
        ctx.beginPath();
        ctx.moveTo(w * 0.5 + j * 6, horizon);
        ctx.lineTo(startX + Math.sin(t + j) * 8, h);
        ctx.stroke();
      }

      // Atmospheric floating particles
      for (let p = 0; p < 24; p++) {
        const px = (Math.sin(p * 99 + t * 0.4) * 0.5 + 0.5) * w;
        const py = (Math.cos(p * 33 + t * 0.3) * 0.4 + 0.45) * h;
        const pSize = Math.sin(t + p) * 1.5 + 2;

        ctx.fillStyle = `rgba(${primaryColor}, ${0.2 + Math.sin(t + p) * 0.15})`;
        ctx.beginPath();
        ctx.arc(px, py, pSize, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [activeAura]);

  const stages = [
    { id: 1, label: 'Spatial Core', tag: '3D ARCHITECTURE' },
    { id: 2, label: 'Systems Engine', tag: 'AUTONOMOUS SQUADS' },
    { id: 3, label: 'Intelligence Core', tag: 'NEURAL WORKFLOWS' },
    { id: 4, label: 'Market Impact', tag: currency === 'INR' ? '₹1,000 CR+ DELIVERED' : '$120M+ DELIVERED' },
    { id: 5, label: 'Commission', tag: 'EXECUTE VISION' },
  ];

  const nextStage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentStage((prev) => (prev % 5) + 1);
  };

  const prevStage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentStage((prev) => (prev === 1 ? 5 : prev - 1));
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1600px',
        padding: '0.5rem 0 clamp(2rem, 4vh, 3.5rem) 0',
      }}
    >
      {/* 3D FLOATING SPATIAL TABLET CHASSIS */}
      <div
        className="spatial-tablet-chassis"
        style={{
          width: '100%',
          maxWidth: '980px',
          height: 'clamp(420px, 60vh, 580px)',
          backgroundColor: '#07070c',
          borderRadius: 'clamp(24px, 5vw, 40px)',
          border: '3px solid rgba(45, 45, 65, 0.85)',
          boxShadow: `
            0 35px 90px -20px rgba(0, 0, 0, 0.95),
            0 0 50px var(--accent-glow-primary),
            inset 0 0 8px rgba(255, 255, 255, 0.3),
            inset 0 -4px 12px rgba(0, 0, 0, 0.9)
          `,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transform: `perspective(1600px) rotateX(${tiltStyle.rx}deg) rotateY(${tiltStyle.ry}deg) rotateZ(${tiltStyle.rz}deg) scale3d(${tiltStyle.scale * (isHovered ? 1.015 : 1)}, ${tiltStyle.scale * (isHovered ? 1.015 : 1)}, ${tiltStyle.scale * (isHovered ? 1.015 : 1)}) translateZ(${isHovered ? '25px' : '0px'})`,
          transition: 'box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
          userSelect: 'none',
        }}
      >
        {/* Background Canvas for Interactive Wave / Particles */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Ambient Top Screen Notch & Camera */}
        <div
          className="spatial-notch"
          style={{
            position: 'absolute',
            top: '12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90px',
            height: '14px',
            backgroundColor: '#0c0c16',
            borderRadius: '12px',
            zIndex: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#020205', border: '1px solid var(--accent-cyan)' }} />
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
        </div>

        {/* Ambient Top Screen Status Bar */}
        <div
          className={`spatial-status-bar stage-${currentStage}-active`}
          style={{
            position: 'absolute',
            top: '14px',
            left: '26px',
            right: '26px',
            zIndex: 35,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
          }}
        >
          <div
            className={`spatial-status-brand ${currentStage !== 1 ? 'stage-inactive-mobile' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)' }} />
            <span className="spatial-status-brand-text" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.02em', fontSize: '0.9rem' }}>
              BUILDING BRANDS. CREATING IMPACT
            </span>
          </div>

          <div className="spatial-status-meta" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}>
              <Activity size={13} color="var(--accent-cyan)" />
              <span>STAGE 0{currentStage} / 05</span>
            </div>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>60 FPS ULTRA</span>
          </div>
        </div>

        {/* =========================================================================
            3D MULTI-STAGE CAROUSEL VIEWPORT (Silky Smooth Spatial Transitions)
            ========================================================================= */}
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', perspective: '1400px' }}>

          {/* STAGE 1: HERO CRESCENT ARCH & BRAND LETTERS */}
          <div
            className="spatial-stage-1"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '2rem',
              zIndex: currentStage === 1 ? 10 : 1,
              transform: `perspective(1400px) translateX(${(1 - currentStage) * 106}%) translateZ(${currentStage === 1 ? '0px' : '-100px'}) rotateY(${(1 - currentStage) * 25}deg) scale(${currentStage === 1 ? 1 : 0.88})`,
              opacity: currentStage === 1 ? 1 : 0,
              filter: currentStage === 1 ? 'blur(0px)' : 'blur(8px)',
              pointerEvents: currentStage === 1 ? 'auto' : 'none',
              transition: 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), filter 0.55s ease',
            }}
          >
            <div className="crescent-energy-arch" />

            {/* Official Metallic Brand Emblem with Glowing Halo */}
            <div
              className="spatial-stage-logo"
              style={{
                width: 'clamp(72px, 10vw, 92px)',
                height: 'clamp(72px, 10vw, 92px)',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid rgba(255, 180, 0, 0.6)',
                boxShadow: '0 0 30px rgba(255, 180, 0, 0.45), 0 0 60px var(--accent-glow-primary)',
                backgroundColor: '#050508',
                marginBottom: '1rem',
                zIndex: 5,
                animation: 'orbFloat 5s infinite ease-in-out',
              }}
            >
              <img
                src="/pr-groups-logo.jpg"
                alt="PR Groups Emblem"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <h1
              className="spatial-stage-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
                fontWeight: 900,
                letterSpacing: '0.38em',
                textIndent: '0.38em',
                color: 'var(--text-primary)',
                lineHeight: 1,
                marginBottom: '1.5rem',
                textShadow: '0 0 35px var(--accent-glow-primary), 0 0 75px var(--accent-glow-secondary)',
                zIndex: 5,
              }}
            >
              PR GROUPS
            </h1>

            <p
              className="spatial-stage-subtitle"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.75rem, 1.2vw, 0.925rem)',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                marginBottom: '2.25rem',
                zIndex: 5,
              }}
            >
              CREATIVE TECHNOLOGY THAT COMMANDS CATEGORY LEADERSHIP
            </p>

            <div className="spatial-stage-cta-wrap" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', zIndex: 5 }}>
              <button
                onClick={() => onNavigate('/book-a-project')}
                className="btn-pill btn-pill-light"
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  padding: '1rem 2.5rem',
                }}
              >
                <span>Book strategy call 👋</span>
              </button>
            </div>
          </div>

          {/* STAGE 2: SPLIT FEATURE & COMPANION ENGINE */}
          <div
            className="spatial-stage-2"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
              padding: 'clamp(2rem, 5vw, 4rem)',
              zIndex: currentStage === 2 ? 10 : 1,
              transform: `perspective(1400px) translateX(${(2 - currentStage) * 106}%) translateZ(${currentStage === 2 ? '0px' : '-100px'}) rotateY(${(2 - currentStage) * 25}deg) scale(${currentStage === 2 ? 1 : 0.88})`,
              opacity: currentStage === 2 ? 1 : 0,
              filter: currentStage === 2 ? 'blur(0px)' : 'blur(8px)',
              pointerEvents: currentStage === 2 ? 'auto' : 'none',
              transition: 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), filter 0.55s ease',
            }}
          >
            <div className="spatial-stage-2-content">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                <span className="badge-tag">ENGINE ARCHITECTURE</span>
              </div>

              <h2
                className="spatial-stage-2-title"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.08,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}
              >
                Fast. Reliable. Scale.
              </h2>

              <p className="spatial-stage-2-desc" style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
                We architect browser-native 3D WebGL interfaces, autonomous multi-agent pipelines, and durable brand architectures for high-growth enterprises.
              </p>

              <button
                onClick={() => onNavigate('/services')}
                className="btn-pill btn-pill-light"
                style={{ fontSize: '0.925rem', padding: '0.85rem 2rem' }}
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="spatial-stage-2-companion" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div
                className="spatial-stage-2-phone"
                style={{
                  width: '200px',
                  height: '340px',
                  backgroundColor: '#0c0c18',
                  borderRadius: '30px',
                  border: '2px solid var(--accent-cyan)',
                  boxShadow: '0 25px 55px rgba(0, 0, 0, 0.9), 0 0 35px var(--accent-glow-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.35rem 1rem',
                  transform: 'rotateY(-12deg) rotateX(6deg)',
                  transition: 'transform 0.4s ease',
                }}
              >
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                  ● PR GROUPS OS
                </div>

                <div
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--accent-glow-primary) 0%, rgba(12,12,24,0.95) 75%)',
                    border: '2px solid var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 30px var(--accent-glow-primary)',
                  }}
                >
                  <Shield size={36} color="var(--accent-cyan)" />
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    ACTIVE TELEMETRY
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                    10,000+ Distributed Nodes
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STAGE 3: INTELLIGENCE SPHERE & DISCIPLINES MATRIX */}
          <div
            className="spatial-stage-3"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '2rem',
              zIndex: currentStage === 3 ? 10 : 1,
              transform: `perspective(1400px) translateX(${(3 - currentStage) * 106}%) translateZ(${currentStage === 3 ? '0px' : '-100px'}) rotateY(${(3 - currentStage) * 25}deg) scale(${currentStage === 3 ? 1 : 0.88})`,
              opacity: currentStage === 3 ? 1 : 0,
              filter: currentStage === 3 ? 'blur(0px)' : 'blur(8px)',
              pointerEvents: currentStage === 3 ? 'auto' : 'none',
              transition: 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), filter 0.55s ease',
            }}
          >
            <div className="energy-orb spatial-stage-3-orb" style={{ width: '135px', height: '135px', marginBottom: '1.25rem' }}>
              <Sparkles size={36} color="var(--accent-cyan)" style={{ opacity: 0.9 }} />
            </div>

            <h2
              className="spatial-stage-3-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3.2vw, 2.4rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              Data Protection & Intelligent Systems
            </h2>
            <p className="spatial-stage-3-desc" style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '560px', marginBottom: '1.75rem' }}>
              Deploying custom multi-agent pipelines, vector search topologies, and neural workflows that 10x velocity.
            </p>

            <div
              className="spatial-stage-3-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '0.85rem',
                width: '100%',
                maxWidth: '640px',
              }}
            >
              {[
                { label: '3D WebGL OS', metric: '60 FPS' },
                { label: 'Autonomous AI', metric: '10x Speed' },
                { label: 'Brand Architecture', metric: '100% Bespoke' },
              ].map((c, i) => (
                <div
                  key={i}
                  className="spatial-stage-3-card"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '16px',
                    padding: '0.85rem 1rem',
                    textAlign: 'center',
                    backdropFilter: 'blur(12px)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                  }}
                >
                  <div className="spatial-stage-3-card-metric" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>{c.metric}</div>
                  <div className="spatial-stage-3-card-label" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* STAGE 4: HIGH-IMPACT METRICS & ECLIPSE RIM */}
          <div
            className="spatial-stage-4"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '2rem',
              zIndex: currentStage === 4 ? 10 : 1,
              transform: `perspective(1400px) translateX(${(4 - currentStage) * 106}%) translateZ(${currentStage === 4 ? '0px' : '-100px'}) rotateY(${(4 - currentStage) * 25}deg) scale(${currentStage === 4 ? 1 : 0.88})`,
              opacity: currentStage === 4 ? 1 : 0,
              filter: currentStage === 4 ? 'blur(0px)' : 'blur(8px)',
              pointerEvents: currentStage === 4 ? 'auto' : 'none',
              transition: 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), filter 0.55s ease',
            }}
          >
            <div
              className="spatial-stage-4-glow"
              style={{
                position: 'absolute',
                top: '50%',
                left: '8%',
                transform: 'translateY(-50%)',
                width: '140px',
                height: '240px',
                borderRadius: '50%',
                boxShadow: '-25px 0 60px var(--accent-glow-primary), -50px 0 100px var(--accent-glow-secondary)',
                borderLeft: '4px solid var(--accent-cyan)',
                pointerEvents: 'none',
              }}
            />

            <h2
              className="spatial-stage-4-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4.2vw, 3.25rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                marginBottom: '0.85rem',
              }}
            >
              Completely Category-Defining
            </h2>
            <p className="spatial-stage-4-desc" style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '560px', marginBottom: '2.25rem' }}>
              Closing the perception gap for ambitious tech and corporate leaders worldwide.
            </p>

            <div
              className="spatial-stage-4-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '2rem',
                width: '100%',
                maxWidth: '700px',
              }}
            >
              <div className="spatial-stage-4-metric">
                <div className="spatial-stage-4-val" style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                  {currency === 'INR' ? '₹1,000 Cr+' : '$120M+'}
                </div>
                <div className="spatial-stage-4-label" style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  RAISED BY CLIENTS
                </div>
              </div>
              <div className="spatial-stage-4-metric">
                <div className="spatial-stage-4-val" style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-cyan)' }}>
                  +30%
                </div>
                <div className="spatial-stage-4-label" style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  MARGIN GAIN POST-REBRAND
                </div>
              </div>
              <div className="spatial-stage-4-metric">
                <div className="spatial-stage-4-val" style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                  2.3X
                </div>
                <div className="spatial-stage-4-label" style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  CONVERSION LIFT
                </div>
              </div>
            </div>
          </div>

          {/* STAGE 5: FINAL CONVERSION STAGE */}
          <div
            className="spatial-stage-5"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '2rem',
              zIndex: currentStage === 5 ? 10 : 1,
              transform: `perspective(1400px) translateX(${(5 - currentStage) * 106}%) translateZ(${currentStage === 5 ? '0px' : '-100px'}) rotateY(${(5 - currentStage) * 25}deg) scale(${currentStage === 5 ? 1 : 0.88})`,
              opacity: currentStage === 5 ? 1 : 0,
              filter: currentStage === 5 ? 'blur(0px)' : 'blur(8px)',
              pointerEvents: currentStage === 5 ? 'auto' : 'none',
              transition: 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), filter 0.55s ease',
            }}
          >
            <h2
              className="spatial-stage-5-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.035em',
                lineHeight: 1.12,
                maxWidth: '700px',
                marginBottom: '1.25rem',
              }}
            >
              Looking for a reliable partner for your next stage of growth?
            </h2>

            <p className="spatial-stage-5-desc" style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '520px', marginBottom: '2.25rem' }}>
              Direct collaboration between executive founders and dedicated multidisciplinary squads.
            </p>

            <div className="spatial-stage-5-actions" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                onClick={() => onNavigate('/book-a-project')}
                className="btn-pill btn-pill-light"
                style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}
              >
                <span>Book strategy call 👋</span>
              </button>

              <button
                onClick={() => onNavigate('/work')}
                className="btn-pill btn-pill-outline"
                style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}
              >
                <span>Explore Work Archives</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Screen Glass Reflection Line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
            zIndex: 35,
          }}
        />
      </div>

      {/* =========================================================================
          SMOOTH EXPANDABLE STAGE SWITCHER & AURA MOOD CONTROLLER
          ========================================================================= */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.25rem',
          marginTop: '2rem',
          zIndex: 20,
        }}
      >
        {/* Stage Previous Button */}
        <button
          onClick={prevStage}
          className="btn-circle"
          style={{ width: '42px', height: '42px' }}
          aria-label="Previous 3D stage"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Smooth Expandable Stage Navigation Pills */}
        <div className="stage-selector-container">
          {stages.map((st) => {
            const isActive = st.id === currentStage;
            return (
              <button
                key={st.id}
                onClick={() => setCurrentStage(st.id)}
                className={`stage-pill-btn ${isActive ? 'active' : ''}`}
                title={`Switch to 3D Scene ${st.id}`}
              >
                <span className="stage-pill-indicator" />
                <span>0{st.id}</span>
                {isActive && (
                  <span style={{ color: 'var(--text-primary)', fontWeight: 700, marginLeft: '2px' }}>
                    {st.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Stage Next Button */}
        <button
          onClick={nextStage}
          className="btn-circle"
          style={{ width: '42px', height: '42px' }}
          aria-label="Next 3D stage"
        >
          <ChevronRight size={20} />
        </button>

        {/* Interactive 3D Lighting Aura Palette Switcher */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: 'rgba(14, 14, 22, 0.85)',
            border: '1px solid var(--border-subtle)',
            padding: '0.35rem 0.65rem',
            borderRadius: '9999px',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          }}
        >
          <Palette size={14} color="var(--accent-cyan)" style={{ marginRight: '2px' }} />
          {[
            { id: 'violet', color: '#c77dff', name: 'Amethyst Purple (Default)' },
            { id: 'noir', color: '#ffffff', bg: '#101018', border: '1.5px solid #ffffff', name: 'Noir Obsidian (Blackish Stylish)' },
            { id: 'cyan', color: '#00e5ff', name: 'Cyber Cyan' },
            { id: 'emerald', color: '#00f5d4', name: 'Matrix Emerald' },
            { id: 'amber', color: '#ffb703', name: 'Solar Amber' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => switchAura(m.id as any)}
              style={{
                width: activeAura === m.id ? '22px' : '14px',
                height: '14px',
                borderRadius: '9999px',
                backgroundColor: m.bg || m.color,
                border: m.border || 'none',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: activeAura === m.id ? `0 0 14px ${m.color}` : 'none',
              }}
              title={`${m.name} 3D Lighting Aura`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
