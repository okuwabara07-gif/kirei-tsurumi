"use client";
import { useEffect, useState } from "react";

export default function LineFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://line.me/R/ti/p/@545fncvi"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        width: "60px",
        height: "60px",
        background: "#06C755",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(6, 199, 85, 0.3)",
        zIndex: 40,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease, transform 0.3s ease",
        transform: isVisible ? "translateY(0)" : "translateY(100px)",
        pointerEvents: isVisible ? "auto" : "none",
      }}
      className="hover:opacity-90 active:scale-95"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = isVisible ? "translateY(-2px)" : "translateY(100px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = isVisible ? "translateY(0)" : "translateY(100px)";
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" color="#fff">
        <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12C5.373 24 0 18.627 0 12 0 5.373 5.373 0 12 0m5.521 17.775h-3.247v-5.62h-1.962v5.62H8.236V9.82h3.076v.4c0 .865-.05 2.26-.025 4.35h.025v3.205h3.075v-4.9c0-.3.025-1.313.05-2.04.1-1.81.738-2.99 2.264-2.99 1.25 0 1.783.925 1.908 2.605.05.75.075 1.855.075 3.36v3.365z" />
      </svg>
    </a>
  );
}
