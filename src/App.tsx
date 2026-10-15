import { useState } from "react";

type IconName =
  | "arrow"
  | "check"
  | "chevron"
  | "cloud"
  | "headset"
  | "menu"
  | "network"
  | "phone"
  | "quote"
  | "server"
  | "shield"
  | "strategy"
  | "x";

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    cloud: <path d="M17.5 19H7a5 5 0 1 1 1.2-9.85A6 6 0 0 1 19.8 11 4 4 0 0 1 17.5 19Z" />,
    headset: <><path d="M4 13a8 8 0 0 1 16 0" /><path d="M18 19c0 1.1-.9 2-2 2h-3" /><path d="M4 13v4a2 2 0 0 0 2 2h1v-8H6a2 2 0 0 0-2 2Z" /><path d="M20 13v4a2 2 0 0 1-2 2h-1v-8h1a2 2 0 0 1 2 2Z" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    network: <><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M9 6h6a3 3 0 0 1 3 3v6" /><path d="m14 12-3 3-3-3" /><path d="M11 15V9" /></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />,
    quote: <><path d="M9 11H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6c0-4-2-6-5-7" /><path d="M21 11h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6c0-4-2-6-5-7" /></>,
    server: <><rect x="3" y="4" width="18" height="6" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M7 7h.01M7 17h.01" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    strategy: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
    x: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const services = [
  {
    icon: "headset" as IconName,
    number: "01",
    title: "Managed IT Services",
    text: "Complete, proactive IT management that keeps your people productive and your technology dependable.",
    items: ["24/7 monitoring & support", "Help desk for every employee", "Predictable monthly pricing"],
  },
  {
    icon: "shield" as IconName,
    number: "02",
    title: "Cybersecurity",
    text: "Layered protection, continuous detection, and practical guidance built around your business risk.",
    items: ["Managed detection & response", "Security awareness training", "Compliance readiness"],
  },
  {
    icon: "cloud" as IconName,
    number: "03",
    title: "Cloud & Microsoft 365",
    text: "Secure, scalable cloud solutions that help your team collaborate from anywhere with confidence.",
    items: ["Microsoft 365 management", "Cloud migrations & backup", "Identity & access security"],
  },
  {
    icon: "network" as IconName,
    number: "04",
    title: "Projects & Infrastructure",
    text: "Expert planning and implementation for the networks, systems, and spaces your business relies on.",
    items: ["Network design & Wi-Fi", "Server modernization", "Office moves & buildouts"],
  },
];

