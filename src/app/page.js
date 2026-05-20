import CTASection from "@/components/homepage/CTASection";
import Services from "@/components/homepage/Services";
import Team from "@/components/homepage/Team";
import TrendingIdeas from "@/components/homepage/TrendingIdeas";

export default function Home() {
  return (
    <div>
      <TrendingIdeas></TrendingIdeas>
      <Services></Services>
      <Team></Team>
      <CTASection></CTASection>
    </div>
  );
}
