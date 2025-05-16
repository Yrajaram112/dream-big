"use client";

import { useEffect, useRef, useState } from "react";
import { FaUserGraduate, FaUniversity, FaChalkboardTeacher } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaUserGraduate size={40} className="text-blue-500" />,
    label: "Student Placed",
    target: 50,
    suffix: "+",
  },
  {
    id: 2,
    icon: <FaUniversity size={40} className="text-green-500" />,
    label: "Student Admitted",
    target: 100,
    suffix: "+",
  },
  {
    id: 3,
    icon: <FaChalkboardTeacher size={40} className="text-purple-500" />,
    label: "Students Guided",
    target: 500,
    suffix: "+",
  },
];

const CounterItem = ({ icon, label, target, suffix }: any) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const animateCount = () => {
      let start = 0;
      const duration = 2000; // total animation time in ms
      const increment = target / (duration / 16); // assuming ~60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
    };

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount();
          observer.current?.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => observer.current?.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      {icon}
      <span className="text-3xl font-bold">
        {count}
        {suffix}
      </span>
      <span className="text-lg">{label}</span>
    </div>
  );
};

const Counter = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">Achievement</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-48">
          {stats.map((stat) => (
            <CounterItem key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
