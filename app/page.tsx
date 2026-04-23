import { Landing } from "@/components/sections/Landing";
import { Leadership } from "@/components/sections/Leadership";
import { Goals } from "@/components/sections/Goals";
import { Numbers } from "@/components/sections/Numbers";

export default function Home() {
  return (
    <>
      <a
        href="#landing"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded"
        style={{ backgroundColor: "var(--ochre)", color: "var(--cream)", fontFamily: "var(--font-source-serif)" }}
      >
        Skip to main content
      </a>
      <main>
        <Landing />
        <Leadership />
        <Goals />
        <Numbers />
      </main>
    </>
  );
}
