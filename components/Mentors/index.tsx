/* eslint-disable react/no-unescaped-entities */

import { Mentor } from "@/types/mentor";
import SectionTitle from "../Common/SectionTitle";
import SingleMentor from "./SingleMentor";

const mentorData: Mentor[] = [
  {
    id: 1,
    name: "Rakesh Sah",
    title: "Pathfinder of Dreams 🚀",
    designation: "Software Developer @ NSE India",
    motto: "Success starts with a single bold step.",
    image: "/images/testimonials/auth-01.png",
    graduateFrom: "B.Tech CSE, KIIT University",
    achievements: [
      "SEE 2017 Topper: Parsa district topper, 3rd overall (Government)",
      "+2 Science 2019: 2nd highest scorer in Nepal, St. Xavier's Maitighar",
      "SII Scholar at KIIT University",
      "Mentored 50+ students, helped 20+ student placements"
    ],
  },
  {
    id: 2,
    name: "Prakash Sah",
    title: "University Navigator 🧭",
    designation: "Founder @ UIdeck",
    motto: "Stay curious, stay winning.",
    image: "/images/testimonials/auth-02.png",
    graduateFrom: "B.Sc IT, Tribhuvan University",
    achievements: [
      "Launched UIdeck, a platform helping 10,000+ users",
      "Guided 30+ students to secure admissions abroad",
      "Awarded Best Startup Idea 2020 (TU Innovation)"
    ],
  },
  {
    id: 3,
    name: "Gaurav Raj",
    title: "Career Architect 🛠️",
    designation: "Founder @ Lineicons",
    motto: "Dreams don't have deadlines.",
    image: "/images/testimonials/auth-03.png",
    graduateFrom: "B.E Computer, Kathmandu University",
    achievements: [
      "Created Lineicons: Used by 15,000+ developers worldwide",
      "Trained 100+ students on UI/UX essentials",
      "Speaker at TechCon Kathmandu 2022"
    ],
  },
  {
    id: 4,
    name: "Rajaram Yadav",
    title: "Global Vision Mentor 🌍",
    designation: "MS Computer Science @ UMKC",
    motto: "Shoot for the moon, land among the stars.",
    image: "/images/testimonials/auth-03.png",
    graduateFrom: "B.Tech CSE, Kathmandu University",
    achievements: [
      "Secured Graduate Scholarship @ UMKC",
      "Helped 20+ students craft winning SOPs",
      "Organized Career Bootcamp 2024 with 300+ attendees"
    ],
  },
];


const Mentors = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="bg-white/70 dark:bg-bg-color-dark/70 backdrop-blur-md py-16 md:py-20 lg:py-28">
        <div className="container">

          <div
            className="bg-cover bg-center bg-no-repeat py-14 px-4 rounded-xl"
            style={{ backgroundImage: "url('/images/mentors/upward.jpg')" }}
          >
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-md mb-4">
              Dreaming Big is Free. Acting on it? <span className="text-primary">Priceless.</span>
            </h1>
            <p className="text-center text-lg md:text-xl text-white/90 drop-shadow-sm max-w-2xl mx-auto">
              Not just guides — we're your co-pilots, your hype team, your reality check, and your compass to success.
            </p>
          </div>

          <div className="w-full md:w-4/5 mx-auto">
  <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 rounded-2xl mt-14">
    {mentorData.map((mentor) => (
      <SingleMentor key={mentor.id} mentor={mentor} />
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
