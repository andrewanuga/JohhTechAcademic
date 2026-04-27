"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Trophy, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { GlowCard, MovingBorder } from "@/components/ui/AcernityEffects";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "", level: "" });
  const [done, setDone] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "var(--surface2)", border: "1px solid var(--border2)",
    borderRadius: 9, padding: ".75rem 1rem", color: "var(--text)", fontSize: ".9rem",
    fontFamily: "'DM Sans',sans-serif", outline: "none", transition: "border-color .2s",
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setDone(true); };

  return (
    <div style={{ paddingTop: 64, minHeight: "100vh" }}>

      {/* Header */}
      <section style={{ background: "var(--accent2)", borderBottom: "1px solid var(--border)", padding: "4rem 1.5rem 3rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(245,197,24,.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <Badge style={{ marginBottom: "1.2rem", backgroundColor: "var(--accent2)", padding: "0.5rem 1rem", border: "1px solid var(--accent)", color: "var(--text)" }}>GET STARTED</Badge>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, marginBottom: ".8rem" }}>
            Join <span style={{ color: "var(--accent)" }}>Johntech Academy</span>
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: 460, margin: "0 auto", fontSize: "1rem", lineHeight: 1.72 }}>
            Take the first step toward 300+ in JAMB and getting admitted into your dream course.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 1.5rem 6rem", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "3rem", alignItems: "flex-start" }} className="reg-grid">

        {/* Benefits */}
        <div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem" }}>
            What You Get When You <span style={{ color: "var(--accent)" }}>Join</span>
          </h2>
          {[
            "Access to all study materials and structured notes",
            "Daily CBT practice drills and past question banks",
            "Concept-based teaching — not cramming",
            "Personalised academic coaching and study plans",
            "Monthly live tutorial sessions",
            "One-on-one consultation sessions",
            "Exam-pattern analysis for JAMB, WAEC & NECO",
            "Community of motivated students",
          ].map(item => (
            <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: ".75rem" }}>
              <CheckCircle size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
              <span style={{ color: "var(--muted)", fontSize: ".9rem" }}>{item}</span>
            </div>
          ))}

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "2rem" }}>
            {[
              { Icon: BookOpen, val: "300+", label: "Students Helped" },
              { Icon: Trophy,   val: "95%",  label: "Pass Rate" },
            ].map(({ Icon, val, label }) => (
              <GlowCard key={label} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.25rem", textAlign: "center" }}>
                <Icon size={22} color="var(--accent)" style={{ marginBottom: ".5rem" }} />
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.6rem", fontWeight: 800, color: "var(--accent)" }}>{val}</div>
                <div style={{ color: "var(--muted)", fontSize: ".78rem" }}>{label}</div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Form */}
        <MovingBorder style={{ borderRadius: 18 }}>
          <GlowCard style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 18, padding: "2.5rem" }}>
            {done ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🎉</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.6rem", fontWeight: 800, marginBottom: ".75rem" }}>
                  Welcome to Johntech Academy!
                </h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.72, marginBottom: "1.5rem" }}>
                  Your registration was successful. We will send your login details to your email within 24 hours.
                </p>
                <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "var(--accent)", color: "#000", padding: ".75rem 1.75rem", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", fontSize: ".84rem" }}>
                  Read the Blog <ArrowRight size={15} />
                </Link>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.35rem", fontWeight: 800, marginBottom: ".4rem" }}>Create Your Account</h2>
                <p style={{ color: "var(--muted)", fontSize: ".85rem", marginBottom: "2rem" }}>Fill in the form below to get started.</p>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                  <div>
                    <label style={{ display: "block", color: "var(--muted)", fontSize: ".75rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: ".05em", marginBottom: ".4rem" }}>FULL NAME *</label>
                    <input required style={inputStyle} placeholder="Chidera Okafor" value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border2)")} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "var(--muted)", fontSize: ".75rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: ".05em", marginBottom: ".4rem" }}>EMAIL ADDRESS *</label>
                    <input required type="email" style={inputStyle} placeholder="you@email.com" value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border2)")} />
                  </div>
                  <div>
                    <label style={{ display: "block", color: "var(--muted)", fontSize: ".75rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: ".05em", marginBottom: ".4rem" }}>PHONE / WHATSAPP *</label>
                    <input required style={inputStyle} placeholder="+234 800 000 0000" value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border2)")} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="sel-row">
                    <div>
                      <label style={{ display: "block", color: "var(--muted)", fontSize: ".75rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: ".05em", marginBottom: ".4rem" }}>PROGRAM *</label>
                      <select required style={{ ...inputStyle, cursor: "pointer" }} value={form.program}
                        onChange={e => setForm(f => ({ ...f, program: e.target.value }))}
                        onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={e => (e.target.style.borderColor = "var(--border2)")}>
                        <option value="">Select…</option>
                        <option>JAMB Preparation</option>
                        <option>WAEC Preparation</option>
                        <option>NECO Preparation</option>
                        <option>1-on-1 Coaching</option>
                        <option>Monthly Tutorials</option>
                        <option>Online Courses</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: "block", color: "var(--muted)", fontSize: ".75rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: ".05em", marginBottom: ".4rem" }}>LEVEL *</label>
                      <select required style={{ ...inputStyle, cursor: "pointer" }} value={form.level}
                        onChange={e => setForm(f => ({ ...f, level: e.target.value }))}
                        onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={e => (e.target.style.borderColor = "var(--border2)")}>
                        <option value="">Select…</option>
                        <option>SS1</option>
                        <option>SS2</option>
                        <option>SS3 / WAEC Candidate</option>
                        <option>JAMB Repeater</option>
                        <option>University Student</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--accent)", color: "#000", padding: "1rem", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", fontSize: ".88rem", marginTop: ".5rem", transition: "opacity .2s" }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = ".85")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                    Register Now <ArrowRight size={16} />
                  </button>
                  <p style={{ color: "var(--muted2)", fontSize: ".75rem", textAlign: "center" }}>
                    Already have an account?{" "}
                    <Link href="/contact" style={{ color: "var(--accent)", textDecoration: "none" }}>Contact us</Link>
                  </p>
                </form>
              </>
            )}
          </GlowCard>
        </MovingBorder>
      </div>

      <style>{`
        @media(max-width:768px){
          .reg-grid{grid-template-columns:1fr !important;}
          .sel-row{grid-template-columns:1fr !important;}
        }
      `}</style>
    </div>
  );
}
