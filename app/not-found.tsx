import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{ paddingTop: 64, minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "6rem 1.5rem" }}>
      <div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "7rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1, marginBottom: "1rem", opacity: .3 }}>404</div>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 800, marginBottom: "1rem" }}>Page Not Found</h1>
        <p style={{ color: "var(--muted)", maxWidth: 400, margin: "0 auto 2.5rem", lineHeight: 1.72 }}>
          The page you are looking for does not exist. It may have moved, or there might be a typo in the URL.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "#000", padding: ".85rem 2rem", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", fontSize: ".85rem" }}>
            Go Home <ArrowRight size={16} />
          </Link>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--text)", padding: ".85rem 2rem", borderRadius: 9, textDecoration: "none", fontWeight: 600, fontSize: ".9rem", border: "1px solid var(--border2)" }}>
            <BookOpen size={16} /> Read the Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
