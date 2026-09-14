import { Footer, Header } from "../components/Chrome";
import { Hero } from "../components/Hero";
import { FinalCta, Projects, Services } from "../components/Sections";

export function Home() {
  return (
    <div className="min-h-svh bg-paper pb-6">
      <Header />
      <main className="pb-10">
        <Hero />
        <Services />
        <Projects />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
