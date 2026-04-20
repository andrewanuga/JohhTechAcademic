import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Target, Users, Trophy, CheckCircle, Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/AcernityEffects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Johntech Academy — founded by Samari John to help Nigerian students understand science and ace JAMB, WAEC & NECO.",
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 64 }}>

      {/* Hero */}
      <section style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", padding: "5rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", right: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,197,24,.05) 0%, transparent 65%)", pointerEvents: "none", transform: "translateY(-50%)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="two-col">
          <div>
            <Badge style={{ marginBottom: "1.25rem" }}>ABOUT US</Badge>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, lineHeight: 1.12, marginBottom: "1.25rem" }}>
              We Build <span style={{ color: "var(--accent)" }}>Intelligent Learners</span>, Not Just Exam-Passers
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.78, marginBottom: "1.5rem" }}>
              Most students fail not because they are not smart — but because they were taught to memorise instead of truly understand. Johntech Academy was founded to fix exactly that.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.75 }}>
              We are an online learning platform that helps Nigerian students understand and apply science, build effective study habits, and prepare strategically for JAMB, WAEC, NECO and other major exams.
            </p>
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)" }}>
            <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80" alt="Johntech Academy team" width={700} height={450} style={{ objectFit: "cover", width: "100%", height: 400, display: "block" }} />
          </div>
        </div>
      </section>

      {/* Founder */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "3rem", alignItems: "center", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, padding: "3rem" }} className="founder-grid">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: ".75rem" }}>
            <div style={{ width: 120, height: 120, borderRadius: "50%", background: "rgba(245,197,24,.1)", border: "3px solid rgba(245,197,24,.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontWeight: 800, color: "var(--accent)", fontSize: "3rem" }}>
              S
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 800, fontSize: "1.05rem" }}>Samari John</div>
              <div style={{ color: "var(--accent)", fontSize: ".75rem", fontFamily: "'JetBrains Mono',monospace" }}>Founder & Lead Educator</div>
            </div>
            <div style={{ display: "flex", gap: 3 }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={13} color="var(--accent)" fill="var(--accent)" />)}
            </div>
          </div>
          <div>
            <Badge style={{ marginBottom: "1rem" }}>MEET THE FOUNDER</Badge>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, marginBottom: "1rem" }}>
              Why Samari Started <span style={{ color: "var(--accent)" }}>Johntech Academy</span>
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.78, marginBottom: "1rem" }}>
              Samari John saw a pattern — brilliant students failing exams not because they lacked intelligence, but because the education system trained them to memorise without understanding. He founded Johntech Academy to be the antidote.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.78 }}>
              With a focus on conceptual clarity, real-world application and personalised support, the academy has helped hundreds of Nigerian students transform their academic results and secure admission into their dream courses.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <Badge style={{ marginBottom: "1rem" }}>OUR PURPOSE</Badge>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 800 }}>
              Mission & <span style={{ color: "var(--accent)" }}>Vision</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="two-col">
            <GlowCard style={{ background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: 16, padding: "2.5rem" }}>
              <div style={{ width: 48, height: 48, background: "rgba(245,197,24,.1)", border: "1px solid rgba(245,197,24,.2)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: "1.25rem" }}>
                <Target size={22} />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 800, marginBottom: ".75rem" }}>Our Mission</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.78 }}>
                To teach science and technology in a way that emphasises understanding, application and real-world relevance — removing confusion, simplifying concepts and building lasting confidence in every student.
              </p>
            </GlowCard>
            <GlowCard style={{ background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: 16, padding: "2.5rem" }}>
              <div style={{ width: 48, height: 48, background: "rgba(232,131,74,.1)", border: "1px solid rgba(232,131,74,.2)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent2)", marginBottom: "1.25rem" }}>
                <Star size={22} />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 800, marginBottom: ".75rem" }}>Our Vision</h3>
              <p style={{ color: "var(--muted)", lineHeight: 1.78 }}>
                To make science and technology relatable, practical and applicable — empowering every Nigerian learner to connect knowledge to the real world and stop struggling, starting to excel instead.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <Badge style={{ marginBottom: "1rem" }}>OUR PROGRAMS</Badge>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 800 }}>
            How We <span style={{ color: "var(--accent)" }}>Help You</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
          {[
            { Icon: BookOpen, title: "Monthly Tutorials", desc: "Subscription-based consistent sessions covering Physics, Chemistry, Mathematics, Technical Drawing — designed for JAMB, WAEC and NECO." },
            { Icon: Users,    title: "Online Courses",    desc: "Flexible learning at your own pace with proven academic strategies, structured lessons and practical explanations." },
            { Icon: Trophy,   title: "Exam Prep Programs", desc: "Strategic preparation that helps you understand exam patterns, practice smartly and maximise your performance on exam day." },
            { Icon: Target,   title: "Academic Coaching", desc: "Where transformation happens — personalised study plans, focus improvement strategies and habit-building systems tailored to you." },
            { Icon: Star,     title: "Science Mastery",   desc: "Complex topics broken down into clear, simple steps. No confusion, no overload — just clarity and growing confidence." },
            { Icon: Users,    title: "1-on-1 Consultation", desc: "We identify your specific problems and fix them with clear, personalised strategies. Because every student is different." },
          ].map(({ Icon, title, desc }) => (
            <GlowCard key={title} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: "1.65rem" }}>
              <div style={{ width: 44, height: 44, background: "rgba(245,197,24,.09)", border: "1px solid rgba(245,197,24,.18)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: "1rem" }}>
                <Icon size={20} />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontWeight: 700, marginBottom: ".4rem" }}>{title}</h3>
              <p style={{ color: "var(--muted)", fontSize: ".84rem", lineHeight: 1.65 }}>{desc}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Badge style={{ marginBottom: "1.25rem" }}>THE DIFFERENCE</Badge>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 800, marginBottom: "1.5rem" }}>
            Understanding Over <span style={{ color: "var(--accent)" }}>Cramming</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "1.5rem", alignItems: "center", marginBottom: "2.5rem" }} className="philosophy-grid">
            <GlowCard style={{ background: "var(--surface2)", border: "1px solid #3a1010", borderRadius: 14, padding: "1.5rem" }}>
              <div style={{ color: "#ef4444", fontSize: "1.5rem", marginBottom: ".5rem" }}>❌</div>
              <h4 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, marginBottom: ".5rem", color: "#ef4444" }}>Memorisation</h4>
              <p style={{ color: "var(--muted)", fontSize: ".84rem", lineHeight: 1.65 }}>You forget easily. You freeze in the exam. You cannot apply what you &ldquo;learned&rdquo;. You fail.</p>
            </GlowCard>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>→</div>
            <GlowCard style={{ background: "var(--surface2)", border: "1px solid rgba(245,197,24,.2)", borderRadius: 14, padding: "1.5rem" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: ".5rem" }}>✅</div>
              <h4 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, marginBottom: ".5rem", color: "var(--accent)" }}>Understanding</h4>
              <p style={{ color: "var(--muted)", fontSize: ".84rem", lineHeight: 1.65 }}>You remember naturally. You apply confidently. You excel — in exams and in life.</p>
            </GlowCard>
          </div>
          {["When you memorise, you forget easily.", "When you understand, you remember naturally.", "When you apply, you master it."].map((line, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: ".65rem" }}>
              <CheckCircle size={16} color="var(--accent)" />
              <span style={{ color: "var(--muted)", fontSize: ".95rem" }}>{line}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 800, marginBottom: "1rem" }}>
            Ready to Transform Your <span style={{ color: "var(--accent)" }}>Academic Life?</span>
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: "2rem", lineHeight: 1.75 }}>Join Johntech Academy today and start learning the right way.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/register" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "#000", padding: ".9rem 2.25rem", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", fontSize: ".85rem" }}>
              Join the Academy <ArrowRight size={16} />
            </Link>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--text)", padding: ".9rem 2.25rem", borderRadius: 10, textDecoration: "none", fontWeight: 600, fontSize: ".9rem", border: "1px solid var(--border2)" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          .two-col{grid-template-columns:1fr !important;}
          .founder-grid{grid-template-columns:1fr !important; text-align:center;}
          .philosophy-grid{grid-template-columns:1fr !important;}
        }
      `}</style>
    </div>
  );
}
