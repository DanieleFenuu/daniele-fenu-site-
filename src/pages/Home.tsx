import { Footer } from "../components/Chrome";
import { Hero } from "../components/Hero";
import { FinalCta } from "../components/Sections";

export function Home() {
  return (
    <div className="min-h-svh bg-paper pb-6">
      <main className="pb-10">
        <Hero />
        {/* Sezioni nascoste per ora — Services e Projects pronti in Sections.tsx */}
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
