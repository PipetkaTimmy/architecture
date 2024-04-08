'use client'
import Header from "@/components/Header/Header";
import Services from '@/components/Services/Services';
import Licenses from "@/components/Licenses/Licenses";

export default function Home() {
  return (
    <main>
      <Header />
      <Services />
      <Licenses />
    </main>
  );
}
