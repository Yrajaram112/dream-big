"use client";

import { useEffect, useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import "@/styles/videoSection.css";

const Video = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the section is in view (0 to 1)
      const progress = Math.min(
        Math.max(1 - Math.abs(rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2), 0),
        1
      );

      const scale = 1 + progress * 0.5; // Adjust 0.5 to control zoom intensity
      containerRef.current.style.transform = `scale(${scale})`;

      // Auto play/pause based on visibility
      if (progress > 0.2) {
        videoRef.current?.play();
      } else {
        videoRef.current?.pause();
      }
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    handleScroll(); // Initial run

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              ref={containerRef}
              className="video-container mx-auto max-w-[770px] overflow-hidden"
            >
              <div className="relative w-full h-auto">
                <video
                  ref={videoRef}
                  src="/videos/motivation.mp4"
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
