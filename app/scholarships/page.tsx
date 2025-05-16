import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Scholarships from "@/components/Scholarships";

export const metadata: Metadata = {
  title: "Scholarship Page ",
  description: "This is Scholarship Page"
};

const Scholarship = () => {
 
  return (
    <>
      <Breadcrumb
        pageName="Scholarship"
        description="Here is a list of scholarships that you can explore. We will assist you to the best of our ability to help you accomplish them."
      />

      <section className="pb-[120px] pt-[120px]">
        <Scholarships/>
      </section>
    </>
  );
};

export default Scholarship;