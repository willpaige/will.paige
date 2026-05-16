'use client';

import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import s from './proposal.module.scss';

const HASH = 'cb05b7b8288d7cf865b23dd0b0ad484859b3dc72a53b5396086df29493459ddf';

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function BeyondBeachProposalV2() {
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
            <div className={s.heroLabel}>Digital Platform Proposal &middot; v2</div>
            <h1 className={s.heroTitle}>Beyond Beach</h1>
            <div className={s.heroSub}>Owning the platform end-to-end.</div>
            <div className={s.heroMeta}>Prepared by Paige Digital Ltd &middot; will.paige.me.uk &middot; May 2026<br />Valid for 30 days. All prices exclusive of VAT.</div>
          </div>
        </section>

        {/* Back to v1 banner */}
        <section className={s.versionBanner}>
          <div className={s.container}>
            This builds on the original proposal. The website, SEO, portals and chat are unchanged.
            <a href="/beyond-beach-proposal">Read v1 &rarr;</a>
          </div>
        </section>

        {/* The Strategic Shift */}
        <section className={classnames(s.section, s.introSection)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>The Strategic Shift</h2>
            <p>The original proposal put Checkfront at the centre &mdash; the single source of truth feeding the website, checkout, and portals. That was the right call to ship value fast, and the foundation is now largely live: the redesigned site, bespoke CMS, hosting, core SEO, and a rebuilt availability-aware checkout are all in place.</p>
            <p>v2 is the next move: replacing Checkfront with a bespoke booking system that Beyond Beach owns outright. Checkfront becomes the system we migrate <em>off</em>, not the system we build <em>on</em>. The booking engine, inventory, rates, customer records, and operations all move in-house &mdash; one relational system, no per-booking SaaS fees, no API tier locks, no ceiling on what the platform can do.</p>
            <p>This was always the plan. The v1 architecture deliberately put a PMS-agnostic API layer between Checkfront and everything else, precisely so this swap would touch only that layer &mdash; the website, portals, and checkout carry over untouched.</p>
            <div className={s.introDiagram}>
              <span className={s.diagramSource}>Bespoke Booking System = Single Source of Truth</span>
              <span className={s.diagramArrow}>&darr;</span>
              <div className={s.diagramServices}>
                <span className={s.serviceItem}>Public Website</span>
                <span className={s.serviceItem}>Bespoke Checkout</span>
                <span className={s.serviceItem}>Customer Portal</span>
                <span className={s.serviceItem}>Admin Portal</span>
                <span className={s.serviceItem}>Yacht Charter</span>
              </div>
            </div>
            <p style={{ fontSize: '1.3rem', opacity: 0.7, marginTop: '1rem' }}>Stripe remains the system of record for payments &mdash; the existing webhook integration, deposit and balance schedules, and refund handling are kept as-is. The new booking system reconciles against Stripe, it does not replace it.</p>
          </div>
        </section>

        {/* At a Glance / Pricing */}
        <section className={classnames(s.section, s.pricingSection)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>At a Glance</h2>
            <table className={s.pricingTable}>
              <thead>
                <tr>
                  <th>Workstream</th>
                  <th>Price</th>
                  <th className={s.category}>Category</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Bespoke Booking System (Checkfront replacement)', '£XX,XXX', 'Platform', 'booking-system'],
                  ['Yacht Accommodation', '£X,XXX', 'Platform', 'yacht'],
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
              <span className={s.totalLabel}>Total &mdash; v2</span>
              <span className={s.totalPrice}>&pound;XX,XXX <span style={{ fontSize: '1.4rem', fontWeight: 400, opacity: 0.6 }}>ex VAT</span></span>
            </div>
            <p className={s.pricingNote}>Single headline estimate for the full booking platform plus yacht accommodation. Final figures are confirmed at discovery sign-off (see Open Questions). The work is delivered in sequenced phases &mdash; inventory and migration first, operations and comms layered on.</p>
            <p className={s.pricingNote}>For context, a Checkfront-replacement booking platform of this scope from a regional agency would typically be quoted well into five figures plus ongoing licence costs. This delivers the same capability as owned software with no per-booking SaaS fee. As researched by Claude.</p>
          </div>
        </section>

        {/* Bespoke Booking System */}
        <section id="booking-system" className={s.section}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Bespoke Booking System</h2>
              <span className={classnames(s.tag, s.tagCoral)}>Strategic Ownership</span>
            </div>
            <p>A relational booking platform built for Beyond Beach: inventory, availability, rates, the full booking lifecycle, customer records, communications, and operations &mdash; one system, owned outright, with Stripe kept as the payment system of record.</p>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Inventory &amp; Availability</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Accommodation types modelled as first-class entities: hotels, villas, chalets &mdash; and yachts (see Yacht Accommodation)</li>
                <li>Room types within hotels (single, double, sea view, etc.) with room-by-room booking</li>
                <li>Whole-property booking for villas and chalets</li>
                <li>Booking rules engine: minimum and maximum stay, changeover days, advance booking windows</li>
                <li>Calendar view of availability across every property</li>
                <li>Booking freeze/lock with a TTL during checkout &mdash; no double-bookings while a guest pays</li>
                <li>Manual availability blocks for maintenance and owner use</li>
                <li>Inventory held as a first-class relational entity, fully separate from CMS content</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Pricing &amp; Rates</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Seasonal rate calendars per property</li>
                <li>Day-of-week pricing</li>
                <li>Minimum-night stays that vary by season</li>
                <li>Changeover day rules (e.g. Saturday-to-Saturday)</li>
                <li>Length-of-stay discounts</li>
                <li>Group-size pricing for whole-property bookings</li>
                <li>Promo codes and voucher codes</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Holiday Extras</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Extras attached to an accommodation type or a specific room</li>
                <li>Per-night, per-stay, and per-person pricing models</li>
                <li>Quantity limits per extra</li>
                <li>Availability windows (e.g. transfers bookable up to X hours before arrival)</li>
                <li>Post-booking add-ons via the customer portal</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Booking Lifecycle</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Booking creation flow, wired to the existing rebuilt checkout</li>
                <li>Modifications: date changes, guest count changes, partial cancellations</li>
                <li>Cancellation flow with a policy engine configurable per property</li>
                <li>Continuous reconciliation between booking state and Stripe payment state</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Payments</h3>
              <p style={{ marginTop: '1.5rem' }}>Stripe stays the system of record. Nothing here is rebuilt &mdash; the new booking system reads from and reconciles against the existing Stripe integration.</p>
              <ul>
                <li>Stripe as system of record for all payments</li>
                <li>Existing webhook integration carried over unchanged</li>
                <li>Deposit and balance schedules continue to live in Stripe</li>
                <li>Refund and partial-refund handling (current logic location to be audited as part of discovery)</li>
              </ul>
              <p className={s.note}>Already in place from v1 &mdash; kept as-is.</p>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Customer &amp; CRM</h3>
              <p style={{ marginTop: '1.5rem' }}>The new system becomes the source of truth for customer data, replacing Checkfront and the Google Folders workflow.</p>
              <ul>
                <li>Migration of full customer history from Checkfront</li>
                <li>Customer profiles with complete booking history</li>
                <li>Notes, flags, and marketing consent per customer</li>
                <li>Repeat-guest identification</li>
                <li>Pre-arrival info collection: arrival time, dietary needs, special occasions, transfer needs</li>
                <li>The existing customer portal repointed to the new system &mdash; no guest-facing disruption</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Communications</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Booking confirmation with full property details</li>
                <li>Deposit and balance receipts, coordinated with Stripe</li>
                <li>Balance-due reminders</li>
                <li>Pre-arrival sequence: check-in info and local information</li>
                <li>Day-before-arrival message</li>
                <li>In-stay check-in</li>
                <li>Post-stay review request</li>
                <li>Templated, but customisable per property</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Admin &amp; Operations</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Admin panel extended from the existing one (currently managing Checkfront SKU linking)</li>
                <li>Manual booking entry for phone bookings</li>
                <li>Internal booking notes and flags</li>
                <li>Housekeeping changeover reports</li>
                <li>Maintenance blocks</li>
                <li>Occupancy and revenue reporting per property</li>
                <li>Audit log of all booking changes</li>
                <li>Xero export for accounting</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Search &amp; Booking Flow</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Multi-property search by date and guest count</li>
                <li>Availability and booking flow on the site</li>
                <li>Alternative date and property suggestions when the first choice is unavailable</li>
              </ul>
              <p className={s.note}>Already built and live &mdash; repointed from Checkfront to the new booking system.</p>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Compliance &amp; Tax</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>VAT handling</li>
                <li>TOMS scheme check (to be confirmed with Beyond Beach&apos;s accountant)</li>
                <li>GDPR data export and deletion</li>
                <li>PCI scope kept minimal via Stripe Elements</li>
              </ul>
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
          </div>
        </section>

        {/* Yacht Accommodation */}
        <section id="yacht" className={classnames(s.section, s.bgTeal)}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Yacht Accommodation</h2>
              <span className={s.servicePrice}>&pound;X,XXX</span>
            </div>
            <p>Yacht charter holidays are a major part of the business and have no representation in the current platform. Yachts become a first-class accommodation type alongside hotels, villas and chalets &mdash; running on the same booking rules, pricing, lifecycle and comms engine, with the charter-specific modelling the others don&apos;t need.</p>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Charter Model</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Charter types: bareboat, skippered, and fully crewed</li>
                <li>Cabin charter (per-cabin booking) vs whole-yacht charter</li>
                <li>Yacht specifications surfaced in search: berths, cabins, heads, year, length</li>
                <li>Marina / base location as an inventory dimension &mdash; guests search by base, not just date</li>
                <li>Embarkation and changeover-day rules (typically fixed Saturday turnarounds) handled by the rules engine</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Charter-Specific Booking</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Security deposit / APA (Advance Provisioning Allowance) handling, coordinated with Stripe</li>
                <li>Skipper qualification capture at booking (RYA / ICC) for bareboat charters</li>
                <li>Crew, provisioning, fuel and itinerary planning offered through the extras engine</li>
                <li>Per-cabin guest manifests for cabin charters</li>
                <li>Yacht-specific communications: pre-departure checklist, skipper documents, marina and base information</li>
              </ul>
              <p className={s.note}>Reuses the core booking system &mdash; this section is the charter-specific layer on top, not a separate engine.</p>
            </div>
          </div>
        </section>

        {/* Open Questions / Discovery */}
        <section className={classnames(s.section, s.bgGrey)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Open Questions</h2>
            <p>A short discovery phase confirms scope, sequencing, and the headline figures before build begins. The questions that move the estimate:</p>
            <ul style={{ marginTop: '1.5rem' }}>
              <li>The current Checkfront&ndash;Stripe flow: who calculates deposit amounts and balance schedules today?</li>
              <li>What communications do guests actually receive end-to-end today?</li>
              <li>The timing driver: a specific Checkfront blocker, or the strategic ownership play?</li>
              <li>Who is building it, and over what timeframe?</li>
            </ul>
            <p className={s.note}>The pricing above is a single headline estimate. Discovery converts it into a fixed, phased figure.</p>
          </div>
        </section>

        {/* Next Steps */}
        <section className={classnames(s.section, s.bgCream)}>
          <div className={s.container}>
            <div className={s.nextSteps}>
              <h2 className={s.sectionTitle}>Next Steps</h2>
              <ol style={{ marginTop: '2rem' }}>
                <li>Discovery call to walk the current Checkfront&ndash;Stripe flow and confirm what we&apos;re replacing</li>
                <li>Confirm the timing driver and who owns the build timeline</li>
                <li>Checkfront data audit to scope the migration and cutover</li>
                <li>Sign off the headline figures and phasing</li>
                <li>Lock the cutover plan with feature parity for active bookings</li>
              </ol>
              <p style={{ marginTop: '2rem' }}>
                <a className={s.backLink} href="/beyond-beach-proposal">&larr; Back to the original proposal</a>
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={s.proposalFooter}>
          <div className={s.container}>
            Paige Digital Ltd &middot; will.paige.me.uk<br />
            Valid for 30 days from date of issue. All prices exclusive of VAT.
          </div>
        </footer>
      </div>
    </>
  );
}
