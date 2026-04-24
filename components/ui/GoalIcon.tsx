import type { ReactElement } from "react";

type Props = { type: string; size?: number };

export function GoalIcon({ type, size = 36 }: Props) {
  const icons: Record<string, ReactElement> = {
    shield: (
      <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
        <path d="M18 3L6 8v10c0 7 5.4 13.5 12 15 6.6-1.5 12-8 12-15V8L18 3z" fill="#253587" fillOpacity=".12" stroke="#253587" strokeWidth="1.8"/>
        <path d="M13 18l3 3 7-7" stroke="#253587" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    heart: (
      <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
        <path d="M18 28S6 20 6 12.5C6 9 8.7 7 12 7c2 0 4 1 6 3 2-2 4-3 6-3 3.3 0 6 2 6 5.5C30 20 18 28 18 28z" fill="#f4017f" fillOpacity=".15" stroke="#f4017f" strokeWidth="1.8"/>
        <circle cx="24" cy="14" r="3" fill="#f4017f" fillOpacity=".4"/>
      </svg>
    ),
    network: (
      <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="4" fill="#25a89e" fillOpacity=".2" stroke="#25a89e" strokeWidth="1.8"/>
        <circle cx="8" cy="10" r="3" fill="#25a89e" fillOpacity=".4" stroke="#25a89e" strokeWidth="1.5"/>
        <circle cx="28" cy="10" r="3" fill="#25a89e" fillOpacity=".4" stroke="#25a89e" strokeWidth="1.5"/>
        <circle cx="8" cy="26" r="3" fill="#25a89e" fillOpacity=".4" stroke="#25a89e" strokeWidth="1.5"/>
        <circle cx="28" cy="26" r="3" fill="#25a89e" fillOpacity=".4" stroke="#25a89e" strokeWidth="1.5"/>
        <line x1="18" y1="18" x2="8" y2="10" stroke="#25a89e" strokeWidth="1.3"/>
        <line x1="18" y1="18" x2="28" y2="10" stroke="#25a89e" strokeWidth="1.3"/>
        <line x1="18" y1="18" x2="8" y2="26" stroke="#25a89e" strokeWidth="1.3"/>
        <line x1="18" y1="18" x2="28" y2="26" stroke="#25a89e" strokeWidth="1.3"/>
      </svg>
    ),
    equity: (
      <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
        <circle cx="12" cy="14" r="4" fill="#f7a40b" fillOpacity=".3" stroke="#f7a40b" strokeWidth="1.5"/>
        <circle cx="24" cy="14" r="4" fill="#f4017f" fillOpacity=".3" stroke="#f4017f" strokeWidth="1.5"/>
        <path d="M6 28c0-4 2.7-6 6-6s6 2 6 6" stroke="#f7a40b" strokeWidth="1.5" fill="none"/>
        <path d="M18 28c0-4 2.7-6 6-6s6 2 6 6" stroke="#f4017f" strokeWidth="1.5" fill="none"/>
        <line x1="8" y1="22" x2="28" y2="22" stroke="#253587" strokeWidth="1" strokeDasharray="2 2"/>
      </svg>
    ),
    compass: (
      <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="12" fill="#253587" fillOpacity=".08" stroke="#253587" strokeWidth="1.8"/>
        <polygon points="18,8 21,18 18,22 15,18" fill="#253587" fillOpacity=".6"/>
        <polygon points="18,28 15,18 18,14 21,18" fill="#f4017f" fillOpacity=".5"/>
        <circle cx="18" cy="18" r="2" fill="#253587"/>
      </svg>
    ),
  };
  return icons[type] ?? null;
}
