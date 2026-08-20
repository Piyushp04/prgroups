import React, { useState } from 'react';
import { INSIGHTS } from '../data/insights';
import { ArticleModal } from '../components/ArticleModal';
import { InsightArticle } from '../types';
import { Clock, ChevronRight } from 'lucide-react';

interface InsightsPageProps {
  navigate: (path: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ navigate }) => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '6rem' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              PUBLICATIONS & ESSAYS
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '1.5rem',
              color: 'var(--text-primary)',
            }}
          >
            INSIGHTS & PERSPECTIVES.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: 1.65 }}>
            Essays on the intersection of creative technology, WebGL spatial computing, neural workflow automation, and enterprise brand durability.
          </p>
        </div>

        {/* Articles List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '5rem' }}>
          {INSIGHTS.map((article) => (
            <div
              key={article.id}
              style={{
                backgroundColor: 'rgba(15, 15, 22, 0.65)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '26px',
                padding: 'clamp(1.75rem, 4vw, 3rem)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-strong)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 25px var(--accent-glow-primary)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.5)';
                e.currentTarget.style.transform = 'none';
              }}
              onClick={() => setSelectedArticle(article)}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="badge-tag">{article.category}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {article.date}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                  <Clock size={14} color="var(--accent-cyan)" />
                  <span>{article.readingTime}</span>
                </div>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                }}
              >
                {article.title}
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem', maxWidth: '950px' }}>
                {article.summary}
              </p>

              <div
                style={{
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Author: <strong style={{ color: 'var(--text-primary)' }}>{article.author.name}</strong> ({article.author.role})
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)', fontSize: '0.875rem', fontWeight: 700 }}>
                  <span>Read Full Essay</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Article Modal */}
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          onBookProject={() => navigate('/book-a-project')}
        />

      </div>
    </div>
  );
};

