import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DigiConsult",
  description:
    "Get AI past your compliance officer. Your AI practice until you have one.",
};

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-inner">
          <h1 className="claim">Get AI past your compliance officer.</h1>
          <p className="thesis">Your AI practice until you have one.</p>
          <p className="lede">
            I work with regulated New Zealand firms in financial services,
            insurance, and the professions next to them. Staff have usually
            started already. The work is to get a control the board can stand
            behind.
          </p>
          <p className="proof-label">Two products I have already built.</p>
          <div className="card-grid">
            <Link href="/work/" className="card">
              <span className="eyebrow">Live</span>
              <h2>Tuizee</h2>
              <p>Job communication for New Zealand trades businesses.</p>
            </Link>
            <Link href="/work/" className="card">
              <span className="eyebrow">Preview</span>
              <h2>DataPro</h2>
              <p>In preview with agencies.</p>
            </Link>
          </div>
          <div className="cta-row">
            <Link href="/start/" className="btn btn-primary">
              Start a conversation
            </Link>
            <Link href="/how-i-work/" className="btn btn-secondary">
              How I work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
