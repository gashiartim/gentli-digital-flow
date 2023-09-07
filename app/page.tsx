import Brands from "@/components/Brands/Brands";
import Categories from "@/components/Categories/Categories";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import OffersCarousel from "@/components/OffersCarousel/OffersCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <OffersCarousel />
      <Categories />
      <Brands />
    </main>
  );
}
