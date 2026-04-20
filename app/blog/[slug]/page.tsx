import { getPostBySlug, getAllPosts, getRecentPosts } from "@/lib/posts";
import { renderMarkdown } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, User, Calendar, Tag } from "lucide-react";
import { PostCard } from "@/components/PostCard";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/AcernityEffects";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = renderMarkdown(post.content);
  const related = getRecentPosts(4).filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div style={{ paddingTop: 64 }}>

      {/* Hero image */}
      <div style={{ position: "relative", height: "clamp(260px,40vw,480px)", overflow: "hidden" }}>
        <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,8,8,.3) 0%, rgba(8,8,8,.85) 100%)" }} />
        <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 800, padding: "0 1.5rem" }}>
          <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            {post.category.map(c => <Badge key={c}>{c}</Badge>)}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.6rem,4vw,2.75rem)", fontWeight: 800, lineHeight: 1.18, color: "#fff", textShadow: "0 2px 20px rgba(0,0,0,.5)" }}>
            {post.title}
          </h1>
        </div>
      </div>

      {/* Meta bar */}
      <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "1rem 1.5rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { Icon: User,     val: post.author },
              { Icon: Calendar, val: post.date },
              { Icon: Clock,    val: post.readTime },
            ].map(({ Icon, val }) => (
              <span key={val} style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--muted)", fontSize: ".82rem" }}>
                <Icon size={13} /> {val}
              </span>
            ))}
          </div>
          <Link href="/blog" style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--accent)", textDecoration: "none", fontSize: ".82rem", fontWeight: 600 }}>
            <ArrowLeft size={13} /> Back to Blog
          </Link>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "3.5rem 1.5rem 2rem" }}>
        {/* Excerpt lead */}
        <p style={{ fontSize: "1.15rem", lineHeight: 1.75, color: "var(--muted)", borderLeft: "3px solid var(--accent)", paddingLeft: "1.25rem", marginBottom: "2.5rem", fontStyle: "italic" }}>
          {post.excerpt}
        </p>

        {/* Content */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Tags */}
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", alignItems: "center", marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
          <Tag size={14} color="var(--muted)" />
          {post.category.map(c => <Badge key={c} variant="secondary">{c}</Badge>)}
        </div>
      </div>

      {/* Author box */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem 3.5rem" }}>
        <GlowCard style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: "1.75rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(245,197,24,.12)", border: "2px solid rgba(245,197,24,.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontWeight: 800, color: "var(--accent)", fontSize: "1.3rem", flexShrink: 0 }}>
            S
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: "1rem", marginBottom: ".25rem" }}>Samari John</div>
            <div style={{ color: "var(--accent)", fontSize: ".75rem", fontFamily: "'JetBrains Mono',monospace", marginBottom: ".6rem" }}>Founder, Johntech Academy</div>
            <p style={{ color: "var(--muted)", fontSize: ".86rem", lineHeight: 1.68 }}>
              Samari John founded Johntech Academy with one mission: to help Nigerian students truly understand science and pass their major exams on the first attempt. He teaches through understanding, not memorisation.
            </p>
          </div>
        </GlowCard>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "4rem 1.5rem 5rem" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.6rem", fontWeight: 800 }}>
                More from the <span style={{ color: "var(--accent)" }}>Blog</span>
              </h2>
              <Link href="/blog" style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--accent)", textDecoration: "none", fontSize: ".85rem", fontWeight: 600 }}>
                View all <ArrowRight size={13} />
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.2rem" }}>
              {related.map(p => <PostCard key={p.id} post={p} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
