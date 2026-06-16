'use client';

import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import s from './proposal.module.scss';

const HASH = '323e0925afdc99ed5e13b2115f42506da9ac24c125dbbe81b1c303422ee34023';

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function BeyondBeachProposal() {
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('bb-auth') === 'true') {
      setAuthenticated(true);
    }
  }, []);

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      const hash = await sha256(inputRef.current.value);
      if (hash === HASH) {
        localStorage.setItem('bb-auth', 'true');
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
          <div className={s.gateTitle}>Beyond Beach</div>
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
            <div className={s.heroLabel}>Digital Platform Proposal</div>
            <h1 className={s.heroTitle}>Beyond Beach</h1>
            <div className={s.heroSub}>A platform, not just a website.</div>
            <div className={s.heroMeta}>Prepared by Paige Digital Ltd &middot; will.paige.me.uk &middot; April 2026<br />Valid for 30 days.</div>
          </div>
        </section>

        {/* What We're Building */}
        <section className={classnames(s.section, s.introSection)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>What We&apos;re Building</h2>
            <p>Beyond Beach has outgrown a collection of tools. Checkfront handles bookings, Google Folders tracks sales progress, Tawk fields live chat enquiries, and the team manually bridges the gaps between all of them. As volume grows, that overhead grows with it.</p>
            <p>This proposal sets out a modular digital platform with Checkfront as the single source of truth &mdash; feeding a public-facing website, a bespoke checkout experience, a customer portal for guests, and an admin portal for staff. Every service is independently deliverable. Pick what makes sense now and build on it over time.</p>
            <div className={s.introDiagram}>
              <span className={s.diagramSource}>Checkfront = Single Source of Truth</span>
              <span className={s.diagramArrow}>&darr;</span>
              <div className={s.diagramServices}>
                <span className={s.serviceItem}>Public Website</span>
                <span className={s.serviceItem}>Bespoke Checkout</span>
                <span className={s.serviceItem}>Kyte Flight Booking</span>
                <span className={s.serviceItem}>Customer Portal</span>
                <span className={s.serviceItem}>Admin Portal</span>
              </div>
            </div>
            <p style={{ fontSize: '1.3rem', opacity: 0.7, marginTop: '1rem' }}>All reading and writing to Checkfront in real time. No duplicate data entry. No bridging gaps manually.</p>
          </div>
        </section>

        {/* At a Glance / Pricing */}
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
                {[
                  ['Secure API Layer', 'Included', 'Architecture', 'architecture'],
                  ['Redesign, Rebuild, CMS & My BB MVP', '\u00A31,800', 'Website', 'website'],
                  ['SEO Acceleration', '\u00A3900', 'SEO & Content', 'seo'],
                  ['Content Intelligence and Automation', '\u00A3750', 'SEO & Content', 'seo'],
                  ['Booking & Checkout Optimisation', '\u00A31,400', 'Booking', 'booking'],
                  ['Kyte Flight Integration', '\u00A31,000', 'Booking', 'kyte'],
                  ['AI Chat Widget (replaces Tawk)', '\u00A3600', 'Enquiries', 'enquiries'],
                  ['Customer Portal Phase 2', '\u00A31,000', 'Portals', 'customer-portal'],
                  ['Customer Portal Phase 3 (incl. BB AI)', '\u00A31,100', 'Portals', 'customer-portal'],
                  ['Admin Portal Phase 2', '\u00A31,400', 'Portals', 'admin-portal'],
                  ['Admin Portal Phase 3', '\u00A3650', 'Portals', 'admin-portal'],
                  ['Marketing Automation', '\u00A31,100', 'Automation', 'marketing'],
                  ['Customer Communications & Workflows', '\u00A31,400', 'Comms & Workflow', 'comms'],
                  ['Bespoke Booking System (Checkfront replacement)', '\u00A33,200', 'Platform', 'booking-system'],
                ].map(([service, price, cat, anchor]) => (
                  <tr key={service} className={s.pricingRow} onClick={() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })}>
                    <td>{service}</td>
                    <td className={s.price}>{price}</td>
                    <td className={s.category}>{cat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={s.pricingTotal}>
              <span className={s.totalLabel}>Full Platform (all services)</span>
              <span className={s.totalPrice}>~&pound;16,300</span>
            </div>
            <p className={s.pricingNote}>Mix and match. Each service is independently deliverable.<br />Customer Portal and Admin Portal are sequenced &mdash; Phase 2 builds on the MVP, Phase 3 builds on Phase 2.</p>
            <p className={s.pricingNote}>For context, comparable scope from a regional digital agency would typically be quoted at &pound;50,000&ndash;&pound;80,000+, excluding ongoing retainer costs. This proposal delivers the same platform at a fraction of that cost by leveraging modern AI-assisted development tooling and removing traditional agency overhead. As researched by Claude.</p>
          </div>
        </section>

        {/* Website */}
        <section id="website" className={s.section}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Website</h2>
              <span className={classnames(s.tag, s.tagGreen)}>Start Here</span>
            </div>
            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Redesign, Rebuild, Bespoke CMS &amp; My BB MVP</h3>
              <span className={s.servicePrice}>&pound;1,800</span>
              <p style={{ marginTop: '1.5rem' }}>The website and admin portal are built together in this phase &mdash; staff log into one place to manage both content and operations, rather than a separate CMS login.</p>
              <p>The existing My BB page is a static dump of generic links. The My BB MVP replaces it with a proper authenticated experience tied to Checkfront, so guests only see what&apos;s relevant to their booking.</p>
              <h4 className={s.sectionSubtitle} style={{ marginTop: '3rem' }}>Website &amp; CMS</h4>
              <ul>
                <li className={s.done}>Full redesign and rebuild with like-for-like functionality</li>
                <li className={s.done}>Bespoke CMS built into the admin portal &mdash; one login for staff</li>
                <li className={s.done}>Full content migration from existing site</li>
                <li>301 redirect mapping to protect existing SEO equity</li>
                <li>GA4 and Google Search Console setup</li>
                <li>Cookie consent and GDPR compliance</li>
                <li>Core Web Vitals baseline measurement</li>
                <li className={s.done}>Automatic image optimisation on upload &mdash; images are resized, compressed, and converted to modern formats (WebP/AVIF) with responsive variants generated for every device. Staff drag and drop, the system does the rest</li>
              </ul>
              <h4 className={s.sectionSubtitle} style={{ marginTop: '3rem' }}>My BB MVP (basic customer portal)</h4>
              <ul>
                <li className={s.done}>Proper authenticated login replacing the current booking reference/postcode lookup</li>
                <li className={s.done}>Personalised dashboard &mdash; guest sees their specific booking, destination and dates</li>
                <li className={s.done}>Live booking status and payment schedule from Checkfront</li>
                <li className={s.done}>Pay outstanding balance online</li>
                <li className={s.done}>Trip notes served dynamically for their destination only</li>
                <li className={s.done}>Flights, transfers and extras in one place</li>
                <li className={s.done}>Download invoices and booking documents</li>
                <li className={s.done}>PCI compliant throughout</li>
              </ul>

              <h4 className={s.sectionSubtitle} style={{ marginTop: '3rem' }}>Hosting &amp; Infrastructure<span className={s.doneTag}>&#10003; Live</span></h4>
              <div className={s.archGrid}>
                <div className={s.archItem}><strong>API Layer</strong>NestJS hosted on Railway &mdash; scalable, containerised backend infrastructure</div>
                <div className={s.archItem}><strong>Website &amp; Portals</strong>Next.js deployed on Vercel &mdash; edge-optimised frontend with instant global delivery</div>
                <div className={s.archItem}><strong>Database</strong>Neon Postgres &mdash; serverless, auto-scaling relational database with zero cold starts</div>
              </div>
              <p className={s.note}>All infrastructure costs are covered under the monthly retainer. No separate hosting bills. The retainer amount may be reviewed periodically based on website traffic, infrastructure usage, and AI costs as the platform scales.</p>
            </div>
          </div>
        </section>

        {/* SEO & Content */}
        <section id="seo" className={classnames(s.section, s.bgGrey)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>SEO &amp; Content</h2>
            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>SEO Acceleration</h3>
              <span className={s.servicePrice}>&pound;900</span>
              <ul style={{ marginTop: '1.5rem' }}>
                <li className={s.done}>On-page SEO optimisations across all key pages</li>
                <li className={s.done}>Schema markup (LocalBusiness, Activity, Review, FAQ)</li>
                <li className={s.done}>Local SEO</li>
                <li className={s.done}>Internal linking architecture</li>
                <li>Dynamic long-tail keyword content pages</li>
                <li>Core Web Vitals and page speed improvements</li>
                <li className={s.done}>Migrate existing images, update file names and use AI to generate SEO-optimised alt and title tags</li>
              </ul>
            </div>
            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Content Intelligence and Automation</h3>
              <span className={s.servicePrice}>&pound;750</span>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Automated blog content pipeline</li>
                <li>Competitor keyword gap analysis and pillar content improvements</li>
                <li>Dynamic seasonal content (conditions, weather hooks, best time to visit)</li>
                <li>Activity guide content targeting long-tail search</li>
                <li>Quarterly content calendar aligned to Beyond Beach seasons</li>
                <li>AI auto-populates alt and title tags whenever a new image is uploaded to a gallery or page</li>
              </ul>
              <p className={s.note}>Works best after SEO Acceleration is in place.</p>
            </div>
          </div>
        </section>

        {/* Platform Architecture */}
        <section id="architecture" className={classnames(s.section, s.bgTeal)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Platform Architecture</h2>
            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Secure API Layer <span style={{ fontWeight: 400, fontSize: '1.4rem' }}>&mdash; included</span></h3>
              <p>A dedicated secure API layer sits between all three systems (website, customer portal, admin portal) and the third-party services they depend on (Checkfront, Kyte). All requests route through a single controlled layer.</p>
              <div className={s.archGrid}>
                <div className={s.archItem}><strong>Whitelisted</strong>beyondbeach.com requests only &mdash; no external access</div>
                <div className={s.archItem}><strong>Centralised Credentials</strong>Checkfront &amp; Kyte keys never exposed to the client</div>
                <div className={s.archItem}><strong>Rate Limiting</strong>Request validation and error handling at one point</div>
                <div className={s.archItem}><strong>PCI Compliance</strong>Data security enforced at the API layer across all portals</div>
                <div className={s.archItem}><strong>API Response Caching</strong>Availability, pricing, and booking data cached with short TTLs &mdash; reduces Checkfront API calls during high-traffic periods and speeds up checkout</div>
                <div className={s.archItem}><strong>Kyte Fare Caching</strong>Flight prices cached for 15&ndash;30 minutes &mdash; reduces API costs while keeping fares accurate</div>
                <div className={s.archItem}><strong>Webhook-Driven Updates</strong>Checkfront webhooks push booking status changes to portals in real time &mdash; no polling, instant updates, lower API quota usage</div>
                <div className={s.archItem}><strong>Circuit Breakers &amp; Retry Logic</strong>If Checkfront or Kyte goes down, the rest of the platform doesn&apos;t cascade-fail &mdash; graceful degradation across all surfaces</div>
                <div className={s.archItem}><strong>PMS-Agnostic</strong>The API layer abstracts the booking system from the rest of the platform. If you move away from Checkfront in future, only the API layer needs updating &mdash; the website, portals, and checkout remain untouched</div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking & Checkout */}
        <section id="booking" className={s.section}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Booking &amp; Checkout</h2>
              <span className={classnames(s.tag, s.tagCoral)}>Highest ROI</span>
            </div>
            <p>The current checkout has identifiable drop-off at every step. This fixes all of it, powered by the Checkfront API throughout.</p>
            <div className={s.subsection} style={{ marginTop: '3rem' }}>
              <h3 className={s.sectionSubtitle}>Booking &amp; Checkout Optimisation</h3>
              <span className={s.servicePrice}>&pound;1,400</span>
              <ul style={{ marginTop: '1.5rem' }}>
                <li className={s.done}>Availability-aware date picker with live availability from Checkfront</li>
                <li className={s.done}>Real-time validation before the user hits Continue</li>
                <li className={s.done}>Smart no-availability state: surface next available date automatically</li>
                <li className={s.done}>Early email capture for abandoned checkout recovery</li>
                <li className={s.done}>Guest count inherited across steps &mdash; accommodation and extras pre-filtered</li>
                <li className={s.done}>Contextual pricing: per-person and per-night breakdown alongside total</li>
                <li className={s.done}>Returning customers can log in at the start of checkout &mdash; personal details, address, and payment preferences pre-filled from their My BB account via Checkfront</li>
                <li>Streamlined checkout form with address autocomplete</li>
                <li className={s.done}>Visual extras cards with live running total</li>
                <li className={s.wontDo}><s style={{ opacity: 0.55 }}>Prominent deposit CTA with Hold as secondary</s></li>
                <li className={s.done}>Stripe Checkout integration &mdash; replaces the existing payment form with Stripe&apos;s hosted checkout, giving customers Apple Pay, Google Pay, bank transfers, Klarna, and all major card networks out of the box</li>
                <li className={s.done}>Flexible payment options at checkout &mdash; pay in full, deposit with scheduled balance payment, or monthly instalments. Customer chooses, Stripe handles the collection automatically</li>
                <li className={s.done}>Every payment event synced back to Checkfront automatically via webhook &mdash; booking status, balance due, and payment schedule all updated without manual intervention. No chasing, no waiting for the customer to pay &mdash; all automated</li>
                <li>GA4 event tracking wired to every checkout step &mdash; full funnel visualisation</li>
              </ul>
              <p className={s.note}>Requires Checkfront plan tier confirmation before build &mdash; some API endpoints (availability, customer data, payments) are tier-locked and may require a plan upgrade. We&apos;ll confirm exactly what&apos;s needed before work begins.</p>
            </div>
            <div id="kyte" className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Kyte Flight Integration</h3>
              <span className={s.servicePrice}>&pound;1,000</span>
              <p style={{ marginTop: '1.5rem' }}>Kyte is an airline distribution API connecting to EasyJet, Ryanair, British Airways, and other major carriers &mdash; meaning customers can search, compare and book flights directly within the Beyond Beach checkout and customer portal.</p>
              <ul>
                <li>Flight search embedded in checkout, pre-filtered by destination and date</li>
                <li>Live fares from low-cost and full-service carriers via Kyte API</li>
                <li>Flight booking tied to the Checkfront record &mdash; one reference</li>
                <li>ATOL protection handled end-to-end</li>
                <li>Customer portal: guests add or manage flights post-booking</li>
                <li>Admin portal: staff see flight status alongside the booking</li>
                <li>Removes the need to send customers away &mdash; keeps revenue in-house</li>
                <li>Flights presented as an optional add-on within the checkout extras step &mdash; no extra pages, less friction, higher conversion</li>
                <li>Graceful fallback if Kyte API is unavailable &mdash; degrades to a &quot;we&apos;ll find flights for you&quot; email capture rather than breaking the checkout flow</li>
              </ul>
              <p className={s.note}>Kyte integration requires a Kyte API account. We can assist with onboarding.</p>
            </div>
          </div>
        </section>

        {/* Enquiries & Chat */}
        <section id="enquiries" className={classnames(s.section, s.bgGrey)}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Enquiries &amp; Chat</h2>
              <span className={classnames(s.tag, s.tagGreen)}>Replaces Tawk live chat</span>
            </div>
            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>AI Chat Widget (Tawk replacement)</h3>
              <span className={s.servicePrice}>&pound;600</span>
              <p style={{ marginTop: '1.5rem' }}>The current live chat runs on Tawk. This replaces it with something better: a bespoke AI chat widget powered by a RAG system trained on Beyond Beach&apos;s own content &mdash; destination guides, activity info, FAQs, booking conditions, T&amp;Cs, and local knowledge. When a guest asks &quot;do I need to bring a wetsuit?&quot; it answers accurately from your own content.</p>
              <p>The knowledge base is maintainable without retraining &mdash; update a doc, add a destination, and the widget picks it up automatically.</p>
              <ul>
                <li>Bespoke chat widget on Beyond Beach infrastructure</li>
                <li>RAG-powered responses grounded in your content</li>
                <li>Checkfront-aware for returning visitors</li>
                <li>Escalation to human or email capture when out of scope</li>
                <li>No ongoing subscription fee</li>
                <li>Knowledge base updated by editing documents, no retraining</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Customer Portal */}
        <section id="customer-portal" className={classnames(s.section, s.bgCoral)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Customer Portal</h2>
            <p>Checkfront as the operational backbone. Connected portal for guests, reading from and writing to Checkfront in real time.</p>
            <div className={s.subsection} style={{ marginTop: '3rem' }}>
              <h3 className={s.sectionSubtitle}>Customer Portal Phase 2</h3>
              <span className={s.servicePrice}>&pound;1,000</span>
              <span className={s.priceWas}>was &pound;1,600</span>
              <p className={s.note}>Price reduced as some work was completed as part of the booking system build.</p>
              <ul style={{ marginTop: '1.5rem' }}>
                <li className={s.wontDo}><s style={{ opacity: 0.55 }}>Live booking status and payment schedule from Checkfront</s></li>
                <li className={s.done}>Pay outstanding balance online via Stripe <strong>(completed as part of the booking system build)</strong></li>
                <li className={s.done}>Download invoices and booking documents <strong>(completed as part of the booking system build)</strong></li>
                <li className={s.done}>Trip notes and pre-arrival information</li>
                <li>View and manage flights via Kyte integration</li>
                <li className={s.done}>Return booking flow with loyalty discount auto-applied</li>
                <li className={s.done}>Group and party management &mdash; lead guest can share portal access or invite others to view the itinerary, upload documents, and see trip notes</li>
                <li>Booking modification requests &mdash; date changes, room upgrades, guest count changes submitted through the portal rather than calling or emailing</li>
                <li className={s.done}>Push and email notifications &mdash; automated alerts for payment reminders, balance due dates, trip countdown, and booking changes <strong>(completed as part of the booking system build)</strong></li>
                <li className={s.done}>Emergency contacts and medical info collection per guest <strong>(completed as part of the booking system build)</strong></li>
                <li className={s.done}>Self-service data deletion &mdash; customers can request and action removal of all their personal data</li>
              </ul>
            </div>
            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Customer Portal Phase 3</h3>
              <span className={s.servicePrice}>&pound;1,100</span>
              <span className={s.priceWas}>was &pound;1,400</span>
              <p className={s.note}>Price reduced as some work was completed as part of the booking system build.</p>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>BB AI: assistant aware of the guest&apos;s specific booking</li>
                <li className={s.done}>Document upload for travel docs, waivers, and paperwork <strong>(completed as part of the booking system build)</strong></li>
                <li className={s.done}>Post-booking upsell: add flights, experiences, extras from within the portal</li>
                <li>Automated post-stay loyalty flow and rebooking prompts</li>
                <li>Full GDPR and data compliance</li>
                <li>Live weather and conditions widget &mdash; real-time weather at their destination in the lead-up to the trip</li>
                <li>Dynamic packing list &mdash; generated based on destination, activities booked, and time of year</li>
                <li>Post-trip photo and memory sharing &mdash; guests upload holiday photos, leave a review, and get a shareable trip summary</li>
                <li className={s.done}>Multi-booking dashboard &mdash; full history of all trips with Beyond Beach for repeat customers, not just the current booking</li>
                <li>Travel insurance integration &mdash; surface an insurance option within the portal rather than sending guests elsewhere</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Admin Portal */}
        <section id="admin-portal" className={classnames(s.section, s.bgPurple)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Admin Portal</h2>
            <p>Replaces the Google Folders CRM workflow. Staff portal reading from and writing to Checkfront in real time.</p>
            <div className={s.subsection} style={{ marginTop: '3rem' }}>
              <div className={s.serviceHeader}>
                <h3 className={s.sectionSubtitle}>Admin Portal Phase 2</h3>
                <span className={classnames(s.tag, s.tagGreen)}>Start Here</span>
              </div>
              <span className={s.servicePrice}>&pound;1,400</span>
              <span className={s.priceWas}>was &pound;2,000</span>
              <p className={s.note}>Price reduced as some work was completed as part of the booking system build.</p>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Visual booking pipeline &mdash; every booking and its stage at a glance (extended into the two-swimlane workflow engine in Customer Communications &amp; Workflows)</li>
                <li className={s.done}>Guest details, payment status, flight status, documents per booking <strong>(completed as part of the booking system build)</strong></li>
                <li className={s.wontDo}><s style={{ opacity: 0.55 }}>Staff can manage bookings without needing Checkfront directly</s></li>
                <li className={s.done}>Document management: upload and attach files per booking <strong>(completed as part of the booking system build)</strong></li>
                <li>Basic automated nudges as bookings progress</li>
                <li>Role-based access control</li>
                <li className={s.done}>Automated arrival manifests &mdash; transfer partners, hotel owners, and activity staff receive up-to-date arrival details generated directly from booking data. No more manual spreadsheets, saving an estimated 5+ hours per week</li>
              </ul>
            </div>
            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Admin Portal Phase 3</h3>
              <span className={s.servicePrice}>&pound;650</span>
              <span className={s.priceWas}>was &pound;750</span>
              <p className={s.note}>Price reduced as some work was completed as part of the booking system build.</p>
              <p style={{ marginTop: '1rem' }}>Everything in Phase 2, plus:</p>
              <ul>
                <li>Automated guest comms triggered by pipeline stage changes</li>
                <li className={s.done}>Revenue and occupancy reporting dashboard <strong>(completed as part of the booking system build)</strong></li>
                <li>Full staff permissions and access level management</li>
                <li>Integration hooks for future third-party tools</li>
                <li>Audit log of all actions and changes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Marketing Automation */}
        <section id="marketing" className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Marketing Automation</h2>
            <span className={s.servicePrice}>&pound;1,100</span>
            <ul style={{ marginTop: '1.5rem' }}>
              <li>Abandoned checkout sequence triggered by early email capture</li>
              <li>Weather-triggered email campaigns via Mailchimp</li>
              <li>Seasonal remarketing to past customers using Checkfront booking history</li>
              <li>Post-booking confirmation with waiver link, directions and what to bring</li>
              <li>Automated post-stay review request sequence</li>
              <li>OTA and Google Calendar sync via Checkfront native integrations</li>
            </ul>
          </div>
        </section>

        {/* Bespoke Booking System */}
        <section id="booking-system" className={classnames(s.section, s.bgTeal)}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Bespoke Booking System</h2>
              <span className={classnames(s.tag, s.tagCoral)}>Strategic Ownership</span>
            </div>
            <p>The strategic next step: replacing Checkfront with a bespoke booking system that Beyond Beach owns outright. The booking engine, inventory, rates, customer records and operations all move in-house &mdash; one relational system, no per-booking SaaS fees, no API tier locks, no ceiling on what the platform can do.</p>
            <p>Stripe becomes the payment system of record &mdash; the existing integration, webhooks, and deposit/balance schedules are kept as-is, and the new system reconciles against it rather than replacing it. Because the platform already routes everything through a PMS-agnostic API layer, this swap is contained to that layer: the website, portals and checkout carry over untouched.</p>
            <span className={s.servicePrice}>&pound;3,200</span>

            <div className={s.subsection} style={{ marginTop: '3rem' }}>
              <h3 className={s.sectionSubtitle}>Inventory &amp; Availability</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li className={s.done}>Accommodation types modelled as first-class entities: hotels, villas, chalets, and yachts</li>
                <li className={s.done}>Room types within hotels (single, double, sea view, etc.) with room-by-room booking</li>
                <li className={s.done}>Whole-property booking for villas and chalets</li>
                <li className={s.done}>Booking rules engine: minimum and maximum stay, changeover days, advance booking windows</li>
                <li className={s.done}>Calendar view of availability across every property</li>
                <li className={s.done}>Booking freeze/lock with a TTL during checkout &mdash; no double-bookings while a guest pays</li>
                <li className={s.done}>Manual availability blocks for maintenance and owner use</li>
                <li className={s.done}>Inventory held as a first-class relational entity, fully separate from CMS content</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Pricing &amp; Rates</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li className={s.done}>Seasonal rate calendars per property</li>
                <li className={s.done}>Day-of-week pricing</li>
                <li className={s.done}>Minimum-night stays that vary by season</li>
                <li className={s.done}>Changeover day rules (e.g. Saturday-to-Saturday)</li>
                <li className={s.done}>Length-of-stay discounts</li>
                <li className={s.done}>Group-size pricing for whole-property bookings</li>
                <li className={s.done}>Promo codes and voucher codes</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Holiday Extras</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li className={s.done}>Extras attached to an accommodation type or a specific room</li>
                <li className={s.done}>Per-night, per-stay, and per-person pricing models</li>
                <li className={s.done}>Quantity limits per extra</li>
                <li className={s.done}>Availability windows (e.g. transfers bookable up to X hours before arrival)</li>
                <li className={s.done}>Post-booking add-ons via the customer portal</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Booking Lifecycle</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li className={s.done}>Booking creation flow, wired to the existing rebuilt checkout</li>
                <li className={s.done}>Modifications: date changes, guest count changes, partial cancellations</li>
                <li className={s.done}>Cancellation flow with a policy engine configurable per property</li>
                <li className={s.done}>Continuous reconciliation between booking state and Stripe payment state</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Payments</h3>
              <p style={{ marginTop: '1.5rem' }}>Stripe becomes the system of record. Nothing here is rebuilt &mdash; the new booking system reads from and reconciles against the existing Stripe integration.</p>
              <ul>
                <li className={s.done}>Stripe as system of record for all payments</li>
                <li className={s.done}>Existing webhook integration carried over unchanged</li>
                <li className={s.done}>Deposit and balance schedules continue to live in Stripe</li>
                <li className={s.done}>Refund and partial-refund handling (current logic location to be audited as part of discovery)</li>
                <li className={s.done}>Stripe&ndash;Xero connector handles the cash side &mdash; payments, Stripe fees, payouts, refunds and chargebacks flow into Xero against a Stripe clearing account, so the bank feed reconciles to money that actually moved. No manual export step</li>
              </ul>
              <p className={s.note}>Already in place &mdash; kept as-is.</p>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Customer &amp; CRM</h3>
              <p style={{ marginTop: '1.5rem' }}>The new system becomes the source of truth for customer data, replacing Checkfront and the Google Folders workflow.</p>
              <ul>
                <li>Migration of full customer history from Checkfront</li>
                <li className={s.done}>Customer profiles with complete booking history</li>
                <li className={s.done}>Notes, flags, and marketing consent per customer</li>
                <li className={s.done}>Repeat-guest identification</li>
                <li className={s.done}>Pre-arrival info collection: arrival time, dietary needs, special occasions, transfer needs</li>
                <li className={s.done}>The existing customer portal repointed to the new system &mdash; no guest-facing disruption</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Communications</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li className={s.done}>Booking confirmation with full property details</li>
                <li className={s.done}>Deposit and balance receipts, coordinated with Stripe</li>
                <li className={s.done}>Balance-due reminders</li>
                <li className={s.done}>Pre-arrival sequence: check-in info and local information</li>
                <li className={s.done}>Day-before-arrival message</li>
                <li className={s.done}>In-stay check-in</li>
                <li className={s.done}>Post-stay review request</li>
                <li className={s.done}>Templated, but customisable per property</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Admin &amp; Operations</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li className={s.done}>Admin panel extended from the existing one (currently managing Checkfront SKU linking)</li>
                <li className={s.done}>Manual booking entry for phone bookings</li>
                <li className={s.done}>Internal booking notes and flags</li>
                <li className={s.done}>Housekeeping changeover reports</li>
                <li className={s.done}>Maintenance blocks</li>
                <li className={s.done}>Occupancy and revenue reporting per property</li>
                <li className={s.done}>Audit log of all booking changes</li>
                <li className={s.done}>Booking system posts invoices to Xero &mdash; per-property line items, customer contact, deposit vs balance, and VAT/TOMS classification, allocated against the Stripe clearing account so revenue and cash reconcile without double-counting</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Search &amp; Booking Flow</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li className={s.done}>Multi-property search by date and guest count</li>
                <li className={s.done}>Availability and booking flow on the site</li>
                <li className={s.done}>Alternative date and property suggestions when the first choice is unavailable</li>
              </ul>
              <p className={s.note}>Already built and live &mdash; repointed from Checkfront to the new booking system.</p>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Migration &amp; Cutover</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Full export of Checkfront data: bookings, customers, notes, flags, Stripe links</li>
                <li>Test migration run with full reconciliation before go-live</li>
                <li>Hard cutover plan with feature parity for active bookings on day one</li>
                <li>Mapping of in-flight bookings: Stripe customer continuity, payment schedules intact, confirmation references preserved</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Phase 2 / Later</h3>
              <span className={s.servicePrice}>Price TBC</span>
              <p style={{ marginTop: '1.5rem' }}>Deliberately out of scope for the first release, to keep the cutover clean. Sequenced once the core platform is live and stable:</p>
              <ul>
                <li>Advanced reporting and BI</li>
                <li>Sophisticated upsell flows</li>
                <li>Complex promo engine (tiered, stackable, conditional)</li>
                <li>iCal / channel sync (only if Beyond Beach ever lists elsewhere)</li>
                <li>WhatsApp / SMS communications</li>
                <li>Gift vouchers as a separate concept</li>
              </ul>
            </div>

            <p className={s.note}>A short discovery phase confirms scope, sequencing and the headline figure before build &mdash; including who calculates deposit amounts and balance schedules today, what communications guests receive end-to-end today, the timing driver, and who builds it over what timeframe.</p>
          </div>
        </section>

        {/* Customer Communications & Workflows */}
        <section id="comms" className={s.section}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Customer Communications &amp; Workflows</h2>
              <span className={classnames(s.tag, s.tagCoral)}>Replaces Gmail &amp; Folders</span>
            </div>
            <p>Today enquiries arrive by email, web chat and phone across three separate platforms. Replies and quotes are tracked by hand in a Gmail label pipeline (new, hot, cold, provisional, booked). Checkfront notifications are manually filed into client folders, the sales team coordinates in a side chat, and a handover email is written by hand every time someone takes over an account. This consolidates all of it.</p>
            <p>The principle is deliberately simple. The booking system owns the workflow, and the communications tool is just the inbox. Every enquiry and every booking is a card in the booking system. The inbox is where the conversation happens, pinned to that card. The inbox never holds status, so the two can never drift apart.</p>
            <span className={s.servicePrice}>&pound;1,400</span>

            <div className={s.introDiagram}>
              <span className={s.diagramSource}>Booking System owns the workflow</span>
              <span className={s.diagramArrow}>&darr;</span>
              <div className={s.diagramServices}>
                <span className={s.serviceItem}>Enquiry Swimlane</span>
                <span className={s.serviceItem}>Booking Swimlane</span>
              </div>
              <span className={s.diagramArrow}>&darr;</span>
              <span className={s.diagramSource}>Unified inbox: email, web chat, phone, WhatsApp</span>
            </div>

            <div className={s.subsection} style={{ marginTop: '3rem' }}>
              <h3 className={s.sectionSubtitle}>Enquiry &amp; Booking Workflow Engine</h3>
              <p style={{ marginTop: '1.5rem' }}>Two swimlanes built into the admin portal, replacing the Gmail label pipeline. Cards move themselves as work gets done, with no manual filing.</p>
              <ul>
                <li>Enquiry swimlane: new, hot, cold, quote sent, awaiting payment, won or lost</li>
                <li>Booking swimlane: confirmed, balance due, paid in full, pre-arrival, in resort, returned</li>
                <li>Event-driven transitions. Status is a byproduct of doing the work, so the pipeline never goes stale. Sending a quote and payment link automatically creates the customer record and advances the card</li>
                <li>A payment received via Stripe moves the card from the enquiry swimlane into the booking swimlane automatically</li>
                <li>Lead-to-customer promotion: enquiries capture contact details as a lead, the full customer record is created when a quote goes out</li>
                <li>Identity matching and de-duplication: returning guests link to their existing record, and follow-ups attach to the open card rather than spawning a duplicate</li>
                <li>Every channel (email, web chat, phone, WhatsApp) creates a card, so the swimlane is the complete picture of demand, not just the email slice</li>
              </ul>
              <p className={s.note}>The swimlanes extend the &quot;Visual booking pipeline, every booking and its stage at a glance&quot; introduced in Admin Portal Phase 2, taking it from a single read-only board into a full two-swimlane, event-driven workflow engine.</p>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Customer Communications (Missive Unified Inbox)</h3>
              <p style={{ marginTop: '1.5rem' }}>Missive becomes the single staff inbox for every customer conversation, piped both ways to the booking system. Customers keep using email, web chat and phone as normal and never see the tool. Staff work one inbox with full booking context beside every message.</p>
              <ul>
                <li>Email, web chat, phone and WhatsApp consolidated into one shared inbox, ending the fragmented multi-platform split</li>
                <li>Outbound piping: quotes, payment links, balance reminders and automated messages post straight into the customer&apos;s thread</li>
                <li>Inbound piping: customer replies link back to the right enquiry or booking card automatically, so nothing is filed by hand</li>
                <li>Context sidebar: the open conversation shows the customer&apos;s live booking state (balance, payment status, pre-arrival progress, manifest status) pulled from the booking system</li>
                <li>Internal collaboration replaces the Gmail sales chat. Notes and discussion sit on the conversation itself, attached to the booking</li>
                <li>Handover by reassignment, not by hand. A new staff member inherits the full history and live context, so no handover email is needed</li>
                <li>The AI chat widget pipes in as a custom channel, so AI-handled and human-handled conversations live in one place</li>
              </ul>
              <p className={s.note}>Missive is a per-seat subscription (roughly &pound;12 to &pound;20 per user per month), billed directly to Beyond Beach like the Checkfront and Kyte accounts. Not included in the build fee.</p>
            </div>

            <p className={s.note}>This section covers the two-way conversational inbox and the sales and booking workflow. Templated transactional messages (confirmations, receipts, reminders) are generated by the booking system itself and continue to send through a dedicated email service for deliverability, with a copy referenced into the inbox for visibility. Marketing email stays with Mailchimp.</p>
          </div>
        </section>

        {/* Monthly Retainer */}
        <section className={classnames(s.section, s.bgGreen)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Monthly Retainer</h2>
            <div className={s.retainerPrice}>&pound;250<span style={{ fontSize: '1.6rem', fontWeight: 400 }}>/month</span></div>
            <div className={s.retainerBreakdown}>&pound;3,000/year &middot; Rolling monthly</div>
            <ul>
              <li>Monthly hosting and infrastructure costs</li>
              <li>Checkfront, Kyte, and Stripe webhook health monitoring</li>
              <li>AI usage costs</li>
            </ul>
            <p className={s.note}>Increased from &pound;200/month to cover ongoing maintenance and monitoring of the new bespoke booking system.</p>
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
                <tr><td>Redesign, Rebuild, CMS &amp; My BB MVP</td><td>September 2026 &mdash; ready for testing during the quiet period</td></tr>
                <tr><td>SEO Acceleration</td><td>2&ndash;3 weeks after website launch</td></tr>
                <tr><td>Content Intelligence and Automation</td><td>2&ndash;3 weeks after SEO Acceleration</td></tr>
                <tr><td>Booking &amp; Checkout Optimisation</td><td>3&ndash;4 weeks</td></tr>
                <tr><td>Kyte Flight Integration</td><td>2&ndash;3 weeks</td></tr>
                <tr><td>AI Chat Widget</td><td>1&ndash;2 weeks</td></tr>
                <tr><td>Customer Portal Phase 2</td><td>4&ndash;6 weeks</td></tr>
                <tr><td>Customer Portal Phase 3</td><td>3&ndash;4 weeks after Phase 2</td></tr>
                <tr><td>Admin Portal Phase 2</td><td>4&ndash;6 weeks</td></tr>
                <tr><td>Admin Portal Phase 3</td><td>2&ndash;3 weeks after Phase 2</td></tr>
                <tr><td>Marketing Automation</td><td>2&ndash;3 weeks</td></tr>
                <tr><td>Customer Communications &amp; Workflows</td><td>3&ndash;4 weeks</td></tr>
              </tbody>
            </table>
            <p className={s.note}>Timelines are estimates and depend on timely access to Checkfront, Kyte, and Stripe accounts, content and brand assets, and feedback turnaround. Services can run in parallel where dependencies allow.</p>
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
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Warranty &amp; Support</h3>
              <p>60-day warranty period included after delivery of each phase. Bug fixes and issues arising from the delivered work are covered at no additional cost during this period.</p>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>IP Ownership</h3>
              <p>All code, designs, and assets produced as part of this project are fully owned by Beyond Beach upon final payment of each phase.</p>
            </div>

          </div>
        </section>

        {/* Next Steps */}
        <section className={classnames(s.section, s.bgCream)}>
          <div className={s.container}>
            <div className={s.nextSteps}>
              <h2 className={s.sectionTitle}>Next Steps</h2>
              <ol style={{ marginTop: '2rem' }}>
                <li>Confirm Checkfront plan tier &mdash; some API endpoints are tier-locked and affect portal and checkout scope</li>
                <li>Kyte API account: confirm whether Beyond Beach has one or needs onboarding</li>
                <li>Share current site access for content audit and redirect mapping</li>
                <li>Agree which services to start with and in what order</li>
                <li>Checkout optimisation discovery call to walk through the full funnel together</li>
                <li>Portal scoping call to map the guest and staff journey in detail</li>
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
