import Image from "next/image";
import { LAND_ACKNOWLEDGEMENT } from "@/content/data/site-data";

export function LandAck() {
  return (
    <section id="land-ack" className="land-ack-section">
      <div className="land-ack-message">
        <div className="land-ack-content">
          <Image
            src="/report-assets/land-acknowledgement/turtle-island.png"
            alt="Watercolour turtle carrying a forest across water"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) 92vw, 760px"
            className="land-ack-image"
            priority={false}
          />
          <p className="land-ack-copy">
            {LAND_ACKNOWLEDGEMENT}
          </p>
          <p className="land-ack-link-copy">
            Please take a moment, in your own time, to reflect on and recognize the lands on which you live, work, and travel to, by visiting{" "}
            <a
              href="https://native-land.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              native-land.ca
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
