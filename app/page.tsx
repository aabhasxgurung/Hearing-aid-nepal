import About from "@/components/About";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Brands from "@/components/Brands";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Brands />
      <About />
      <FeaturedProducts />
      <Testimonials />
      <CTA />
    </div>
  );
}
