import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Users, Trophy, Zap, CheckCircle, Star, Target } from "lucide-react";
import { getRecentPosts } from "@/lib/posts";
import { PostCard, FeaturedPostCard } from "@/components/PostCard";
import { SpotlightBg, GlowCard, MovingBorder } from "@/components/ui/AcernityEffects";
import { Badge } from "@/components/ui/Badge";

export default function HomePage() {
  const recent = getRecentPosts(4);
  const featured = recent[0];
  const grid = recent.slice(1);

  return (
    <div style={{ paddingTop: 64 }}>

      {/* HERO */}
      <SpotlightBg>
        <section style={{ minHeight: "92vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "5rem 1.5rem 4rem" }}>
          <div style={{ position: "absolute", top: "8%", right: "-8%", width: 640, height: 640, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,197,24,.055) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "0", left: "-12%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,131,74,.04) 0%, transparent 65%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4.5rem", alignItems: "center" }} className="hero-grid">
            <div className="anim-up">
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(245,197,24,.07)", border: "1px solid rgba(245,197,24,.22)", borderRadius: 99, padding: ".3rem 1rem", marginBottom: "1.75rem" }}>
                <Star size={12} color="var(--accent)" fill="var(--accent)" />
                <span style={{ color: "var(--accent)", fontSize: ".75rem", fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", letterSpacing: ".06em" }}>
                  NIGERIA&apos;S SMART LEARNING PLATFORM
                </span>
              </div>
              <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.6rem,5.5vw,4rem)", fontWeight: 800, lineHeight: 1.08, marginBottom: "1.5rem", letterSpacing: "-.025em" }}>
                Learn Science.<br />
                <span style={{ color: "var(--accent)" }}>Master Exams.</span><br />
                Get Admitted.
              </h1>
              <p style={{ color: "var(--muted)", fontSize: "1.08rem", lineHeight: 1.78, marginBottom: "2.25rem", maxWidth: 490 }}>
                Johntech Academy helps Nigerian students truly understand science — not just memorise it. Ace JAMB, WAEC &amp; NECO with proven strategies and personalised coaching.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                <MovingBorder style={{ borderRadius: 10 }}>
                  <Link href="/register" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "#000", padding: ".85rem 2rem", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", fontSize: ".85rem" }}>
                    Get Started Free <ArrowRight size={16} />
                  </Link>
                </MovingBorder>
                <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--text)", padding: ".85rem 2rem", borderRadius: 10, textDecoration: "none", fontWeight: 600, fontSize: ".9rem", border: "1px solid var(--border2)" }}>
                  <BookOpen size={16} /> Read the Blog
                </Link>
              </div>
              <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
                {[{ v: "300+", l: "Students Helped" }, { v: "95%", l: "Pass Rate" }, { v: "3+", l: "Years Teaching" }].map(s => (
                  <div key={s.l}>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.7rem", fontWeight: 800, color: "var(--accent)" }}>{s.v}</div>
                    <div style={{ color: "var(--muted)", fontSize: ".78rem" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="anim-up d2 hero-img" style={{ position: "relative", borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)" }}>
              <div style={{ position: "relative", height: 500 }}>
                <Image src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&auto=format&fit=crop&q=80" alt="Students studying" fill style={{ objectFit: "cover" }} priority />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,.75) 0%, transparent 55%)" }} />
              </div>
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", right: "1.5rem", background: "rgba(8,8,8,.82)", backdropFilter: "blur(14px)", border: "1px solid var(--border)", borderRadius: 12, padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <div style={{ width: 42, height: 42, background: "rgba(245,197,24,.12)", border: "1px solid rgba(245,197,24,.25)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Trophy size={22} color="var(--accent)" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: ".92rem" }}>Score 300+ in JAMB</div>
                  <div style={{ color: "var(--muted)", fontSize: ".75rem" }}>Smart, structured, proven prep</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SpotlightBg>

      {/* SERVICES */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <Badge style={{ marginBottom: "1rem" }}>WHAT WE OFFER</Badge>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 800, marginBottom: ".75rem" }}>
            Everything You Need to <span style={{ color: "var(--accent)" }}>Excel</span>
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 520, margin: "0 auto", fontSize: ".98rem" }}>From confused student to confident exam-passer — we have a programme for you.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.25rem" }}>
          {[
            { Icon: BookOpen, title: "Online Courses",    desc: "Self-paced, structured lessons in Physics, Chemistry, Maths and more." },
            { Icon: Users,    title: "1-on-1 Coaching",   desc: "Personalised academic coaching and study-habit improvement." },
            { Icon: Trophy,   title: "Exam Preparation",  desc: "Strategic prep programs for JAMB, WAEC, NECO and Post-UTME." },
            { Icon: Zap,      title: "Monthly Tutorials",  desc: "Consistent live sessions that keep you on track every month." },
            { Icon: Target,   title: "CBT Practice",       desc: "Daily computer-based test drills so the real exam feels familiar." },
            { Icon: Star,     title: "Study Materials",    desc: "High-quality guides, structured notes and performance-boosting resources." },
          ].map(({ Icon, title, desc }) => (
            <GlowCard key={title} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: "1.65rem", transition: "all .3s" }}>
              <div style={{ width: 44, height: 44, background: "rgba(245,197,24,.09)", border: "1px solid rgba(245,197,24,.18)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: "1rem" }}>
                <Icon size={21} />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.05rem", fontWeight: 700, marginBottom: ".45rem" }}>{title}</h3>
              <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.65 }}>{desc}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4.5rem", alignItems: "center" }} className="two-col">
          <div>
            <Badge style={{ marginBottom: "1.2rem" }}>OUR PHILOSOPHY</Badge>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.9rem,4vw,2.6rem)", fontWeight: 800, lineHeight: 1.18, marginBottom: "1.1rem" }}>
              Understanding Over <span style={{ color: "var(--accent)" }}>Cramming</span>
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "1.75rem", lineHeight: 1.78 }}>
              Most students fail not because they aren&apos;t smart — but because they were taught to memorise instead of truly understand. We change that.
            </p>
            {[
              "Learn WHY concepts work, not just what to write",
              "Apply knowledge in real-life and exam situations",
              "Build independent thinking, not note-following",
              "Personalised plans for every student",
              "Proven methods backed by learning science",
            ].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: ".7rem" }}>
                <CheckCircle size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: 3 }} />
                <span style={{ color: "var(--muted)", fontSize: ".9rem" }}>{item}</span>
              </div>
            ))}
            <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "#000", padding: ".8rem 1.75rem", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", fontSize: ".82rem", marginTop: "1.5rem" }}>
              Learn More About Us <ArrowRight size={15} />
            </Link>
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)" }}>
            <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80" alt="Students learning" width={700} height={450} style={{ objectFit: "cover", width: "100%", height: 420, display: "block" }} />
          </div>
        </div>
      </section>

      {/* LATEST POSTS */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "5.5rem 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <Badge style={{ marginBottom: ".75rem" }}>KNOWLEDGE HUB</Badge>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.7rem,3.5vw,2.4rem)", fontWeight: 800 }}>
              Latest from the <span style={{ color: "var(--accent)" }}>Blog</span>
            </h2>
          </div>
          <Link href="/blog" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--accent)", textDecoration: "none", fontWeight: 600, fontSize: ".88rem", border: "1px solid rgba(245,197,24,.25)", padding: ".5rem 1.1rem", borderRadius: 8 }}>
            View all posts <ArrowRight size={14} />
          </Link>
        </div>
        {featured && <div style={{ marginBottom: "1.5rem" }}><FeaturedPostCard post={featured} /></div>}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.2rem" }}>
          {grid.map(p => <PostCard key={p.id} post={p} />)}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <Badge style={{ marginBottom: "1rem" }}>STUDENT WINS</Badge>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 800 }}>
              What Our <span style={{ color: "var(--accent)" }}>Students Say</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "1.25rem" }}>
            {[
              { name: "Chidera O.", score: "JAMB: 312", course: "Medicine, UNILAG", text: "The CBT practice and concept-based teaching made all the difference. I finally understood Physics instead of just memorising formulas." },
              { name: "Fatima A.",  score: "JAMB: 298", course: "Law, UI",           text: "I had tried other platforms but kept failing. Johntech showed me how to study smarter — the Feynman technique changed everything for me." },
              { name: "Emeka N.",   score: "JAMB: 305", course: "Engineering, ABU",  text: "The past-question patterns and syllabus-focused approach helped me score 305. Johntech Academy is the real deal for serious students." },
            ].map(t => (
              <GlowCard key={t.name} style={{ background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: 14, padding: "1.65rem" }}>
                <div style={{ display: "flex", gap: 2, marginBottom: ".85rem" }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} color="var(--accent)" fill="var(--accent)" />)}
                </div>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.72, marginBottom: "1.25rem", fontStyle: "italic" }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: ".75rem", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(245,197,24,.12)", border: "1px solid rgba(245,197,24,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "var(--accent)", fontSize: ".9rem", flexShrink: 0 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: ".88rem" }}>{t.name}</div>
                    <div style={{ color: "var(--accent)", fontSize: ".72rem", fontFamily: "'JetBrains Mono',monospace" }}>{t.score} · {t.course}</div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <MovingBorder style={{ borderRadius: 20, display: "inline-block", width: "100%" }}>
            <div style={{ background: "linear-gradient(135deg,var(--surface) 0%,#1a1600 100%)", border: "1px solid var(--border)", borderRadius: 20, padding: "4rem 2.5rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 250, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(245,197,24,.06) 0%, transparent 70%)", pointerEvents: "none" }} />
              <Badge style={{ marginBottom: "1.5rem" }}>JOIN THE ACADEMY</Badge>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.12, marginBottom: "1rem", position: "relative" }}>
                Ready to <span style={{ color: "var(--accent)" }}>Crush Your Exams?</span>
              </h2>
              <p style={{ color: "var(--muted)", maxWidth: 480, margin: "0 auto 2.25rem", fontSize: "1rem", lineHeight: 1.72, position: "relative" }}>
                Join Johntech Academy and get the strategies, coaching and support you need to score high and get admitted in one attempt.
              </p>
              <Link href="/register" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "#000", padding: "1rem 2.5rem", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", fontSize: ".9rem", position: "relative" }}>
                Join Johntech Academy <ArrowRight size={17} />
              </Link>
            </div>
          </MovingBorder>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          .hero-grid{grid-template-columns:1fr !important;}
          .hero-img{display:none !important;}
          .two-col{grid-template-columns:1fr !important;}
        }
      `}</style>
    </div>
  );
}
