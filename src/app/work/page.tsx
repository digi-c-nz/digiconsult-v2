import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Tuizee is live. DataPro is in preview with agencies.",
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
              Job communication software for New Zealand trades businesses. One
              place for the team, subcontractors, and customers. Public site:{" "}
              <a href="https://tuizee.com" rel="noreferrer">
                tuizee.com
              </a>
              .
            </p>
          </article>
          <article className="work-card">
            <span className="eyebrow">Preview</span>
            <h2>DataPro</h2>
            <p>In preview with agencies.</p>
          </article>
        </div>
      </div>
    </main>
  );
}
