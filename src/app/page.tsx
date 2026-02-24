import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/cursor";
import { ParticleBackground } from "@/components/particles";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { CertificationsSection } from "@/components/sections/certifications";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent select-none">
      <CustomCursor />
      <ParticleBackground />
      <Navbar />

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
