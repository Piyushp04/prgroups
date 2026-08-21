import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { DISCIPLINES } from '../data/disciplines';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Send,
  Check
} from 'lucide-react';

import { useCurrency } from '../utils/currency';

interface BookProjectPageProps {
  navigate: (path: string) => void;
}

export const BookProjectPage: React.FC<BookProjectPageProps> = ({ navigate }) => {
  const [currency, setCurrency] = useCurrency();
  const [step, setStep] = useState(1);
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([DISCIPLINES[0].id, DISCIPLINES[1].id]);
  const [selectedTimeline, setSelectedTimeline] = useState('4-8-weeks');
  const [selectedBudget, setSelectedBudget] = useState('tier-growth');
  
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    projectDescription: '',
    referralSource: 'Direct / Reputation',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  const toggleDiscipline = (id: string) => {
    if (selectedDisciplines.includes(id)) {
      if (selectedDisciplines.length > 1) {
        setSelectedDisciplines(selectedDisciplines.filter((item) => item !== id));
      }
    } else {
      setSelectedDisciplines([...selectedDisciplines, id]);
    }
  };

  const timelineOptions = [
    { id: 'rapid-sprint', label: 'Rapid Sprint (< 4 Weeks)', desc: 'High-intensity dedicated squad deployment' },
    { id: '4-8-weeks', label: 'Standard Build (4 - 8 Weeks)', desc: 'Comprehensive architecture, design & engineering' },
    { id: 'quarterly', label: 'Strategic Rollout (2 - 4 Months)', desc: 'Multi-phase enterprise transformation' },
    { id: 'ongoing-retainer', label: 'Embedded Retainer', desc: 'Continuous creative technology & AI leadership' },
  ];

  const budgetTiersINR = [
    { id: 'tier-pilot', label: '₹50,000 – ₹1,50,000', sub: 'Targeted single-discipline sprint' },
    { id: 'tier-growth', label: '₹1,50,000 – ₹4,00,000', sub: 'Multidisciplinary flagship build' },
    { id: 'tier-enterprise', label: '₹4,00,000 – ₹10,00,000', sub: 'Comprehensive enterprise system' },
    { id: 'tier-custom', label: '₹10,00,000+', sub: 'Ongoing retained studio partner' },
  ];

  const budgetTiersUSD = [
    { id: 'tier-pilot', label: '$1,500 – $5,000', sub: 'Targeted single-discipline sprint' },
    { id: 'tier-growth', label: '$5,000 – $15,000', sub: 'Multidisciplinary flagship project' },
    { id: 'tier-enterprise', label: '$15,000 – $50,000', sub: 'Comprehensive enterprise system build' },
    { id: 'tier-custom', label: '$50,000+', sub: 'Global multi-product incubation' },
  ];

  const budgetTiers = currency === 'INR' ? budgetTiersINR : budgetTiersUSD;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.email || !formData.contactName) {
      alert('Please fill in your company name, contact name, and official corporate email.');
      return;
    }
    const randCode = 'PRG-' + Math.floor(100000 + Math.random() * 900000);
    setSubmissionId(randCode);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              PROJECT COMMISSION INTAKE
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '1rem',
              color: 'var(--text-primary)',
            }}
          >
            START A PROJECT BRIEF.
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
            Select your required practices, specify your timeline and budget parameters, and receive a structured proposal within 24 hours.
          </p>
        </div>

        {submitted ? (
          /* Confirmation State */
          <div
            style={{
              padding: 'clamp(2rem, 5vw, 4rem)',
              textAlign: 'center',
              backgroundColor: '#07070c',
              borderRadius: '32px',
              border: '1px solid var(--accent-cyan)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px var(--accent-glow-primary)',
              animation: 'fadeIn 0.3s ease-out forwards',
            }}
          >
            <div
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 229, 255, 0.1)',
                border: '1px solid var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                color: 'var(--accent-cyan)',
                boxShadow: '0 0 25px var(--accent-glow-primary)',
              }}
            >
              <CheckCircle2 size={34} />
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                COMMISSION INTAKE RECEIVED
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              BRIEF TRANSMITTED TO BANGALORE STUDIO
            </h2>

            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.05rem', lineHeight: 1.65 }}>
              Thank you, <strong>{formData.contactName}</strong>. Our executive engineering & brand leadership team has received your project brief for <strong>{formData.companyName}</strong>.
            </p>

            {/* Reference Card */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '20px',
                border: '1px solid var(--border-subtle)',
                padding: '1.75rem',
                maxWidth: '520px',
                margin: '0 auto 2.5rem auto',
                textAlign: 'left',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Commission Ref:</span>
                <strong style={{ color: 'var(--accent-cyan)' }}>{submissionId}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Legal Entity:</span>
                <span style={{ color: 'var(--text-primary)' }}>{COMPANY_INFO.legalEntity}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Office:</span>
                <span style={{ color: 'var(--text-primary)' }}>{COMPANY_INFO.studioOffice.address}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Response SLA:</span>
                <span style={{ color: 'var(--accent-cyan)' }}>&lt; 24 Hours</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('/')}
                className="btn-pill btn-pill-light"
              >
                <span>Return to Homepage</span>
              </button>
              <button
                onClick={() => navigate('/work')}
                className="btn-pill btn-pill-outline"
              >
                <span>Explore Case Studies</span>
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Intake Form */
          <div
            style={{
              backgroundColor: 'rgba(15, 15, 22, 0.75)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '32px',
              padding: 'clamp(1.75rem, 4vw, 3.5rem)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
            }}
          >
            
            {/* Step Navigation Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '0.75rem',
                paddingBottom: '2rem',
                marginBottom: '2.5rem',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              {[
                { num: '01', label: 'Disciplines' },
                { num: '02', label: 'Timeline' },
                { num: '03', label: 'Budget' },
                { num: '04', label: 'Project Info' },
              ].map((s, idx) => {
                const isActive = step === idx + 1;
                const isPassed = step > idx + 1;
                return (
                  <button
                    key={s.num}
                    onClick={() => setStep(idx + 1)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: '0.85rem 1rem',
                      borderRadius: '16px',
                      backgroundColor: isActive ? 'rgba(0, 229, 255, 0.1)' : 'transparent',
                      border: isActive ? '1px solid var(--accent-cyan)' : '1px solid transparent',
                      boxShadow: isActive ? '0 0 20px var(--accent-glow-primary)' : 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all var(--transition-expand)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: isActive ? 'var(--accent-cyan)' : isPassed ? 'var(--text-primary)' : 'var(--text-muted)',
                      }}
                    >
                      {s.num}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.9rem',
                        fontWeight: isActive ? 800 : 500,
                        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      }}
                    >
                      {s.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* STEP 1: Select Disciplines */}
            {step === 1 && (
              <div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    Select Required Disciplines
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    Choose one or multiple practices for your engagement. PR Groups unifies brand strategy, technical engineering, and AI automation.
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '1rem',
                    marginBottom: '2.5rem',
                  }}
                >
                  {DISCIPLINES.map((d) => {
                    const isSelected = selectedDisciplines.includes(d.id);
                    return (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => toggleDiscipline(d.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          padding: '1.35rem',
                          borderRadius: '18px',
                          backgroundColor: isSelected ? 'rgba(0, 229, 255, 0.1)' : 'rgba(255, 255, 255, 0.025)',
                          border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                          boxShadow: isSelected ? '0 0 20px var(--accent-glow-primary)' : 'none',
                          textAlign: 'left',
                          transition: 'all var(--transition-expand)',
                          transform: isSelected ? 'translateY(-2px)' : 'none',
                        }}
                      >
                        <div>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: isSelected ? 'var(--accent-cyan)' : 'var(--text-muted)', display: 'block', marginBottom: '0.25rem', fontWeight: 700 }}>
                            {d.number}
                          </span>
                          <strong style={{ color: 'var(--text-primary)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                            {d.title}
                          </strong>
                          <span style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', display: 'block' }}>
                            {d.tagline}
                          </span>
                        </div>
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '6px',
                            border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-medium)',
                            backgroundColor: isSelected ? 'var(--accent-cyan)' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: isSelected ? '0 0 10px var(--accent-cyan)' : 'none',
                          }}
                        >
                          {isSelected && <Check size={14} color="#050505" strokeWidth={3} />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-pill btn-pill-light"
                    style={{ padding: '0.85rem 1.85rem' }}
                  >
                    <span>Continue to Timeline</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Select Timeline */}
            {step === 2 && (
              <div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    Desired Delivery Timeline & Sprint Model
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    When does your enterprise need this initiative deployed into production?
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                  {timelineOptions.map((t) => {
                    const isSelected = selectedTimeline === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTimeline(t.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '1.35rem 1.65rem',
                          borderRadius: '18px',
                          backgroundColor: isSelected ? 'rgba(0, 229, 255, 0.1)' : 'rgba(255, 255, 255, 0.025)',
                          border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                          boxShadow: isSelected ? '0 0 20px var(--accent-glow-primary)' : 'none',
                          textAlign: 'left',
                          transition: 'all var(--transition-expand)',
                          transform: isSelected ? 'translateX(4px)' : 'none',
                        }}
                      >
                        <div>
                          <strong style={{ color: 'var(--text-primary)', fontSize: '1.05rem', display: 'block', marginBottom: '0.2rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                            {t.label}
                          </strong>
                          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                            {t.desc}
                          </span>
                        </div>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            border: isSelected ? '5px solid var(--accent-cyan)' : '1px solid var(--border-medium)',
                            backgroundColor: '#050505',
                            boxShadow: isSelected ? '0 0 10px var(--accent-cyan)' : 'none',
                          }}
                        />
                      </button>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-pill btn-pill-outline"
                  >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="btn-pill btn-pill-light"
                  >
                    <span>Continue to Budget</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Select Budget */}
            {step === 3 && (
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      Estimated Project Investment Tier
                    </h2>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                      Helping us allocate appropriate engineering and brand architecture bandwidth.
                    </p>
                  </div>

                  {/* Currency Switcher */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      borderRadius: '999px',
                      padding: '0.25rem',
                      border: '1px solid var(--border-subtle)',
                      gap: '0.25rem',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setCurrency('INR')}
                      style={{
                        padding: '0.4rem 0.9rem',
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        backgroundColor: currency === 'INR' ? 'var(--accent-cyan)' : 'transparent',
                        color: currency === 'INR' ? '#000' : 'var(--text-secondary)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      ₹ INR (India)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrency('USD')}
                      style={{
                        padding: '0.4rem 0.9rem',
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        backgroundColor: currency === 'USD' ? 'var(--accent-cyan)' : 'transparent',
                        color: currency === 'USD' ? '#000' : 'var(--text-secondary)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      $ USD (Global)
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '1.25rem',
                    marginBottom: '2.5rem',
                  }}
                >
                  {budgetTiers.map((b) => {
                    const isSelected = selectedBudget === b.id;
                    return (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setSelectedBudget(b.id)}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          padding: '1.65rem',
                          borderRadius: '20px',
                          backgroundColor: isSelected ? 'rgba(0, 229, 255, 0.1)' : 'rgba(255, 255, 255, 0.025)',
                          border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                          boxShadow: isSelected ? '0 0 20px var(--accent-glow-primary)' : 'none',
                          textAlign: 'left',
                          minHeight: '135px',
                          transition: 'all var(--transition-expand)',
                          transform: isSelected ? 'translateY(-3px)' : 'none',
                        }}
                      >
                        <strong style={{ color: 'var(--text-primary)', fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                          {b.label}
                        </strong>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          {b.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-pill btn-pill-outline"
                  >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="btn-pill btn-pill-light"
                  >
                    <span>Continue to Details</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Contact & Project Info */}
            {step === 4 && (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '2rem' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    Enterprise & Contact Details
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    Provide contact details for the scheduling consultation.
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      COMPANY / ORGANIZATION *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Technologies"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.95rem 1.15rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '14px',
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      CONTACT PERSON & ROLE *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Chen, VP Product"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.95rem 1.15rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '14px',
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      CORPORATE EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@acme.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.95rem 1.15rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '14px',
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      PHONE / WHATSAPP (OPTIONAL)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 90000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.95rem 1.15rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '14px',
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '2.5rem' }}>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                    PROJECT OBJECTIVES & SCOPE OUTLINE
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your objectives, target deliverables, or current bottlenecks..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.95rem 1.15rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '14px',
                      color: 'var(--text-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Summary bar */}
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.025)',
                    borderRadius: '18px',
                    border: '1px solid var(--border-subtle)',
                    padding: '1.25rem 1.5rem',
                    marginBottom: '2.5rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    alignItems: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                  }}
                >
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Selected: </span>
                    <strong style={{ color: 'var(--accent-cyan)' }}>{selectedDisciplines.length} Practices</strong>
                    <span style={{ color: 'var(--text-muted)' }}> • Timeline: </span>
                    <strong style={{ color: 'var(--text-primary)' }}>{selectedTimeline}</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}>
                    <ShieldCheck size={15} color="var(--accent-cyan)" />
                    <span>Non-disclosure & Confidentiality guaranteed</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="btn-pill btn-pill-outline"
                    >
                      <ArrowLeft size={16} />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="btn-pill btn-pill-light"
                      style={{ padding: '0.95rem 2.25rem' }}
                    >
                      <span>Transmit Project Brief</span>
                      <Send size={16} />
                    </button>
                  </div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5, textAlign: 'right', margin: 0 }}>
                    By submitting this form, you acknowledge our{' '}
                    <button
                      type="button"
                      onClick={() => navigate('/privacy')}
                      style={{ color: 'var(--accent-cyan)', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
                    >
                      Privacy Policy
                    </button>{' '}
                    and consent to PR Groups processing your submitted details solely for responding to your enquiry and related business communications.
                  </p>
                </div>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

