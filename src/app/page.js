import PortfolioSection from "@/components/PortfolioSection";
import Landing from "../components/Landing";
import AboutSection from "@/components/AboutSection";
import ContactsSection from "@/components/ContactsSection";

export default function Home() {
  return (
    <div className="font-abril min-h-screen w-full flex flex-col items-center">
      <Landing />
      <AboutSection />
      <PortfolioSection />
      <ContactsSection />
    </div>
  );
}
