import { NavRail } from "@/components/nav/NavRail";
import { Landing } from "@/components/sections/Landing";
import { LandAck } from "@/components/sections/LandAck";
import { Leadership } from "@/components/sections/Leadership";
import { Goals } from "@/components/sections/Goals";
import { Projects } from "@/components/sections/Projects";
import { PatientEngagement } from "@/components/sections/PatientEngagement";
import { EDI } from "@/components/sections/EDI";
import { ECR } from "@/components/sections/ECR";
import { KnowledgeMobilization } from "@/components/sections/KnowledgeMobilization";
import { SNA } from "@/components/sections/SNA";
import { WhatsNext } from "@/components/sections/WhatsNext";
import { Credits } from "@/components/sections/Credits";

export default function Home() {
  return (
    <>
      <a
        href="#hero-section"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded"
        style={{ backgroundColor: "#253587", color: "white", fontFamily: "var(--font-poppins)" }}
      >
        Skip to main content
      </a>

      <NavRail />

      <main
        style={{
          marginLeft: 200,
          minHeight: "100vh",
        }}
        className="md:ml-[200px] ml-0"
        id="main-content"
      >
        {/* Hero is full-bleed within the content column */}
        <Landing />

        {/* Remaining sections with padding */}
        <div style={{ padding: "64px 48px 100px" }} className="px-5 md:px-12">
          <LandAck />
          <div style={{ marginTop: 80 }}><Leadership /></div>
          <div style={{ marginTop: 80 }}><Goals /></div>
<div style={{ marginTop: 80 }}><Projects /></div>
          <div style={{ marginTop: 80 }}><PatientEngagement /></div>
          <div style={{ marginTop: 80 }}><EDI /></div>
          <div style={{ marginTop: 80 }}><ECR /></div>
          <div style={{ marginTop: 80 }}><KnowledgeMobilization /></div>
          <div style={{ marginTop: 80 }}><SNA /></div>
          <div style={{ marginTop: 80 }}><WhatsNext /></div>
          <div style={{ marginTop: 80 }}><Credits /></div>
        </div>
      </main>
    </>
  );
}
