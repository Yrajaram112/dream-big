import Image from "next/image";
import React from "react";

type University = {
  name: string;
  city: string;
  state: string;
  qsRanking: number | null;
  nirfRanking: number | null;
  description: string;
  fees: number;
  subjects: string[];
  imageUrl: string;
};

const SingleUniversity = ({ university }: { university: University }) => {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden bg-white transition hover:shadow-xl">
      <Image
        src={university.imageUrl}
        alt={university.name}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">{university.name}</h2>
        <p className="text-sm text-gray-500">
          {university.city}, {university.state}
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
          {university.qsRanking && (
            <div className="bg-gray-100 px-2 py-1 rounded-full">
              🌍 QS Rank: {university.qsRanking}
            </div>
          )}
          <div className="bg-gray-100 px-2 py-1 rounded-full">
            🇮🇳 NIRF Rank: {university.nirfRanking}
          </div>
          <div className="bg-gray-100 px-2 py-1 rounded-full">
            💰 Fee: ₹{university.fees} LPA
          </div>
        </div>

        <p className="text-gray-700 text-sm mt-2">{university.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {university.subjects.map((subject, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleUniversity;
