import TestimonialsSection, {
  HomeAboutUs,
  HeroSection,
  Metrics,
  HomeServices,
  HomeBlogs,
  WhatWeProvide,
  PublicationSupport,
} from "@/components/home";
import Footer from "@/components/utils/footer";
import { Header } from "@/components/utils/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Metrics />
        <HomeAboutUs />
        <HomeServices />
        <PublicationSupport />
        <HomeBlogs />
        <WhatWeProvide />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
