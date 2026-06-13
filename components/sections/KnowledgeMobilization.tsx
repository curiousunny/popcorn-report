import { SectionBanner } from "@/components/ui/SectionBanner";
import { ByTheNumbers } from "@/components/sections/ByTheNumbers";
import { SNAContent } from "@/components/sections/SNA";

export function KnowledgeMobilization() {
  return (
    <section id="km" className="chapter-section">
      <SectionBanner id="km" title="Knowledge Mobilization Tools & Impact" />

      <div
        data-theme-card="true"
        style={{
          background: "white",
          border: "1px solid color-mix(in srgb, var(--chapter-color) 18%, white)",
          borderRadius: 18,
          padding: "clamp(22px, 4vw, 34px)",
        }}
      >
        <p style={{ color: "#111", fontFamily: "var(--font-poppins)", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", lineHeight: 1.75, margin: 0 }}>
          POPCORN&apos;s  <a href="https://www.popcornpediatrics.ca/">website</a> and <a href="https://micyrn.us11.list-manage.com/subscribe?u=47a8a95d9e40cf8aff4c5aed3&id=bb77a913b6">newsletter</a> launched in 2022 and continues to grow.
        </p>
        

        <details
          style={{
            border: "1px solid color-mix(in srgb, var(--chapter-color) 20%, white)",
            borderRadius: 14,
            marginTop: 22,
            overflow: "hidden",
          }}
        >
          <summary
            style={{
              color: "var(--chapter-color)",
              cursor: "pointer",
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              fontWeight: 800,
              padding: "16px 18px",
            }}
          >
            Promotional Materials
          </summary>
          <div style={{ borderTop: "1px solid color-mix(in srgb, var(--chapter-color) 14%, white)", padding: "18px 20px 22px" }}>
            <p style={{ color: "#111", fontFamily: "var(--font-poppins)", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 12px" }}>
              Promotional Materials include:
            </p>
            <ul style={{ color: "#111", fontFamily: "var(--font-poppins)", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 16px", paddingLeft: 22 }}>
              <li>POPCORN Fact sheets, one for collaborators and one for patients and families</li>
              <li>Network Structure Infographic</li>
              <li>Map of participating sites</li>
              <li>Organizational structure</li>
            </ul>
            <p style={{ color: "#111", fontFamily: "var(--font-poppins)", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 14px" }}>
              All are available in English and French to download on website:{" "}
              <a href="https://www.popcornpediatrics.ca/promotional-materials" target="_blank" rel="noopener noreferrer">POPCORN Promotional Materials</a>. These tools are great to share within your organization, include in presentations, or print to display at your desk.
            </p>
            <p style={{ color: "#111", fontFamily: "var(--font-poppins)", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
              Templates such as plain language study summaries, PowerPoint presentations, and posters are available to network members. Contact our Knowledge Broker,{" "}
              <a href="mailto:megan.balenick@umanitoba.ca">Megan Bale-Nick</a>, to learn more.
            </p>
          </div>
        </details>
      </div>

      <ByTheNumbers />
      <SNAContent />
    </section>
  );
}
