"use client";
import Link from "next/link";
import Image from "next/image";
import { Clock, User, ArrowRight } from "lucide-react";
import type { Post } from "@/lib/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "flex", height: "100%" }}>
      <article
        style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden", transition: "all .3s", display: "flex", flexDirection: "column", width: "100%", cursor: "pointer" }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(245,197,24,.07)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
      >
        <div style={{ position: "relative", height: 210, overflow: "hidden", flexShrink: 0 }}>
          <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover", transition: "transform .4s" }}
            onMouseEnter={e => ((e.target as HTMLElement).style.transform = "scale(1.04)")}
            onMouseLeave={e => ((e.target as HTMLElement).style.transform = "scale(1)")}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,.6) 0%, transparent 60%)" }} />
        </div>
        <div style={{ padding: "1.35rem", display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap", marginBottom: ".75rem" }}>
            {post.category.slice(0, 2).map(c => (
              <span key={c} style={{ background: "rgba(245,197,24,.08)", color: "var(--accent)", border: "1px solid rgba(245,197,24,.2)", padding: ".12rem .6rem", borderRadius: 20, fontSize: ".7rem", fontWeight: 600, fontFamily: "'JetBrains Mono',monospace" }}>
                {c}
              </span>
            ))}
          </div>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.08rem", fontWeight: 700, lineHeight: 1.35, color: "var(--text)", marginBottom: ".6rem", flex: 1 }}>
            {post.title}
          </h3>
          <p style={{ color: "var(--muted)", fontSize: ".83rem", lineHeight: 1.65, marginBottom: "1rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {post.excerpt}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--border)", paddingTop: ".85rem" }}>
            <div style={{ display: "flex", gap: ".85rem", color: "var(--muted2)", fontSize: ".75rem" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 3 }}><User size={11} /> {post.author}</span>
              <span style={{ display: "flex", alignItems: "center", gap: 3 }}><Clock size={11} /> {post.readTime}</span>
            </div>
            <span style={{ color: "var(--accent)", fontSize: ".75rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 3 }}>
              Read <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article
        className="featured-card"
        style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", transition: "all .3s", cursor: "pointer" }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(245,197,24,.08)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
      >
        <div style={{ position: "relative", minHeight: 360, overflow: "hidden" }}>
          <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover", transition: "transform .5s" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(8,8,8,.3), transparent)" }} />
          <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem", background: "var(--accent)", color: "#000", padding: ".25rem .8rem", borderRadius: 20, fontSize: ".7rem", fontWeight: 700, fontFamily: "'JetBrains Mono',monospace" }}>
            FEATURED
          </div>
        </div>
        <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            {post.category.map(c => (
              <span key={c} style={{ background: "rgba(245,197,24,.08)", color: "var(--accent)", border: "1px solid rgba(245,197,24,.2)", padding: ".15rem .65rem", borderRadius: 20, fontSize: ".7rem", fontWeight: 600, fontFamily: "'JetBrains Mono',monospace" }}>
                {c}
              </span>
            ))}
          </div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.65rem", fontWeight: 800, lineHeight: 1.22, color: "var(--text)", marginBottom: ".9rem" }}>
            {post.title}
          </h2>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.72, marginBottom: "1.5rem" }}>
            {post.excerpt}
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "1rem", color: "var(--muted2)", fontSize: ".78rem" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}><User size={12} /> {post.author}</span>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={12} /> {post.readTime}</span>
            </div>
            <span style={{ color: "var(--accent)", fontWeight: 600, fontSize: ".85rem", display: "flex", alignItems: "center", gap: 4 }}>
              Read More <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </article>
      <style>{`@media(max-width:768px){.featured-card{grid-template-columns:1fr !important;} .featured-card > div:first-child{min-height:220px !important;}}`}</style>
    </Link>
  );
}
