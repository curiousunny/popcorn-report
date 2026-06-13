import type { ReactNode } from "react";
import Image from "next/image";
import { CopyLink } from "@/components/ui/CopyLink";
import { getSectionTheme } from "@/content/data/section-themes";

type Props = {
  id: string;
  title: string;
  subtitle?: ReactNode;
};

export function SectionBanner({ id, title, subtitle }: Props) {
  const theme = getSectionTheme(id);

  return (
    <div className="section-banner">
      {theme.bannerSrc ? (
        <Image
          src={theme.bannerSrc}
          alt={theme.bannerAlt}
          width={4096}
          height={1714}
          sizes="(max-width: 768px) 100vw, min(1180px, calc(100vw - 312px))"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      ) : (
        <h2 className="section-fallback-title">{title}</h2>
      )}

      <div className="section-banner-meta">
        <div>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="section-copy-link">
          <CopyLink id={id} light={false} />
        </div>
      </div>
    </div>
  );
}
