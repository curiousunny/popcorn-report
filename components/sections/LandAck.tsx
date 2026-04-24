import { LAND_ACKNOWLEDGEMENT } from "@/content/data/site-data";

export function LandAck() {
  return (
    <section id="land-ack" style={{ scrollMarginTop: 80 }}>
      <div style={{ background: "#f5f3ee", borderLeft: "4px solid #25a89e", borderRadius: 12, padding: "28px 32px", maxWidth: 760, margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--font-coming-soon)", color: "#25a89e", fontSize: 16, marginBottom: 8 }}>
          Land Acknowledgement
        </div>
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 16, color: "#444", lineHeight: 1.75, margin: 0 }}>
          {LAND_ACKNOWLEDGEMENT}
        </p>
        <a
          href="https://native-land.ca/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", marginTop: 12, fontFamily: "var(--font-poppins)", fontSize: 13, color: "#25a89e" }}
        >
          Visit native-land.ca →
        </a>
      </div>
    </section>
  );
}
