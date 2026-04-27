import { getAllPosts } from "@/lib/posts";
import { PostCard, FeaturedPostCard } from "@/components/PostCard";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/AcernityEffects";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Study tips, JAMB guides, exam strategies and science education from Johntech Academy.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);
  const categories = Array.from(new Set(posts.flatMap(p => p.category)));

  return (
    <div style={{ paddingTop: 64 }}>

      {/* Header */}
      <section style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", padding: "4.5rem 1.5rem 3.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse, var(--accent2) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <Badge style={{ marginBottom: "1.2rem", backgroundColor: "var(--accent2)", padding: "0.5rem 1rem", border: "1px solid var(--accent)", color: "var(--text)" }}>KNOWLEDGE HUB</Badge>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2.2rem,5vw,3.4rem)", fontWeight: 800, marginBottom: ".85rem" }}>
            Our <span style={{ color: "var(--accent)" }}>Blog</span>
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: 500, margin: "0 auto 2rem", fontSize: "1rem", lineHeight: 1.72 }}>
            Join our academy for assured exam success, study strategies and educational consultations all delivered to you.
          </p>
          {/* Category pills */}
          <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", justifyContent: "center" }}>
            {categories.map(c => (
              <span key={c} style={{ background: "var(--surface2)", border: "1px solid var(--border2)", color: "var(--muted)", padding: ".3rem .9rem", borderRadius: 99, fontSize: ".78rem", fontFamily: "'JetBrains Mono',monospace", cursor: "default" }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3.5rem 1.5rem 6rem" }}>

        {/* Featured */}
        {featured && (
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ color: "var(--muted)", fontSize: ".8rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: ".08em", marginBottom: "1rem" }}>— FEATURED POST</p>
            <FeaturedPostCard post={featured} />
          </div>
        )}

        {/* All posts grid */}
        {rest.length > 0 && (
          <>
            <p style={{ color: "var(--muted)", fontSize: ".8rem", fontFamily: "'JetBrains Mono',monospace", letterSpacing: ".08em", marginBottom: "1.5rem" }}>— ALL POSTS</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.25rem" }}>
              {rest.map(p => <PostCard key={p.id} post={p} />)}
            </div>
          </>
        )}

        {/* Newsletter CTA */}
        <GlowCard style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: "2.5rem", marginTop: "4rem", textAlign: "center" }}>
          <BookOpen size={32} color="var(--accent)" style={{ marginBottom: "1rem" }} />
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 800, marginBottom: ".6rem" }}>
            Never Miss a Study Tip
          </h3>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", marginBottom: "1.5rem", maxWidth: 400, margin: "0 auto 1.5rem" }}>
            Join Johntech Academy to get new guides, strategies and exam tips delivered directly to you.
          </p>
          <Link href="/register" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "#000", padding: ".8rem 2rem", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", fontSize: ".85rem" }}>
            Join the Academy <ArrowRight size={15} />
          </Link>
        </GlowCard>
      </div>
    </div>
  );
}
