'use client'

import { useState, useMemo, useEffect } from 'react';
import SingleUniversity from './SingleUniversity';

const Universities = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    state: '',
    city: '',
    subject: '',
    maxFee: ''
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
    setCurrentPage(1);
  };

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    async function fetchUniversities() {
      try {
        const res = await fetch('/api/universityList');
        const result = await res.json();
        if (res.ok) {
          setData(result);
        } else {
          throw new Error(result.error || 'Failed to load data');
        }
      } catch (err) {
        setError('Failed to fetch University list');
      } finally {
        setLoading(false);
      }
    }

    fetchUniversities();
  }, []);

  const filteredData = useMemo(() => {
  if (!data) return [];
  return data.universities.filter((uni) => {
    const matchesState = filters.state ? uni.state === filters.state : true;
    const matchesCity = filters.city ? uni.city === filters.city : true;
    const matchesSubject = filters.subject ? uni.subjects.includes(filters.subject) : true;
    const matchesFee = filters.maxFee ? uni.fees <= parseFloat(filters.maxFee) : true;
    return matchesState && matchesCity && matchesSubject && matchesFee;
  });
}, [filters, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <li key={page} className="mx-1">
        <button
          type="button"
          onClick={() => setCurrentPage(page)}
          className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${currentPage === page
              ? 'bg-primary text-white'
              : 'bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:bg-opacity-100 hover:text-white'
            }`}
        >
          {page}
        </button>
      </li>
    ));
  };

  return (
    <div className="container px-4 py-6">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <select name="state" onChange={handleFilterChange} className="w-full rounded border p-2">
          <option value="">All States</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Punjab">Punjab</option>
          <option value="Haryana">Haryana</option>
        </select>

        <select name="city" onChange={handleFilterChange} className="w-full rounded border p-2">
          <option value="">All Cities</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Vellore">Vellore</option>
          <option value="Patiala">Patiala</option>
          <option value="Phagwara">Phagwara</option>
          <option value="Ambala">Ambala</option>
        </select>

        <select name="subject" onChange={handleFilterChange} className="w-full rounded border p-2">
          <option value="">All Subjects</option>
          <option value="Engineering">Engineering</option>
          <option value="Pharmacy">Pharmacy</option>
          <option value="BSc Nursing">BSc Nursing</option>
          <option value="Business">Business</option>
        </select>

        <input
          type="number"
          name="maxFee"
          placeholder="Max Fee (LPA)"
          onChange={handleFilterChange}
          className="w-full rounded border p-2"
        />
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedData.map((uni) => (
            <SingleUniversity key={uni.id} university={uni} />
          ))}
        </div>
      </div>

      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <ul className="flex items-center justify-center pt-8">
            <li className="mx-1">
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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
  );
};

export default Universities;
