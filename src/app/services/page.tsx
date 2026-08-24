import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "A $1500 consultation, then pricing by arrangement. Not a package.",
};

export default function ServicesPage() {
  return (
    <main id="main" className="page">
      <div className="page-inner prose">
        <h1>A $1500 consultation. Then pricing by arrangement.</h1>
        <p>I do not sell a package.</p>
        <p>
          The first conversation is a paid consultation: enough time to see
          what is already in use, where the risk sits, and whether I am the
          right person to stay on.
        </p>
        <p>
          If the work continues, pricing is by arrangement. Scope, not a menu.
        </p>
        <p>
          I am not looking for work to fill a pipeline. If you found this page
          and the problem is live, write to me.
        </p>
        <p>
          <Link href="/start/">Start a conversation</Link>
        </p>
      </div>
    </main>
  );
}
