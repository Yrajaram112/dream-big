import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "🎯 How to Choose the Right University for You",
    paragraph:
      "Confused about where to study? Discover the key factors—location, ranking, cost, and career goals—that will help you choose a university that truly fits your dreams.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Rajaram Yadav",
      image: "/images/blog/author-01.png",
      designation: "Education Consultant",
    },
    tags: ["University"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "🌍 Top 5 Things to Consider Before Studying Abroad",
    paragraph:
      "From visa requirements to cultural adjustment, here are the most important things every international student should know before taking off.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Rakesh Sah",
      image: "/images/blog/author-02.png",
      designation: "Student Success Coach",
    },
    tags: ["Abroad"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "💡 Staying Motivated During the Application Process",
    paragraph:
      "The journey to your dream university can feel overwhelming—but with the right mindset and support, it's absolutely achievable.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Prakash Sah",
      image: "/images/blog/author-03.png",
      designation: "International Student Advisor",
    },
    tags: ["Motivation"],
    publishDate: "2025",
  },
];
export default blogData;
