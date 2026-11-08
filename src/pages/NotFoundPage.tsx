import React from 'react';
import { ArrowLeft, Home, Compass } from 'lucide-react';

interface NotFoundPageProps {
  navigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ navigate }) => {
  return (
    <div
      style={{
        paddingTop: 'calc(var(--header-height) + 5rem)',
        paddingBottom: '8rem',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div className="container" style={{ maxWidth: '640px' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(4rem, 12vw, 8rem)',
            fontWeight: 900,
            lineHeight: 1,
            color: 'var(--accent-cyan)',
            textShadow: '0 0 35px var(--accent-glow-primary)',
            marginBottom: '1rem',
          }}
        >
          404
        </div> 

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Compass size={16} color="var(--accent-cyan)" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
            COORDINATE UNRESOLVED
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            color: 'var(--text-primary)',
          }}
        >
          Page Not Found
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          The requested route does not exist or has been relocated within the PR Groups ecosystem.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/')}
            className="btn-pill btn-pill-light"
            style={{ padding: '0.85rem 1.85rem' }}
          >
            <Home size={16} />
            <span>Return to Home</span>
          </button>
          <button
            onClick={() => window.history.back()}
            className="btn-pill btn-pill-outline"
            style={{ padding: '0.85rem 1.85rem' }}
          >
            <ArrowLeft size={16} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};
