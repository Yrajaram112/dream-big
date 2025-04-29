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
        <div className="container">
          <div
            className={`wow fadeInUp w-full mx-auto text-center`}
            data-wow-delay=".1s"
          >
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Dream Big Educational Consultancy
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
              Dream Big helped me get the wings to fly today.Never doubt yourself, and don't hesitate to ask for help.
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
