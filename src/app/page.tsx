import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { CertificationsSection } from "@/components/sections/certifications";
import { ContactSection } from "@/components/sections/contact";
import { CustomCursor } from "@/components/cursor";
import { Navbar } from "@/components/navbar";
import { NoiseBackground } from "@/components/particles";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <NoiseBackground />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10 selection:bg-white selection:text-black">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
