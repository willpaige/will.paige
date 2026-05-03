'use client';

import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import s from './proposal.module.scss';

const HASH = '665921b28b5b51a40b9b37a10f46769deb6591cd4a796888d62eb57d7cf3038c';

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function KateBarkerProposal() {
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('kb-auth') === 'true') {
      setAuthenticated(true);
    }
  }, []);

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      const hash = await sha256(inputRef.current.value);
      if (hash === HASH) {
        localStorage.setItem('kb-auth', 'true');
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
          <div className={s.gateTitle}>Kate Barker Art</div>
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
            <div className={s.heroLabel}>Website &amp; Ecommerce Proposal</div>
            <h1 className={s.heroTitle}>Kate Barker Art</h1>
            <div className={s.heroSub}>A bespoke gallery and shop, built around your work.</div>
            <div className={s.heroMeta}>Prepared by Paige Digital Ltd &middot; will.paige.me.uk &middot; May 2026<br />Valid for 30 days. All prices include VAT.</div>
          </div>
        </section>

        {/* What We're Building */}
        <section className={classnames(s.section, s.introSection)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>What We&apos;re Building</h2>
            <p>The current site is a beautiful portfolio, but every sale still has to go through email or Instagram DM. There&apos;s no way for someone to land on a piece they love and just buy it. There&apos;s also no way for you to update the site yourself without going back to a developer.</p>
            <p>This proposal sets out a bespoke website with two parts: a redesigned gallery that puts the work front and centre, and an integrated shop powered by Stripe so originals, editions and prints can be bought directly. Underneath it sits a simple admin area built specifically for you &mdash; upload a new piece, mark something as sold, write a journal entry, all without touching code.</p>
            <div className={s.introDiagram}>
              <span className={s.diagramSource}>One bespoke platform</span>
              <span className={s.diagramArrow}>&darr;</span>
              <div className={s.diagramServices}>
                <span className={s.serviceItem}>Public Gallery &amp; Shop</span>
                <span className={s.serviceItem}>Stripe Checkout</span>
                <span className={s.serviceItem}>Bespoke CMS</span>
                <span className={s.serviceItem}>SEO &amp; Content Engine</span>
              </div>
            </div>
            <p style={{ fontSize: '1.3rem', opacity: 0.7, marginTop: '1rem' }}>Designed and built bespoke. No Squarespace, Wix, or off-the-shelf templates &mdash; the platform is yours, tailored to how you actually work.</p>
          </div>
        </section>

        {/* At a Glance / Pricing */}
        <section className={classnames(s.section, s.pricingSection)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>At a Glance</h2>
            <table className={s.pricingTable}>
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Price</th>
                  <th className={s.category}>Category</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Phase 1 — Redesign, CMS & Ecommerce', '£1,000', 'Build', 'phase-1'],
                  ['Phase 2 — SEO & Content Engine', '£400', 'Marketing', 'phase-2'],
                  ['Monthly Retainer', '£50/mo', 'Ongoing', 'retainer'],
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
              <span className={s.totalLabel}>Phase 1 + Phase 2</span>
              <span className={s.totalPrice}>&pound;1,400 <span style={{ fontSize: '1.4rem', fontWeight: 400, opacity: 0.6 }}>inc VAT</span></span>
            </div>
            <p className={s.pricingNote}>All prices include VAT. Phase 2 is optional and can be added later. The retainer covers hosting, Stripe webhook monitoring and AI usage costs.</p>
            <p className={s.pricingNote}>For context, comparable scope from a typical web agency &mdash; bespoke design, custom CMS, ecommerce integration &mdash; would usually be quoted at &pound;5,000&ndash;&pound;10,000+, with ongoing platform fees on top. This proposal delivers the same outcome at a fraction of that cost by leveraging modern AI-assisted development and removing traditional agency overhead.</p>
          </div>
        </section>

        {/* Phase 1 */}
        <section id="phase-1" className={s.section}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Phase 1 &mdash; Redesign, CMS &amp; Ecommerce</h2>
              <span className={classnames(s.tag, s.tagSage)}>Start Here</span>
            </div>
            <span className={s.servicePrice}>&pound;1,000 inc VAT</span>
            <p style={{ marginTop: '1.5rem' }}>Three pieces, delivered together: a redesign of the existing site, a bespoke CMS so you can run it yourself, and a shop wired up to Stripe so people can buy your work directly.</p>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Redesign &amp; Content Migration</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Full redesign that keeps the gallery-first feel of the current site, refined and modernised</li>
                <li>Direction shaped by sites you&apos;ve gathered as inspiration &mdash; we work from your reference list, not a template</li>
                <li>All existing content migrated &mdash; Collections (Oceans, Coastal, Townscapes, Cities, Botanical), Works for Sale, News, Contact</li>
                <li>301 redirect mapping so existing Google rankings carry across to the new URLs</li>
                <li>Mobile-first layout &mdash; the majority of visitors browse on phone</li>
                <li>Automatic image optimisation on upload &mdash; high-res artwork is resized, compressed, and converted to modern formats (WebP/AVIF) with responsive variants for every device. You drag and drop, the system does the rest</li>
                <li>Mailing list signup integrated</li>
                <li>Cookie consent and GDPR compliance</li>
                <li>Google Analytics 4 and Search Console set up</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Bespoke CMS</h3>
              <p style={{ marginTop: '1.5rem' }}>A simple admin area built specifically for how you work &mdash; not a generic dashboard with a hundred settings you&apos;ll never use.</p>
              <ul>
                <li>One login, one place to manage everything on the site</li>
                <li>Add, edit and reorder works in any collection</li>
                <li>Mark a piece as sold, reserved, or available with one click</li>
                <li>Drag-and-drop image uploads &mdash; multiple at once, automatically optimised</li>
                <li>Write News / journal entries with a clean, distraction-free editor</li>
                <li>Edit page content (About, Contact, etc.) directly</li>
                <li>Manage editions and prints &mdash; track stock so the site never sells the same piece twice</li>
                <li>Mobile-friendly admin &mdash; update a sold piece from your phone after a show</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Bespoke Ecommerce</h3>
              <p style={{ marginTop: '1.5rem' }}>A shop built into the site rather than bolted on. Customers can buy originals, editions and prints directly, and you get paid into your own Stripe account.</p>
              <ul>
                <li>Stripe Checkout integration &mdash; Apple Pay, Google Pay, all major cards, Klarna for higher-value pieces</li>
                <li>Originals, editions and prints all handled, with stock tracked automatically</li>
                <li>Postage and packaging options at checkout (UK / international, signed delivery, etc.)</li>
                <li>Commission enquiry form for bespoke work, separate from the standard checkout flow</li>
                <li>Automated order confirmation and shipping email to the customer</li>
                <li>Order notification straight to your inbox the moment a piece sells</li>
                <li>Stripe webhook integration &mdash; the site is updated the instant a payment lands, so nothing is double-sold</li>
                <li>VAT handling configured for UK sales</li>
                <li>PCI compliant throughout &mdash; card details never touch your site or your inbox</li>
              </ul>
              <p className={s.note}>Stripe charges its own per-transaction fee (typically 1.5% + 20p for UK cards). This is paid to Stripe directly, not to me, and applies to any platform that uses Stripe.</p>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Hosting &amp; Infrastructure</h3>
              <div className={s.archGrid}>
                <div className={s.archItem}><strong>Frontend</strong>Next.js on Vercel &mdash; fast page loads, edge-cached globally, image optimisation built in</div>
                <div className={s.archItem}><strong>Backend</strong>Containerised API for the CMS and Stripe integration &mdash; secure, scalable, no shared hosting</div>
                <div className={s.archItem}><strong>Database</strong>Postgres &mdash; reliable storage for works, orders, and content</div>
                <div className={s.archItem}><strong>Domain &amp; SSL</strong>Existing katebarkerart.co.uk pointed at the new site, SSL configured automatically</div>
              </div>
              <p className={s.note}>All infrastructure costs are covered under the monthly retainer.</p>
            </div>
          </div>
        </section>

        {/* Phase 2 */}
        <section id="phase-2" className={classnames(s.section, s.bgSage)}>
          <div className={s.container}>
            <div className={s.serviceHeader}>
              <h2 className={s.sectionTitle}>Phase 2 &mdash; SEO &amp; Content Engine</h2>
              <span className={classnames(s.tag, s.tagCoral)}>Optional</span>
            </div>
            <span className={s.servicePrice}>&pound;400 inc VAT</span>
            <p style={{ marginTop: '1.5rem' }}>Once the site and shop are live, the next step is making sure the right people find it. Phase 2 sets up the SEO foundations and an automated content pipeline so the site keeps growing without you having to write a blog post every week.</p>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>SEO Foundations</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>On-page SEO across every page &mdash; titles, meta, headings, alt text</li>
                <li>Schema markup for artworks (VisualArtwork, Product, Person) so Google understands what each page is</li>
                <li>Internal linking architecture &mdash; collections cross-link to related works</li>
                <li>Core Web Vitals tuning &mdash; page speed, layout stability, mobile responsiveness</li>
                <li>XML sitemap and robots.txt configured for art-specific search</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Long-tail Keyword Targeting</h3>
              <p style={{ marginTop: '1rem' }}>Most people don&apos;t search for &quot;Kate Barker&quot; &mdash; they search for things like &quot;Devon coastal artist&quot;, &quot;contemporary botanical paintings UK&quot;, or &quot;original ocean prints&quot;. Phase 2 targets those long-tail searches.</p>
              <ul>
                <li>Keyword research focused on coastal, botanical, and townscape niches</li>
                <li>Dynamic landing pages for high-intent search terms (&quot;original [subject] paintings&quot;, &quot;[location] art prints&quot;)</li>
                <li>Location-aware SEO for Devon / South West buyers and visitors to South Sands</li>
                <li>Collection pages optimised as their own search-discoverable hubs</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Blog &amp; Content Automation</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Automated blog content pipeline &mdash; AI-drafted posts, you approve and edit before publishing</li>
                <li>Content prompts grounded in your work &mdash; behind-the-scenes process, exhibition write-ups, location stories</li>
                <li>Auto-generated alt text and metadata for new artwork uploads</li>
                <li>Quarterly content calendar tied to exhibition dates and seasonal search trends</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Competition Research</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>Analysis of other UK coastal and contemporary artists ranking in your space</li>
                <li>Keyword gap report &mdash; terms competitors rank for that you don&apos;t (yet)</li>
                <li>Backlink and referral source review</li>
                <li>Quarterly check-in on rankings, traffic, and shop conversion</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Retainer */}
        <section id="retainer" className={classnames(s.section, s.bgCoral)}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Monthly Retainer</h2>
            <div className={s.retainerPrice}>&pound;50<span style={{ fontSize: '1.6rem', fontWeight: 400 }}>/month inc VAT</span></div>
            <div className={s.retainerBreakdown}>&pound;600/year &middot; Rolling monthly, cancel anytime</div>
            <ul>
              <li>Hosting and infrastructure (Vercel, database, backend) &mdash; all bills paid by me</li>
              <li>Stripe webhook health monitoring &mdash; alerts if a payment ever fails to sync, so you never lose track of an order</li>
              <li>AI usage costs (image processing, content automation, alt text generation)</li>
              <li>SSL certificates and domain renewal handled</li>
              <li>Minor tweaks and fixes covered (under 30 mins/month). Larger changes quoted separately</li>
            </ul>
            <p className={s.note}>The retainer starts the month the site goes live. May be reviewed annually if traffic or AI usage grows significantly &mdash; will always be flagged in advance.</p>
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
                <tr><td>Design direction &amp; mockups</td><td>1&ndash;2 weeks from kick-off</td></tr>
                <tr><td>Phase 1 build (redesign + CMS + ecommerce)</td><td>3&ndash;4 weeks from sign-off on design</td></tr>
                <tr><td>Content migration &amp; testing</td><td>1 week before go-live</td></tr>
                <tr><td>Phase 2 (if proceeding)</td><td>2&ndash;3 weeks after Phase 1 launch</td></tr>
              </tbody>
            </table>
            <p className={s.note}>Timelines depend on timely access to your existing site content, your Stripe account, and feedback turnaround on designs.</p>
          </div>
        </section>

        {/* Terms */}
        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.sectionTitle}>Terms</h2>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Payment</h3>
              <ul style={{ marginTop: '1.5rem' }}>
                <li>50% deposit due before Phase 1 begins</li>
                <li>50% balance due on completion and sign-off of Phase 1</li>
                <li>Phase 2 (if proceeding): same 50/50 split</li>
                <li>Retainer billed monthly from go-live</li>
              </ul>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Warranty &amp; Support</h3>
              <p>60-day warranty period included after launch. Bugs and issues arising from the delivered work are fixed at no additional cost during this period.</p>
            </div>

            <div className={s.subsection}>
              <h3 className={s.sectionSubtitle}>Ownership</h3>
              <p>All code, designs and content produced as part of this project are fully owned by Kate Barker Art on final payment of each phase. The site can be moved to a different host at any time &mdash; nothing is locked in.</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className={classnames(s.section, s.bgCream)}>
          <div className={s.container}>
            <div className={s.nextSteps}>
              <h2 className={s.sectionTitle}>Next Steps</h2>
              <p style={{ marginTop: '1.5rem' }}>To get started, two things from your side:</p>
              <ol style={{ marginTop: '2rem' }}>
                <li><strong>50% deposit for Phase 1</strong> &mdash; &pound;500 inc VAT, paid by bank transfer. Invoice issued on confirmation</li>
                <li><strong>A list of sites you like for inspiration</strong> &mdash; other artists, gallery sites, anything with a feel you want to borrow from. Three or four examples is plenty. This shapes the redesign direction</li>
              </ol>
              <p style={{ marginTop: '2.5rem' }}>Once those land, I&apos;ll book in a kick-off call to walk through the design direction, confirm what content carries across, and get a Stripe account ready if one isn&apos;t already in place.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={s.proposalFooter}>
          <div className={s.container}>
            Paige Digital Ltd &middot; will.paige.me.uk<br />
            Valid for 30 days from date of issue. All prices include VAT.
          </div>
        </footer>
      </div>
    </>
  );
}
