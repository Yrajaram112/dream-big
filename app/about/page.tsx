import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page for Dreambig",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/about/peakpx.jpg')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative z-10 container mx-auto py-20 px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-white sm:text-4xl md:text-[45px]">
              Dream Big Educational Consultancy
            </h2>
            <p className="text-base !leading-relaxed text-white md:text-lg max-w-2xl mx-auto">
              Dream Big helped me get the wings to fly today. Never doubt yourself, and don't hesitate to ask for help.
            </p>
          </div>
        </div>

        <AboutSectionOne />
        <AboutSectionTwo />
      </section>
    </>
  );
};

export default AboutPage;
