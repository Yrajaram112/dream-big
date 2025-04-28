import Breadcrumb from "@/components/Common/Breadcrumb";
import Mentors from "@/components/Mentors";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentors | Dream Big",
  description: "This is Mentor Page",
  // other metadata
};

const MentorPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Mentors"
        description=""
      />

      <Mentors />
    </>
  );
};

export default MentorPage;
