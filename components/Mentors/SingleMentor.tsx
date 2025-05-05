/* eslint-disable react/no-unescaped-entities */

import { Mentor } from "@/types/mentor";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleMentor = ({ mentor }: { mentor: Mentor }) => {
  const { name, designation, title, motto, graduateFrom, achievements, image } = mentor;

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp h-[500px] rounded-3xl shadow-md dark:shadow-gray-dark bg-white dark:bg-dark p-6 lg:px-5 xl:px-8 duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700"
        data-wow-delay=".1s"
      >
        {/* Image at Top */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full ring-2 ring-primary mb-4 shadow-lg">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <h3 className="text-2xl font-bold text-dark dark:text-white">{name}</h3>
          <p className="text-sm text-body-color">{designation}</p>
          <p className="text-xs mt-1 text-gray-500 italic">{graduateFrom}</p>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-300 dark:border-gray-700 mb-4"></div>

        {/* Content Section */}
        <div className="text-center">
          <p className="text-base font-semibold text-primary mb-2 italic">"{motto}"</p>
          <p className="text-sm text-body-color mb-4 font-medium">Speciality: <span className="text-dark dark:text-white">{title}</span></p>

          {/* Achievements */}
          <ul className="text-sm text-left list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="pl-2 relative before:absolute before:left-0 before:top-1.5 before:h-1.5 before:w-1.5 before:bg-primary before:rounded-full">
                {achievement}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleMentor;
