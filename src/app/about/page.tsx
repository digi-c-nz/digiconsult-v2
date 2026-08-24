import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "DigiConsult is Aaron. Industrial and systems engineer, seventeen years in financial services.",
};

export default function AboutPage() {
  return (
    <main id="main" className="page">
      <div className="page-inner prose">
        <h1>About</h1>
        <p>
          DigiConsult is Aaron. I am a trained industrial and systems engineer
          with seventeen years in financial services. I am a director in an NZ
          insurance business, and I also build products: Tuizee is live, and
          DataPro is in preview with agencies.
        </p>
        <p>
          A lot of my work has been helping organisations take up technology
          they were not sure they were allowed to use. Earlier that was digital
          assets, in a regulated NZ setting, when boards were still deciding
          whether the category was acceptable. I do not sell that as a service
          now. It is the experience I draw on.
        </p>
        <p>
          The same kind of work is in front of firms with AI. Staff have
          usually started already. The useful questions are practical: what
          data is going into which tools, where it is stored, and who owns the
          decision.
        </p>
        <p>
          If you found this page, the offer is a $1500 consultation, then
          pricing by arrangement.
        </p>
        <section className="qa" aria-labelledby="qa-heading">
          <h2 id="qa-heading">Questions</h2>
          <dl>
            <div className="qa-item">
              <dt>Can our people use ChatGPT with client files?</dt>
              <dd>
                If you are not thinking about data retention and where the
                platform’s servers live, that is a privacy risk waiting to
                become a reality.
              </dd>
            </div>
            <div className="qa-item">
              <dt>Do we need an AI policy first?</dt>
              <dd>
                It is time every business considers one. Where you start
                matters. Find any shadow AI already in use, and decide how
                sensitive data is handled. That is the first step to a control
                policy you can actually run.
              </dd>
            </div>
            <div className="qa-item">
              <dt>Why work with a one-person practice?</dt>
              <dd>
                I have run this from the top of corporate verticals and as a
                solo practice, so I am used to both. I am flexible about how
                the engagement runs. When you are ready to take it in-house, I
                will help you hire and hand it over.
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </main>
  );
}
