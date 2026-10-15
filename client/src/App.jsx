import { useEffect, useState } from 'react';
import { Routes, Route, Link, NavLink, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Cloud, PhoneOutgoing, PhoneIncoming, Zap, Network, BarChart3, Plug, Menu, X, MessageCircle, Activity, Eye, Workflow, TrendingUp, ShieldCheck } from 'lucide-react';
import { CO, SITE, waLink, solutions, features, industries, security, integrations, plans, pricingNote, steps, faqs, caseStudy, nav } from './content.js';

const ICONS = { Cloud, PhoneOutgoing, PhoneIncoming, Zap, Network, BarChart3, Plug };
const Ico = ({ n }) => { const I = ICONS[n] || Cloud; return <div className="ico"><I size={22} aria-hidden /></div>; };

function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Dailvox Analytics home">
      <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#1677F2" />
            <stop offset="1" stopColor="#43D9F5" />
          </linearGradient>
        </defs>
        <path d="M8 10h14c14 0 23 8 23 22S36 54 22 54H8V10Zm11 10v24h4c7 0 11-4 11-12s-4-12-11-12h-4Z" fill="url(#logo-gradient)" />
        <path d="m20 36 12 13L55 10 39 20l-8 15-6-7-5 8Z" fill="url(#logo-gradient)" />
        <path d="M51 10h9l-5 13-3-7-7 4 6-10Z" fill="#43D9F5" />
      </svg>
      <span className="logo-type"><span className="logo-name">Dailvox</span><span className="logo-subtitle">Analytics</span></span>
    </Link>);
}

