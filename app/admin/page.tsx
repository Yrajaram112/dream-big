'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const AdminDashboard = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem('adminAuth');

    if (!isAuth) {
      console.log(isAuth);
      router.push('/admin/login');
      return;
    }

    async function fetchFinanceSummary() {
      try {
        const res = await fetch('/api/financeData');
        const result = await res.json();
        if (res.ok) {
          setData(result);
        } else {
          throw new Error(result.error || 'Failed to load data');
        }
      } catch (err) {
        setError('Failed to fetch financial summary');
      } finally {
        setLoading(false);
      }
    }

    fetchFinanceSummary();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;


  const groupedDeposits = Object.values(
  data.deposits.reduce((acc, curr) => {
    if (!acc[curr.name]) {
      acc[curr.name] = { name: curr.name, amount: 0 };
    }
    acc[curr.name].amount += curr.amount;
    return acc;
  }, {} as Record<string, { name: string; amount: number }>)
);

  return (
    <section id="deposit" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
              <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
                Finance Summary
              </h3>

              <div className="flex gap-4 mb-6">
                <a href="/admin/spent" className="w-full cursor-pointer rounded-sm bg-primary px-9 py-4 text-base font-medium text-white text-center">
                  Add Spend
                </a>
                <a href="/admin/deposit" className="w-full cursor-pointer rounded-sm bg-primary px-9 py-4 text-base font-medium text-white text-center">
                  Add Deposit
                </a>
              </div>
              <h3 className="text-lg font-semibold">Deposit Chart</h3>
              {groupedDeposits.length > 0 ? (
                <PieChart width={400} height={300}>
                  <Pie
                    data={groupedDeposits}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {groupedDeposits.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              ) : (
                <p>No deposit data available.</p>
              )}

              <h3 className="text-lg font-semibold">Deposits</h3>
              <table className="w-full mb-4 border">
                <thead>
                  <tr>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Amount(NRs)</th>
                    <th className="border p-2">Date</th>
                    <th className="border p-2">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {data.deposits.map((d: any, i: number) => (
                    <tr key={i}>
                      <td className="border p-2">{d.name}</td>
                      <td className="border p-2">{d.amount}</td>
                      <td className="border p-2">{new Date(d.date).toLocaleDateString()}</td>
                      <td className="border p-2">{d.remarks}</td>
                    </tr>
                  ))}
                  <tr className="font-bold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400">
                    <td className="border p-2" colSpan={3}>Total Deposits</td>
                    <td className="border p-2">{data.totalDeposit} NRs</td>
                  </tr>

                </tbody>
              </table>


              <h3 className="text-lg font-semibold">Spending</h3>
              <table className="w-full mb-4 border">
                <thead>
                  <tr>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Amount(NRs)</th>
                    <th className="border p-2">Date</th>
                    <th className="border p-2">Reason</th>
                    <th className="border p-2">Place</th>
                  </tr>
                </thead>
                <tbody>
                  {data.spending.map((s: any, i: number) => (
                    <tr key={i}>
                      <td className="border p-2">{s.name}</td>
                      <td className="border p-2">{s.amount}</td>
                      <td className="border p-2">{new Date(s.date).toLocaleDateString()}</td>
                      <td className="border p-2">{s.reason}</td>
                      <td className="border p-2">{s.place}</td>
                    </tr>
                  ))}
                  <tr className="font-bold bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400">
                    <td className="border p-2" colSpan={4}>Total Spending</td>
                    <td className="border p-2">NRs {data.totalSpending}</td>
                  </tr>

                </tbody>
              </table>

              <div
                className={`mt-4 p-4 border rounded ${data.netRemaining > 0
                    ? 'bg-green-100 border-green-400 text-green-800 dark:bg-green-900 dark:border-green-600 dark:text-green-300'
                    : data.netRemaining < 0
                      ? 'bg-red-100 border-red-400 text-red-800 dark:bg-red-900 dark:border-red-600 dark:text-red-300'
                      : 'bg-gray-100 border-gray-300 text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300'
                  }`}
              >
                <p className="text-md font-medium">Net Remaining Balance:</p>
                <p className="text-xl font-bold">NRs {data.netRemaining}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;