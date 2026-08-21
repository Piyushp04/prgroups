import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ShieldCheck, Building2, MapPin, Scale, FileText, AlertCircle, RefreshCw, Lock, HelpCircle } from 'lucide-react';

interface LegalPageProps {
  navigate?: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = () => {
  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        
        {/* Page Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-kicker">
            <Scale size={14} color="var(--accent-cyan)" />
            <span>LEGAL GOVERNANCE & STATUTORY DISCLOSURES</span>
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
            LEGAL, ENTITY, PRIVACY & COMPLIANCE TERMS.
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Official statutory entity disclosures, commercial terms of service, DPDP privacy compliance, intellectual property ownership, and statutory grievance mechanisms for {COMPANY_INFO.brandName}.
          </p>
          <div style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <span>Version: 1.4</span>
            <span>•</span>
            <span>Effective Date: August 20, 2026</span>
            <span>•</span>
            <span>Governing Jurisdiction: India</span>
          </div>
        </div>

        {/* Entity Architecture Card */}
        <div
          className="surface-card"
          style={{
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            marginBottom: '3.5rem',
            backgroundColor: '#07070a',
            border: '1px solid var(--border-medium)',
            borderRadius: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Building2 size={20} color="var(--accent-cyan)" />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Statutory Entity Registration & Identity
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              fontSize: '0.9rem',
            }}
          >
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                PUBLIC BRAND NAME
              </span>
              <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>{COMPANY_INFO.brandName}</strong>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                LEGAL ENTITY FORM
              </span>
              <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{COMPANY_INFO.legalEntity}</strong>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                FOUNDER & SOLE PROPRIETOR
              </span>
              <strong style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>{COMPANY_INFO.founderAndCEO}</strong>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                OFFICIAL PRODUCTION DOMAIN
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
                <span>Operational Studio & Office</span>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                {COMPANY_INFO.studioOffice.address}
              </p>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Working Hours: 10:00 - 19:00 IST</span>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                <ShieldCheck size={15} color="var(--accent-cyan)" />
                <span>Registered Address (Legal Jurisdiction / GST)</span>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                {COMPANY_INFO.registeredOffice.address}
              </p>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Registered Sole Proprietorship under Indian Law</span>
            </div>
          </div>
        </div>

        {/* Legal Clauses & Policies */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.75rem', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
          
          {/* 1. Performance Disclaimer & Best-Effort Delivery */}
          <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.015)', padding: '1.75rem', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <AlertCircle size={18} color="var(--accent-cyan)" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                1. Performance Disclaimer & No-Guaranteed-Results Clause
              </h3>
            </div>
            <p style={{ color: 'var(--text-primary)', fontWeight: 500, marginBottom: '0.75rem' }}>
              {COMPANY_INFO.disclaimer.bestEffortNote}
            </p>
            <p>
              While {COMPANY_INFO.brandName} employs industry-standard practices in brand architecture, 3D Web engineering, search engine optimization, commercial media production, and communications, all external marketing deliverables and platform performances are subject to factors beyond our direct control, including but not limited to search engine algorithm revisions, social platform distribution policies, consumer trends, and competitor actions.
            </p>
          </section>

          {/* 2. Internal Operational Roles Disclosure */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Building2 size={18} color="var(--accent-cyan)" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                2. Organizational & Operational Role Architecture
              </h3>
            </div>
            <p style={{ marginBottom: '0.75rem' }}>
              {COMPANY_INFO.disclaimer.operationalRolesNote}
            </p>
            <p>
              All engagements, contracts, invoices, and statutory tax obligations are conducted strictly under the sole proprietorship legal name <strong>{COMPANY_INFO.legalEntity}</strong>. Titles used by team members (including Co-founder, CFO, Project Manager, and Head of Technology) designate internal operational leadership functions and squad oversight responsibilities rather than corporate equity holding or statutory partner liabilities.
            </p>
          </section>

          {/* 3. Terms of Service & Commercial Engagement */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <FileText size={18} color="var(--accent-cyan)" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                3. Commercial Terms & Deliverable Scope
              </h3>
            </div>
            <p style={{ marginBottom: '0.75rem' }}>
              All client engagements are governed by individual Statements of Work (SOW) or project brief agreements defining milestones, specifications, deliverable timelines, and fee schedules. Any modifications or additions to the agreed scope must be formalized in writing through mutual written confirmation.
            </p>
            <p>
              Milestone approvals are considered final once the client approves the designated build review or staging deployment. Iteration rounds beyond the agreed scope parameters will be billed at our published modular standard rates.
            </p>
          </section>

          {/* 4. Privacy Policy & DPDP Requirements */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Lock size={18} color="var(--accent-cyan)" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                4. Privacy Policy & DPDP (Digital Personal Data Protection) Compliance
              </h3>
            </div>
            <p style={{ marginBottom: '0.75rem' }}>
              In compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP)</strong> and the <strong>Information Technology Act, 2000</strong> of India:
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <li>
                <strong>Data Fiduciary Identification:</strong> {COMPANY_INFO.legalEntity}, represented by Pratyush Kumar Jha, acts as the Data Fiduciary for personal data submitted through {COMPANY_INFO.domain}.
              </li>
              <li>
                <strong>Purpose Limitation:</strong> Contact information (name, corporate email, phone number, project brief details) collected via inquiry forms is processed strictly for assessing project inquiries, entering into commercial service agreements, and scheduling consultations.
              </li>
              <li>
                <strong>No Data Monetization:</strong> We do not sell, rent, lease, or monetize visitor or client data to third-party ad brokers or data aggregators.
              </li>
              <li>
                <strong>Data Principal Rights:</strong> Users have the right to request access, correction, completion, or erasure of their personal data, or withdraw consent at any time by contacting our Grievance Officer.
              </li>
              <li>
                <strong>Third-Party Telemetry & Tracking:</strong> Anonymous client-side telemetry is strictly used to evaluate WebGL/3D viewport rendering performance, device compatibility, and secure form delivery.
              </li>
            </ul>
          </section>

          {/* 5. Refund & Cancellation Policy */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <RefreshCw size={18} color="var(--accent-cyan)" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                5. Refund & Cancellation Policy
              </h3>
            </div>
            <p style={{ marginBottom: '0.75rem' }}>
              Due to the bespoke nature of creative technology, custom software engineering, brand identity systems, and commercial media production:
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <strong>Advance & Mobilization Deposits:</strong> Initial deposits paid for sprint mobilization, specialist talent scheduling, and project kickoff are non-refundable once work has commenced.
              </li>
              <li>
                <strong>Milestone-Based Billing:</strong> Payments made for approved deliverable milestones (such as brand guideline tokens, WebGL staging builds, or shot footage) are non-refundable.
              </li>
              <li>
                <strong>Project Cancellation:</strong> Either party may terminate a project agreement with 14 business days written notice. In such cases, the client remains liable for all work completed up to the termination date.
              </li>
            </ul>
          </section>

          {/* 6. Intellectual Property & Code Ownership */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <ShieldCheck size={18} color="var(--accent-cyan)" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                6. Intellectual Property, Code Ownership & Rights
              </h3>
            </div>
            <p style={{ marginBottom: '0.75rem' }}>
              Upon 100% full settlement of commercial invoices for the contracted deliverables, all custom graphic assets, proprietary brand identity master files, bespoke 3D models, and bespoke source code created specifically for the client transfer entirely to client ownership.
            </p>
            <p>
              {COMPANY_INFO.brandName} retains ownership of pre-existing proprietary tools, modular shader libraries, workflow scaffolds, and algorithms. {COMPANY_INFO.brandName} retains the customary right to showcase published, non-confidential deliverables in studio portfolios, case studies, and industry submissions.
            </p>
          </section>

          {/* 7. AI, Third-Party Tools & Platform Provisions */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Scale size={18} color="var(--accent-cyan)" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                7. AI Tools, Third-Party APIs & Platform Disclaimers
              </h3>
            </div>
            <p>
              When projects incorporate external artificial intelligence models (such as LLMs, vector database APIs, generative image synthesis, or cloud inference engines), availability and functionality are subject to the uptime, licensing, and operational policies of respective third-party providers. We do not guarantee uninterrupted third-party platform API uptime.
            </p>
          </section>

          {/* 8. Client-Supplied Content Responsibility & Indemnity */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <FileText size={18} color="var(--accent-cyan)" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                8. Client-Supplied Content & Indemnification
              </h3>
            </div>
            <p>
              The client warrants that all text, imagery, trademarks, logos, audio tracks, and reference data provided to {COMPANY_INFO.brandName} are owned by the client or properly licensed. The client agrees to indemnify and hold harmless {COMPANY_INFO.legalEntity} and its personnel against any claims, damages, or copyright infringement disputes arising from client-provided materials.
            </p>
          </section>

          {/* 9. Grievance Redressal Mechanism */}
          <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.015)', padding: '1.75rem', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <HelpCircle size={18} color="var(--accent-cyan)" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                9. Statutory Grievance Redressal Mechanism
              </h3>
            </div>
            <p style={{ marginBottom: '0.75rem' }}>
              In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules and DPDP Act provisions, any grievances or privacy concerns may be directed to our designated Grievance Officer:
            </p>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
              <div style={{ marginBottom: '0.4rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Grievance Officer: </span>
                <strong style={{ color: 'var(--text-primary)' }}>Pratyush Kumar Jha</strong>
              </div>
              <div style={{ marginBottom: '0.4rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Entity: </span>
                <span style={{ color: 'var(--text-secondary)' }}>{COMPANY_INFO.legalEntity}</span>
              </div>
              <div style={{ marginBottom: '0.4rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Email: </span>
                <a href={`mailto:${COMPANY_INFO.contact.generalEmail}`} style={{ color: 'var(--accent-cyan)' }}>{COMPANY_INFO.contact.generalEmail}</a>
                <span style={{ color: 'var(--text-muted)' }}> / </span>
                <a href={`mailto:${COMPANY_INFO.contact.primaryEmail}`} style={{ color: 'var(--accent-cyan)' }}>{COMPANY_INFO.contact.primaryEmail}</a>
              </div>
              <div style={{ marginBottom: '0.4rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Statutory Resolution SLA: </span>
                <span style={{ color: 'var(--accent-cyan)' }}>Within 30 calendar days of receipt</span>
              </div>
            </div>
          </section>

          {/* 10. Governing Law & Jurisdiction */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Scale size={18} color="var(--accent-cyan)" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                10. Governing Law & Legal Jurisdiction
              </h3>
            </div>
            <p>
              These terms, privacy notices, and any commercial agreements executed with {COMPANY_INFO.legalEntity} shall be governed by, interpreted, and enforced in accordance with the substantive laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Bangalore, Karnataka or Darbhanga, Bihar, India.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};

