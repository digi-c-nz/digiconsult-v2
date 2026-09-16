import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Tuizee keeps NZ trades jobs in one place. AgenSee helps insurance agencies run day-to-day admin and productivity work.",
};

export default function WorkPage() {
  return (
    <main id="main" className="page">
      <div className="page-inner">
        <h1>Two products DigiConsult has built.</h1>
        <div className="work-list">
          <article className="work-card">
            <span className="eyebrow">Live product</span>
            <h2>Tuizee</h2>
            <p>
              Tuizee is job communication software for New Zealand trades
              businesses. The usual mess is texts, emails, and separate
              threads for the crew, subcontractors, and the customer. Tuizee
              puts that job in one place so everyone is looking at the same
              work.
            </p>
            <p>
              I built it end to end. It is live in open beta — new users get a
              free trial. Public site:{" "}
              <a href="https://tuizee.com" rel="noreferrer">
                tuizee.com
              </a>
              .
            </p>
          </article>
          <article className="work-card">
            <span className="eyebrow">Live product</span>
            <h2>AgenSee</h2>
            <p>
              AgenSee is software for New Zealand insurance agencies. It covers
              the admin and productivity work that otherwise sits in
              spreadsheets, inboxes, and a pile of tools that do not talk to
              each other — so the agency can run day-to-day work in one
              system.
            </p>
            <p>
              It is live at{" "}
              <a href="https://agensee.digiconsult.co.nz" rel="noreferrer">
                agensee.digiconsult.co.nz
              </a>{" "}
              and rolling out with agencies.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
