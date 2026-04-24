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
        <p style={{ fontFamily: "var(--font-poppins)", fontSize: 15, color: "#444", lineHeight: 1.75, margin: "12px 0 0" }}>
          Please take a moment, in your own time, to reflect on and recognize the lands on which you live, work, and travel to, by visiting{" "}
          <a
            href="https://native-land.ca/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#25a89e" }}
          >
            native-land.ca
          </a>.
        </p>
      </div>
    </section>
  );
}
