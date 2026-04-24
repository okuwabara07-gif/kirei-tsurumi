"use client";
import Link from "next/link";
import { useState } from "react";
import LineButton from "./LineButton";
export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/menu", label: "メニュー・料金" },
    { href: "/blog", label: "美容コラム" },
    { href: "/access", label: "アクセス" },
    { href: "/recruit", label: "採用情報" },
    { href: "/contact", label: "お問い合わせ" },
  ];
  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #e8ddd8" }}>
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span style={{ fontFamily: "serif", fontSize: "1.2rem", fontWeight: 600, color: "#8B5E6B" }}>キレイ鶴見店</span>
          <span style={{ fontSize: "0.65rem", color: "#999", letterSpacing: "0.05em" }}>HAIR COLOR SALON</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize: "0.85rem", color: "#5C3A45" }} className="hover:opacity-70 transition-opacity">{l.label}</Link>
          ))}
        </nav>
        <div className="hidden md:flex gap-2">
          <LineButton variant="small" />
          <a href="https://beauty.hotpepper.jp" target="_blank" rel="noopener"
            style={{ background: "#8B5E6B", color: "#fff", fontSize: "0.8rem", padding: "8px 16px", borderRadius: "8px" }}
            className="hover:opacity-80 transition-opacity">ネット予約</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {[0,1,2].map(i => <div key={i} style={{ width: 22, height: 2, background: "#8B5E6B", margin: "4px 0" }} />)}
        </button>
      </div>
      {open && (
        <div style={{ background: "#fff", borderTop: "1px solid #e8ddd8" }} className="md:hidden">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "12px 16px", fontSize: "0.9rem", color: "#5C3A45", borderBottom: "1px solid #f0e8e4" }}>{l.label}</Link>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "12px 16px", borderTop: "1px solid #f0e8e4" }}>
            <LineButton variant="small" />
            <a href="https://beauty.hotpepper.jp" target="_blank" rel="noopener"
              style={{ background: "#8B5E6B", color: "#fff", padding: "8px 16px", fontSize: "0.9rem", fontWeight: 700, textAlign: "center", borderRadius: "8px", textDecoration: "none" }}>ネット予約</a>
          </div>
        </div>
      )}
    </header>
  );
}
