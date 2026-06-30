interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, center = false, light = false }: SectionHeadingProps) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: "2.5rem" }}>
      {eyebrow && (
        <p style={{
          color: "#c9a84c",
          fontWeight: 600,
          fontSize: "0.8rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}>
          {eyebrow}
        </p>
      )}
      <h2 style={{
        fontFamily: "Playfair Display, serif",
        fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
        fontWeight: 700,
        color: light ? "#faf7f2" : "#1a2744",
        marginBottom: subtitle ? "1rem" : 0,
        lineHeight: 1.2,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          color: light ? "rgba(250,247,242,0.8)" : "#555555",
          fontSize: "1.05rem",
          lineHeight: 1.7,
          maxWidth: center ? "640px" : "none",
          margin: center ? "0 auto" : "0",
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
