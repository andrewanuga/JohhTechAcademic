"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle, Send, ArrowRight, Phone } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/AcernityEffects";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "var(--surface2)", border: "1px solid var(--border2)",
    borderRadius: 9, padding: ".75rem 1rem", color: "var(--text)", fontSize: ".9rem",
    fontFamily: "'DM Sans',sans-serif", outline: "none", transition: "border-color .2s",
  };

  return (
    <div style={{ paddingTop: 64 }}>

      {/* Header */}
      <section style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", padding: "4.5rem 1.5rem 3.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse, var(--accent2) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <Badge style={{ marginBottom: "1.2rem", backgroundColor: "var(--accent2)", padding: "0.5rem 1rem", border: "1px solid var(--accent)", color: "var(--text)" }}>GET IN TOUCH</Badge>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, marginBottom: ".85rem" }}>
            Contact <span style={{ color: "var(--accent)" }}>Johntech Academy</span>
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: 480, margin: "0 auto", fontSize: "1rem", lineHeight: 1.72 }}>
            Have questions about our programs? Want to join a class? We are happy to help — reach out any time.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 1.5rem 6rem", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "3rem", alignItems: "flex-start" }} className="contact-grid">

        {/* Info cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {[
            { Icon: Mail,          title: "Email Us",      val: "johntechacademy@gmail.com", sub: "We reply within 24 hours" },
            { Icon: MessageCircle, title: "WhatsApp",      val: "Chat with us on WhatsApp",  sub: "Quick replies, real support" },
            { Icon: Phone,         title: "Social Media",  val: "@JohntechAcademy",           sub: "Follow for daily study tips" },
          ].map(({ Icon, title, val, sub }) => (
            <GlowCard key={title} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{ width: 42, height: 42, marginBottom: "1.2rem", backgroundColor: "var(--accent2)", padding: "0.5rem 1rem", border: "1px solid var(--accent)", color: "var(--text)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={19} />
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: ".95rem", marginBottom: ".2rem" }}>{title}</div>
                <div style={{ color: "var(--text)", fontSize: ".85rem", marginBottom: ".2rem" }}>{val}</div>
                <div style={{ color: "var(--muted)", fontSize: ".78rem" }}>{sub}</div>
              </div>
            </GlowCard>
          ))}

          <GlowCard style={{ background: "linear-gradient(135deg,var(--surface) 0%,var(--accent2) 100%)", border: "1px solid var(--accent2)", borderRadius: 14, padding: "1.75rem" }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 800, fontSize: "1.1rem", marginBottom: ".6rem" }}>
              Ready to join? <span style={{ color: "var(--accent)" }}>Register now.</span>
            </h3>
            <p style={{ color: "var(--muted)", fontSize: ".84rem", lineHeight: 1.68, marginBottom: "1.25rem" }}>
              Skip the back-and-forth — create your account and get started on your journey to 300+.
            </p>
            <Link href="/register" style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "var(--accent)", color: "#000", padding: ".65rem 1.4rem", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", fontSize: ".8rem" }}>
              Register Free <ArrowRight size={14} />
            </Link>
          </GlowCard>
        </div>

        {/* Form */}
        <GlowCard style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 18, padding: "2.5rem" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 800, marginBottom: ".5rem" }}>Message Sent!</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.72 }}>Thanks for reaching out. We will get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 800, marginBottom: ".5rem" }}>Send Us a Message</h2>
              <p style={{ color: "var(--muted)", fontSize: ".86rem", marginBottom: "2rem" }}>Fill in the form below and we will get back to you soon.</p>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label style={{ display: "block", color: "var(--muted)", fontSize: ".78rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: ".05em", marginBottom: ".4rem" }}>FULL NAME</label>
                    <input required style={inputStyle} placeholder="Chidi Okafor" value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border2)")} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "var(--muted)", fontSize: ".78rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: ".05em", marginBottom: ".4rem" }}>EMAIL</label>
                    <input required type="email" style={inputStyle} placeholder="you@email.com" value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border2)")} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", color: "var(--muted)", fontSize: ".78rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: ".05em", marginBottom: ".4rem" }}>SUBJECT</label>
                  <input required style={inputStyle} placeholder="I want to join Johntech Academy" value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border2)")} />
                </div>
                <div>
                  <label style={{ display: "block", color: "var(--muted)", fontSize: ".78rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: ".05em", marginBottom: ".4rem" }}>MESSAGE</label>
                  <textarea required rows={5} style={{ ...inputStyle, resize: "vertical" }} placeholder="Tell us how we can help you..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border2)")} />
                </div>
                <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--accent)", color: "#000", padding: ".9rem", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", fontSize: ".88rem", transition: "opacity .2s" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = ".85")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            </>
          )}
        </GlowCard>
      </div>

      <style>{`
        @media(max-width:768px){
          .contact-grid{grid-template-columns:1fr !important;}
          .form-row{grid-template-columns:1fr !important;}
        }
      `}</style>
    </div>
  );
}
