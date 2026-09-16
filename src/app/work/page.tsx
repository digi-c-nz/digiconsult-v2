import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Tuizee is live for NZ trades. AgenSee is live for insurance agencies.",
};

export default function WorkPage() {
  return (
    <main id="main" className="page">
      <div className="page-inner">
        <h1>Two things I have built.</h1>
        <div className="work-list">
          <article className="work-card">
            <span className="eyebrow">Live product</span>
            <h2>Tuizee</h2>
            <p>
              Tuizee is job communication software for New Zealand trades
              businesses. One place for the team, subcontractors, and
              customers — so the job does not live in scattered texts and
              emails.
            </p>
            <p>
              Built end to end by DigiConsult. Public site:{" "}
              <a href="https://tuizee.com" rel="noreferrer">
                tuizee.com
              </a>
              .
            </p>
            <p>Open beta is live; new users get a free trial.</p>
          </article>
          <article className="work-card">
            <span className="eyebrow">Live product</span>
            <h2>AgenSee</h2>
            <p>
              AgenSee is admin and productivity software for New Zealand
              insurance agencies. It is the public face of the agency product
              DigiConsult builds (previously referred to as DataPro
              internally).
            </p>
            <p>
              Product origin:{" "}
              <a href="https://agensee.digiconsult.co.nz" rel="noreferrer">
                agensee.digiconsult.co.nz
              </a>
              . Rolling out with agencies in Aaron’s network.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
