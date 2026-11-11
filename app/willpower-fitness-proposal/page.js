'use client';

import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import s from './proposal.module.scss';

const HASH = '6df4acdb8c48482b8072ad47e17a6cce4921a826d8929249fce26e2e2651cc64';

const gbp = n => `£${n.toLocaleString('en-GB')}`;

// [service, price in £, category, anchor]
const SERVICES = [
  ['Website Redesign, Rebuild & CMS', 1800, 'Website', 'website'],
  ['Local SEO & Google Profile', 650, 'SEO', 'seo'],
  ['AI Assistant & Content Tools', 650, 'AI', 'ai'],
  ['Merch Shop & Event Tickets', 1000, 'Commerce', 'shop'],
  ['Booking Platform & Member App (Wodboard replacement)', 6000, 'Platform', 'booking'],
];

// The booking platform and app are priced as 30 months of a £200/month Wodboard set-up.
const WODBOARD_MONTHLY = 200;
const PLATFORM_PRICE = 6000;
const PLATFORM_MONTHS = PLATFORM_PRICE / WODBOARD_MONTHLY;

// Monthly retainer: website only, and the extra once the booking platform & app are live.
const RETAINER_WEBSITE = 50;
const RETAINER_PLATFORM_EXTRA = 50;
const RETAINER_FULL = RETAINER_WEBSITE + RETAINER_PLATFORM_EXTRA;
const ANNUAL_SAVING = (WODBOARD_MONTHLY - RETAINER_FULL) * 12;

// Ways to pay for the booking platform & app: [title, headline, detail]
const PLATFORM_PAYMENT_OPTIONS = [
  ['Pay by phase', `${gbp(PLATFORM_PRICE / 2)} + ${gbp(PLATFORM_PRICE / 2)}`, '50% before the build starts, 50% on sign-off, as with every other phase.'],
  ['Spread over 12 months', `${gbp(PLATFORM_PRICE / 12)}/month`, 'Twelve monthly payments, the first before the build starts. Interest-free.'],
  ['Pay it like Wodboard', `${gbp(WODBOARD_MONTHLY)}/month`, `${PLATFORM_MONTHS} monthly payments, the same as a ${gbp(WODBOARD_MONTHLY)} Wodboard bill, the first before the build starts. Interest-free.`],
];

