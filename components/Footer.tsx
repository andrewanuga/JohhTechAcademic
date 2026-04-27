"use client";
import Link from "next/link";
import { BookOpen, Mail, Send, Camera, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "4rem 1.5rem 2rem", marginTop: "6rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: "2.5rem", marginBottom: "3rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
              <div style={{ width: 32, height: 32, background: "var(--accent)", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BookOpen size={17} color="#000" strokeWidth={2.5} />
              </div>
              <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 800, fontSize: "1rem", color: "var(--text)" }}>
                Johntech<span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: ".84rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Helping Nigerian students understand science, build study habits, and ace JAMB, WAEC &amp; NECO.
            </p>
            <div style={{ display: "flex", gap: ".6rem" }}>
              {[
                { Icon: Mail, href: "mailto:johntechacademy1@gmail.com" }, { Icon: Send, href: "https://wa.me/2348163977597?text=Hello%2C%20I%E2%80%99m%20interested%20in%20Johntech%20Academy.%0A%0AMy%20Name%3A%20______" },
                { Icon: Camera, href: "https://www.instagram.com/johntechacademy1/ (IG)" }, { Icon: Play, href: "https://www.youtube.com/@Johntechacademy1" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href}
                  style={{ width: 32, height: 32, border: "1px solid var(--border)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", textDecoration: "none", transition: "all .2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "#000"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                ><Icon size={14} /></a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: ".9rem", marginBottom: "1rem", color: "var(--text)" }}>Navigation</h4>
            {[["Home","/"],["Blog","/blog"],["About","/about"],["Contact","/contact"],["Register","/register"]].map(([l,h]) => (
              <Link key={h} href={h}
                style={{ display: "block", color: "var(--muted)", textDecoration: "none", fontSize: ".85rem", marginBottom: ".5rem", transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              >{l}</Link>
            ))}
          </div>

          {/* Exams */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: ".9rem", marginBottom: "1rem", color: "var(--text)" }}>Exam Prep</h4>
            {["JAMB / UTME","WAEC","NECO","Post-UTME","Physics","Chemistry","Biology","Mathematics"].map(s => (
              <span key={s} style={{ display: "block", color: "var(--muted)", fontSize: ".85rem", marginBottom: ".45rem" }}>{s}</span>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: ".9rem", marginBottom: "1rem", color: "var(--text)" }}>Legal</h4>
            {[["Privacy Policy","/privacy"],["Terms of Service","/terms"],["Show Love","/showlove"],["Review Us","/review"]].map(([l,h]) => (
              <Link key={h} href={h}
                style={{ display: "block", color: "var(--muted)", textDecoration: "none", fontSize: ".85rem", marginBottom: ".5rem", transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              >{l}</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: ".5rem", justifyContent: "space-between" }}>
          <p style={{ color: "var(--muted2)", fontSize: ".8rem" }}>© {new Date().getFullYear()} Johntech Academy. Founded by Samari John.</p>
          <p style={{ color: "var(--muted2)", fontSize: ".8rem" }}>Built for Nigerian students 🇳🇬</p>
        </div>
      </div>
    </footer>
  );
}
