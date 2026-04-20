// Simple markdown renderer — no external deps needed
export function renderMarkdown(md: string): string {
  let html = md
    // Headings
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    // Bold / italic
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Inline code
    .replace(/`(.+?)`/g, "<code>$1</code>")
    // HR
    .replace(/^---$/gm, "<hr />")
    // Blockquote
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    // Tables — handle header row, divider, and data rows
    .replace(
      /^\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)+)/gm,
      (_match, header, body) => {
        const ths = header.split("|").filter((c: string) => c.trim()).map((c: string) => `<th>${c.trim()}</th>`).join("");
        const rows = body.trim().split("\n").map((row: string) => {
          const tds = row.split("|").filter((c: string) => c.trim()).map((c: string) => `<td>${c.trim()}</td>`).join("");
          return `<tr>${tds}</tr>`;
        }).join("");
        return `<table><thead><tr>${ths}</tr></thead><tbody>${rows}</tbody></table>`;
      }
    )
    // Unordered lists (group consecutive - lines)
    .replace(/(^- .+$\n?)+/gm, (block) => {
      const items = block.trim().split("\n").map(l => `<li>${l.replace(/^- /, "")}</li>`).join("");
      return `<ul>${items}</ul>`;
    })
    // Ordered lists
    .replace(/(^\d+\. .+$\n?)+/gm, (block) => {
      const items = block.trim().split("\n").map(l => `<li>${l.replace(/^\d+\. /, "")}</li>`).join("");
      return `<ol>${items}</ol>`;
    })
    // Paragraphs (lines not already wrapped in block tags)
    .split("\n\n")
    .map(para => {
      const t = para.trim();
      if (!t) return "";
      if (/^<(h[1-6]|ul|ol|table|blockquote|hr)/.test(t)) return t;
      return `<p>${t.replace(/\n/g, " ")}</p>`;
    })
    .join("\n");

  return html;
}
