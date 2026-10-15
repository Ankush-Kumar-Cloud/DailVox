// All business content lives here. Edit freely. Do not add unverified claims.
export const SITE = 'https://YOUR-DOMAIN.com';
export const CO = {
  name: 'Dailvox Dailer', tagline: 'Smarter Conversations. Better Connections.',
  email: 'dialvox.com@gmail.com', phone: '+91 62071 23633', tel: '+916207123633',
  wa: '916203808087', waDisplay: '+91 9220744839',
  waMsg: 'Hello Dailvox Dailer, I would like to learn more about your dialer and call center software. Please share the available features and pricing.',
  responseNote: 'Share your requirements and our team will get back to you. (Update response-time details here once confirmed.)',
};
export const waLink = (m = CO.waMsg) => `https://wa.me/${CO.wa}?text=${encodeURIComponent(m)}`;

export const solutions = [
  { slug: 'cloud-call-center', icon: 'Cloud', title: 'Cloud Call Center Software', short: 'Manage calling operations from one centralized platform.', long: 'Bring agents, supervisors, campaigns and reports together in a single cloud-based workspace, subject to the capabilities of your deployed configuration.', uses: ['Centralized agent and team management', 'Remote-friendly access', 'Configurable roles and permissions'] },
  { slug: 'outbound-dialer', icon: 'PhoneOutgoing', title: 'Outbound Dialer', short: 'Support sales, follow-up and lead-qualification calling.', long: 'Run outreach campaigns with organized lead lists, dispositions and follow-ups so agents spend more time in conversations.', uses: ['Campaign and lead lists', 'Call dispositions and follow-ups', 'Calling-mode options to be confirmed with our team'] },
  { slug: 'inbound-call-management', icon: 'PhoneIncoming', title: 'Inbound Call Management', short: 'Organize incoming calls and route requests sensibly.', long: 'Help customers reach the right person faster with structured queues and routing rules, where supported by your setup.', uses: ['Queues and call distribution', 'Routing rules', 'Call history for follow-up'] },
  { slug: 'predictive-dialer', icon: 'Zap', title: 'Predictive and Progressive Dialing', short: 'Automated dialing modes matched to the right use case.', long: 'Automated dialing can raise agent talk-time, but it needs correct configuration and responsible use. Supported modes and settings are confirmed during your requirements discussion.', uses: ['Progressive: one contact per available agent', 'Predictive: pacing based on agent availability', 'Responsible-calling controls'] },
  { slug: 'ivr-call-routing', icon: 'Network', title: 'IVR and Call Routing', short: 'Menus and routing for self-service and faster handling.', long: 'Interactive voice menus can guide callers to the right team or answer simple requests, where supported.', uses: ['Menu-based routing', 'Business-hours handling', 'Self-service options (where supported)'] },
  { slug: 'call-center-analytics', icon: 'BarChart3', title: 'Call Center Analytics', short: 'Reports on calls, agents and campaigns.', long: 'Understand call activity, agent performance and campaign outcomes with the reporting available in your configuration.', uses: ['Call and agent reports', 'Campaign overview', 'Supervisor visibility'] },
  { slug: 'crm-integration', icon: 'Plug', title: 'CRM Integration', short: 'Connect calling with the tools your team already uses.', long: 'Keep customer data and call activity in sync. Available integrations are confirmed per requirement.', uses: ['API and webhook options (to be confirmed)', 'Customer data sync', 'Click-to-call workflows'] },
];
// status: 'available' only after you have verified the capability in the real product.
const f = (title, benefit) => ({ title, benefit, status: 'confirm' });
export const features = [
  f('Dialing modes', 'Match predictive, progressive, preview or manual dialing to each campaign so agents stay productive.'),
  f('Click-to-call', 'Let agents start calls from records without typing numbers, saving time and reducing dialing errors.'),
  f('Inbound and outbound calls', 'Handle both call directions in one place for a consistent customer experience.'),
  f('Interactive Voice Response', 'Guide callers to the right team and reduce manual call handling.'),
  f('Automatic Call Distribution', 'Distribute calls to available agents so customers wait less.'),
  f('Agent and supervisor dashboards', 'Give supervisors a clearer view of team activity to spot bottlenecks and decide faster.'),
  f('Call recording and playback', 'Review conversations for quality and training, with privacy-conscious retention.'),
  f('Live monitoring and coaching', 'Help new agents improve with timely supervisor guidance.'),
  f('Dispositions and follow-ups', 'Capture call outcomes so no promising lead is forgotten.'),
  f('Campaign and lead management', 'Organize lists and priorities so teams work the right leads at the right time.'),
  f('CRM integration', 'Keep customer context and call activity connected across your tools.'),
  f('Call history and reporting', 'Track activity over time to refine your calling process.'),
  f('Roles and permissions', 'Limit access by role to protect customer data.'),
  f('Remote agent access', 'Support distributed teams with browser-based access, where configured.'),
  f('API and integrations', 'Connect Dailvox Dailer to your own systems and third-party tools.'),
  f('WhatsApp / messaging', 'Extend conversations beyond voice, if supported in your plan.'),
];
export const industries = [
  ['BPO and Contact Centers', 'Manage multiple campaigns and teams with supervisor visibility and reporting.'],
  ['Sales and Lead Generation', 'Organize lead lists, follow-ups and call outcomes for outreach teams.'],
  ['E-commerce and Customer Support', 'Handle order and support calls with routing and call history.'],
  ['Education and Admissions', 'Coordinate enquiry follow-ups and admission-season calling.'],
  ['Healthcare Administration', 'Support appointment reminders and administrative calls. Handle patient data only under authorized access and applicable rules.'],
  ['Financial Services', 'Outreach and service calls must respect customer privacy, consent, applicable calling rules and authorized data access. Dailvox does not claim regulatory certification.'],
  ['Service and Appointment Teams', 'Confirm bookings, reschedule and follow up with customers efficiently.'],
];
export const security = [
  'Access control and role-based permissions', 'Secure authentication', 'Data protection practices',
  'Configurable retention policies', 'Privacy-conscious call recording', 'Audit logs, where supported',
  'Backup and recovery practices, where supported', 'Responsible calling and consent management',
];
export const integrations = [
  ['CRM platforms'], ['Helpdesk tools'], ['Business reporting platforms'], ['APIs and webhooks'], ['Customer data systems'],
]; // add { name, logo } and status:'available' once verified and authorized to advertise
export const plans = [
  { id: 'starter', name: 'Starter', for: 'Small teams getting started.', price: 'Contact for Pricing', cta: 'Discuss Starter', features: ['Agents: to be confirmed', 'Dialing modes: to be confirmed', 'Support level: to be confirmed'] },
  { id: 'growth', name: 'Growth', for: 'Expanding sales and support teams.', price: 'Contact for Pricing', cta: 'Compare Plans', featured: true, features: ['Agents and concurrent calls: to be confirmed', 'Recording and integrations: to be confirmed', 'Onboarding: to be confirmed'] },
  { id: 'enterprise', name: 'Enterprise', for: 'Organizations with advanced requirements.', price: 'Contact for Pricing', cta: 'Request Enterprise Quote', features: ['Custom agent and call volumes', 'Advanced integrations: to be confirmed', 'Dedicated support: to be confirmed'] },
];
export const pricingNote = 'Telecom usage, numbers, taxes and optional services may be charged separately where applicable.';
export const steps = [
  ['Understand Your Workflow', 'Discuss your requirements, call volume, objectives and existing tools.'],
  ['Configure Your Solution', 'Set up supported calling workflows, agent roles, campaigns and integrations.'],
  ['Onboard Your Team', 'Help agents and supervisors learn the interface and daily workflows.'],
  ['Monitor and Improve', 'Use available reports and insights to refine your calling process.'],
];
export const faqs = [
  ['What is Dailvox Dailer?', 'Dailvox Dailer is cloud-based dialer and call center software for managing inbound and outbound business calls.'],
  ['How does cloud-based dialer software work?', 'Agents use the platform over the internet instead of on-premise hardware. Calls, campaigns and reports are managed centrally.'],
  ['Can I manage inbound and outbound calls?', 'Yes, both workflows are part of our solution scope. Exact capabilities are confirmed during your requirements discussion.'],
  ['Which dialing modes are supported?', 'Predictive, progressive, preview and manual modes are planned for discussion. Availability is confirmed per deployment.'],
  ['Can I monitor agent performance?', 'Dashboards and reports for agents and campaigns are part of the offering, subject to your configuration.'],
  ['Does the solution support call recording?', 'Call recording is discussed per requirement, with retention and consent settings agreed up front.'],
  ['Can I integrate my existing CRM?', 'Ask us about your CRM. Integration availability is confirmed case by case.'],
  ['Can remote agents use the system?', 'Cloud access is designed to support remote teams. Network and device requirements are shared during setup.'],
  ['How is pricing calculated?', 'Pricing depends on factors such as agents, concurrent calls, usage, features and support. Contact us for a quote.'],
  ['What setup or infrastructure is required?', 'Typically an internet connection and compatible devices. Specific requirements are confirmed with our team.'],
  ['How is customer data protected?', 'We recommend role-based access, secure authentication and retention policies. Verified protections are shared during evaluation. Compliance with all laws is not automatic.'],
  ['Can the solution grow with my business?', 'Plans are designed to scale with your team size and requirements.'],
  ['How can I request a product demonstration?', 'Use the demo form or message us on WhatsApp.'],
  ['What technical support is available?', 'Support options are confirmed during onboarding. Contact us to discuss your needs.'],
];
export const caseStudy = { note: 'Placeholder. Publish only verified stories approved by the customer.', fields: ['Customer background', 'Business challenge', 'Implemented solution', 'Measured results', 'Customer-approved testimonial'] };
export const nav = [['/', 'Home'], ['/solutions', 'Solutions'], ['/features', 'Features'], ['/industries', 'Industries'], ['/pricing', 'Pricing'], ['/resources', 'Resources'], ['/contact', 'Contact']];
