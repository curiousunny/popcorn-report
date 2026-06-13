import Image from "next/image";

export function Credits() {
  return (
    <section id="credits" style={{ scrollMarginTop: 80 }}>
      <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 48, textAlign: "center" }}>
        <Image src="/POPCORN_logo.png" alt="POPCORN" width={140} height={37} style={{ height: 37, width: "auto", margin: "0 auto" }} />
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 14, color: "#888", marginTop: 20, lineHeight: 1.7 }}>
          POPCORN — Pediatric Outcome imProvement through COordination of Research Networks<br />
          Operated via MICYRN and CHU Sainte-Justine Research Center<br />
          Funded by the <strong>Canadian Institutes of Health Research</strong> and the <strong>Canada Biomedical Research Fund</strong>
        </p>
        <a href="https://www.popcornpediatrics.ca" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 16, fontFamily: "var(--font-poppins)", fontSize: 14, color: "#253587" }}>
          popcornpediatrics.ca →
        </a>
        <br />
     <a href="mailto:popcorn@micyrn.ca" style={{ display: "inline-block", marginTop: 10, fontFamily: "var(--font-poppins)", fontSize: 14, color: "#f4017f", fontWeight: 700 }}>
          popcorn@micyrn.ca
        </a>
        <p style={{ fontFamily: "var(--font-heading)", fontSize: 16, color: "#bbb", marginTop: 24 }}>
          2025 Impact Report
        </p>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 12, color: "#ccc", marginTop: 8 }}>
          Designed and developed by Sunny Yimeng Dong
        </p>
      </div>
    </section>
  );
}
