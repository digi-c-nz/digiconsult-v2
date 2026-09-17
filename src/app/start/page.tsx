import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start",
  description:
    "Start a conversation with DigiConsult — business systems for Kiwi firms. Email info@digiconsult.co.nz.",
};

export default function StartPage() {
  return (
    <main id="main" className="page">
      <div className="page-inner prose">
        <h1>Let’s have a conversation.</h1>
        <p>
          Tell me about your business and what your vision looks like for
          future growth or organisation goals — a system optimised for the
          digital age, bespoke industry technology, AI pathways you may want to
          navigate, or a key decision you need clarity on. A short message is
          enough — I personally read every one.
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
