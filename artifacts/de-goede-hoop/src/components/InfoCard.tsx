interface InfoCardProps {
  icon?: string;
  title: string;
  description: string;
  accent?: boolean;
}

export default function InfoCard({ icon, title, description, accent = false }: InfoCardProps) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        padding: "1.75rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        borderTop: accent ? "4px solid #3d52a0" : "4px solid #1a2744",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        height: "100%",
      }}
    >
      {icon && (
        <div style={{ fontSize: "2rem", lineHeight: 1 }} aria-hidden="true">{icon}</div>
      )}
      <h3 style={{
        fontFamily: "Playfair Display, serif",
        fontSize: "1.15rem",
        fontWeight: 700,
        color: "#1a2744",
        lineHeight: 1.2,
      }}>
        {title}
      </h3>
      <p style={{ color: "#555555", fontSize: "0.95rem", lineHeight: 1.7 }}>
        {description}
      </p>
    </div>
  );
}
