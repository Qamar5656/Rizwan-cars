import { HeroSlider } from "@/components/HeroSlider";
import { BookingSearch } from "@/components/BookingSearch";
import { FleetSection } from "@/components/FleetSection";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { CallToAction } from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <BookingSearch />
      <FleetSection limit={6} />
      <Reviews />
      <FAQ />
      <CallToAction />
    </>
  );
}
