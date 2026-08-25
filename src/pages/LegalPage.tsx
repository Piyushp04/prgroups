import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/company';
import {
  ShieldCheck,
  Building2,
  MapPin,
  Scale,
  FileText,
  AlertCircle,
  RefreshCw,
  Lock,
  HelpCircle,
  Cookie,
  Cpu
} from 'lucide-react';

interface LegalPageProps {
  navigate?: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = () => {
  // Determine initial tab from current window path or fallback to 'all'
  const getTabFromLocation = () => {
    const p = window.location.pathname.toLowerCase().replace('/', '');
    if (['privacy', 'terms', 'refund', 'disclaimer', 'grievance', 'cookies', 'copyright'].includes(p)) {
      return p;
    }
    return 'all';
  };

  const [activeTab, setActiveTab] = useState<string>(getTabFromLocation());

  useEffect(() => {
    const handlePop = () => {
      setActiveTab(getTabFromLocation());
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const newPath = tabId === 'all' ? '/legal' : `/${tabId}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs = [
    { id: 'all', label: 'All Disclosures' },
    { id: 'privacy', label: 'DPDP Privacy (2025)' },
    { id: 'terms', label: 'Terms of Use' },
    { id: 'refund', label: 'Refund & Cancellation' },
    { id: 'disclaimer', label: 'Disclaimers' },
    { id: 'grievance', label: 'Grievance Redressal' },
    { id: 'cookies', label: 'Cookie Notice' },
    { id: 'copyright', label: 'IP & AI Governance' },
  ];

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '980px' }}>
        
        {/* Page Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-kicker" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <Scale size={14} color="var(--accent-cyan)" />
            <span>STATUTORY COMPLIANCE & LEGAL SPECIFICATION</span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.08,
              marginBottom: '1.25rem',
              color: 'var(--text-primary)',
            }}
          >
            LEGAL, ENTITY, PRIVACY & COMPLIANCE GOVERNANCE.
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Authoritative developer & client compliance specification covering DPDP Rules (2025), Sole Proprietorship entity posture, commercial terms, refund structures, algorithm disclaimers, and statutory grievance mechanisms for {COMPANY_INFO.brandName}.
          </p>
          <div
            style={{
              marginTop: '1.25rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.6rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              backgroundColor: 'rgba(255, 255, 255, 0.025)',
              padding: '0.65rem 1rem',
              borderRadius: '12px',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>Version: 2.0</span>
            <span>•</span>
            <span>Effective Date: August 2026</span>
            <span>•</span>
            <span>Last Updated: August 21, 2026</span>
            <span>•</span>
            <span>Regulatory Baseline: DPDP Rules (2025) / IT Act (2000)</span>
            <span>•</span>
            <span>Production Domain: {COMPANY_INFO.domain}</span>
          </div>
        </div>

        {/* Legal Identity & Address Governance Card (Module 1 - Item 1 & 13) */}
        <div
          className="surface-card"
          style={{
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            marginBottom: '3rem',
            backgroundColor: '#07070a',
            border: '1px solid var(--border-medium)',
            borderRadius: '24px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Building2 size={20} color="var(--accent-cyan)" />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              Module 1: Legal Identity & Dual-Location Architecture
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              fontSize: '0.9rem',
            }}
          >
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '1.15rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                PUBLIC BRAND NAME
              </span>
              <strong style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}>{COMPANY_INFO.brandName}</strong>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '1.15rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                LEGAL ENTITY FORM
              </span>
              <strong style={{ color: 'var(--text-primary)', fontSize: '0.92rem' }}>{COMPANY_INFO.legalEntity}</strong>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '1.15rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                FOUNDER & SOLE PROPRIETOR
              </span>
              <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{COMPANY_INFO.founderAndCEO}</strong>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '1.15rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                OFFICIAL APEX DOMAIN
              </span>
              <strong style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>{COMPANY_INFO.domain}</strong>
            </div>
          </div>

          <div
            style={{
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              fontSize: '0.875rem',
            }}
          >
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.4rem' }}>
                <MapPin size={16} color="var(--accent-cyan)" />
                <span>Operational & Creative Studio:</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                {COMPANY_INFO.studioOffice.address}
              </p>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.35rem' }}>
                Client meetings, creative direction, engineering & sprint execution
              </span>
            </div>

            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.4rem' }}>
                <ShieldCheck size={16} color="var(--accent-cyan)" />
                <span>GST / Registered Business Address:</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontWeight: 500 }}>
                {COMPANY_INFO.registeredOffice.address}
              </p>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.35rem' }}>
                Sole Proprietorship statutory seat, tax invoicing & jurisdiction (PIN: 846001)
              </span>
            </div>
          </div>

          <p style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: '1.25rem 0 0 0' }}>
            <strong>Entity Governance Note:</strong> The business is legally structured as a Sole Proprietorship with Pratyush Kumar Jha as the sole proprietor. Mentions of corporate offices, partnerships, LLPs, or corporate boards are strictly excluded. All team designations designate internal operational roles.
          </p>
        </div>

        {/* Module Sub-Route Tab Navigation */}
        <div
          className="filter-pills-bar"
          style={{
            marginBottom: '3rem',
            position: 'sticky',
            top: 'calc(var(--header-height) + 0.5rem)',
            zIndex: 30,
            backgroundColor: 'rgba(7, 7, 10, 0.95)',
            backdropFilter: 'blur(16px)',
            padding: '0.75rem',
            borderRadius: '16px',
            border: '1px solid var(--border-subtle)',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`filter-pill ${activeTab === tab.id ? 'active' : ''}`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Main Content Sections Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
          
          {/* =========================================================================
              MODULE 2: DPDP RULES 2025 & PRIVACY ARCHITECTURE (Item 2, 3 & 4)
              ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'privacy') && (
            <section
              id="privacy"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.015)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                borderRadius: '24px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Lock size={20} color="var(--accent-cyan)" />
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Module 2: DPDP Rules 2025 & Privacy Architecture
                </h2>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-cyan)', backgroundColor: 'rgba(0, 229, 255, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '6px', border: '1px solid rgba(0, 229, 255, 0.25)', marginLeft: 'auto' }}>
                  P0 — MANDATORY
                </span>
              </div>

              <div style={{ backgroundColor: 'rgba(0, 229, 255, 0.05)', border: '1px solid rgba(0, 229, 255, 0.2)', padding: '1rem 1.25rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                  <strong>Statutory Baseline:</strong> India notified the <em>Digital Personal Data Protection Rules, 2025</em> on 14 November 2025. This website strictly complies with DPDP Act, 2023 & DPDP Rules, 2025 phased mandates rather than generic outdated templates.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    1. Data Fiduciary Identification & Data Minimisation
                  </h3>
                  <p>
                    <strong>Data Fiduciary:</strong> {COMPANY_INFO.legalEntity}, represented by sole proprietor Pratyush Kumar Jha, acts as the Data Fiduciary for personal data submitted through {COMPANY_INFO.domain}.
                  </p>
                  <p>
                    <strong>Data Minimisation:</strong> We collect strictly what is necessary to process commercial enquiries and project consultations (Name, Corporate Email, Phone/WhatsApp Number, Company Name, and Project Scope Outline). We do not deploy hidden marketing trackers, background identity sniffers, or default tracking pixels.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    2. Third-Party Cloud Processors Disclosure
                  </h3>
                  <p style={{ marginBottom: '0.6rem' }}>
                    To deliver high-performance web engineering and communications, data may be processed through trusted third-party infrastructure processors:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <li><strong>Vercel:</strong> Global cloud hosting, edge CDN routing, and serverless compute infrastructure.</li>
                    <li><strong>Google Fonts / Fontshare:</strong> Web typography asset delivery.</li>
                    <li><strong>Calendly:</strong> Direct consultation and calendar booking management.</li>
                    <li><strong>WhatsApp Business API / Twilio:</strong> Direct client communication and instant messaging routing.</li>
                    <li><strong>Payment Gateways (Razorpay / Stripe):</strong> Secure tokenized payment processing.</li>
                    <li><strong>AI API Cloud Endpoints:</strong> Cloud inference APIs for workflow automation and text processing.</li>
                  </ul>
                  <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    Note: We never sell, lease, or monetize data to advertising data brokers. Data transfers occur strictly for required technical and operational delivery.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    3. Near-Form Contextual Consent Notice
                  </h3>
                  <p>
                    Every contact and enquiry form on this site displays the statutory near-form notice:
                  </p>
                  <blockquote style={{ margin: '0.5rem 0', padding: '0.85rem 1.25rem', backgroundColor: 'rgba(0, 0, 0, 0.4)', borderLeft: '3px solid var(--accent-cyan)', borderRadius: '0 8px 8px 0', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                    "{COMPANY_INFO.disclaimer.nearFormConsent}"
                  </blockquote>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    4. Data Principal Rights & Consent Withdrawal
                  </h3>
                  <p>
                    Under DPDP Rules 2025, Data Principals possess the right to:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <li>Access a summary of personal data being processed.</li>
                    <li>Request correction, completion, or updating of inaccurate data.</li>
                    <li>Request erasure of personal data that is no longer necessary for the stated business purpose.</li>
                    <li>Withdraw previously granted consent at any time without retroactive penalty.</li>
                  </ul>
                  <p style={{ marginTop: '0.6rem' }}>
                    To exercise any of these rights, email our designated Grievance & Privacy Officer directly at <a href={`mailto:${COMPANY_INFO.contact.grievanceEmail}`} style={{ color: 'var(--accent-cyan)' }}>{COMPANY_INFO.contact.grievanceEmail}</a>. Requests are acknowledged within 48 business hours and resolved within 30 days.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* =========================================================================
              MODULE 3: TERMS OF USE & CONTRACTUAL SCOPE (Item 5, 6 & 7)
              ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'terms') && (
            <section
              id="terms"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.015)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                borderRadius: '24px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <FileText size={20} color="var(--accent-cyan)" />
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Module 3: Terms of Use & Commercial Engagement
                </h2>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-cyan)', backgroundColor: 'rgba(0, 229, 255, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '6px', border: '1px solid rgba(0, 229, 255, 0.25)', marginLeft: 'auto' }}>
                  P0 — MANDATORY
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    1. No Relationship Formed via Browsing or Enquiry
                  </h3>
                  <p>
                    Visiting this website, interacting with 3D components, reviewing case studies, or submitting an online enquiry does <strong>not</strong> form a client, agency, partnership, advisory, or retainer relationship between you and {COMPANY_INFO.legalEntity}.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    2. Engagement Formalities & SOW Requirement
                  </h3>
                  <p>
                    Work commences strictly upon the mutual execution of a formal Master Services Agreement (MSA), Statement of Work (SOW), or written Quotation signed by the Proprietor, accompanied by the required mobilization advance. Verbal discussions or informal messages do not constitute a binding delivery commitment.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    3. Non-Intermediary Positioning
                  </h3>
                  <p>
                    PR Groups operates as a creative technology and brand consulting service provider. The company does not operate as an intermediary, public content exchange, or social marketplace under the Information Technology (Intermediary Guidelines) Rules.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    4. No Professional Legal or Financial Advice
                  </h3>
                  <p>
                    All editorial insights, rate card frameworks, and strategic publications on this website are for informational purposes only. {COMPANY_INFO.disclaimer.noProfessionalAdvice}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* =========================================================================
              MODULE 3 (CONTINUED): REFUND & CANCELLATION FRAMEWORK (Item 8)
              ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'refund') && (
            <section
              id="refund"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.015)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                borderRadius: '24px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <RefreshCw size={20} color="var(--accent-cyan)" />
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Refund & Cancellation Policy
                </h2>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-cyan)', backgroundColor: 'rgba(0, 229, 255, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '6px', border: '1px solid rgba(0, 229, 255, 0.25)', marginLeft: 'auto' }}>
                  P0 — MANDATORY
                </span>
              </div>

              <p style={{ marginBottom: '1.25rem' }}>
                Due to the bespoke nature of creative technology, custom software engineering, 3D WebGL rendering, brand systems, and production studio scheduling:
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '1.25rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#ff9800', fontWeight: 700, marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    CANCELLATION WITHIN 24 HOURS
                  </div>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '1.05rem', display: 'block', marginBottom: '0.4rem' }}>
                    Up to 50% Refund
                  </strong>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {COMPANY_INFO.disclaimer.refundTerms.within24Hours}
                  </p>
                </div>

                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#ff3b30', fontWeight: 700, marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    CANCELLATION AFTER 24 HOURS
                  </div>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '1.05rem', display: 'block', marginBottom: '0.4rem' }}>
                    Strictly Non-Refundable
                  </strong>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {COMPANY_INFO.disclaimer.refundTerms.after24Hours}
                  </p>
                </div>

                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    THIRD-PARTY OUTLAYS
                  </div>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '1.05rem', display: 'block', marginBottom: '0.4rem' }}>
                    100% Non-Recoverable
                  </strong>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {COMPANY_INFO.disclaimer.refundTerms.thirdPartyOutlays}
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <strong>Milestone Approvals:</strong> Payments made for approved deliverable milestones (brand identity tokens, WebGL staging builds, or shot media) are considered final upon client review approval. Ongoing projects may be terminated by either party with 14 business days written notice, with the client remaining liable for all milestone work performed through the termination date.
              </p>
            </section>
          )}

          {/* =========================================================================
              PERFORMANCE & ALGORITHM DISCLAIMERS (Item 6, 21, 23 & 24)
              ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'disclaimer') && (
            <section
              id="disclaimer"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.015)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                borderRadius: '24px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <AlertCircle size={20} color="var(--accent-cyan)" />
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Performance & Algorithm Disclaimers
                </h2>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#ff9800', backgroundColor: 'rgba(255, 152, 0, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '6px', border: '1px solid rgba(255, 152, 0, 0.3)', marginLeft: 'auto' }}>
                  P1 — ESSENTIAL
                </span>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 152, 0, 0.05)', border: '1px solid rgba(255, 152, 0, 0.25)', padding: '1.25rem', borderRadius: '14px', marginBottom: '1.5rem' }}>
                <p style={{ margin: 0, color: 'var(--text-primary)', fontWeight: 500 }}>
                  {COMPANY_INFO.disclaimer.bestEffortNote}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    1. No Guaranteed Quantitative Metrics
                  </h3>
                  <p>
                    {COMPANY_INFO.disclaimer.noGuaranteedMetrics} While PR Groups employs senior creative engineering, performance SEO, and high-conversion UI/UX workflows, commercial results remain subject to consumer sentiment and market conditions.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    2. Third-Party Platform Algorithm Autonomy
                  </h3>
                  <p>
                    {COMPANY_INFO.disclaimer.thirdPartyPlatformAutonomy} Independent search engines and media platforms (Google, Meta/Instagram, YouTube, TikTok, LinkedIn) continuously update ranking parameters and distribution rules beyond any agency's control.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* =========================================================================
              MODULE 5: GRIEVANCE REDRESSAL MECHANISM (Item 12, 14, 15 & 30)
              ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'grievance') && (
            <section
              id="grievance"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.015)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                borderRadius: '24px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <HelpCircle size={20} color="var(--accent-cyan)" />
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Module 5: Grievance Redressal & Dispute Resolution
                </h2>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-cyan)', backgroundColor: 'rgba(0, 229, 255, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '6px', border: '1px solid rgba(0, 229, 255, 0.25)', marginLeft: 'auto' }}>
                  P0 — MANDATORY
                </span>
              </div>

              <p style={{ marginBottom: '1.25rem' }}>
                In accordance with the <strong>Digital Personal Data Protection Rules, 2025</strong> and the <strong>Information Technology Act, 2000</strong>, any grievance or privacy issue may be directed to our designated Grievance & Privacy Officer:
              </p>

              {/* Clean Grievance Block */}
              <div
                style={{
                  backgroundColor: '#040406',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid var(--border-medium)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>GRIEVANCE & PRIVACY OFFICER:</span>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{COMPANY_INFO.grievance.officer}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>LEGAL ENTITY:</span>
                    <span style={{ color: 'var(--text-primary)' }}>{COMPANY_INFO.legalEntity}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>OFFICIAL GRIEVANCE CHANNEL:</span>
                    <a href={`mailto:${COMPANY_INFO.grievance.email}`} style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{COMPANY_INFO.grievance.email}</a>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>ACKNOWLEDGEMENT SLA:</span>
                    <span style={{ color: 'var(--accent-cyan)' }}>{COMPANY_INFO.grievance.acknowledgementSLA}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>RESOLUTION SLA:</span>
                    <span style={{ color: 'var(--accent-cyan)' }}>{COMPANY_INFO.grievance.resolutionSLA}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>REGISTERED ADDRESS:</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{COMPANY_INFO.registeredOffice.city}, Bihar - 846001</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Governing Law & Legal Jurisdiction
                </h3>
                <p style={{ margin: 0 }}>
                  These terms, privacy policies, and commercial agreements shall be governed and interpreted under the substantive laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Bangalore, Karnataka or Darbhanga, Bihar, India.
                </p>
              </div>
            </section>
          )}

          {/* =========================================================================
              MODULE 6: COOKIE NOTICE & TELEMETRY (Item 16, 19)
              ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'cookies') && (
            <section
              id="cookies"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.015)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                borderRadius: '24px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Cookie size={20} color="var(--accent-cyan)" />
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Cookie Notice & Zero-Tracking Architecture
                </h2>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-cyan)', backgroundColor: 'rgba(0, 229, 255, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '6px', border: '1px solid rgba(0, 229, 255, 0.25)', marginLeft: 'auto' }}>
                  ZERO-TRACKING POLICY
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p>
                  PR Groups adheres to a <strong>zero-invasive-tracking policy</strong>. We do not use third-party behavioral advertising cookies, Facebook pixels, or invasive surveillance trackers.
                </p>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    Essential Technical Cookies & Local State
                  </h3>
                  <p>
                    Our site uses strictly necessary browser storage (such as LocalStorage or session cookies) solely to retain:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <li><strong>Currency Preference:</strong> Storing INR vs USD selection for transparent rate card estimates.</li>
                    <li><strong>Aura Lighting Preference:</strong> Retaining your selected 3D ambient color palette.</li>
                    <li><strong>WebGL Device Diagnostics:</strong> Detecting GPU acceleration capabilities to render smooth 60 FPS Three.js viewport scenes.</li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* =========================================================================
              MODULE 4: INTELLECTUAL PROPERTY, AI GOVERNANCE & AUTHENTICITY (Item 9, 10, 22 & 25)
              ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'copyright') && (
            <section
              id="copyright"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.015)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                borderRadius: '24px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Cpu size={20} color="var(--accent-cyan)" />
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                  Module 4: Intellectual Property, AI Governance & Asset Integrity
                </h2>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#ff9800', backgroundColor: 'rgba(255, 152, 0, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '6px', border: '1px solid rgba(255, 152, 0, 0.3)', marginLeft: 'auto' }}>
                  P1 — CRITICAL
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    1. Client Assets Warranty
                  </h3>
                  <p>
                    {COMPANY_INFO.disclaimer.clientAssetWarranty} Clients agree to indemnify {COMPANY_INFO.legalEntity} and its personnel against any copyright, trademark, or intellectual property infringement claims arising from client-provided materials.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    2. Agency IP, Licensing & Deliverable Transfer
                  </h3>
                  <p>
                    {COMPANY_INFO.disclaimer.agencyIP} Upon 100% full settlement of commercial invoices, all custom graphics, bespoke source code, and master files authored specifically for the client transfer entirely to client ownership.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    3. AI Content Disclaimer & Synthetic Tooling
                  </h3>
                  <p>
                    {COMPANY_INFO.disclaimer.aiDisclaimer} PR Groups provides human-reviewed, expert-engineered creative outputs and does not guarantee exclusive statutory copyright over purely generative AI components without human artistic intervention.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    4. Portfolio Authenticity & Concept Markings
                  </h3>
                  <p>
                    PR Groups prohibits fabricated awards, simulated client case studies, or fictitious corporate logos. All conceptual builds and spatial prototypes are explicitly marked: <strong style={{ color: '#c77dff' }}>"Concept Project — Created by PR Groups"</strong>.
                  </p>
                </div>
              </div>
            </section>
          )}

        </div>

        {/* Legal Sign-Off Notice */}
        <div
          style={{
            marginTop: '4rem',
            padding: '1.5rem 2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '18px',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
          }}
        >
          <strong>Legal Counsel Sign-Off Notice:</strong> This specification represents developer and statutory compliance implementation based on current Indian statutory requirements (Digital Personal Data Protection Rules 2025, Information Technology Act 2000, and Consumer Protection Framework). All policy texts remain subject to formal Indian Advocate review prior to production public launch at {COMPANY_INFO.domain}.
        </div>

      </div>
    </div>
  );
};