function Meta({ title, desc, ld, noindex, path }) {
  useEffect(() => {
    document.title = `${title} | ${CO.name}`;
    const set = (sel, make, attr, val) => { let el = document.head.querySelector(sel); if (!el) { el = make(); document.head.appendChild(el); } el.setAttribute(attr, val); };
    const mk = (tag, a) => () => Object.assign(document.createElement(tag), a);
    set('meta[name=description]', mk('meta', { name: 'description' }), 'content', desc);
    set('link[rel=canonical]', mk('link', { rel: 'canonical' }), 'href', SITE + (path ?? window.location.pathname));
    set('meta[property="og:title"]', () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:title'); return m; }, 'content', title);
    set('meta[property="og:description"]', () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:description'); return m; }, 'content', desc);
    set('meta[name=robots]', mk('meta', { name: 'robots' }), 'content', noindex ? 'noindex' : 'index,follow');
    document.getElementById('ld')?.remove();
    if (ld) { const s = Object.assign(document.createElement('script'), { id: 'ld', type: 'application/ld+json', text: JSON.stringify(ld) }); document.head.appendChild(s); }
  });
  return null;
}

function Header() {
  const [open, setOpen] = useState(false); const { pathname } = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);
  return (
    <header className={`nav ${open ? 'open' : ''}`}>
      <div className="wrap"><Logo />
        <nav id="primary-navigation" aria-label="Main"><ul>
          {nav.map(([to, label]) => label === 'Solutions' ? (
            <li className="dd" key={to}><NavLink className="l" to={to} onClick={() => setOpen(false)}>Solutions ▾</NavLink>
              <div className="menu">{solutions.map((s) => <Link key={s.slug} to={`/solutions/${s.slug}`} onClick={() => setOpen(false)}>{s.title}</Link>)}</div></li>
          ) : <li key={to}><NavLink className="l" to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink></li>)}
          <li className="mobile-demo"><Link className="l" to="/request-demo" onClick={() => setOpen(false)}>Book a Free Demo</Link></li>
        </ul></nav>
        <div className="cta-row"><Link className="btn s hide" to="/contact">Contact Sales</Link>
          <Link className="btn p" to="/request-demo">Book a Free Demo</Link>
          <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
      </div>
    </header>);
}

function Footer() {
  return (
    <footer><div className="wrap">
      <div className="fgrid">
        <div><Logo /><p>{CO.tagline}</p></div>
        <div><h3>Company</h3><ul><li><Link to="/about">About Dailvox Dailer</Link></li><li><Link to="/contact">Contact</Link></li><li><Link to="/request-demo">Request a Demo</Link></li></ul></div>
        <div><h3>Solutions</h3><ul>{solutions.slice(0, 3).map((s) => <li key={s.slug}><Link to={`/solutions/${s.slug}`}>{s.title}</Link></li>)}<li><Link to="/solutions/ivr-call-routing">IVR and Call Routing</Link></li><li><Link to="/solutions/call-center-analytics">Analytics</Link></li></ul></div>
        <div><h3>Resources</h3><ul><li><Link to="/faq">FAQs</Link></li><li><Link to="/resources">Guides and Articles</Link></li><li><Link to="/integrations">Integration Information</Link></li></ul></div>
        <div><h3>Legal</h3><ul><li><Link to="/privacy-policy">Privacy Policy</Link></li><li><Link to="/terms">Terms and Conditions</Link></li></ul></div>
        <div className="footer-contact"><h3>Contact</h3><ul>
          <li><span>Email</span><a href={`mailto:${CO.email}`}>{CO.email}</a></li>
          <li><span>Phone</span><a href={`tel:${CO.tel}`}>{CO.phone}</a></li>
          <li><span>WhatsApp</span><a href={waLink()} target="_blank" rel="noopener noreferrer">{CO.waDisplay}</a></li>
        </ul></div>
      </div>
      <div className="copy">© {new Date().getFullYear()} {CO.name}. All rights reserved.</div>
    </div></footer>);
}

const Head = ({ eyebrow, title, children }) => <div className="head">{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h2>{title}</h2>{children && <p>{children}</p>}</div>;
const Sec = ({ cls = '', children }) => <section className={`sec ${cls}`}><div className="wrap">{children}</div></section>;
const PageHead = ({ title, children }) => <div className="page-h"><div className="wrap"><h1>{title}</h1><p>{children}</p></div></div>;

/* Sample-data preview. Not a live product. */
function Dashboard({ big }) {
  const bars = [38, 52, 44, 66, 58, 74, 62, 80, 70, 88, 76, 92];
  const rows = [['Agent A', 'Available'], ['Agent B', 'On call'], ['Agent C', 'Wrap-up']];
  return (
    <div className="dash" role="img" aria-label="Illustrative call center dashboard with sample data">
      <div className="tag">ILLUSTRATIVE PREVIEW · SAMPLE DATA</div>
      <div className="kpis" style={{ margin: '10px 0' }}>
        {[['Total calls', '1,248'], ['Answered', '962'], ['Missed', '86']].map(([a, b]) => <div className="kpi" key={a}><b>{b}</b><span>{a}</span></div>)}
      </div>
      <svg viewBox="0 0 240 80" width="100%" aria-hidden><defs><linearGradient id="g" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#1677F2" /><stop offset="1" stopColor="#43D9F5" /></linearGradient></defs>
        {bars.map((h, i) => <rect key={i} x={i * 20 + 4} y={78 - h * .8} width="12" height={h * .8} rx="4" fill="url(#g)" />)}</svg>
      {big && <table><thead><tr><th>Agent</th><th>Status</th></tr></thead><tbody>{rows.map(([a, s]) => <tr key={a}><td>{a}</td><td>{s}</td></tr>)}</tbody></table>}
    </div>);
}

const SolutionCards = () => (
  <div className="grid">{solutions.slice(0, 6).map((s) => (
    <article className="card" key={s.slug}><Ico n={s.icon} /><h3>{s.title}</h3><p>{s.short}</p><Link to={`/solutions/${s.slug}`}>Learn More →</Link></article>))}</div>);

const FeatureGrid = () => (
  <div className="grid">{features.map((x) => (
    <article className="card" key={x.title}><h3>{x.title}</h3><p>{x.benefit}</p>
      <span className={`badge ${x.status === 'available' ? 'g' : ''}`}>{x.status === 'available' ? 'Available' : 'Availability to be confirmed'}</span></article>))}</div>);

const Steps = () => <div className="grid" style={{ counterReset: 's' }}>{steps.map(([t, d]) => <div className="card step" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>;
const Industries = () => <div className="grid">{industries.map(([t, d]) => <article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div>;
const Security = () => (<><div className="grid">{security.map((s) => <div className="card" key={s}><ShieldCheck color="#1677F2" aria-hidden /><h3 style={{ marginTop: 8 }}>{s}</h3></div>)}</div>
  <p className="small mt">Only verified protections should be presented as product features. Using the product does not automatically make your business compliant with applicable Indian telecom and data protection requirements.</p></>);
const Integrations = () => (<><div className="grid">{integrations.map(([n]) => <div className="card" key={n}><h3>{n}</h3><span className="badge">Integration availability to be confirmed</span></div>)}</div>
  <p className="mt"><Link className="btn p" to="/request-demo?topic=integrations">Ask About Integrations</Link></p></>);
const Plans = () => (<><div className="grid">{plans.map((p) => (
  <article className={`card plan ${p.featured ? 'featured' : ''}`} key={p.id}><h3>{p.name}</h3><p>{p.for}</p><div className="feat-price">{p.price}</div>
    <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul><Link className="btn p" to={`/request-demo?plan=${p.id}`}>{p.cta}</Link></article>))}</div>
  <p className="small mt">{pricingNote}</p></>);
const Faq = () => <div style={{ maxWidth: 800, margin: '0 auto' }}>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>;
const CaseStudy = () => (<div className="card"><span className="badge">Placeholder</span><p>{caseStudy.note}</p><div className="grid">{caseStudy.fields.map((f) => <div key={f}><h3>{f}</h3><p>To be added with customer permission.</p></div>)}</div></div>);

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, PHONE = /^\+?[0-9\s-]{8,15}$/;
const REQS = ['Cloud call center', 'Outbound dialer', 'Inbound call management', 'Predictive / progressive dialing', 'IVR and routing', 'Analytics', 'CRM integration', 'Other'];

function DemoForm({ id }) {
  const [sp] = useSearchParams(); const plan = sp.get('plan'); const topic = sp.get('topic');
  const [v, setV] = useState({ fullName: '', email: '', phone: '', company: '', industry: '', agents: '', requirement: '', contactMethod: 'Phone', message: plan ? `I am interested in the ${plan} plan.` : topic === 'integrations' ? 'I would like to ask about integrations.' : '', consent: false, website: '' });
  const [errs, setErrs] = useState({}); const [state, setState] = useState('idle'); const [apiErr, setApiErr] = useState('');
  const on = (k) => (e) => setV({ ...v, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const check = () => { const e = {};
    if (v.fullName.trim().length < 2) e.fullName = 'Please enter your full name.';
    if (!EMAIL.test(v.email)) e.email = 'Please enter a valid email address.';
    if (!PHONE.test(v.phone)) e.phone = 'Please enter a valid phone number.';
    if (!v.company.trim()) e.company = 'Please enter your company name.';
    if (!v.requirement) e.requirement = 'Please choose a primary requirement.';
    if (!v.consent) e.consent = 'Please agree to be contacted about this inquiry.'; return e; };
  const submit = async (ev) => {
    ev.preventDefault(); const e = check(); setErrs(e); if (Object.keys(e).length) return;
    setState('sending'); setApiErr('');
    try {
      const r = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...v, source: plan || topic || 'demo-form' }) });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) setState('done');
      else { if (j.errors) setErrs(j.errors); setApiErr(j.message || 'Please check the highlighted fields.'); setState('error'); }
    } catch { setApiErr('We could not reach the server.'); setState('error'); }
  };
  if (state === 'done') return <div className="note ok" role="status" id={id}>Thank you. We have received your request and will be in touch using your preferred contact method.</div>;
  const F = ({ k, label, type = 'text', children, full }) => (
    <div className={`fld ${full ? 'full' : ''}`}><label htmlFor={`f-${k}`}>{label}</label>
      {children || <input id={`f-${k}`} type={type} value={v[k]} onChange={on(k)} aria-invalid={!!errs[k]} aria-describedby={errs[k] ? `e-${k}` : undefined} autoComplete={{ fullName: 'name', email: 'email', phone: 'tel', company: 'organization' }[k]} />}
      {errs[k] && <span className="err" id={`e-${k}`} role="alert">{errs[k]}</span>}</div>);
  const wa = waLink(`Hello Dailvox Dailer, I'm ${v.fullName || '(name)'} from ${v.company || '(company)'}. I'd like a demo. Requirement: ${v.requirement || 'not specified'}.`);
  return (
    <form className="demo" onSubmit={submit} noValidate id={id}>
      <F k="fullName" label="Full name *" /><F k="email" label="Business email *" type="email" />
      <F k="phone" label="Phone number *" type="tel" /><F k="company" label="Company name *" />
      <F k="industry" label="Industry"><select id="f-industry" value={v.industry} onChange={on('industry')}><option value="">Select</option>{industries.map(([t]) => <option key={t}>{t}</option>)}<option>Other</option></select></F>
      <F k="agents" label="Number of agents"><select id="f-agents" value={v.agents} onChange={on('agents')}><option value="">Select</option>{['1-5', '6-20', '21-50', '51-100', '100+'].map((a) => <option key={a}>{a}</option>)}</select></F>
      <F k="requirement" label="Primary requirement *"><select id="f-requirement" value={v.requirement} onChange={on('requirement')} aria-invalid={!!errs.requirement}><option value="">Select</option>{REQS.map((a) => <option key={a}>{a}</option>)}</select></F>
      <F k="contactMethod" label="Preferred contact method"><select id="f-contactMethod" value={v.contactMethod} onChange={on('contactMethod')}>{['Phone', 'Email', 'WhatsApp'].map((a) => <option key={a}>{a}</option>)}</select></F>
      <F k="message" label="Message (optional)" full><textarea id="f-message" rows="3" maxLength="1000" value={v.message} onChange={on('message')} /></F>
      <input className="hp" tabIndex="-1" autoComplete="off" aria-hidden="true" name="website" value={v.website} onChange={on('website')} />
      <div className="full"><label style={{ fontWeight: 500 }}><input type="checkbox" checked={v.consent} onChange={on('consent')} aria-invalid={!!errs.consent} /> I agree that Dailvox Dailer may contact me about this inquiry. See the <Link to="/privacy-policy">Privacy Policy</Link>.</label>
        {errs.consent && <div className="err" role="alert">{errs.consent}</div>}</div>
      {state === 'error' && <div className="note bad full" role="alert">{apiErr} Your request was not sent. You can also <a href={wa} target="_blank" rel="noopener noreferrer">send it on WhatsApp</a> or email {CO.email}.</div>}
      <div className="full"><button className="btn p" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Request My Free Demo'}</button></div>
    </form>);
}

const DemoSec = () => (<Sec cls="dark"><Head title="Let's Build a Better Calling Experience for Your Team.">Tell us a little about your business. Our team can help you explore a solution that fits your workflow and requirements.</Head><div style={{ maxWidth: 820, margin: '0 auto' }}><DemoForm id="demo" /></div></Sec>);

function Home() {
  return (<>
    <Meta title="Cloud Call Center and Dialer Software" desc="Dailvox Dailer helps teams manage inbound and outbound calls, track agent performance and streamline customer conversations. Request a free demo." ld={{ '@context': 'https://schema.org', '@type': 'Organization', name: CO.name, url: SITE, email: CO.email, telephone: CO.phone }} />
    <section className="hero"><div className="wrap"><div>
      <div className="eyebrow">SMARTER BUSINESS COMMUNICATION</div><h1>Turn Every Conversation Into an Opportunity.</h1>
      <p>Manage inbound and outbound calls, empower your agents, track performance, and streamline customer conversations with a smarter dialer solution built around your business.</p>
      <div className="cta-row"><Link className="btn p" to="/request-demo">Book a Free Demo</Link><Link className="btn s" to="/solutions">Explore Our Solutions</Link></div>
      <p className="small">Built for growing sales teams, customer support operations, and modern contact centers.</p></div><Dashboard big /></div></section>
    <Sec><div className="grid">{[[Workflow, 'Flexible Business Communication', 'Inbound and outbound workflows in one place.'], [Eye, 'Real-Time Performance Visibility', 'Give supervisors a clearer view of team activity.'], [Activity, 'Streamlined Agent Workflows', 'Less friction between calls, notes and follow-ups.'], [TrendingUp, 'Solutions That Scale With Your Needs', 'Configure what you need as your team grows.']].map(([I, t, d]) => <div key={t}><I color="#1677F2" aria-hidden /><h3>{t}</h3><p className="small">{d}</p></div>)}</div></Sec>
    <Sec cls="alt"><Head title="The Right Dialer Solution for Your Business">Choose the capabilities that match your calling workflow, team structure, and customer engagement goals.</Head><SolutionCards /></Sec>
    <Sec><Head title="Everything Your Calling Team Needs to Work Smarter">Features are configurable and not every feature is in every package.</Head><FeatureGrid /></Sec>
    <Sec cls="alt"><Head title="Get Your Team Calling in a Few Simple Steps" /><Steps /><p className="mt" style={{ textAlign: 'center' }}><Link className="btn p" to="/request-demo">Discuss Your Requirements</Link></p></Sec>
    <Sec cls="dark"><Head title="Clarity for Every Call. Insights for Every Decision.">Illustrative preview with sample data. Not a live product view.</Head><div style={{ maxWidth: 560, margin: '0 auto' }}><Dashboard big /></div></Sec>
    <Sec><Head title="Designed Around the Way Your Business Works" /><Industries /></Sec>
    <Sec cls="alt"><Head title="Security and Responsible Calling" /><Security /></Sec>
    <Sec><Head title="Connect Your Calling Workflow" /><Integrations /></Sec>
    <Sec cls="alt"><Head title="Flexible Plans for Growing Teams" /><Plans /></Sec>
    <Sec><Head title="Your Business Goals. Our Communication Focus." /><CaseStudy /></Sec>
    <Sec cls="alt"><Head title="Frequently Asked Questions" /><Faq /></Sec>
    <DemoSec />
  </>);
}

function SolutionDetail() {
  const { slug } = useParams(); const s = solutions.find((x) => x.slug === slug);
  if (!s) return <NotFound />;
  return (<><Meta title={s.title} desc={`${s.short} Learn how Dailvox Dailer supports ${s.title.toLowerCase()}.`} />
    <PageHead title={s.title}>{s.long}</PageHead>
    <Sec><Head title="What this helps with" /><div className="grid">{s.uses.map((u) => <div className="card" key={u}><p style={{ margin: 0, color: 'inherit' }}>{u}</p></div>)}</div>
      <p className="small mt">Capabilities depend on your deployed configuration and are confirmed during your requirements discussion.</p>
      <p><Link className="btn p" to="/request-demo">Book a Free Demo</Link></p></Sec></>);
}

const Simple = ({ title, desc, lead, children, demo }) => (<><Meta title={title} desc={desc} /><PageHead title={title}>{lead}</PageHead><Sec>{children}</Sec>{demo && <DemoSec />}</>);

function Contact() {
  return (<Simple title="Contact" desc="Contact Dailvox Dailer by email, phone or WhatsApp." lead={CO.responseNote}>
    <div className="grid"><div className="card"><h3>Email</h3><a href={`mailto:${CO.email}`}>{CO.email}</a></div><div className="card"><h3>Phone</h3><a href={`tel:${CO.tel}`}>{CO.phone}</a></div>
      <div className="card"><h3>WhatsApp</h3><a href={waLink()} target="_blank" rel="noopener noreferrer">{CO.waDisplay}</a></div></div>
    <h2 className="mt">Send us a message</h2><div style={{ maxWidth: 820 }}><DemoForm /></div></Simple>);
}

const Legal = ({ title, path }) => (<><Meta title={title} desc={`${title} for Dailvox Dailer.`} noindex />
  <PageHead title={title}>Draft pending legal review.</PageHead><Sec><div className="note bad">This page is a placeholder. Replace it with a lawyer-reviewed policy before launch, including how enquiry data (name, email, phone, company, message) is collected, used, retained and protected.</div></Sec></>);

function NotFound() { return <Simple title="Page not found" desc="This page could not be found." lead="Try one of the links below."><Link className="btn p" to="/">Go home</Link></Simple>; }

export default function App() {
  return (<>
    <a className="skip" href="#main">Skip to content</a><Header />
    <main id="main"><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Simple title="About" desc="About Dailvox Dailer: cloud telephony and dialer solutions for business communication." lead={CO.tagline} demo><p>Dailvox Dailer provides cloud telephony, call center software and dialer solutions for sales teams, support operations and contact centers. Add verified company background here.</p></Simple>} />
      <Route path="/solutions" element={<Simple title="Solutions" desc="Explore Dailvox Dailer solutions: cloud call center, outbound dialer, inbound call management and more." lead="Choose the capabilities that match your calling workflow."><SolutionCards /><div className="grid mt">{solutions.slice(3).map((s) => <Link key={s.slug} to={`/solutions/${s.slug}`}>{s.title}</Link>)}</div></Simple>} />
      <Route path="/solutions/:slug" element={<SolutionDetail />} />
      <Route path="/features" element={<Simple title="Features" desc="Dialing, IVR, ACD, recording, dashboards, integrations and more. Features are configurable." lead="Features are configurable and availability is confirmed per package." demo><FeatureGrid /></Simple>} />
      <Route path="/industries" element={<Simple title="Industries" desc="How Dailvox Dailer supports BPOs, sales, e-commerce, education, healthcare administration and finance teams." lead="Use cases for the way your business works." demo><Industries /></Simple>} />
      <Route path="/pricing" element={<Simple title="Pricing" desc="Flexible plans for growing teams. Contact Dailvox Dailer for pricing." lead="Plans are tailored to agents, usage, features and support."><Plans /></Simple>} />
      <Route path="/integrations" element={<Simple title="Integrations" desc="Connect Dailvox Dailer with CRMs, helpdesks and APIs. Availability confirmed per request." lead="Connect your calling workflow."><Integrations /></Simple>} />
      <Route path="/resources" element={<Simple title="Resources" desc="Guides, FAQs and integration information from Dailvox Dailer." lead="Guides and articles will be published here."><div className="grid"><Link className="card" to="/faq">FAQs</Link><Link className="card" to="/integrations">Integration information</Link><Link className="card" to="/contact">Ask our team</Link></div></Simple>} />
      <Route path="/faq" element={<Simple title="FAQ" desc="Answers about Dailvox Dailer, dialing modes, recording, integrations, pricing and support." lead="Straightforward answers to common questions." demo><Faq /></Simple>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/request-demo" element={<Simple title="Request a Demo" desc="Request a free Dailvox Dailer demo for your team." lead="Tell us about your workflow."><div style={{ maxWidth: 820 }}><DemoForm /></div></Simple>} />
      <Route path="/privacy-policy" element={<Legal title="Privacy Policy" />} />
      <Route path="/terms" element={<Legal title="Terms and Conditions" />} />
      <Route path="*" element={<NotFound />} />
    </Routes></main>
    <Footer />
    <a className="wa" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /></a>
  </>);
}
