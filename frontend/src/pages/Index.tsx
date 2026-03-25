import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import PlacesSection from "@/components/PlacesSection";
import ContextSection from "@/components/ContextSection";
import ChatSection from "@/components/ChatSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <>
      <a href="#inicio" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <SiteHeader />
      <main id="conteudo-principal">
        <HeroSection />
        <HistorySection />
        <PlacesSection />
        <ContextSection />
        <ChatSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
