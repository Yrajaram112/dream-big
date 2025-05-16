'use client'
import { useState } from "react";
import scholarshipData from "./scholarshipData";
import SingleScholarship from "./SingleScholarship";

const Scholarships = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(scholarshipData.length / itemsPerPage);

  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedData = scholarshipData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i} className="mx-1">
          <button
          type="button"
            onClick={() => handleClick(i)}
            className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
              currentPage === i
                ? "bg-primary text-white"
                : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white"
            }`}
          >
            {i}
          </button>
        </li>
      );
    }

    return pages;
  };

  return (
    <>
<div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {paginatedData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleScholarship scholarship={blog} />
              </div>
            ))}
          </div>

          <div className="wow fadeInUp -mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <button
                  type="button"
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Prev
                  </button>
                </li>

                {renderPageNumbers()}

                <li className="mx-1">
                  <button
                  type="button"
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
};

export default Scholarships;