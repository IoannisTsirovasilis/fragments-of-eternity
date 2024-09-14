import CampaignIntroductionSection from "@/components/CampaignIntroductionSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SubscribeSection from "@/components/SubscribeSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroSection />
      <CampaignIntroductionSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
