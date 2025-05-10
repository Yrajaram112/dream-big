import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Universities | Dream Big",
  description: "Partner Universities Coming Soon - Dream Big Education",
};

const UniversityPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Partner Universities"
        description="Explore our growing list of partner universities. Stay tuned — more details are on the way!"
      />

      <section className="relative overflow-hidden bg-white dark:bg-dark">
        {/* Full-width responsive image */}
        <div className="w-full relative aspect-[16/6]">
          <Image
            src="/images/about/coming.jpg"
            alt="Coming Soon"
            fill
            className="object-cover"
          />
        </div>

        {/* Text content below image + wave */}
        <div className="relative z-20 py-16 text-center py-40">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Partner Universities Coming Soon
          </h2>
          <p className="text-base text-body-color dark:text-gray-400 max-w-2xl mx-auto">
            We're working hard to bring you an exciting list of partner universities from around the world. Check back soon!
          </p>
        </div>
        {/* Waves in front */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="#6A01E6"
              fillOpacity="1"
              d="M0,256L48,245.3C96,235,192,213,288,197.3C384,181,480,171,576,181.3C672,192,768,224,864,229.3C960,235,1056,213,1152,213.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

      </section>
    </>
  );
};

export default UniversityPage;
