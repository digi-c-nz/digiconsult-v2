import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="page">
      <div className="page-inner prose">
        <h1>Page not found.</h1>
        <p>
          That address is not on this site.{" "}
          <Link href="/">Back to the home page</Link>.
        </p>
      </div>
    </main>
  );
}
