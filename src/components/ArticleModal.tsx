import React, { useEffect } from 'react';
import { InsightArticle } from '../types';
import { X, Clock, User, ArrowUpRight } from 'lucide-react';

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
  onBookProject?: () => void;
  navigate?: (path: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onBookProject,
  navigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleAction = () => {
    onClose();
    if (onBookProject) {
      onBookProject();
    } else if (navigate) {
      navigate('/book-a-project');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(5, 5, 7, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.25s ease-out forwards',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-article-title"
    >
      <div
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          backgroundColor: '#0c0c10',
          border: '1px solid var(--border-medium)',
          borderRadius: '24px',
          overflowY: 'auto',
          position: 'relative',
          padding: 'clamp(1.75rem, 5vw, 3.5rem)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85)',
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
          aria-label="Close Article"
        >
          <X size={18} />
        </button>

        {/* Top Badges & Meta */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
          <span className="badge-tag">{article.category}</span>
          <span className="badge-tag">{article.date}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
            <Clock size={13} color="var(--accent-cyan)" />
            <span>{article.readingTime}</span>
          </div>
        </div>

        {/* Title */}
        <h2
          id="modal-article-title"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
          }}
        >
          {article.title}
        </h2>

        {/* Author Byline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#16161e',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)',
            }}
          >
            <User size={18} />
          </div>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
              {article.author.name}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {article.author.role}
            </div>
          </div>
        </div>

        {/* Executive Summary Box */}
        <div
          style={{
            backgroundColor: 'rgba(0, 229, 255, 0.04)',
            borderLeft: '3px solid var(--accent-cyan)',
            padding: '1.25rem 1.5rem',
            borderRadius: '0 12px 12px 0',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
            EXECUTIVE SUMMARY
          </div>
          <p style={{ color: 'var(--text-primary)', fontStyle: 'italic', fontSize: '1rem', lineHeight: 1.6 }}>
            "{article.summary}"
          </p>
        </div>

        {/* Key Takeaways */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            CORE THESES & TAKEAWAYS
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {article.takeaways.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  0{idx + 1}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Article Body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          {article.contentParagraphs.map((paragraph, idx) => (
            <p key={idx} style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--text-primary)' }}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Modal Footer */}
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
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Have a question on creative tech or AI architectures?
          </span>
          <button
            onClick={handleAction}
            className="btn-pill btn-pill-light"
          >
            <span>Discuss With Our Team</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};
