import { HeroSection } from "@/components/sections/hero";
import { ExperienceSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { CertificationsSection } from "@/components/sections/certifications";
import { ContactSection } from "@/components/sections/contact";
import { CustomCursor } from "@/components/cursor";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 mesh-bg z-0" />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10 selection:bg-[var(--primary)] selection:text-[#0B192C]">
        <HeroSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