const faqs = [
  ["What should Michigan businesses look for in a managed IT provider?", "Look for a partner that combines responsive support, proactive monitoring, cybersecurity, infrastructure expertise, and long-term planning. The right team should reduce downtime and make technology decisions easier—not just close tickets."],
  ["What industries do you support?", "We support growing Michigan organizations across manufacturing, professional services, healthcare, construction, nonprofit, and other security-conscious industries. Every solution is tailored to your workflow and compliance needs."],
  ["Can you work alongside our internal IT team?", "Yes. Our co-managed IT model adds deeper bench strength, escalation support, security coverage, and project expertise while your internal team keeps control of day-to-day priorities."],
  ["How do you approach cybersecurity and compliance?", "We use layered security, ongoing monitoring, employee education, and practical policy guidance. We can also help prepare for frameworks such as CMMC, NIST, HIPAA, PCI, and cyber insurance requirements."],
  ["How quickly can we get started?", "Most organizations can begin onboarding within a few weeks. We start with discovery and a technology assessment, then create a phased transition plan designed to avoid disruption."],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="topbar">
        <div className="page-wrap flex items-center justify-between">
          <p>Michigan-based support. Enterprise-level expertise.</p>
          <div className="hidden items-center gap-7 sm:flex">
            <a href="tel:2485550188"><Icon name="phone" className="h-3.5 w-3.5" /> (248) 555-0188</a>
            <span>Client Portal</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur">
        <div className="page-wrap flex h-[78px] items-center justify-between">
          <a href="#" className="brand" aria-label="Managed IT Michigan home">
            <span className="brand-mark"><span>M</span></span>
            <span className="brand-copy"><b>MANAGED IT</b><small>MICHIGAN</small></span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#approach">Why Us</a>
            <a href="#industries">Industries</a>
            <a href="#insights">Resources</a>
            <a href="#about">About</a>
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a href="tel:2485550188" className="header-phone"><Icon name="phone" className="h-4 w-4" /> (248) 555-0188</a>
            <a href="#contact" className="button button-blue">Let's Talk <Icon name="arrow" /></a>
          </div>
          <button className="menu-button lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            <Icon name={menuOpen ? "x" : "menu"} className="h-6 w-6" />
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav lg:hidden">
            {["services", "approach", "industries", "insights", "about", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={closeMenu}>{item === "approach" ? "Why Us" : item}</a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid" />
          <div className="page-wrap relative grid min-h-[720px] items-center gap-12 py-20 lg:grid-cols-[1.06fr_.94fr] lg:py-24">
            <div className="relative z-10 max-w-3xl">
              <div className="eyebrow eyebrow-light"><span /> Michigan's trusted technology partner</div>
              <h1>Technology that works.<br /><em>People who care.</em></h1>
              <p className="hero-lead">Managed IT, cybersecurity, and cloud solutions built around your business—delivered by a local team that knows Michigan.</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#contact" className="button button-orange">Schedule a conversation <Icon name="arrow" /></a>
                <a href="#services" className="button button-ghost">Explore our services <Icon name="arrow" /></a>
              </div>
              <div className="hero-proof">
                <div><b>20+</b><span>Years serving Michigan</span></div>
                <div><b>99.7%</b><span>Client satisfaction</span></div>
                <div><b>&lt;12 min</b><span>Average response</span></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrap">
                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200" alt="Technology professionals collaborating in a modern office" />
              </div>
              <div className="floating-card">
                <span className="floating-icon"><Icon name="shield" /></span>
                <span><b>Your IT. Protected.</b><small>Monitored around the clock</small></span>
                <span className="status-dot" />
              </div>
              <div className="michigan-tag">Proudly Michigan based</div>
            </div>
          </div>
          <div className="hero-ribbon">
            <div className="page-wrap grid grid-cols-2 gap-y-6 md:grid-cols-4">
              {[
                ["shield", "Security first", "Protection built in"],
                ["headset", "Real people", "Local support team"],
                ["cloud", "Modern cloud", "Work from anywhere"],
                ["strategy", "Strategic guidance", "Plan with confidence"],
              ].map(([icon, title, text]) => (
                <div className="ribbon-item" key={title}>
                  <Icon name={icon as IconName} />
                  <span><b>{title}</b><small>{text}</small></span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" id="about">
          <div className="page-wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <div className="image-composition">
              <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1000" alt="Michigan IT team working together" />
              <div className="experience-card"><b>20+</b><span>years of trusted<br />IT partnership</span></div>
              <div className="image-accent" />
            </div>
            <div>
              <div className="eyebrow"><span /> A better kind of IT partner</div>
              <h2>We make technology feel <em>simple.</em></h2>
              <p className="body-large">Your business shouldn't have to slow down because of technology. We handle the complexity so your people can do their best work.</p>
              <p className="body-copy">Managed IT Michigan brings enterprise-grade expertise with the responsiveness and accountability of a local team. From everyday support to long-term strategy, we're here to keep you secure, productive, and ready for what's next.</p>
              <div className="check-grid">
                {["Michigan-based support team", "Clear, predictable pricing", "No confusing tech talk", "Strategy aligned to your goals"].map((item) => (
                  <div key={item}><span><Icon name="check" /></span>{item}</div>
                ))}
              </div>
              <a href="#approach" className="text-link">Why businesses choose us <Icon name="arrow" /></a>
            </div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="page-wrap">
            <div className="section-heading">
              <div>
                <div className="eyebrow eyebrow-light"><span /> What we do</div>
                <h2>One partner for your entire <em>technology world.</em></h2>
              </div>
              <p>From the help desk to the boardroom, we deliver the expertise and support your business needs to move forward with confidence.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon"><Icon name={service.icon} /></span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.items.map((item) => <li key={item}><Icon name="check" />{item}</li>)}
                  </ul>
                  <a href="#contact">Learn more <Icon name="arrow" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" id="approach">
          <div className="page-wrap">
            <div className="center-heading">
              <div className="eyebrow"><span /> The Managed IT Michigan difference</div>
              <h2>Support that goes beyond <em>fixing things.</em></h2>
              <p>We take ownership of your technology and build a plan for where your business is going.</p>
            </div>
            <div className="steps-grid">
              {[
                ["01", "Listen & learn", "We get to know your people, goals, systems, and risk—not just your device count."],
                ["02", "Build your roadmap", "You get a clear, prioritized technology plan connected to real business outcomes."],
                ["03", "Protect & support", "Our team monitors, maintains, secures, and supports your environment every day."],
                ["04", "Improve & evolve", "Regular strategy reviews keep your technology aligned as your business grows."],
              ].map(([num, title, text]) => (
                <div className="step" key={num}>
                  <div className="step-number">{num}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="industry-band" id="industries">
          <div className="industry-image" />
          <div className="page-wrap relative grid gap-12 py-24 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <div className="eyebrow eyebrow-light"><span /> Built for Michigan business</div>
              <h2>Local expertise.<br /><em>Real-world experience.</em></h2>
              <p>We understand the technology, security, and compliance needs of Michigan's most important industries.</p>
              <a href="#contact" className="button button-orange">Find your solution <Icon name="arrow" /></a>
            </div>
            <div className="industry-list">
              {["Manufacturing", "Professional Services", "Healthcare", "Construction & Engineering", "Nonprofit Organizations", "Financial Services"].map((item, index) => (
                <a href="#contact" key={item}><span>0{index + 1}</span>{item}<Icon name="arrow" /></a>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial section-pad">
          <div className="page-wrap">
            <div className="quote-mark"><Icon name="quote" /></div>
            <blockquote>“Managed IT Michigan doesn't just solve our technology problems. They understand our business and help us make better decisions. It truly feels like they're part of our team.”</blockquote>
            <div className="quote-author">
              <span className="avatar">JM</span>
              <span><b>Jennifer M.</b><small>Chief Operating Officer · Michigan Manufacturing</small></span>
            </div>
            <div className="quote-dots"><span /><span /><span /></div>
          </div>
        </section>

        <section className="insights section-pad" id="insights">
          <div className="page-wrap">
            <div className="split-title">
              <div><div className="eyebrow"><span /> Insights & resources</div><h2>Practical advice for a<br /><em>smarter business.</em></h2></div>
              <a href="#" className="text-link">View all insights <Icon name="arrow" /></a>
            </div>
            <div className="article-grid">
              {[
                ["https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800", "IT Strategy", "The real cost of reactive IT support", "Why waiting for things to break costs more than you think—and what to do instead."],
                ["https://images.unsplash.com/photo-1606857521015-7f9fcf423740?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800", "Cybersecurity", "A practical cybersecurity checklist for Michigan businesses", "The essential protections every growing organization should have in place."],
                ["https://images.unsplash.com/photo-1568267938179-f50e67de5ffc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=800", "Business Growth", "How to choose the right managed IT partner", "Seven questions to ask before trusting a provider with your business technology."],
              ].map(([image, category, title, text]) => (
                <article className="article-card" key={title}>
                  <div className="article-image"><img src={image} alt="" /><span>{category}</span></div>
                  <div className="article-content"><small>5 MIN READ</small><h3>{title}</h3><p>{text}</p><a href="#">Read article <Icon name="arrow" /></a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="faq section-pad">
          <div className="page-wrap grid gap-14 lg:grid-cols-[.78fr_1.22fr]">
            <div>
              <div className="eyebrow eyebrow-light"><span /> Common questions</div>
              <h2>Good questions deserve <em>straight answers.</em></h2>
              <p>Don't see yours? Our team is always happy to talk through your situation—no pressure, no jargon.</p>
              <a href="#contact" className="text-link light-link">Ask us anything <Icon name="arrow" /></a>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                  <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                    <span>{question}</span><Icon name="chevron" />
                  </button>
                  {openFaq === index && <p>{answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-bg" />
          <div className="page-wrap relative grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <div className="eyebrow eyebrow-light"><span /> Let's make IT easier</div>
              <h2>Ready for technology that <em>moves you forward?</em></h2>
              <p>Tell us a little about your business. We'll listen, answer your questions, and help you find the right next step.</p>
              <div className="contact-details">
                <a href="tel:2485550188"><span><Icon name="phone" /></span><small>CALL OUR TEAM<b>(248) 555-0188</b></small></a>
                <div><span><Icon name="headset" /></span><small>LOCAL SUPPORT<b>Based in Michigan</b></small></div>
              </div>
            </div>
            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <h3>Start a conversation</h3>
              <p>We'll get back to you within one business day.</p>
              <div className="form-row"><label>First name<input type="text" placeholder="Your first name" /></label><label>Last name<input type="text" placeholder="Your last name" /></label></div>
              <label>Work email<input type="email" placeholder="you@company.com" /></label>
              <label>How can we help?<select defaultValue=""><option value="" disabled>Select a service</option><option>Managed IT Services</option><option>Cybersecurity</option><option>Cloud & Microsoft 365</option><option>IT Project</option></select></label>
              <button className="button button-orange" type="submit">Let's talk <Icon name="arrow" /></button>
              <small className="privacy">No spam. No pressure. Just a helpful conversation.</small>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-wrap footer-grid">
          <div>
            <a href="#" className="brand brand-footer"><span className="brand-mark"><span>M</span></span><span className="brand-copy"><b>MANAGED IT</b><small>MICHIGAN</small></span></a>
            <p>Technology that works. People who care. Managed IT and cybersecurity for Michigan businesses.</p>
            <div className="socials"><a href="#">in</a><a href="#">f</a><a href="#">x</a></div>
          </div>
          <div><h4>Services</h4><a href="#services">Managed IT</a><a href="#services">Cybersecurity</a><a href="#services">Cloud & Microsoft 365</a><a href="#services">Projects & Infrastructure</a></div>
          <div><h4>Company</h4><a href="#about">About Us</a><a href="#approach">Why Choose Us</a><a href="#industries">Industries</a><a href="#insights">Resources</a></div>
          <div><h4>Contact</h4><a href="tel:2485550188">(248) 555-0188</a><a href="mailto:hello@manageditmichigan.com">hello@manageditmichigan.com</a><span>Serving businesses<br />throughout Michigan</span></div>
        </div>
        <div className="page-wrap footer-bottom"><span>© 2025 Managed IT Michigan. All rights reserved.</span><span><a href="#">Privacy Policy</a><a href="#">Terms of Use</a></span></div>
      </footer>
    </div>
  );
}
