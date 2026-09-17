import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "DigiConsult is Aaron’s consultancy firm — industrial and systems engineer, seventeen years in financial services and corporate project management.",
};

export default function AboutPage() {
  return (
    <main id="main" className="page">
      <div className="page-inner prose">
        <h1>About</h1>
        <p>
          DigiConsult is my consultancy firm. I am a trained industrial and
          systems engineer, spending the last seventeen years in financial
          services and corporate project management. I am a director in a New
          Zealand insurance business, and I build business products as well:
          Tuizee is live for trades business owners, and AgenSee is live for
          insurance agencies.
        </p>
        <p>
          A lot of my work has been helping organisations take up technology
          that requires innovative thinking and navigating technical risks —
          many organisations are not sure how to use leading-edge solutions.
          During my career, that included digital assets in a regulated New
          Zealand setting, when boards were still deciding whether the category
          was acceptable. Currently I don’t offer services in digital assets
          often — it is experience I draw on when business goals meet new
          industry technology and AI pathways.
        </p>
        <p>
          The same practical questions show up when firms bring innovations
          like AI into day-to-day work. Staff have usually started already, and
          this can take the form of shadow AI, where it is being used without
          full visibility of management or business controls. What really
          matters is what data goes into which tools, where that data is
          stored, and who owns those decisions — so the business stays in
          control while it moves forward.
        </p>
        <p>
          If you want to explore solutions to grow your business together, I
          charge a $1500 consultation, then pricing by arrangement
          (consultation charge is then deducted from total project scoped
          costs).
        </p>
        <section className="qa" aria-labelledby="qa-heading">
          <h2 id="qa-heading">Questions</h2>
          <dl>
            <div className="qa-item">
              <dt>Can our people use ChatGPT with client files?</dt>
              <dd>
                Not without a clear view of data retention and where the
                platform’s servers live. If that is undecided, you are carrying
                a privacy risk. DigiConsult helps you decide what is allowed,
                what must stay out, and how to keep client work safe while
                still using modern tools.
              </dd>
            </div>
            <div className="qa-item">
              <dt>Do we need an AI policy first?</dt>
              <dd>
                Most Kiwi businesses should have one, but where you start
                matters. Find what is already in use — including shadow AI that
                is not visible operationally — decide how sensitive data is
                handled, and write policies and SOPs your people can actually
                follow. A document that sits in a drawer does not help.
              </dd>
            </div>
            <div className="qa-item">
              <dt>Why work with DigiConsult?</dt>
              <dd>
                You get a consultancy firm that stays on business goals from
                the first conversation through to the system people are running
                — advisory and build, not a slide deck and a goodbye. I have
                led this kind of work inside corporate verticals and as
                DigiConsult, so engagements can stay flexible. When you are
                ready to take capability in-house, I help you hire and hand it
                over.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </main>
  );
}
