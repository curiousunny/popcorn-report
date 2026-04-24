"use client";

import { useState } from "react";

export function CopyLink({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    const url = window.location.href.split("#")[0] + "#" + id;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={copy}
      title="Copy link to section"
      style={{
        background: "none", border: "none", cursor: "pointer", padding: "4px 8px",
        color: copied ? "#25a89e" : "#bbb", fontSize: 13,
        display: "flex", alignItems: "center", gap: 4, transition: "color 0.2s",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
      {copied ? "Copied!" : "Copy link"}
    </button>
  );
}
