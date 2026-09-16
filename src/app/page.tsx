import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DigiConsult",
  description:
    "Building business systems for New Zealand firms - navigating the latest industry technology and AI pathways.",
};

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-inner">
          <h1 className="claim">Building business systems for New Zealand firms.</h1>
          <p className="thesis">
            Navigating the latest industry technology and AI pathways.
          </p>
          <p className="lede">
            DigiConsult is my consultancy firm. I work with Kiwi businesses, in
            areas where I already have domain expertise — especially financial
            services, AI and insurance — and I am focused on client goals from
            first conversation through to the system people are running.
          </p>
          <p className="proof-label">Two products already in market.</p>
          <div className="card-grid">
            <Link href="/work/" className="card">
              <span className="eyebrow">Live</span>
              <h2>Tuizee</h2>
              <p>
                Job communication for New Zealand trades — team,
                subcontractors, and customers in one place.
              </p>
            </Link>
            <Link href="/work/" className="card">
              <span className="eyebrow">Live</span>
              <h2>AgenSee</h2>
              <p>
                Admin and productivity software for New Zealand insurance
                agencies.
              </p>
            </Link>
          </div>
          <div className="cta-row">
            <Link href="/start/" className="btn btn-primary">
              Start a conversation
            </Link>
            <Link href="/work/" className="btn btn-secondary">
              See the work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
