import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import LogoSlider from "@/components/LogoSlider";

export default async function IndexPage() {
  return (
    <main className="w-full">
      <HeroSection />
      <ContentSection />
      <LogoSlider />
    </main>
  );
}