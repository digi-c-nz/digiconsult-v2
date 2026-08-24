import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How I work",
  description:
    "How a conservative organisation takes up a tool: the unasked questions, shadow use, data handling, then a control they can run.",
};

export default function HowIWorkPage() {
  return (
    <main id="main" className="page">
      <div className="page-inner prose">
        <h1>How a conservative organisation takes up a tool.</h1>
        <p>
          I start with the questions that have not been asked yet. Who is
          already using what. What data is going into which tools. Who owns
          the decision.
        </p>
        <p>
          Most firms already have shadow use. Finding it is how you avoid
          writing a policy nobody can run.
        </p>
        <p>
          Then you decide how data is handled: retention, where the servers
          live, what is allowed in.
        </p>
        <p>
          Only after that does a control make sense. A short set of rules the
          organisation can actually operate.
        </p>
      </div>
    </main>
  );
}
