import Image from "next/image";
import { GOALS } from "@/content/data/site-data";
import { GoalIcon } from "@/components/ui/GoalIcon";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionBanner } from "@/components/ui/SectionBanner";

const GOAL_IMAGES: Partial<Record<(typeof GOALS)[number]["id"], string>> = {
  1: "/report-assets/goals/future-pandemics.png",
  2: "/report-assets/goals/improve-health.png",
  3: "/report-assets/goals/work-better-together.png",
  4: "/report-assets/goals/fair-inclusive.png",
  5: "/report-assets/goals/smart-choices.png",
};

export function Goals() {
  return (
    <section id="goals" className="chapter-section">
      <SectionBanner
        id="goals"
        title="Our Five Goals"
        subtitle="By meeting our goals and objectives, POPCORN is helping ensure that children and pregnant people across Canada get the care they need — and that we are ready to face the next health crisis with a united, prepared response."
      />

      <div className="goal-flip-grid">
        {GOALS.map((g, i) => {
          const imageSrc = GOAL_IMAGES[g.id];

          return (
            <FadeIn key={g.id} delay={i * 100}>
              <article
                className="goal-flip-card"
                data-theme-card="true"
                tabIndex={0}
                aria-label={`Goal ${g.id}: ${g.headline}. ${g.desc}`}
              >
                <div className="goal-flip-inner">
                  <div className="goal-flip-face goal-flip-front">
                    {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt=""
                      width={1600}
                      height={1600}
                      sizes="(max-width: 768px) 86vw, 280px"
                      className="goal-flip-image"
                    />
                    ) : (
                      <div className="goal-flip-icon-fallback" aria-hidden="true">
                        <GoalIcon type={g.icon} size={86} />
                      </div>
                    )}
                    <div className="goal-flip-label">
                      <h3>{g.headline}</h3>
                      <span className="goal-tap-cue" aria-hidden="true">Tap to read more</span>
                    </div>
                  </div>

                  <div className="goal-flip-face goal-flip-back">
                    <h3>{g.headline}</h3>
                    <p>{g.desc}</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
