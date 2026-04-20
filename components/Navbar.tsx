"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "all .3s ease",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 34, height: 34, background: "var(--accent)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <BookOpen size={18} color="#000" strokeWidth={2.5} />
            </div>
            <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 800, fontSize: "1.1rem", color: "var(--text)" }}>
              Johntech<span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                style={{ color: "var(--muted)", textDecoration: "none", fontSize: ".88rem", fontWeight: 500, letterSpacing: ".02em", transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              >{l.label}</Link>
            ))}
            <Link href="/register"
              style={{ background: "var(--accent)", color: "#000", padding: ".44rem 1.25rem", borderRadius: 7, textDecoration: "none", fontSize: ".82rem", fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: ".04em", transition: "opacity .2s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = ".85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >Register →</Link>
          </div>

          {/* Hamburger */}
          <button className="nav-mobile" onClick={() => setOpen(!open)}
            style={{ background: "none", border: "1px solid var(--border)", borderRadius: 7, cursor: "pointer", color: "var(--text)", padding: 7, display: "none", lineHeight: 0 }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "1.25rem 1.5rem 1.75rem" }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ display: "block", color: "var(--text)", textDecoration: "none", padding: ".65rem 0", borderBottom: "1px solid var(--border)", fontSize: ".95rem" }}
              >{l.label}</Link>
            ))}
            <Link href="/register" onClick={() => setOpen(false)}
              style={{ display: "block", background: "var(--accent)", color: "#000", padding: ".75rem", borderRadius: 8, textDecoration: "none", fontWeight: 700, textAlign: "center", marginTop: "1rem", fontFamily: "'JetBrains Mono',monospace", fontSize: ".85rem" }}
            >Register →</Link>
          </div>
        )}
      </nav>
      <style>{`
        @media (max-width:768px) {
          .nav-desktop { display:none !important; }
          .nav-mobile  { display:flex !important; }
        }
      `}</style>
    </>
  );
}
