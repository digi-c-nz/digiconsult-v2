import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DigiConsult",
  description:
    "DigiConsult builds business systems for New Zealand firms — products and the work around them. Tuizee and AgenSee.",
};

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-inner">
          <h1 className="claim">I build the systems NZ firms actually run.</h1>
          <p className="thesis">
            Solo DigiConsult. Products and the work around them — end to end.
          </p>
          <p className="lede">
            I work with New Zealand businesses where I already have domain,
            especially financial services and insurance. When the job is to
            ship something real — not a slide deck — that is the practice.
          </p>
          <p className="proof-label">Two products I have already built.</p>
          <div className="card-grid">
            <Link href="/work/" className="card">
              <span className="eyebrow">Live</span>
              <h2>Tuizee</h2>
              <p>Job communication for New Zealand trades businesses.</p>
            </Link>
            <Link href="/work/" className="card">
              <span className="eyebrow">Live</span>
              <h2>AgenSee</h2>
              <p>Admin and productivity software for insurance agencies.</p>
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
