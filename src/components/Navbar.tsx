import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight, Compass, BookOpen } from 'lucide-react';
import { useCurrency } from '../utils/currency';

interface NavbarProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navigate }) => {
  const [currency, setCurrency] = useCurrency();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navContainerRef = useRef<HTMLElement | null>(null);

  // Track scroll position for dynamic backdrop
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    navigate(path);
  };

  return (
    <>
      <header
        ref={navContainerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background-color 260ms ease, border-color 260ms ease, padding 260ms ease, backdrop-filter 260ms ease',
          backgroundColor: scrolled ? 'rgba(7, 7, 10, 0.94)' : 'rgba(7, 7, 10, 0.45)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: scrolled ? '0.75rem' : '1.1rem',
          paddingBottom: scrolled ? '0.75rem' : '1.1rem',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Official PR GROUPS Brand Logo & Emblem */}
          <button
            onClick={() => handleNavClick('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textAlign: 'left',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.2rem 0',
            }}
            aria-label="PR Groups Homepage"
          >
            <div
              style={{
                position: 'relative',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1.5px solid rgba(255, 180, 0, 0.5)',
                boxShadow: '0 0 16px rgba(255, 180, 0, 0.35), 0 0 25px var(--accent-glow-primary)',
                backgroundColor: '#050508',
                flexShrink: 0,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08) rotate(3deg)';
                e.currentTarget.style.boxShadow = '0 0 22px rgba(255, 180, 0, 0.6), 0 0 35px var(--accent-glow-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(255, 180, 0, 0.35), 0 0 25px var(--accent-glow-primary)';
              }}
            >
              <img
                src="/pr-groups-logo.jpg"
                alt="PR Groups Official Emblem"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '1.15rem',
                  letterSpacing: '0.04em',
                  color: 'var(--text-primary)',
                  lineHeight: 1.1,
                }}
              >
                PR GROUPS
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  color: '#ff3b30',
                  textTransform: 'uppercase',
                }}
              >
                BEYOND MARKETING
              </span>
            </div>
          </button>

          {/* Desktop Navigation Center Menu (Floating Glass Dock) */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.35rem',
              position: 'relative',
              backgroundColor: 'rgba(14, 14, 22, 0.75)',
              border: '1px solid var(--border-subtle)',
              padding: '0.35rem 0.55rem',
              borderRadius: '9999px',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            }}
            className="desktop-nav"
          >
            {/* Home */}
            <button
              onClick={() => handleNavClick('/')}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: currentPath === '/' ? 700 : 500,
                color: currentPath === '/' ? 'var(--text-primary)' : 'var(--text-secondary)',
                backgroundColor: currentPath === '/' ? 'rgba(0, 229, 255, 0.12)' : 'transparent',
                border: currentPath === '/' ? '1px solid var(--accent-cyan)' : '1px solid transparent',
                borderRadius: '9999px',
                padding: '0.45rem 1rem',
                boxShadow: currentPath === '/' ? '0 0 16px var(--accent-glow-primary)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Home
            </button>

            {/* About Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('/about')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: ['/about', '/people'].includes(currentPath) ? 700 : 500,
                  color: ['/about', '/people'].includes(currentPath) ? 'var(--text-primary)' : 'var(--text-secondary)',
                  backgroundColor: ['/about', '/people'].includes(currentPath) ? 'rgba(0, 229, 255, 0.12)' : 'transparent',
                  border: ['/about', '/people'].includes(currentPath) ? '1px solid var(--accent-cyan)' : '1px solid transparent',
                  borderRadius: '9999px',
                  padding: '0.45rem 1rem',
                  boxShadow: ['/about', '/people'].includes(currentPath) ? '0 0 16px var(--accent-glow-primary)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <span>About</span>
                <ChevronDown size={13} style={{ transform: activeDropdown === 'about' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>

              {activeDropdown === 'about' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    paddingTop: '0.65rem',
                    minWidth: '220px',
                    animation: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                    zIndex: 50,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(14, 14, 22, 0.95)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '18px',
                      padding: '0.65rem',
                      boxShadow: '0 20px 45px rgba(0,0,0,0.7), 0 0 25px var(--accent-glow-primary)',
                      backdropFilter: 'blur(20px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem',
                    }}
                  >
                    <button
                      onClick={() => handleNavClick('/about')}
                      style={{
                        padding: '0.65rem 0.85rem',
                        textAlign: 'left',
                        borderRadius: '10px',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <Compass size={14} color="var(--accent-cyan)" />
                      <span>About Agency</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/people')}
                      style={{
                        padding: '0.65rem 0.85rem',
                        textAlign: 'left',
                        borderRadius: '10px',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <span>Leadership & Team</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Works Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('works')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('/work')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: currentPath === '/work' ? 700 : 500,
                  color: currentPath === '/work' ? 'var(--text-primary)' : 'var(--text-secondary)',
                  backgroundColor: currentPath === '/work' ? 'rgba(0, 229, 255, 0.12)' : 'transparent',
                  border: currentPath === '/work' ? '1px solid var(--accent-cyan)' : '1px solid transparent',
                  borderRadius: '9999px',
                  padding: '0.45rem 1rem',
                  boxShadow: currentPath === '/work' ? '0 0 16px var(--accent-glow-primary)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <span>Works</span>
                <ChevronDown size={13} style={{ transform: activeDropdown === 'works' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>

              {activeDropdown === 'works' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    paddingTop: '0.65rem',
                    minWidth: '220px',
                    animation: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                    zIndex: 50,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(14, 14, 22, 0.95)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '18px',
                      padding: '0.65rem',
                      boxShadow: '0 20px 45px rgba(0,0,0,0.7), 0 0 25px var(--accent-glow-primary)',
                      backdropFilter: 'blur(20px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem',
                    }}
                  >
                    <button
                      onClick={() => handleNavClick('/work')}
                      style={{
                        padding: '0.65rem 0.85rem',
                        textAlign: 'left',
                        borderRadius: '10px',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <span>All Work</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/work')}
                      style={{
                        padding: '0.65rem 0.85rem',
                        textAlign: 'left',
                        borderRadius: '10px',
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      Brand & Digital
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('/services')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: currentPath === '/services' ? 700 : 500,
                  color: currentPath === '/services' ? 'var(--text-primary)' : 'var(--text-secondary)',
                  backgroundColor: currentPath === '/services' ? 'rgba(0, 229, 255, 0.12)' : 'transparent',
                  border: currentPath === '/services' ? '1px solid var(--accent-cyan)' : '1px solid transparent',
                  borderRadius: '9999px',
                  padding: '0.45rem 1rem',
                  boxShadow: currentPath === '/services' ? '0 0 16px var(--accent-glow-primary)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <span>Services</span>
                <ChevronDown size={13} style={{ transform: activeDropdown === 'services' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>

              {activeDropdown === 'services' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    paddingTop: '0.65rem',
                    minWidth: '240px',
                    animation: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                    zIndex: 50,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(14, 14, 22, 0.95)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '18px',
                      padding: '0.65rem',
                      boxShadow: '0 20px 45px rgba(0,0,0,0.7), 0 0 25px var(--accent-glow-primary)',
                      backdropFilter: 'blur(20px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem',
                    }}
                  >
                    <button
                      onClick={() => handleNavClick('/services')}
                      style={{
                        padding: '0.65rem 0.85rem',
                        textAlign: 'left',
                        borderRadius: '10px',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <span>All Services</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/services')}
                      style={{
                        padding: '0.65rem 0.85rem',
                        textAlign: 'left',
                        borderRadius: '10px',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      3D & Digital
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* For Startups */}
            <button
              onClick={() => handleNavClick('/book-a-project')}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: currentPath === '/book-a-project' ? 700 : 500,
                color: currentPath === '/book-a-project' ? 'var(--text-primary)' : 'var(--text-secondary)',
                backgroundColor: currentPath === '/book-a-project' ? 'rgba(0, 229, 255, 0.12)' : 'transparent',
                border: currentPath === '/book-a-project' ? '1px solid var(--accent-cyan)' : '1px solid transparent',
                borderRadius: '9999px',
                padding: '0.45rem 1rem',
                boxShadow: currentPath === '/book-a-project' ? '0 0 16px var(--accent-glow-primary)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              For Startups
            </button>

            {/* Resources / Insights Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick('/insights')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: currentPath === '/insights' ? 700 : 500,
                  color: currentPath === '/insights' ? 'var(--text-primary)' : 'var(--text-secondary)',
                  backgroundColor: currentPath === '/insights' ? 'rgba(0, 229, 255, 0.12)' : 'transparent',
                  border: currentPath === '/insights' ? '1px solid var(--accent-cyan)' : '1px solid transparent',
                  borderRadius: '9999px',
                  padding: '0.45rem 1rem',
                  boxShadow: currentPath === '/insights' ? '0 0 16px var(--accent-glow-primary)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <span>Resources</span>
                <ChevronDown size={13} style={{ transform: activeDropdown === 'resources' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>

              {activeDropdown === 'resources' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    paddingTop: '0.65rem',
                    minWidth: '220px',
                    animation: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                    zIndex: 50,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(14, 14, 22, 0.95)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '18px',
                      padding: '0.65rem',
                      boxShadow: '0 20px 45px rgba(0,0,0,0.7), 0 0 25px var(--accent-glow-primary)',
                      backdropFilter: 'blur(20px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem',
                    }}
                  >
                    <button
                      onClick={() => handleNavClick('/insights')}
                      style={{
                        padding: '0.65rem 0.85rem',
                        textAlign: 'left',
                        borderRadius: '10px',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <BookOpen size={14} color="var(--accent-cyan)" />
                      <span>Insights</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Header Area: Currency Switcher + Aura Switcher + Menu + Pill CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.4rem, 2vw, 0.65rem)' }}>
            
            {/* Quick Currency Switcher (INR / USD) */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '999px',
                padding: '2px',
                gap: '2px',
              }}
              title="Switch currency between INR (₹) and USD ($)"
            >
              <button
                onClick={() => setCurrency('INR')}
                style={{
                  padding: '3px 8px',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  backgroundColor: currency === 'INR' ? 'var(--accent-cyan)' : 'transparent',
                  color: currency === 'INR' ? '#000' : 'var(--text-secondary)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency('USD')}
                style={{
                  padding: '3px 8px',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  backgroundColor: currency === 'USD' ? 'var(--accent-cyan)' : 'transparent',
                  color: currency === 'USD' ? '#000' : 'var(--text-secondary)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                $ USD
              </button>
            </div>

            {/* Quick Aura Mood Switcher (Hidden on narrow mobile to keep header clean) */}
            <div
              className="nav-aura-switcher"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '999px',
                padding: '0.25rem 0.5rem',
              }}
              title="Change 3D Ambient Aura Lighting (Purple Default, Noir Blackish, Cyber, Matrix, Solar)"
            >
              {[
                { id: 'violet', color: '#c77dff', name: 'Amethyst Purple (Default)' },
                { id: 'noir', color: '#ffffff', bg: '#09090f', border: '1.5px solid #ffffff', name: 'Noir Obsidian (Blackish Stylish)' },
                { id: 'cyan', color: '#00e5ff', name: 'Cyber Cyan' },
                { id: 'emerald', color: '#00f5d4', name: 'Matrix Emerald' },
                { id: 'amber', color: '#ffb703', name: 'Solar Amber' },
              ].map((a) => (
                <button
                  key={a.id}
                  onClick={() => document.documentElement.setAttribute('data-aura', a.id)}
                  style={{
                    width: '11px',
                    height: '11px',
                    borderRadius: '50%',
                    backgroundColor: a.bg || a.color,
                    border: a.border || 'none',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    boxShadow: `0 0 6px ${a.color}80`,
                  }}
                  aria-label={`Switch to ${a.name} aura`}
                />
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-circle"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              style={{ width: '40px', height: '40px' }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <button
              onClick={() => handleNavClick('/book-a-project')}
              className="btn-pill btn-pill-light nav-cta-btn"
              style={{ padding: '0.55rem 1.15rem', fontSize: '0.825rem', fontWeight: 700 }}
            >
              <span className="nav-cta-text">Start a project</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Modern Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: '#070709',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '6rem 1.5rem 2rem 1.5rem',
            overflowY: 'auto',
            animation: 'fadeIn 0.25s ease-out forwards',
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
              DIRECTORY
            </span>
            {[
              { label: 'Home', path: '/' },
              { label: 'Selected Work', path: '/work' },
              { label: 'Services & Disciplines', path: '/services' },
              { label: 'About Agency', path: '/about' },
              { label: 'Leadership & Team', path: '/people' },
              { label: 'Insights & Perspectives', path: '/insights' },
              { label: 'Legal & Privacy Disclosures', path: '/legal' },
            ].map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.25rem, 5vw, 1.85rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                    padding: '0.65rem 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={18} color={isActive ? 'var(--accent-cyan)' : 'var(--text-muted)'} />
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Footer */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              paddingTop: '1.5rem',
              marginTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>CURRENCY:</span>
                <div style={{ display: 'inline-flex', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '999px', padding: '2px', border: '1px solid var(--border-subtle)' }}>
                  <button
                    onClick={() => setCurrency('INR')}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      backgroundColor: currency === 'INR' ? 'var(--accent-cyan)' : 'transparent',
                      color: currency === 'INR' ? '#000' : 'var(--text-secondary)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    ₹ INR
                  </button>
                  <button
                    onClick={() => setCurrency('USD')}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      backgroundColor: currency === 'USD' ? 'var(--accent-cyan)' : 'transparent',
                      color: currency === 'USD' ? '#000' : 'var(--text-secondary)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    $ USD
                  </button>
                </div>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                prgroups.in
              </span>
            </div>

            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              Bangalore Studio • Darbhanga GST
            </div>

            <button
              onClick={() => handleNavClick('/book-a-project')}
              className="btn-pill btn-pill-light"
              style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }}
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Media query styling inline helper */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 580px) {
          .nav-aura-switcher {
            display: none !important;
          }
        }
        @media (max-width: 420px) {
          .nav-cta-text {
            display: none !important;
          }
          .nav-cta-btn {
            padding: 0.55rem 0.75rem !important;
          }
        }
      `}</style>
    </>
  );
};
