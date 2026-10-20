import DetailsCard from "@/app/components/home/DetailsCard";
import Hero from "@/app/components/home/Hero";
import HowAdoptionWorks from "@/app/components/home/HowAdoptionWorks";
import PetsSection from "@/app/components/home/PetsSection";
import Footer from "@/app/components/shared/Footer";
import Navbar from "@/app/components/shared/Nav";

export default function HomePage() {
  return (
    <div >
      <Navbar />
      <div className="mx-12">
        <Hero />
        <PetsSection />
        <HowAdoptionWorks />
        <DetailsCard/>
      </div>
      <Footer />
    </div>
  );
}
