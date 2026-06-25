"use client" 


import Hero from "../components/Hero/Hero";
import CryptoPricesTable from "@/components/CryptoPricesTable/CryptoPricesTable";
import JoinUs from "../components/JoinUs/JoinUs";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import MobileApp from "../components/MobileApp/MobileApp";




export default function Home() {
  return (
      <>
        <Hero/>
        
        {/* Table Section */}
        <CryptoPricesTable/>
  

        {/* WHY */}
        <WhyChooseUs />

        <MobileApp/>

        {/* JOIN_US Component */}
        <JoinUs />
      </>
  );
}
