import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { PeoplePage } from './pages/PeoplePage';
import { InsightsPage } from './pages/InsightsPage';
import { BookProjectPage } from './pages/BookProjectPage';
import { LegalPage } from './pages/LegalPage';

export const App: React.FC = () => {
  // Normalize initial route from window.location.pathname or fallback
  const getInitialPath = () => {
    const path = window.location.pathname.toLowerCase();
    if (['/work', '/services', '/about', '/people', '/insights', '/book-a-project', '/legal', '/privacy', '/terms'].includes(path)) {
      return path;
    }
    // Also check hash-based fallback (e.g. #/work)
    if (window.location.hash.startsWith('#/')) {
      return window.location.hash.slice(1);
    }
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath());
  const [displayPath, setDisplayPath] = useState<string>(getInitialPath());
  const [pageMotion, setPageMotion] = useState<'in' | 'out'>('in');
  const [scrollProgress, setScrollProgress] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);
  const transitionTimer = useRef<number | null>(null);
  const pendingPath = useRef<string>(getInitialPath());

  // Initialize Lenis luxury 60fps smooth momentum scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;
    (window as any).__lenis = lenis;

    let reqId: number;
    function raf(time: number) {
      lenis.raf(time);
      reqId = requestAnimationFrame(raf);
    }
    reqId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(reqId);
      (window as any).__lenis = null;
      lenis.destroy();
    };
  }, []);

  const resetScroll = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const swapToPath = (path: string) => {
    pendingPath.current = path;

    if (path === displayPath) {
      resetScroll();
      setPageMotion('in');
      return;
    }

    if (transitionTimer.current) {
      window.clearTimeout(transitionTimer.current);
    }

    setPageMotion('out');
    transitionTimer.current = window.setTimeout(() => {
      resetScroll();
      setDisplayPath(pendingPath.current);
      setPageMotion('in');
      transitionTimer.current = null;
    }, 160);
  };

  // Listen to popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const next = getInitialPath();
      setCurrentPath(next);
      swapToPath(next);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [displayPath]);

  useEffect(() => {
    return () => {
      if (transitionTimer.current) {
        window.clearTimeout(transitionTimer.current);
      }
    };
  }, []);

  // Navigation dispatcher with a short exit/enter instead of a hard cut
  const navigate = (path: string) => {
    if (path === currentPath) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { duration: 0.55 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    swapToPath(path);
  };

  // Render active page based on route
  const renderPage = () => {
    switch (displayPath) {
      case '/work':
        return <WorkPage navigate={navigate} />;
      case '/services':
        return <ServicesPage navigate={navigate} />;
      case '/about':
        return <AboutPage navigate={navigate} />;
      case '/people':
        return <PeoplePage navigate={navigate} />;
      case '/insights':
        return <InsightsPage navigate={navigate} />;
      case '/book-a-project':
        return <BookProjectPage navigate={navigate} />;
      case '/legal':
      case '/privacy':
      case '/terms':
        return <LegalPage navigate={navigate} />;
      case '/':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', position: 'relative' }}>
      {/* Fixed Navigation Header */}
      <Navbar currentPath={displayPath} navigate={navigate} />

      {/* Main Routed Page Content */}
      <main
        className={`page-view ${pageMotion === 'out' ? 'page-view--out' : 'page-view--in'}`}
        style={{ flex: 1, minHeight: '100vh' }}
      >
        {renderPage()}
      </main>

      {/* Global Footer with Strict Bangalore Office Identification */}
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;
