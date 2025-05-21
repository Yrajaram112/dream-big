import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dream Big Educational Consultancy | Study Abroad Services in Nepal",
  description: "Discover personalized study abroad counseling, scholarship assistance, and career guidance with Dream Big Educational Consultancy in Nepal.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <Counter/>
      <AboutSectionTwo />
      <Testimonials />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}
