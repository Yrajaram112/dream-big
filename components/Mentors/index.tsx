/* eslint-disable react/no-unescaped-entities */

import { Mentor } from "@/types/mentor";
import SectionTitle from "../Common/SectionTitle";
import SingleMentor from "./SingleMentor";

const mentorData: Mentor[] = [
  {
    id: 1,
    name: "Rakesh Sah",
    title: "Pathfinder of Dreams 🚀",
    designation: "M.Tech CSE, IIT Madras | SDE@NSE",
    motto: "Success starts with a single bold step.",
    image: "/images/mentors/rakesh.jpg",
    graduateFrom: "B.Tech CSE, KIIT University",
    achievements: [
      "SEE 2017: Parsa district topper (Govt. category), 3rd overall",
      "+2 Science (2019): 2nd highest scorer in Nepal, St. Xavier's Maitighar",
      "B.Tech CSE, KIIT (2019-2023): SII Scholar",
      "Mentored 100+ students for scholarships & helped 50+ students secure placements",
      "Worked in different domains like opencv, data analysis, machine learning, gen AI, full stack development, devops & cyber security",
      "Currently working at National Stock Exchange as application developer"
    ],
  },
  {
    id: 2,
    name: "Rajaram Yadav",
    title: "Global Vision Mentor 🌍",
    designation: "MS in CS @ UMKC, USA",
    motto: "Stay curious, stay winning.",
    image: "/images/mentors/rajaram.jpg",
    graduateFrom: "B.Sc IT, Tribhuvan University",
    achievements: [
      "SEE 2017: Morang district topper (Govt. category), 2rd overall",
      "+2 Science (2019): 2nd highest scorer in Nepal, St. Xavier's Maitighar",
      "B.Tech CSE, VIT (2019-2023): Compex Scholar",
      "Mentored 50+ students for scholarships & helped 30+ students secure placements.",
      "2019: IOE Entrance Ranking (Top 50)",
      "Expertise in domains Like machine Learning, full stack development, devops & cyber security",
      "Worked at YCO Solutions, Nepal as SDE to deliver projects Like TMS, Alumni Portals, Stock analysis & visualization",
    ],
  },
  {
    id: 3,
    name: "Ritesh Chandra Jha",
    title: "Career Architect 🛠️",
    designation: "M.Tech Civil-BTCM, IIT Madras",
    motto: "Dreams don't have deadlines.",
    image: "/images/mentors/ritesh.jpg",
    graduateFrom: "B.E Computer, Kathmandu University",
    achievements: [
      "Awarded HSEB Scholarship for +2 Level in Nepal",
      "B.Tech Civil, SRM, Chennai (2018-2022): Compex Scholar",
      "Guided 50+ students to secure different scholarships across different universities of India under SII, Compex & ICCR scholarships.",
      "Worked in different domain Like material performance, green building ratings, Project management, Life cycle analysis of building",
      "Currently working at TATA Realty as Assistant Manager"
    ],
  },
  {
    id: 4,
    name: "Aadarsh Ojha",
    title: "University Navigator 🧭",
    designation: "M.Sc. Physics, IIT Madras",
    motto: "Shoot for the moon, land among the stars.",
    image: "/images/mentors/adarsh.jpg",
    graduateFrom: "B.Tech CSE, Kathmandu University",
    achievements: [
      "Represented Nepal at the International Olympiad in Astronomy and Astrophysics (IOAA), 2019",
      "3rd place in 6th National Astronomy Olympiad, 2019",
      "Top 100 in National Mathematical Olympiad, 2019",
      "Selected delegate for Harvard College Project for Asian and International Relations (H PAIR), 2022",
      " Co-founded Physics Initiatives in Nepal - reached 430+ schools, 23 national events, and 250+ members",
      "Worked on advanced research projects in cosmology (SKA EoR Inference), Density Functional Theory, and Quantum Anyons. ",
      "Mentoring 100+ students for national/international Olympiads since 2017"
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
