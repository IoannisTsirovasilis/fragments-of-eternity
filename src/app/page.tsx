import CampaignIntroductionSection from "@/components/CampaignIntroductionSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SubscribeSection from "@/components/SubscribeSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CampaignIntroductionSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
