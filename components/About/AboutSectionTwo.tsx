'use client'
import Image from "next/image";
import "@/styles/about.css";

import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.slide-in-left, .slide-in-right');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Optional: animate once
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

const AboutSectionTwo = () => {
  useScrollAnimation();
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container max-w-[90%] mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-white">
          What Makes Us Different?
        </h2>

        {/* 1. Personalized Mentorship (Image Left) */}
        <div className="mb-16 flex flex-wrap items-center slide-in-left">
          <div className="w-full px-4 md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/images/about/personalized.png"
              alt="Personalized Mentorship"
              width={500}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          <div className="w-full px-4 md:w-1/2">
            <h3 className="mb-4 text-2xl font-semibold text-blue-700 dark:text-white">
              Personalized Mentorship
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Every student is unique. Our team provides continuous guidance, career mentorship, and emotional support even after you land your admission.
            </p>
          </div>
        </div>

        {/* 2. Skill Development (Image Right) */}
        <div className="mb-16 flex flex-wrap items-center flex-col-reverse md:flex-row slide-in-right">
          <div className="w-full px-4 md:w-1/2">
            <h3 className="mb-4 text-2xl font-semibold text-blue-700 dark:text-white">
              Skill Development
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We are not just preparing students to go abroad — we are investing in future leaders who will bring innovation, skills, and experience back to Nepal, building a strong, digital-ready nation.
            </p>
          </div>
          <div className="w-full px-4 md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/images/about/skill.jpg"
              alt="Skill Development"
              width={500}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>

        {/* 3. Global & Local Impact (Image Left) */}
        <div className="mb-16 flex flex-wrap items-center slide-in-left">
          <div className="w-full px-4 md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/images/about/global.png"
              alt="Global and Local Impact"
              width={500}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          <div className="w-full px-4 md:w-1/2">
            <h3 className="mb-4 text-2xl font-semibold text-blue-700 dark:text-white">
              Global & Local Impact
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We are not just preparing students to go abroad — we are investing in future leaders who will bring innovation, skills, and experience back to Nepal, building a strong, digital-ready nation.
            </p>
          </div>
        </div>

        {/* 4. Community-Driven (Image Right) */}
        <div className="flex flex-wrap items-center flex-col-reverse md:flex-row slide-in-right">
          <div className="w-full px-4 md:w-1/2">
            <h3 className="mb-4 text-2xl font-semibold text-blue-700 dark:text-white">
              Community-Driven
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Dream Big fosters a community where alumni, mentors, and students connect, collaborate, and grow together.
            </p>
          </div>
          <div className="w-full px-4 md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/images/about/community.jpg"
              alt="Community Driven"
              width={500}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>

  );
};

export default AboutSectionTwo;