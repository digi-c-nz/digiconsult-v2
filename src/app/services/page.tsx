import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "A $1500 consultation to clarify business goals and next steps, then pricing by arrangement for build and advisory work.",
};

export default function ServicesPage() {
  return (
    <main id="main" className="page">
      <div className="page-inner prose">
        <h1>A $1500 consultation. Then pricing by arrangement.</h1>
        <p>
          The first step is a paid consultation. We use that time to understand
          your business goals, what is already in place, and whether DigiConsult
          is the right fit to stay on — for advisory work, for building a
          system, or both.
        </p>
        <p>
          DigiConsult is a consultancy firm. I advise Kiwi businesses on
          industry technology and AI pathways, and I build when software is the
          right answer. Tuizee and AgenSee are products already in market;
          client work follows the same focus — something people can actually
          run.
        </p>
        <p>
          If the work continues after the consultation, pricing is by
          arrangement. We scope it together — not a fixed menu of packages.
        </p>
        <p>
          If you want to unlock growth and productivity in your business and
          want clear next steps, let’s start a conversation.
        </p>
        <p>
          <Link href="/start/">Start a conversation</Link>
        </p>
      </div>
    </main>
  );
}
