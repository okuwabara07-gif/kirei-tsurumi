export default function LineButton({ variant = "default" }: { variant?: "default" | "small" }) {
  const isSmall = variant === "small";
  return (
    <a
      href="https://line.me/R/ti/p/@545fncvi"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: "#06C755",
        color: "#fff",
        padding: isSmall ? "8px 16px" : "14px 40px",
        fontSize: isSmall ? "0.75rem" : "0.82rem",
        letterSpacing: "0.15em",
        textDecoration: "none",
        fontWeight: 700,
        borderRadius: "8px",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        transition: "transform 0.2s ease, opacity 0.2s ease",
      }}
      className="hover:opacity-90 active:translate-y-0.5"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <svg width={isSmall ? "14" : "16"} height={isSmall ? "14" : "16"} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12C5.373 24 0 18.627 0 12 0 5.373 5.373 0 12 0m5.521 17.775h-3.247v-5.62h-1.962v5.62H8.236V9.82h3.076v.4c0 .865-.05 2.26-.025 4.35h.025v3.205h3.075v-4.9c0-.3.025-1.313.05-2.04.1-1.81.738-2.99 2.264-2.99 1.25 0 1.783.925 1.908 2.605.05.75.075 1.855.075 3.36v3.365z" />
      </svg>
      {isSmall ? "LINE" : "LINEで予約"}
    </a>
  );
}
