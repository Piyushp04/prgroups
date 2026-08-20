import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ShieldCheck, Building2, MapPin, Scale } from 'lucide-react';

interface LegalPageProps {
  navigate?: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = () => {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Page Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="section-kicker">
            <Scale size={14} color="var(--accent-cyan)" />
            <span>LEGAL GOVERNANCE & STATUTORY DISCLOSURES</span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '1.5rem',
              color: 'var(--text-primary)',
            }}
          >
            LEGAL, ENTITY & PRIVACY TERMS.
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Official statutory entity registration disclosures, corporate jurisdiction, client intellectual property ownership terms, and privacy policies for {COMPANY_INFO.brandName}.
          </p>
        </div>

        {/* Entity Card */}
        <div
          className="surface-card"
          style={{
            padding: 'clamp(1.75rem, 4vw, 3rem)',
            marginBottom: '3.5rem',
            backgroundColor: '#07070a',
            border: '1px solid var(--border-medium)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Building2 size={20} color="var(--accent-cyan)" />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Entity Architecture & Registration
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              fontSize: '0.9rem',
            }}
          >
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                PUBLIC BRAND
              </span>
              <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>{COMPANY_INFO.brandName}</strong>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                LEGAL ENTITY
              </span>
              <strong style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>{COMPANY_INFO.legalEntity}</strong>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                FOUNDER & PRINCIPAL
              </span>
              <strong style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>{COMPANY_INFO.founderAndCEO}</strong>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                OFFICIAL DOMAIN
              </span>
              <strong style={{ color: 'var(--accent-cyan)', fontSize: '1rem' }}>{COMPANY_INFO.domain}</strong>
            </div>
          </div>

          <div
            style={{
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              fontSize: '0.875rem',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                <MapPin size={15} color="var(--accent-cyan)" />
                <span>Office Location</span>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                {COMPANY_INFO.studioOffice.address}
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                <ShieldCheck size={15} color="var(--accent-cyan)" />
                <span>Registered Address (Legal / GST)</span>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                {COMPANY_INFO.registeredOffice.address}
              </p>
            </div>
          </div>
        </div>

        {/* Legal Clauses & Policies */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          
          <section>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              1. Intellectual Property & Code Ownership
            </h3>
            <p>
              Upon full settlement of commercial contract deliverables, all custom codebases, proprietary 3D assets, master design token configurations, and brand guidelines created specifically for the client transfer 100% to the client's ownership. {COMPANY_INFO.brandName} reserves the right to showcase published project deliverables in studio portfolios.
            </p>
          </section>

          <section>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              2. Mutual Non-Disclosure & Enterprise Security
            </h3>
            <p>
              We treat all client proprietary data, code repositories, pre-launch roadmaps, and business metrics under strict confidentiality covenants. All team members operating from our Bangalore office adhere to non-disclosure agreements.
            </p>
          </section>

          <section>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              3. Privacy Policy & Data Collection
            </h3>
            <p>
              We do not sell, rent, or monetize client or website visitor data to third-party ad brokers. Telemetry collected through our website is strictly utilized to optimize rendering performance and evaluate project briefing inquiries.
            </p>
          </section>

          <section>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              4. Governing Law & Jurisdiction
            </h3>
            <p>
              All legal agreements executed by {COMPANY_INFO.legalEntity} are governed in accordance with the laws of India, with jurisdiction in Bangalore, Karnataka and Darbhanga, Bihar.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
