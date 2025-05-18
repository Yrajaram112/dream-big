'use client';
import React, { useEffect, useState } from 'react';

const DepositTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('/api/depositData');
                const result = await res.json();
                if (res.ok) {
                    setData(result.data);
                } else {
                    throw new Error(result.error || 'Fetch failed');
                }
            } catch (err) {
                console.error('Client fetch error:', err);
                setError('Fetch failed');
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    // Calculate totals per person
    const totals = data.reduce((acc, curr) => {
        acc[curr.name] = (acc[curr.name] || 0) + curr.amount;
        return acc;
    }, {});

    // Calculate net total
    const netTotal = data.reduce((sum, curr) => sum + curr.amount, 0);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Deposit Details</h2>
            <table className="w-full border-collapse border border-gray-300 mb-6">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border p-2">Deposited By</th>
                        <th className="border p-2">Amount (NRs)</th>
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((deposit, index) => (
                        <tr key={index} className="text-center">
                            <td className="border p-2">{deposit.name}</td>
                            <td className="border p-2">{deposit.amount}</td>
                            <td className="border p-2">
                                {deposit.date ? new Date(deposit.date).toLocaleDateString() : 'N/A'}
                            </td>
                            <td className="border p-2">{deposit.remarks || '—'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 className="text-lg font-semibold mb-2">Summary</h3>
            <table className="w-full border-collapse border border-gray-300 mb-6">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border p-2">Deposited By</th>
                        <th className="border p-2">Total Amount (NRs)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(totals).map(([name, amount]) => (
                        <tr key={name}>
                            <td className="border p-2">{name}</td>
                            <td className="border p-2 font-medium">{amount}</td>
                        </tr>
                    ))}
                    <tr className="bg-yellow-100 font-bold">
                        <td className="border p-2 text-right">Total Deposit Amount Till Date</td>
                        <td className="border p-2">{netTotal} </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default DepositTable;
