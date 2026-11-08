import React from 'react';
import { DISCIPLINES } from '../data/disciplines';
import { RATE_CARD_MODULES, CELEBRATION_OFFER_INFO } from '../data/rateCard';
import { useCurrency } from '../utils/currency';
import { ArrowUpRight, Check, Layers, Flame } from 'lucide-react';

interface ServicesPageProps {
  navigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ navigate }) => {
  const [currency, setCurrency] = useCurrency();

  return (
    <div style={{ paddingTop: 'calc(var(--header-height) + 3rem)', paddingBottom: '6rem' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              BUSINESS VERTICALS
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
            OUR 10 BUSINESS VERTICALS.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '780px', lineHeight: 1.65 }}>
            PR Groups is a diversified enterprise delivering professional services, creative solutions, products, and business operations across ten verticals in India and international markets.
          </p>
        </div>

        {/* 6 Disciplines Detailed List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '6rem' }}>
          {DISCIPLINES.map((discipline) => (
            <div
              key={discipline.id}
              style={{
                backgroundColor: 'rgba(15, 15, 22, 0.75)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '30px',
                padding: 'clamp(1.75rem, 4vw, 3.25rem)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 25px var(--accent-glow-primary)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              {/* Header row */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '1rem',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  marginBottom: '1.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    {discipline.number}
                  </span>
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {discipline.title}
                  </h2>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    color: 'var(--accent-cyan)',
                    fontWeight: 600,
                  }}
                >
                  {discipline.tagline}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  maxWidth: '900px',
                  marginBottom: '2.5rem',
                }}
              >
                {discipline.description}
              </p>

              {/* Services offered */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.025)',
                  padding: '1.75rem',
                  borderRadius: '20px',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '2.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Layers size={15} color="var(--accent-cyan)" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    SERVICES
                  </span>
                </div>
                <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.85rem 1.5rem' }}>
                  {discipline.serviceList.map((service) => (
                    <li key={service} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                      <Check size={14} color="var(--accent-cyan)" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking action */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1.5rem',
                  paddingTop: '1.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <button
                  onClick={() => navigate('/book-a-project')}
                  className="btn-pill btn-pill-light"
                  style={{ padding: '0.75rem 1.75rem', fontSize: '0.875rem' }}
                >
                  <span>Discuss This Vertical</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Dual-Currency Rate Card & 30% Celebration Offer */}
        <div style={{ marginBottom: '6rem' }}>
          
          {/* Limited Time Celebration Banner */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.12) 0%, rgba(0, 229, 255, 0.08) 100%)',
              border: '1px solid rgba(255, 152, 0, 0.4)',
              borderRadius: '24px',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              marginBottom: '3.5rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 0 35px rgba(255, 152, 0, 0.15)',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', backgroundColor: 'rgba(255, 152, 0, 0.2)', padding: '0.4rem 0.9rem', borderRadius: '999px', border: '1px solid rgba(255, 152, 0, 0.5)' }}>
                <Flame size={16} color="#ff9800" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#ffb74d', fontWeight: 800, letterSpacing: '0.08em' }}>
                  LIMITED TIME CELEBRATION OFFER
                </span>
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
                  onClick={() => setCurrency('INR')}
                  style={{
                    padding: '0.4rem 0.9rem',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    backgroundColor: currency === 'INR' ? 'var(--accent-cyan)' : 'transparent',
                    color: currency === 'INR' ? '#000' : 'var(--text-secondary)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  ₹ INR (India)
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  style={{
                    padding: '0.4rem 0.9rem',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    backgroundColor: currency === 'USD' ? 'var(--accent-cyan)' : 'transparent',
                    color: currency === 'USD' ? '#000' : 'var(--text-secondary)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  $ USD (Global)
                </button>
              </div>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: '0.6rem',
              }}
            >
              {CELEBRATION_OFFER_INFO.title}
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '720px', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {CELEBRATION_OFFER_INFO.subheading}. {CELEBRATION_OFFER_INFO.validity}.
            </p>

            <button
              onClick={() => navigate('/book-a-project')}
              className="btn-pill btn-pill-light"
              style={{ backgroundColor: '#ff9800', color: '#000', borderColor: '#ff9800' }}
            >
              <span>{CELEBRATION_OFFER_INFO.ctaText}</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Rate Card Grid Heading */}
          <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                marginBottom: '0.85rem',
              }}
            >
              Dual-Currency Rate Card
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Published transparent rates for commercial photography, cinematic video shoots, brand SEO, and PR distribution.
            </p>
          </div>

          {/* 3 Categories Rate Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {[
              'Commercial Production & Visual Media',
              'Brand SEO & Digital Footprint',
              'Public Relations & Media Distribution'
            ].map((catName) => {
              const catModules = RATE_CARD_MODULES.filter((m) => m.category === catName);
              return (
                <div key={catName}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      paddingBottom: '0.85rem',
                      borderBottom: '1px solid var(--border-subtle)',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
                    <h4
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {catName}
                    </h4>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: '1.5rem',
                    }}
                  >
                    {catModules.map((module) => {
                      const standard = currency === 'INR' ? module.standardRateINR : module.standardRateUSD;
                      const celebration = currency === 'INR' ? module.celebrationOfferINR : module.celebrationOfferUSD;

                      return (
                        <div
                          key={module.id}
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '20px',
                            padding: '1.75rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            transition: 'transform 0.25s ease, border-color 0.25s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                            e.currentTarget.style.transform = 'translateY(-4px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border-subtle)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.85rem' }}>
                              <h5
                                style={{
                                  fontFamily: 'var(--font-display)',
                                  fontSize: '1.25rem',
                                  fontWeight: 800,
                                  color: 'var(--text-primary)',
                                }}
                              >
                                {module.name}
                              </h5>
                              <span
                                style={{
                                  fontSize: '0.72rem',
                                  fontFamily: 'var(--font-mono)',
                                  fontWeight: 800,
                                  color: '#10b981',
                                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                  border: '1px solid rgba(16, 185, 129, 0.3)',
                                  padding: '0.2rem 0.55rem',
                                  borderRadius: '999px',
                                  whiteSpace: 'nowrap',
                                }}
                              >
                                {module.discountBadge}
                              </span>
                            </div>

                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                              {module.scope}
                            </p>
                          </div>

                          <div>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: '0.85rem',
                                paddingTop: '1.25rem',
                                borderTop: '1px solid var(--border-subtle)',
                                marginBottom: '1.25rem',
                              }}
                            >
                              <div>
                                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>
                                  Standard Rate
                                </span>
                                <span style={{ fontSize: '1rem', color: 'var(--text-muted)', textDecoration: 'line-through', fontFamily: 'var(--font-mono)' }}>
                                  {standard}
                                </span>
                              </div>

                              <div>
                                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#ff9800', display: 'block', fontWeight: 700, textTransform: 'uppercase' }}>
                                  30% Celebration
                                </span>
                                <span
                                  style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '1.5rem',
                                    fontWeight: 800,
                                    color: 'var(--accent-cyan)',
                                    lineHeight: 1,
                                  }}
                                >
                                  {celebration}
                                </span>
                              </div>
                            </div>

                            <button
                              onClick={() => navigate('/book-a-project')}
                              className="btn-pill btn-pill-outline"
                              style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.65rem 1rem' }}
                            >
                              <span>Commission Module</span>
                              <ArrowUpRight size={14} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engagement Models */}
        <div
          style={{
            backgroundColor: '#07070c',
            border: '1px solid var(--border-medium)',
            borderRadius: '32px',
            padding: 'clamp(2rem, 5vw, 4rem)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div style={{ marginBottom: '3rem', textAlign: 'center', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                ENGAGEMENT MODELS
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
              }}
            >
              FLEXIBLE COLLABORATION STRUCTURES
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              From focused sprint deployments to ongoing technology retainers.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {[
              {
                title: "Sprint Delivery",
                duration: "4 to 8 Weeks",
                desc: "Dedicated senior team deployed to execute a flagship 3D web platform, brand identity architecture, or custom AI pipeline.",
                features: [
                  "Lead Technologist & Brand Architect",
                  "Weekly functional production builds",
                  "Full intellectual property transfer",
                  "Direct deployment & handoff"
                ]
              },
              {
                title: "Strategic Retainer",
                duration: "Quarterly / Annual",
                desc: "Ongoing embedded creative technology leadership augmenting enterprise product, design, and growth teams.",
                features: [
                  "Priority squad allocation",
                  "Continuous WebGL & AI optimization",
                  "Performance growth creative variants",
                  "Press & communications readiness"
                ]
              },
              {
                title: "Venture Build",
                duration: "Full Lifecycle",
                desc: "End-to-end technical and brand architecture for venture-backed founders and corporate innovation units.",
                features: [
                  "Zero-to-one product architecture",
                  "Go-to-market press syndication",
                  "Interactive investor prototypes",
                  "Scalable cloud infrastructure"
                ]
              }
            ].map((model, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(15, 15, 22, 0.65)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '24px',
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: 700,
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {model.duration}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '1rem',
                    }}
                  >
                    {model.title}
                  </h3>

                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {model.desc}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                    {model.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                        <Check size={14} color="var(--accent-cyan)" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigate('/book-a-project')}
                  className="btn-pill btn-pill-outline"
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  <span>Commission Model</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
