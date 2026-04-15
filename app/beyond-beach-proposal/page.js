'use client';

import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import s from './proposal.module.scss';

const HASH = 'cb05b7b8288d7cf865b23dd0b0ad484859b3dc72a53b5396086df29493459ddf';

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function BeyondBeachProposal() {
  const [authenticated, setAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('bb-auth') === 'true';
    }
    return false;
  });
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      const hash = await sha256(inputRef.current.value);
      if (hash === HASH) {
        sessionStorage.setItem('bb-auth', 'true');
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
            <div className={s.heroMeta}>Prepared by Evolve AI &middot; evolve-ai.co &middot; April 2026<br />Valid for 30 days. All prices exclusive of VAT.</div>
          </div>
        </section>

        {/* What We're Building */}
        <section className={classnames(s.section, s.introSection)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>What We&apos;re Building</h2>
            <p>Beyond Beach has outgrown a collection of tools. Checkfront handles bookings, Google Folders tracks sales progress, Intercom fields enquiries, and the team manually bridges the gaps between all of them. As volume grows, that overhead grows with it.</p>
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
                  ['Secure API Layer', 'Included', 'Architecture'],
                  ['Redesign, Rebuild, CMS & My BB MVP', '\u00A31,400', 'Website'],
                  ['SEO Foundation', '\u00A3800', 'SEO & Content'],
                  ['Content Intelligence', '\u00A3600', 'SEO & Content'],
                  ['Booking & Checkout Optimisation', '\u00A31,500', 'Booking'],
                  ['Kyte Flight Integration', '\u00A3800', 'Booking'],
                  ['AI Chat Widget (Intercom replacement)', '\u00A3450', 'Enquiries'],
                  ['Customer Portal MVP', '\u00A31,200', 'Portals'],
                  ['Customer Portal Full (incl. BB AI)', '\u00A31,800', 'Portals'],
                  ['Admin Portal MVP', '\u00A31,400', 'Portals'],
                  ['Admin Portal Full', '\u00A31,000', 'Portals'],
                  ['Marketing Automation', '\u00A31,000', 'Automation'],
                ].map(([service, price, cat]) => (
                  <tr key={service}>
                    <td>{service}</td>
                    <td className={s.price}>{price}</td>
                    <td className={s.category}>{cat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={s.pricingTotal}>
              <span className={s.totalLabel}>Full Platform (all services)</span>
              <span className={s.totalPrice}>~&pound;12,950</span>
            </div>
            <p className={s.pricingNote}>Mix and match. Each service is independently deliverable.<br />Customer Portal and Admin Portal are sequenced &mdash; MVP first, Full builds on top.</p>
          </div>
        </section>

        {/* Website */}
        <section className={s.section}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Website</h2>
              <span className={classnames(s.tag, s.tagGreen)}>Start Here</span>
            </div>
            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Redesign, Rebuild, Bespoke CMS &amp; My BB MVP</h3>
              <span className={s.servicePrice}>&pound;1,400</span>
              <p style={{ marginTop: '1.5rem' }}>The website and admin portal are built together in this phase &mdash; staff log into one place to manage both content and operations, rather than a separate CMS login.</p>
              <p>The existing My BB page is a static dump of generic links. The My BB MVP replaces it with a proper authenticated experience tied to Checkfront, so guests only see what&apos;s relevant to their booking.</p>
              <h4 className={s.sectionSubtitle} style={{ marginTop: '3rem' }}>Website &amp; CMS</h4>
              <ul>
                <li>Full redesign and rebuild with like-for-like functionality</li>
                <li>Bespoke CMS built into the admin portal &mdash; one login for staff</li>
                <li>Full content migration from existing site</li>
                <li>301 redirect mapping to protect existing SEO equity</li>
                <li>GA4 and Google Search Console setup</li>
                <li>Cookie consent and GDPR compliance</li>
                <li>Core Web Vitals baseline measurement</li>
                <li>First-year hosting and AI tooling included (renews at &pound;100/year)</li>
              </ul>
              <h4 className={s.sectionSubtitle} style={{ marginTop: '3rem' }}>My BB MVP (basic customer portal)</h4>
              <ul>
                <li>Proper authenticated login replacing the current booking reference/postcode lookup</li>
                <li>Personalised dashboard &mdash; guest sees their specific booking, destination and dates</li>
                <li>Live booking status and payment schedule from Checkfront</li>
                <li>Pay outstanding balance online</li>
                <li>Trip notes served dynamically for their destination only</li>
                <li>Flights, transfers and extras in one place</li>
                <li>Download invoices and booking documents</li>
                <li>PCI compliant throughout</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SEO & Content */}
        <section className={classnames(s.section, s.bgGrey)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>SEO &amp; Content</h2>
            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>SEO Foundation</h3>
              <span className={s.servicePrice}>&pound;800</span>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>On-page SEO optimisations across all key pages</li>
                <li>Schema markup (LocalBusiness, Activity, Review, FAQ)</li>
                <li>Local SEO</li>
                <li>Internal linking architecture</li>
                <li>Dynamic long-tail keyword content pages</li>
                <li>Core Web Vitals and page speed improvements</li>
              </ul>
            </div>
            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Content Intelligence</h3>
              <span className={s.servicePrice}>&pound;600</span>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Automated blog content pipeline</li>
                <li>Competitor keyword gap analysis and pillar content improvements</li>
                <li>Dynamic seasonal content (conditions, weather hooks, best time to visit)</li>
                <li>Activity guide content targeting long-tail search</li>
                <li>Quarterly content calendar aligned to Beyond Beach seasons</li>
              </ul>
              <p className={s.note}>Works best after SEO Foundation is in place.</p>
            </div>
          </div>
        </section>

        {/* Platform Architecture */}
        <section className={classnames(s.section, s.bgTeal)}>
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
              </div>
            </div>
          </div>
        </section>

        {/* Booking & Checkout */}
        <section className={s.section}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Booking &amp; Checkout</h2>
              <span className={classnames(s.tag, s.tagCoral)}>Highest ROI</span>
            </div>
            <p>The current checkout has identifiable drop-off at every step. This fixes all of it, powered by the Checkfront API throughout.</p>
            <div className={s.subsection} style={{ marginTop: '3rem' }}>
              <h3 className={s.sectionSubtitle}>Booking &amp; Checkout Optimisation</h3>
              <span className={s.servicePrice}>&pound;1,500</span>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Availability-aware date picker with live availability from Checkfront</li>
                <li>Real-time validation before the user hits Continue</li>
                <li>Smart no-availability state: surface next available date automatically</li>
                <li>Early email capture for abandoned checkout recovery</li>
                <li>Guest count inherited across steps &mdash; accommodation and extras pre-filtered</li>
                <li>Contextual pricing: per-person and per-night breakdown alongside total</li>
                <li>Returning customer saved details via Checkfront &mdash; one-click populate</li>
                <li>Streamlined checkout form with address autocomplete</li>
                <li>Visual extras cards with live running total</li>
                <li>Prominent deposit CTA with Hold as secondary</li>
                <li>Apple Pay and Google Pay via Stripe</li>
                <li>GA4 event tracking wired to every checkout step &mdash; full funnel visualisation</li>
              </ul>
              <p className={s.note}>Requires Checkfront plan tier confirmation before build.</p>
            </div>
            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Kyte Flight Integration</h3>
              <span className={s.servicePrice}>&pound;800</span>
              <p style={{ marginTop: '1.5rem' }}>Kyte is an airline distribution API connecting to EasyJet, Ryanair, British Airways, and other major carriers &mdash; meaning customers can search, compare and book flights directly within the Beyond Beach checkout and customer portal.</p>
              <ul>
                <li>Flight search embedded in checkout, pre-filtered by destination and date</li>
                <li>Live fares from low-cost and full-service carriers via Kyte API</li>
                <li>Flight booking tied to the Checkfront record &mdash; one reference</li>
                <li>ATOL protection handled end-to-end</li>
                <li>Customer portal: guests add or manage flights post-booking</li>
                <li>Admin portal: staff see flight status alongside the booking</li>
                <li>Removes the need to send customers away &mdash; keeps revenue in-house</li>
              </ul>
              <p className={s.note}>Kyte integration requires a Kyte API account. We can assist with onboarding.</p>
            </div>
          </div>
        </section>

        {/* Enquiries & Chat */}
        <section className={classnames(s.section, s.bgGrey)}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Enquiries &amp; Chat</h2>
              <span className={classnames(s.tag, s.tagGreen)}>Saves &pound;300/year vs Intercom</span>
            </div>
            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>AI Chat Widget (Intercom replacement)</h3>
              <span className={s.servicePrice}>&pound;450</span>
              <p style={{ marginTop: '1.5rem' }}>A bespoke AI chat widget powered by a RAG system trained on Beyond Beach&apos;s own content &mdash; destination guides, activity info, FAQs, booking conditions, T&amp;Cs, and local knowledge. When a guest asks &quot;do I need to bring a wetsuit?&quot; it answers accurately from your own content.</p>
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
        <section className={classnames(s.section, s.bgCoral)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Customer Portal</h2>
            <p>Checkfront as the operational backbone. Connected portal for guests, reading from and writing to Checkfront in real time.</p>
            <div className={s.subsection} style={{ marginTop: '3rem' }}>
              <div className={s.serviceHeader}>
                <h3 className={s.sectionSubtitle}>Customer Portal MVP</h3>
                <span className={classnames(s.tag, s.tagGreen)}>Start Here</span>
              </div>
              <span className={s.servicePrice}>&pound;1,200</span>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Secure login with return client recognition</li>
                <li>Live booking status and payment schedule from Checkfront</li>
                <li>Pay outstanding balance online</li>
                <li>Download invoices and booking documents</li>
                <li>Trip notes and pre-arrival information</li>
                <li>View and manage flights via Kyte integration</li>
                <li>Return booking flow with loyalty discount auto-applied</li>
                <li>PCI compliant payment handling</li>
              </ul>
            </div>
            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Customer Portal Full</h3>
              <span className={s.servicePrice}>&pound;1,800</span>
              <p style={{ marginTop: '1rem' }}>Everything in MVP, plus:</p>
              <ul>
                <li>BB AI: assistant aware of the guest&apos;s specific booking</li>
                <li>Document upload for travel docs, waivers, and paperwork</li>
                <li>Post-booking upsell: add flights, experiences, extras from within the portal</li>
                <li>Automated post-stay loyalty flow and rebooking prompts</li>
                <li>Full GDPR and data compliance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Admin Portal */}
        <section className={classnames(s.section, s.bgPurple)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Admin Portal</h2>
            <p>Replaces the Google Folders CRM workflow. Staff portal reading from and writing to Checkfront in real time.</p>
            <div className={s.subsection} style={{ marginTop: '3rem' }}>
              <div className={s.serviceHeader}>
                <h3 className={s.sectionSubtitle}>Admin Portal MVP</h3>
                <span className={classnames(s.tag, s.tagGreen)}>Start Here</span>
              </div>
              <span className={s.servicePrice}>&pound;1,400</span>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Visual booking pipeline &mdash; every booking and its stage at a glance</li>
                <li>Guest details, payment status, flight status, documents per booking</li>
                <li>Staff can manage bookings without needing Checkfront directly</li>
                <li>Document management: upload and attach files per booking</li>
                <li>Basic automated nudges as bookings progress</li>
                <li>Role-based access control</li>
              </ul>
            </div>
            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Admin Portal Full</h3>
              <span className={s.servicePrice}>&pound;1,000</span>
              <p style={{ marginTop: '1rem' }}>Everything in MVP, plus:</p>
              <ul>
                <li>Automated guest comms triggered by pipeline stage changes</li>
                <li>Revenue and occupancy reporting dashboard</li>
                <li>Full staff permissions and access level management</li>
                <li>Integration hooks for future third-party tools</li>
                <li>Audit log of all actions and changes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Marketing Automation */}
        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Marketing Automation</h2>
            <span className={s.servicePrice}>&pound;1,000</span>
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

        {/* Monthly Retainer */}
        <section className={classnames(s.section, s.bgGreen)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Monthly Retainer</h2>
            <span style={{ fontSize: '1.4rem', opacity: 0.7 }}>Optional</span>
            <div className={s.retainerPrice}>&pound;300<span style={{ fontSize: '1.6rem', fontWeight: 400 }}>/month</span></div>
            <div className={s.retainerBreakdown}>&pound;3,600/year &middot; Rolling monthly</div>
            <ul>
              <li>Rank tracking and monthly SEO performance report</li>
              <li>Seasonal content publishing and scheduling</li>
              <li>Weather-triggered campaign scheduling</li>
              <li>Checkfront and Kyte integration health monitoring</li>
              <li>Annual hosting renewal management</li>
            </ul>
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
            Evolve AI &middot; evolve-ai.co<br />
            Valid for 30 days from date of issue. All prices exclusive of VAT.
          </div>
        </footer>
      </div>
    </>
  );
}