const TOTAL = SERVICES.reduce((sum, [, price]) => sum + price, 0);

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function WillpowerFitnessProposal() {
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('wpf-auth') === 'true') {
      setAuthenticated(true);
    }
  }, []);

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      const hash = await sha256(inputRef.current.value);
      if (hash === HASH) {
        localStorage.setItem('wpf-auth', 'true');
        setAuthenticated(true);
      } else {
        setError(true);
        inputRef.current.value = '';
        setTimeout(() => setError(false), 400);
      }
    }
  };

  return (
    <>
      {/* Password Gate */}
      <div className={classnames(s.gate, { [s.gateHidden]: authenticated })}>
        <div className={s.gateInner}>
          <div className={s.gateTitle}>Willpower Fitness</div>
          <div className={s.gateSubtitle}>This proposal is password protected.</div>
          <input
            type="password"
            ref={inputRef}
            className={classnames(s.gateInput, { [s.gateInputError]: error })}
            placeholder="Enter password"
            autoComplete="off"
            autoFocus
            onKeyDown={handleKeyDown}
          />
          <div className={s.gateHint}>Press enter to continue</div>
        </div>
      </div>

      {/* Proposal Content */}
      <div className={authenticated ? undefined : s.proposalHidden}>

        {/* Hero */}
        <section className={s.hero}>
          <div className={s.container}>
            <div className={s.heroLabel}>Website &amp; Platform Proposal</div>
            <h1 className={s.heroTitle}>Willpower Fitness</h1>
            <div className={s.heroSub}>A gym, a cafe and a community. A website and app that sell all three.</div>
            <div className={s.heroMeta}>Prepared by Paige Digital Ltd &middot; will.paige.me.uk &middot; November 2026<br />Valid for 30 days.</div>
          </div>
        </section>

        {/* What We're Building */}
        <section className={classnames(s.section, s.introSection)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>What We&apos;re Building</h2>
            <p>Willpower Fitness has a 5.0 Google rating, a strong coaching team, competitions that draw 40+ teams and the only gym in the South Hams with a cafe upstairs. The current website has served the gym well since 2015, but the gym has outgrown it. It doesn&apos;t yet show any of that: there&apos;s no way to book a trial, no forms, no working analytics, and a timetable that Google can&apos;t read and that no longer matches the classes.</p>
            <p>This proposal starts with a new website in the new brand, built to win local searches and turn visitors into members, drop-ins and cafe customers. It then adds a merch shop and event tickets, and finally a booking platform and member app that replace Wodboard like for like, but better, and that Willpower owns outright.</p>
            <div className={s.introDiagram}>
              <span className={s.diagramSource}>One platform, owned by Willpower</span>
              <span className={s.diagramArrow}>&darr;</span>
              <div className={s.diagramServices}>
                <span className={s.serviceItem}>Website &amp; CMS</span>
                <span className={s.serviceItem}>Local SEO</span>
                <span className={s.serviceItem}>AI Assistant</span>
                <span className={s.serviceItem}>Merch &amp; Tickets</span>
                <span className={s.serviceItem}>Booking Platform</span>
                <span className={s.serviceItem}>Member App</span>
              </div>
            </div>
            <p style={{ fontSize: '1.3rem', opacity: 0.7, marginTop: '1rem' }}>The website comes first and works with Wodboard as it is today. Each later phase builds on it without rework.</p>
          </div>
        </section>

        {/* At a Glance */}
        <section className={classnames(s.section, s.pricingSection)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>At a Glance</h2>
            <table className={s.pricingTable}>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Price</th>
                  <th className={s.category}>Category</th>
                </tr>
              </thead>
              <tbody>
                {SERVICES.map(([service, price, cat, anchor]) => (
                  <tr key={service} className={s.pricingRow} onClick={() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })}>
                    <td>{service}</td>
                    <td className={s.price}>{gbp(price)}</td>
                    <td className={s.category}>{cat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={s.pricingTotal}>
              <span className={s.totalLabel}>Full Platform (all services)</span>
              <span className={s.totalPrice}>{gbp(TOTAL)}</span>
            </div>
            <p className={s.pricingNote}>Website first. SEO and the AI assistant can run alongside it or straight after. The shop and tickets follow, then the booking platform and member app together.</p>
            <p className={s.pricingNote}>The booking platform and member app cost the same as {PLATFORM_MONTHS} months ({PLATFORM_MONTHS / 12} years) of Wodboard at {gbp(WODBOARD_MONTHLY)}/month. After that, Willpower owns it outright.</p>
            <p className={s.pricingNote}>For context, comparable scope from a regional digital agency (bespoke website, ecommerce, a gym management platform and native iOS and Android apps) would typically be quoted at &pound;40,000&ndash;&pound;70,000+, excluding ongoing retainer costs. This proposal delivers the same platform at a fraction of that cost by leveraging modern AI-assisted development tooling and removing traditional agency overhead. As researched by Claude.</p>
          </div>
        </section>

        {/* What We Found */}
        <section id="findings" className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>What We Found</h2>
            <p>A review of the current site, Google listing and Wodboard set-up, against what the best independent gyms in the UK are doing in 2026. Much of this is simply what a decade of changes to Google, booking and the gym itself leaves behind.</p>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Getting Started Is Hidden</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>No &quot;book a free session&quot; button anywhere. The free first session and &pound;45 induction are only mentioned in the FAQ, and aren&apos;t set up in Wodboard</li>
                <li>&quot;Sign Up&quot; drops visitors onto a bare Wodboard plan list with no explanation</li>
                <li>No enquiry forms, no click-to-call, no WhatsApp: email links only</li>
                <li>Personal training is enquire-by-email only; kids&apos; classes list a different phone number</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Out-of-Date and Broken</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>The timetable is an image and is out of date: it&apos;s missing the 06:00 Early Bird and the Saturday 07:00 Team class</li>
                <li>No opening hours on the site, and the hours on Google show the gym closed at weekends</li>
                <li>News &amp; Events has no news, and the competition pages stop in 2023</li>
                <li>Pages still listed by Google include a 500 error (<code>/membership/</code>), a broken PayPal form (<code>/register/</code>), the WordPress &quot;Sample Page&quot; and 2015 workout posts</li>
                <li>Only the old Universal Analytics tag, which Google switched off in 2023, so there is no working analytics. No cookie banner and no privacy policy</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Invisible to Local Search</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Not in the Google map pack for &quot;gym Kingsbridge&quot;, despite a better rating (5.0 from 24 reviews) than two of the three gyms that are</li>
                <li>The Google profile&apos;s primary category is &quot;Personal trainer&quot;, not &quot;Gym&quot;, with only 3 photos</li>
                <li>No meta descriptions; page titles like &quot;prices &ndash; Willpower Fitness&quot; with no town or service in them; every page&apos;s main heading is &quot;@willpowerfitness&quot;</li>
                <li>No structured data, no map, no location content. Totnes, Salcombe and Dartmouth searches don&apos;t find the gym at all</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>What the Best Gyms Do</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>One clear first step above the fold (book a free session or intro chat), repeated in a sticky bar on mobile</li>
                <li>A &quot;Start Here&quot; page that answers &quot;do I need to be fit already?&quot;, what the first session looks like and what to bring</li>
                <li>Transparent pricing that includes any unavoidable fees, as UK drip-pricing rules have required since April 2025</li>
                <li>Real reviews and member stories near the top; real photos, not stock</li>
                <li>Replies to enquiries within minutes, not hours. In one UK mystery-shop of gyms, 45% of enquiries got no reply at all</li>
                <li>A page per programme (HYROX, PT, kids, open gym) and an easy, paid-online drop-in for visitors</li>
                <li>Online pause and cancel, ahead of the UK subscription rules expected in 2027</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Website */}
        <section id="website" className={classnames(s.section, s.bgGrey)}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Website</h2>
              <span className={classnames(s.tag, s.tagGreen)}>Start Here</span>
            </div>
            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Redesign, Rebuild &amp; CMS</h3>
              <span className={s.servicePrice}>&pound;1,800</span>
              <p style={{ marginTop: '1.5rem' }}>A fast, mobile-first website in the new Willpower brand, with a bespoke CMS so the team can update classes, prices, coaches, events and the cafe without a developer. It works with Wodboard as it is today, then switches to the new booking platform later with no rebuild.</p>

              <h4 className={s.sectionSubtitle} style={{ marginTop: '3rem' }}>Design &amp; Build</h4>
              <ul>
                <li>Full redesign in the new brand and theme, built on a design system so brand updates flow through the whole site</li>
                <li>Bespoke CMS: one login for staff, with drafts and preview</li>
                <li>Content migration of everything worth keeping, with 301 redirects so existing search rankings carry over</li>
                <li>Old, broken and junk pages removed from Google</li>
                <li>Automatic image optimisation on upload: resized, compressed and converted to WebP/AVIF</li>
                <li>Accessibility to WCAG 2.2 AA: contrast on the dark palette, readable timetable, keyboard-friendly forms</li>
                <li>GA4 and Google Search Console, with tracking on every booking and enquiry button</li>
                <li>Cookie consent, privacy policy and UK GDPR compliance</li>
              </ul>

              <h4 className={s.sectionSubtitle} style={{ marginTop: '3rem' }}>Getting Started</h4>
              <ul>
                <li>&quot;Book your free session&quot; as the main call to action on every page, with a sticky mobile bar: book, call, WhatsApp</li>
                <li>Start Here page: the three steps to joining, what the first session looks like, what to bring, beginner reassurance</li>
                <li>Free session and induction booked online, not hidden in the FAQ</li>
                <li>Short enquiry forms (name, email, phone, goal) for joining, PT, kids&apos; classes and events, all landing in one inbox</li>
                <li>Google reviews and member stories near the top of the homepage</li>
              </ul>

              <h4 className={s.sectionSubtitle} style={{ marginTop: '3rem' }}>Pages</h4>
              <ul>
                <li>Timetable as real text, managed in the CMS, filterable by class, with each class linking to booking</li>
                <li>Prices page showing every membership, pack and drop-in, with the induction fee stated up front</li>
                <li>A page per programme: WPF, Engine, HYROX training, Team, Open Gym, Personal Training, KidFit &amp; TeenFit</li>
                <li>Coaches with photos, qualifications and specialties, each linking to book PT</li>
                <li>Events and competitions: Four at War, War in the Woods, Friday Night Lights and workshops, with past results</li>
                <li>FAQ, contact with a map, directions and parking, and opening hours</li>
              </ul>

              <h4 className={s.sectionSubtitle} style={{ marginTop: '3rem' }}>Drop-Ins for Holidaymakers</h4>
              <p>Searches for gyms in Salcombe and Dartmouth roughly double over the summer. Willpower already does well with drop-ins; this makes it easy for visitors to find the gym and pay before they arrive.</p>
              <ul>
                <li>A dedicated &quot;Training on holiday in the South Hams&quot; page: drive times from Salcombe, Dartmouth and Totnes, parking, showers, what to expect</li>
                <li>Drop-in and multi-day holiday passes, booked and paid online with Apple Pay and Google Pay</li>
                <li>&quot;Then refuel at The Wood Cafe&quot; on every drop-in page</li>
                <li>Post-visit email: a review request, plus a discount on Willpower merch to take home</li>
              </ul>

              <h4 className={s.sectionSubtitle} style={{ marginTop: '3rem' }}>The Wood Cafe</h4>
              <p>No other gym nearby has a cafe, and &quot;gym with cafe&quot; gets around 260 searches a month. The cafe gets its own presence, not a single photo page.</p>
              <ul>
                <li>A full cafe section: menu, opening hours, photos, and a link to the cafe&apos;s Instagram</li>
                <li>Menu and hours editable in the CMS, so they no longer live only on Instagram</li>
                <li>Cafe promoted across the site: after-class offers, member perks, event catering</li>
                <li>Its own structured data so the cafe can show up in Google in its own right</li>
              </ul>
              <p className={s.note}>Cafe pre-ordering from the app can be added in the Member App phase.</p>

              <h4 className={s.sectionSubtitle} style={{ marginTop: '3rem' }}>Hosting &amp; Infrastructure</h4>
              <div className={s.archGrid}>
                <div className={s.archItem}><strong>Website &amp; CMS</strong>Next.js deployed on Vercel &mdash; edge-optimised frontend with instant global delivery</div>
                <div className={s.archItem}><strong>Database</strong>Neon Postgres &mdash; serverless, auto-scaling relational database</div>
                <div className={s.archItem}><strong>No more WordPress</strong>No plugins to keep patched and no separate hosting bill</div>
              </div>
              <p className={s.note}>The new brand is in progress. The build starts on structure and content, and the brand is applied as soon as it lands, so it doesn&apos;t hold up the project.</p>
            </div>
          </div>
        </section>

        {/* SEO */}
        <section id="seo" className={s.section}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Local SEO &amp; Google Profile</h2>
              <span className={classnames(s.tag, s.tagCoral)}>Quickest Win</span>
            </div>
            <span className={s.servicePrice}>&pound;650</span>
            <p style={{ marginTop: '1.5rem' }}>The gym is two towns&apos; gym: the postcode is Totnes (TQ9 7QJ) and the community is Kingsbridge. It can rank honestly for both. The focus is &quot;gym&quot; and HYROX, which people search for, rather than CrossFit, which almost nobody locally does.</p>
            <table className={s.pricingTable} style={{ marginTop: '2rem' }}>
              <thead>
                <tr>
                  <th>Search</th>
                  <th>Per month</th>
                  <th className={s.category}>Today</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['gym totnes', '320', 'Not ranking'],
                  ['gym kingsbridge (and variants)', '210 each', 'Positions 4–10, not in the map pack'],
                  ['gym with cafe', '260', 'Position 15'],
                  ['gym salcombe', '90 (170 in August)', 'Not ranking'],
                  ['gym dartmouth', '90', 'Position 18'],
                  ['personal trainer totnes', '70', 'Not ranking'],
                  ['hyrox training near me', '1,000 (UK)', 'Not ranking'],
                ].map(([kw, vol, now]) => (
                  <tr key={kw}>
                    <td>{kw}</td>
                    <td className={s.price}>{vol}</td>
                    <td className={s.category}>{now}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={s.pricingNote}>UK Google search volumes, November 2026.</p>

            <div className={s.subsection} style={{ marginTop: '3rem' }}>
              <h3 className={s.sectionSubtitle}>Google Business Profile</h3>
              <p style={{ marginTop: '1.5rem' }}>Google only lets the profile owner make these changes, so the Willpower team makes them. We provide a step-by-step checklist with the exact wording, categories, services and links to enter, and check everything once it&apos;s done.</p>
              <ul>
                <li>Primary category changed to Gym, with Personal trainer and Fitness centre as secondary</li>
                <li>Correct hours (including weekend classes), address, services, booking link to the free-session page</li>
                <li>Photo refresh and a simple posting routine for classes, events and the cafe, with post drafts from the AI content tools</li>
                <li>The same name, address and phone on every listing: Tripadvisor, Yelp, Hussle, southhams.com and the out-of-date directory sites</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>On the Website</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Location pages for Kingsbridge, Totnes, Salcombe and Dartmouth, each with real local content, not copies with the town swapped</li>
                <li>Programme pages targeting HYROX training, personal training, kids&apos; fitness and drop-ins</li>
                <li>Page titles, meta descriptions and one clear heading per page</li>
                <li>Structured data for the gym, the cafe, events, coaches and FAQs</li>
                <li>Core Web Vitals passing on mobile</li>
                <li>Migrate existing images, update file names and use AI to generate SEO-optimised alt and title tags</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Training Glossary</h3>
              <p style={{ marginTop: '1.5rem' }}>WOD, AMRAP, EMOM, metcon, RX: the jargon puts beginners off, and the current FAQ already spends half its space explaining it. A glossary explains every term where people meet it, and doubles as content Google and AI tools can quote. HYROX stations lead the way: &quot;hyrox stations&quot; is searched 4,400 times a month in the UK, &quot;sled push&quot; 3,600 and &quot;burpee broad jump&quot; 1,900.</p>
              <ul>
                <li>Glossary entries in the CMS: a short definition, the full explanation, beginner and scaled options, a coach demo video, related terms and the Willpower classes that use it</li>
                <li>Automatic links: the first mention of a term on any page links to its entry, with the definition shown on hover. Never in headings or buttons, and staff can switch it off per term or page</li>
                <li>One A&ndash;Z glossary hub for every term, with full pages only for terms people search for and that have real content: HYROX stations, AMRAP, EMOM and the main lifts</li>
                <li>HYROX station guides as the flagship content, supporting the HYROX training page</li>
                <li>Entries drafted with &quot;Write with AI&quot; and checked by a coach; 15-second coach demos filmed on a phone are what make them better than the generic pages already ranking</li>
                <li>Structured data so definitions and demo videos can appear in Google and AI answers</li>
                <li>Carried into the member app: each movement in the workout of the day links to its entry</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Reviews</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Review requests sent by text at good moments: after a first session, a 50th class, a PB or a competition</li>
                <li>Every member asked, not just the happy ones, and no incentives, as Google&apos;s rules and UK consumer law require</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>AI Search</h3>
              <p style={{ marginTop: '1.5rem' }}>More people now ask ChatGPT, Gemini or Google&apos;s AI Overviews &quot;what&apos;s the best gym near Kingsbridge for HYROX?&quot; and get one answer rather than a list of links. Those answers come from Google profiles, reviews, directory listings and plain facts on the website.</p>
              <ul>
                <li>Hours, prices, class types, beginner suitability and location written as plain, quotable facts</li>
                <li>FAQ content that answers the questions people actually ask</li>
                <li>llms.txt so AI tools read the site accurately</li>
                <li>A quarterly check of how ChatGPT, Gemini and Perplexity describe the gym, with fixes where they get it wrong</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI */}
        <section id="ai" className={classnames(s.section, s.bgPurple)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>AI Assistant &amp; Content Tools</h2>
            <span className={s.servicePrice}>&pound;650</span>

            <div className={s.subsection} style={{ marginTop: '3rem' }}>
              <h3 className={s.sectionSubtitle}>Website Assistant</h3>
              <p style={{ marginTop: '1.5rem' }}>An assistant trained on Willpower&apos;s own content: the timetable, prices, programmes, coaches, FAQs and the cafe. When someone asks &quot;I&apos;ve never done this before, is it for me?&quot; at 10pm, it answers properly and books them a free session.</p>
              <ul>
                <li>Answers from Willpower&apos;s own content, kept up to date automatically from the CMS</li>
                <li>Books a free session, drop-in or PT enquiry inside the chat</li>
                <li>Hands over to WhatsApp or a coach when it should</li>
                <li>Conversations saved so the team can see what people ask</li>
                <li>No monthly chat subscription</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Instant Replies to Enquiries</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Every enquiry gets a personal text and email within a minute, with a link to book</li>
                <li>Follow-ups until they book, then stop automatically</li>
                <li>The team sees every lead in one place, with what happened next</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Content Tools in the CMS</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>&quot;Write with AI&quot; for class, event and news pages, in Willpower&apos;s voice</li>
                <li>Alt text written automatically for every uploaded photo</li>
                <li>Google profile posts and social captions drafted from each new event</li>
                <li>Product descriptions for merch</li>
                <li>FAQ suggestions from the questions people ask the assistant</li>
              </ul>
            </div>
            <p className={s.note}>AI usage costs are covered by the monthly retainer.</p>
          </div>
        </section>

        {/* Shop & Tickets */}
        <section id="shop" className={s.section}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Merch Shop &amp; Event Tickets</h2>
              <span className={classnames(s.tag, s.tagGreen)}>New Revenue</span>
            </div>
            <span className={s.servicePrice}>&pound;1,000</span>
            <p style={{ marginTop: '1.5rem' }}>Wodboard&apos;s shop only works in its app and at the till: there&apos;s no web shop, no delivery and no proper ticketing. This adds both to the website with one basket and Stripe checkout, so a holidaymaker can buy a drop-in, a hoodie and a competition ticket in one go.</p>

            <div className={s.subsection} style={{ marginTop: '3rem' }}>
              <h3 className={s.sectionSubtitle}>Merch</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Products with sizes, colours, stock levels and photos, managed in the CMS</li>
                <li>Free &quot;collect at the gym&quot; or paid delivery</li>
                <li>Limited drops and pre-order windows, for HYROX season, competitions or the gym&apos;s anniversary</li>
                <li>Held stock for the best sellers; print-on-demand for new designs, with no stock risk</li>
                <li>Member pricing and discount codes</li>
                <li>Order notifications for the team and a simple orders screen</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Event Tickets</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Ticketed events with ticket types: individual, pair and team of four entries, spectators, early bird</li>
                <li>Team entries with each teammate&apos;s details and waiver collected</li>
                <li>QR code tickets emailed on purchase and scanned at the door</li>
                <li>Workshops, socials and HYROX simulation days as well as competitions</li>
                <li>Capacity limits, waiting lists and sold-out states</li>
                <li>Replaces Billetto and its fees</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Payments</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Stripe Checkout: cards, Apple Pay, Google Pay</li>
                <li>Willpower&apos;s own Stripe account, paying straight into the gym&apos;s bank</li>
                <li>Refunds from the admin screen</li>
              </ul>
              <p className={s.note}>Willpower currently takes all payments through Wodboard. We&apos;ll set up (or connect) a Stripe account in the gym&apos;s own name for the shop and tickets; the booking platform phase then uses the same account.</p>
            </div>
          </div>
        </section>

        {/* Booking Platform */}
        <section id="booking" className={classnames(s.section, s.bgTeal)}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Booking Platform &amp; Member App</h2>
              <span className={classnames(s.tag, s.tagCoral)}>Replaces Wodboard</span>
            </div>
            <p>Everything Willpower uses Wodboard for today, rebuilt as a platform the gym owns, with its own Willpower-branded app for iPhone and Android. One system behind the website, the app and the staff screens. No per-member pricing tiers, no extra fee for a branded app, and no ceiling on what it can do.</p>
            <span className={s.servicePrice}>{gbp(PLATFORM_PRICE)}</span>
            <div className={s.introDiagram}>
              <span className={s.diagramSource}>{gbp(PLATFORM_PRICE)} = {PLATFORM_MONTHS} months of Wodboard at {gbp(WODBOARD_MONTHLY)}/month</span>
              <span className={s.diagramArrow}>&darr;</span>
              <div className={s.diagramServices}>
                <span className={s.serviceItem}>Booking system</span>
                <span className={s.serviceItem}>iOS &amp; Android app</span>
                <span className={s.serviceItem}>Staff portal</span>
                <span className={s.serviceItem}>Owned outright</span>
              </div>
            </div>
            <p>With Wodboard, {PLATFORM_MONTHS / 12} years of fees buys {PLATFORM_MONTHS / 12} years of access, and the branded app is extra on top. Here the same money buys the booking system and the app outright: Willpower keeps the code, the data and the members, and the platform is built around how the gym actually runs.</p>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Flexible Payment</h3>
              <p style={{ marginTop: '1.5rem' }}>Pay up front, or spread the cost so it never feels bigger than the Wodboard bill it replaces.</p>
              <div className={s.archGrid}>
                {PLATFORM_PAYMENT_OPTIONS.map(([title, headline, detail]) => (
                  <div key={title} className={s.archItem}>
                    <strong>{title}</strong>
                    <span className={s.servicePrice}>{headline}</span>
                    <br />
                    {detail}
                  </div>
                ))}
              </div>
              <p className={s.note}>Same {gbp(PLATFORM_PRICE)} total whichever way you pay. On a monthly plan, ownership of the code passes to Willpower with the final payment. Once it&apos;s paid off, the only ongoing cost is the {gbp(RETAINER_FULL)}/month retainer, which also covers the website: {gbp(ANNUAL_SAVING)} a year less than Wodboard at {gbp(WODBOARD_MONTHLY)}/month.</p>
            </div>

            <div className={s.subsection} style={{ marginTop: '3rem' }}>
              <h3 className={s.sectionSubtitle}>Like for Like</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Timetable: recurring and one-off classes, coaches, capacities, courses and workshops</li>
                <li>Booking windows, cut-offs, late-cancel and no-show rules</li>
                <li>Waiting lists with automatic promotion and notifications</li>
                <li>Memberships, class packs, drop-ins, family and couples plans, with booking limits per plan</li>
                <li>Pauses and freezes, with pro-rating</li>
                <li>Direct debit (GoCardless) and card (Stripe) billing, with automatic retries</li>
                <li>Children&apos;s profiles booked and paid for by a parent</li>
                <li>Waivers and documents, signed online, with versions</li>
                <li>Member profiles, notes, tags and history</li>
                <li>Workout of the day, score and PB logging</li>
                <li>Email and push announcements</li>
                <li>Staff accounts, permissions and coach pay rates</li>
                <li>Reports: revenue, attendance, members, churn</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>But Better</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Check in by tapping a button, scanning a QR code or an Apple/Google Wallet pass: no GPS required, which is the most common complaint about the Wodboard app</li>
                <li>Free session, induction and onboarding as a proper journey: sessions 2&ndash;5 booked at sign-up, coach check-ins after classes 1, 3 and 5</li>
                <li>Retention alerts: members whose attendance is dropping, or whose payment failed, flagged with a drafted personal message for a coach to send</li>
                <li>Direct debit retries and failed-payment alerts to the gym (Wodboard has neither)</li>
                <li>Members pause or cancel online, ready for the UK subscription rules</li>
                <li>Class leaderboards and milestones: 10th, 50th and 100th class celebrated automatically</li>
                <li>Coaching assistant: Will writes the workout; AI suggests beginner, scaled and RX versions and coach notes, for the coach to approve</li>
                <li>Ask your data in plain English: &quot;who hasn&apos;t trained in two weeks?&quot;, &quot;drop-in revenue this summer&quot;</li>
                <li>Shop, tickets, drop-ins and memberships in one system and one customer record</li>
                <li>Xero integration for the accounts</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Migration &amp; Cutover</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Members, memberships and history exported from Wodboard, with a GDPR data request for anything its reports don&apos;t export</li>
                <li>Direct debit mandates kept where possible, so members don&apos;t have to re-enter bank details</li>
                <li>Saved cards moved through Stripe where possible</li>
                <li>Signed waivers downloaded and carried over</li>
                <li>A test migration with full reconciliation, then a planned switchover around a billing date</li>
              </ul>
              <p className={s.note}>Willpower takes all payments through Wodboard today. A short discovery phase confirms whether the Stripe and GoCardless accounts behind Wodboard are in the gym&apos;s name (this decides how smoothly cards and direct debits move across), which Wodboard features are used day to day, and the member count, before the price is fixed.</p>
            </div>

            <div id="app" className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Member App</h3>
              <p style={{ marginTop: '1.5rem' }}>A Willpower-branded app for iPhone and Android, in Willpower&apos;s own App Store and Google Play listings, built in React Native on the booking platform. The Wodboard app is rated 3.4 out of 5 on both stores; this is the chance to do much better.</p>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>App: Training</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Book, cancel and join waiting lists in two taps</li>
                <li>Check in with a tap, a QR code or a Wallet pass</li>
                <li>Today&apos;s workout, scores, PBs and leaderboards</li>
                <li>Membership, payments, pause and cancel in the app</li>
                <li>Parents book and manage KidFit and TeenFit</li>
                <li>Push notifications: class reminders, waiting list spots, PBs, milestones</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>App: Events, Merch &amp; Cross-Selling</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Upcoming events with tickets bought in the app</li>
                <li>Merch shop with Apple Pay and Google Pay, and early access to drops for app users</li>
                <li>Personalised suggestions: a HYROX prep block before race dates, PT after a goal review, milestone merch</li>
                <li>Book PT and sports massage</li>
                <li>Refer a friend with a personal link, tracked so rewards get paid</li>
                <li>The Wood Cafe: menu, member offers, and optional order-ahead for after class</li>
                <li>In-app assistant that knows the member&apos;s bookings and membership</li>
              </ul>
            </div>
            <p className={s.note}>Apple ($99/year) and Google developer accounts in Willpower&apos;s name; we handle the set-up and store submissions.</p>
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Platform Architecture</h2>
            <p>The website, app and staff screens all talk to one secure API. That means the website can launch with Wodboard behind it and switch to the new platform later without being rebuilt.</p>
            <div className={s.archGrid}>
              <div className={s.archItem}><strong>Website &amp; Staff Portal</strong>Next.js on Vercel</div>
              <div className={s.archItem}><strong>API Layer</strong>NestJS on Railway &mdash; one controlled entry point for the website, app and staff screens</div>
              <div className={s.archItem}><strong>Database</strong>Neon Postgres</div>
              <div className={s.archItem}><strong>Member App</strong>React Native, one codebase for iOS and Android</div>
              <div className={s.archItem}><strong>Payments</strong>Stripe for cards, Apple Pay and Google Pay; GoCardless for direct debit</div>
              <div className={s.archItem}><strong>Owned Outright</strong>Willpower owns the code, the data and the customer relationships</div>
            </div>
          </div>
        </section>

        {/* Retainer */}
        <section className={classnames(s.section, s.bgGreen)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Monthly Retainer</h2>
            <div className={s.retainerPrice}>{gbp(RETAINER_WEBSITE)}<span style={{ fontSize: '1.6rem', fontWeight: 400 }}>/month</span></div>
            <div className={s.retainerBreakdown}>Website, SEO, AI assistant, shop and tickets &middot; Rolling monthly</div>
            <div className={s.retainerPrice} style={{ marginTop: '3rem' }}>{gbp(RETAINER_FULL)}<span style={{ fontSize: '1.6rem', fontWeight: 400 }}>/month</span></div>
            <div className={s.retainerBreakdown}>Once the Booking Platform and Member App are live (+{gbp(RETAINER_PLATFORM_EXTRA)}) &middot; Rolling monthly</div>
            <ul>
              <li>Hosting and infrastructure</li>
              <li>AI usage costs</li>
              <li>Payment, booking and app monitoring</li>
              <li>App store updates</li>
              <li>Minor tweaks and fixes; larger changes quoted separately</li>
            </ul>
            <p className={s.note}>For comparison, Wodboard at {gbp(WODBOARD_MONTHLY)}/month covers booking only. The {gbp(RETAINER_FULL)} retainer covers the booking system, the branded app and the website: {gbp(ANNUAL_SAVING)} a year less. It may be reviewed if usage grows significantly, and will always be flagged in advance.</p>
          </div>
        </section>

        {/* Timeline */}
        <section className={classnames(s.section, s.bgGrey)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Estimated Timeline</h2>
            <table className={s.pricingTable}>
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Estimated Delivery</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Website Redesign, Rebuild &amp; CMS</td><td>4&ndash;5 weeks, brand applied when ready</td></tr>
                <tr><td>Local SEO &amp; Google Profile</td><td>Alongside the website; Google profile checklist in week 1</td></tr>
                <tr><td>AI Assistant &amp; Content Tools</td><td>1&ndash;2 weeks after launch</td></tr>
                <tr><td>Merch Shop &amp; Event Tickets</td><td>2&ndash;3 weeks</td></tr>
                <tr><td>Booking Platform &amp; Member App</td><td>12&ndash;14 weeks, plus App Store review and a planned switchover</td></tr>
              </tbody>
            </table>
            <p className={s.note}>Timelines are estimates and depend on brand assets, content, account access and feedback turnaround. The website is timed to launch ahead of the January rush.</p>
          </div>
        </section>

        {/* Terms */}
        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Terms</h2>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Payment</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>50% due before each phase begins</li>
                <li>50% due on completion and sign-off of each phase</li>
                <li>The Booking Platform &amp; Member App can instead be paid monthly over 12 or {PLATFORM_MONTHS} months, interest-free (see <a href="#booking">Flexible Payment</a>)</li>
                <li>Retainer billed monthly from go-live</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Warranty &amp; Support</h3>
              <p>60-day warranty period included after delivery of each phase. Bug fixes and issues arising from the delivered work are covered at no additional cost during this period.</p>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>IP Ownership</h3>
              <p>All code, designs, and assets produced as part of this project are fully owned by Willpower Fitness upon final payment of each phase, including the final instalment where a monthly plan is used.</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className={classnames(s.section, s.bgCream)}>
          <div className={s.container}>
            <div className={s.nextSteps}>
              <h2 className={s.sectionTitle}>Next Steps</h2>
              <ol style={{ marginTop: '2rem' }}>
                <li>Agree the website phase and which of SEO and the AI assistant to run alongside it</li>
                <li>Share the new brand as soon as it&apos;s ready: logo files, colours, fonts and guidelines</li>
                <li>Access to the current website and Wodboard admin</li>
                <li>Work through the Google Business Profile checklist: the quickest win, and it can start straight away</li>
                <li>Gather photos of classes, coaches and the cafe, plus the cafe menu and hours</li>
                <li>Discovery call on the booking platform: the Wodboard features used day to day, member numbers and the payment accounts behind Wodboard</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={s.proposalFooter}>
          <div className={s.container}>
            Paige Digital Ltd &middot; will.paige.me.uk<br />
            Valid for 30 days from date of issue.
          </div>
        </footer>
      </div>
    </>
  );
}
