"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";
import { REACH_STATS } from "@/content/data/site-data";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type ReachStat = (typeof REACH_STATS)[number];

const COLORS = {
  pink: "#f4017f",
  teal: "#25a89e",
  amber: "#f7a40b",
  coral: "#f2683a",
};

const KM_CARDS = [
  {
    title: "Publications",
    image: "/report-assets/km-cards/publications-2026.png",
    details: [
      { label: "4 academic publications", href: "https://www.popcornpediatrics.ca/publications" },
      { label: "1 podcast", href: "https://podcasts.apple.com/ca/podcast/sentinel-injuries-and-severe-maltreatment-in-young/id962398118?i=1000750991230" },
      { label: "1 infographic", href: "https://static1.squarespace.com/static/6467c3b044cf4517acc3e18b/t/68e7c9716fdadb02d5a11769/1760020849476/How+patient+partners+mobilized+mental+health+data_FINAL.pdf" },
    ],
  },
  {
    title: "Presentations",
    image: "/report-assets/km-cards/presentations-2026.png",
    details: [
      { label: "2 national webinars", href: "https://www.popcornpediatrics.ca/training-and-events" },
      "2 oral research presentations",
      "2 media interviews",
      { label: "1 poster presentation", href: "https://static1.squarespace.com/static/6467c3b044cf4517acc3e18b/t/690ba75a695db32ac76fd576/1762371418095/2025_10_16+POPCORN+Co+Designing+PE+training+-+CHRD.pdf" },
     "1 presentation and keynote",
    ],
  },
  {
    title: "Supporting Organizations",
    image: "/report-assets/km-cards/root-networks.png",
    href: "https://www.popcornpediatrics.ca/what-is-popcorn",
  },
  {
    title: "Sites",
    image: "/report-assets/km-cards/sites.png",
    href: "https://www.popcornpediatrics.ca/sites",
  },
  {
    title: "Collaborating networks",
    image: "/report-assets/km-cards/collaborating-networks.png",
    href: "https://www.popcornpediatrics.ca/what-is-popcorn",
  },
  { title: "Letters of support", image: "/report-assets/km-cards/letters.png" },
] as const;

function reach(label: ReachStat["label"]): ReachStat {
  const found = REACH_STATS.find((item) => item.label === label);
  if (!found) throw new Error(`Missing reach stat: ${label}`);
  return found;
}

function formatValue(value: number, format: "integer" | "currency" = "integer") {
  const rounded = Math.round(value);
  return format === "currency"
    ? `$${rounded.toLocaleString("en-CA")}`
    : rounded.toLocaleString("en-CA");
}

function AnimatedNumber({
  value,
  format = "integer",
  className,
}: {
  value: number;
  format?: "integer" | "currency";
  className?: string;
}) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(wrapRef, { once: true, margin: "-10%" });
  const reduced = useReducedMotion();
  const didAnimate = useRef(false);

  useEffect(() => {
    if (!isInView || didAnimate.current || !numberRef.current) return;
    didAnimate.current = true;

    if (reduced) {
      numberRef.current.textContent = formatValue(value, format);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (latest) => {
        if (numberRef.current) {
          numberRef.current.textContent = formatValue(latest, format);
        }
      },
    });

    return () => controls.stop();
  }, [format, isInView, reduced, value]);

  return (
    <span ref={wrapRef} className={className}>
      <span ref={numberRef} aria-label={formatValue(value, format)}>
        {formatValue(reduced ? value : 0, format)}
      </span>
    </span>
  );
}

function WorkforceBar() {
  const roles = [
    { stat: reach("researchers"), color: COLORS.pink },
    { stat: reach("research coordinators/site staff"), color: COLORS.teal },
    { stat: reach("biobank staff"), color: COLORS.amber },
    { stat: reach("admin/operational staff"), color: COLORS.coral },
  ];
  const total = roles.reduce((sum, role) => sum + role.stat.value, 0);

  return (
    <article
      className="bn-card bn-card-workforce"
      tabIndex={0}
      aria-label={`${total} people across research, site, biobank, and operations roles`}
    >
      <div className="bn-mega-row">
        <AnimatedNumber value={total} className="bn-mega-number" />
        <span className="bn-mega-label">network contributors</span>
      </div>
      <div className="bn-stacked-bar" aria-hidden="true">
        {roles.map((role) => (
          <span
            key={role.stat.label}
            style={{ flex: role.stat.value, background: role.color }}
          />
        ))}
      </div>
      <div className="bn-role-list">
        {roles.map((role) => (
          <div key={role.stat.label} className="bn-role">
            <span style={{ background: role.color }} />
            <strong>{role.stat.value}</strong>
            <span>{role.stat.label}</span>
          </div>
        ))}
      </div>
      <p className="bn-note">Across research, sites, biobanking, and central operations.</p>
    </article>
  );
}

function KmCard({ card }: { card: (typeof KM_CARDS)[number] }) {
  const hasDetails = "details" in card;
  const hasHref = "href" in card;
  const kicker = "kicker" in card && typeof card.kicker === "string" ? card.kicker : undefined;
  const canFlip = hasDetails || hasHref;
  const isLongDetails = hasDetails && card.details.length > 4;

  return (
    <article
      className={`km-stat-card${canFlip ? " km-stat-card-flip" : ""}${hasDetails ? " km-stat-card-detail" : ""}${isLongDetails ? " km-stat-card-detail-long" : ""}`}
      tabIndex={canFlip ? 0 : undefined}
      aria-label={canFlip ? `${card.title} details` : undefined}
    >
      <div className="km-stat-card-inner">
        <div className="km-stat-card-face km-stat-card-front">
          <Image
            src={card.image}
            alt=""
            width={640}
            height={640}
            className="km-stat-card-image"
            aria-hidden="true"
        />
          <div className="km-stat-card-label">
            <h4>{card.title}</h4>
            {canFlip && <span className="km-tap-cue" aria-hidden="true">Tap to read more</span>}
          </div>
        </div>
        {canFlip && (
          <div className="km-stat-card-face km-stat-card-back">
            <h4>{card.title}</h4>
            {kicker && <p className="km-stat-card-kicker">{kicker}</p>}
            {hasDetails && (
              <ul>
                {card.details.map((detail) => (
                  <li key={typeof detail === "string" ? detail : detail.label}>
                    {typeof detail === "string" ? (
                      detail
                    ) : (
                      <a href={detail.href} target="_blank" rel="noopener noreferrer">
                        {detail.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {hasHref && (
              <a className="km-stat-card-view" href={card.href} target="_blank" rel="noopener noreferrer">
                View
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function ByTheNumbers() {
  return (
    <div className="bn-wrap">
      <div className="km-stat-card-grid" aria-label="Knowledge mobilization statistics">
        {KM_CARDS.map((card) => (
          <KmCard key={card.title} card={card} />
        ))}
      </div>

      <div className="bn-dashboard">
        <WorkforceBar />
      </div>
    </div>
  );
}
