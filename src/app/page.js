import CTASection from "@/components/homepage/CTASection";
import HeroSection from "@/components/homepage/HeroSection";
import Services from "@/components/homepage/Services";
import Team from "@/components/homepage/Team";
import TrendingIdeas from "@/components/homepage/TrendingIdeas";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <TrendingIdeas></TrendingIdeas>
      <Services></Services>
      <Team></Team>
      <CTASection></CTASection>
    </div>
  );
}
