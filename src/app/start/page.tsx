import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start",
  description: "Write to DigiConsult at info@digiconsult.co.nz.",
};

export default function StartPage() {
  return (
    <main id="main" className="page">
      <div className="page-inner prose">
        <h1>Write to me.</h1>
        <p>
          A sentence on what is already in use, and what you need a decision
          on, is enough. I read every note.
        </p>
        <a
          className="mailto"
          href="mailto:info@digiconsult.co.nz?subject=Consultation"
        >
          info@digiconsult.co.nz
        </a>
      </div>
    </main>
  );
}
