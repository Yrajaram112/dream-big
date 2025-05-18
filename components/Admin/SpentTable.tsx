'use client';
import { useEffect, useState } from 'react';

const SpentTable = () => {
  const [spending, setSpending] = useState([]);
  const [netSpending, setNetSpending] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSpending() {
      try {
        const res = await fetch('/api/spentData');
        const result = await res.json();
        if (res.ok) {
          setSpending(result.data || []);
          const total = result.data.reduce((sum, curr) => sum + curr.amount, 0);
          setNetSpending(total);
        } else {
          throw new Error(result.error || 'Failed to fetch spending data');
        }
      } catch (err) {
        console.error('Error fetching spending:', err);
        setError('Failed to load spending data');
      } finally {
        setLoading(false);
      }
    }

    fetchSpending();
  }, []);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="overflow-x-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Spending Details</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Spent By</th>
            <th className="border p-2">Amount (NRs)</th>
            <th className="border p-2">Reason</th>
            <th className="border p-2">Place</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {spending.map((entry, index) => (
            <tr key={index}>
              <td className="border p-2">{entry.name}</td>
              <td className="border p-2">{entry.amount}</td>
              <td className="border p-2">{entry.reason}</td>
              <td className="border p-2">{entry.place}</td>
              <td className="border p-2">{new Date(entry.date).toLocaleDateString()}</td>
            </tr>
          ))}
          <tr className="bg-red-100 font-semibold">
            <td colSpan={4} className="border p-2 text-right">Total Spending Till Date</td>
            <td className="border p-2">{netSpending} NRs</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SpentTable;