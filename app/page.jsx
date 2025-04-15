'use client'
import Header from "@/components/Header/Header";
import Services from '@/components/Services/Services';
import Calc from "@/components/Calc/Calc";
import FAQ1 from "@/components/FirstFAQ/FAQ";
import FAQ2 from "@/components/SecondFAQ/FAQ";
import Licenses from "@/components/Licenses/Licenses";
import Location from "@/components/Location/Location";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Calc />
      <Services />
      <FAQ1 />
      <FAQ2 />
      <Licenses />
      <Location />
      <Footer />
    </main>
  );
}
