import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How I work",
  description:
    "How DigiConsult ships business systems for Kiwi firms — from business goals through build, clear ways of working, and handoff.",
};

export default function HowIWorkPage() {
  return (
    <main id="main" className="page">
      <div className="page-inner prose">
        <h1>How DigiConsult ships business systems.</h1>
        <p>
          I start with your business goals and the work already happening. What
          are you trying to run better. What tools and processes are in use
          today. Who owns the decisions. That keeps the engagement tied to
          outcomes, not a pile of recommendations.
        </p>
        <p>
          From there we decide what DigiConsult should do: advise, build, or
          both. Sometimes that is a product or workflow people use every day.
          Sometimes it is helping your team take up industry technology and AI
          pathways without losing sight of data, process, and who is
          accountable.
        </p>
        <p>
          When new tools are already in use — such as shadow AI, where it is
          not visible operationally — we bring that into the open early.
          Finding what is already happening is how you avoid implementing
          policies and SOPs that nobody can follow. Then we agree how sensitive
          data is handled: what is allowed in, where it is stored, and what
          retention means for your firm.
        </p>
        <p>
          Only after goals, scope, and data handling are clear does a lasting
          way of working make sense — a short set of rules and a system your
          team can actually operate day to day. When you are ready to take the
          work in-house, I help with handoff so the capability stays with you.
        </p>
      </div>
    </main>
  );
}
