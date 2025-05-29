'use client'
import Banner from "@/Components/Banner";
import DubaiInvestmentEvent from "@/Components/DubaiInvestmentEvent";
import DubaiMap from "@/Components/DubaiMap";
import EmaarLaunches from "@/Components/EmaarLaunches";
import EnquireNowButton from "@/Components/EnquireNowButton";
import WhyEmaarSection from "@/Components/WhyEmaarSection";
import WhyInvestDubai from "@/Components/WhyInvestDubai";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { MdPageview } from "react-icons/md";
export default function Home({countryFromURL}) {
  const pathname = usePathname();
  useEffect(() => {
    MdPageview(pathname); 
  }, [pathname]);

  return (
  <>
  <Banner countryFromURL={countryFromURL} />
  <DubaiInvestmentEvent/>
  <EmaarLaunches/>
  <WhyInvestDubai/>
  <WhyEmaarSection/>
  <DubaiMap/>
  <EnquireNowButton/>
  </>
  );
}
