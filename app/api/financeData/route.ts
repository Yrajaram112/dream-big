import { client } from '@/lib/sanity';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {

    const deposits = await client.fetch(`*[_type == "deposit"]{name, amount, date, remarks}`);
    const spending = await client.fetch(`*[_type == "spend"]{name, amount, date, reason, place}`);

    const totalDeposit = deposits.reduce((sum, curr) => sum + curr.amount, 0);
    const totalSpending = spending.reduce((sum, curr) => sum + curr.amount, 0);
    const netRemaining = totalDeposit - totalSpending;

    return NextResponse.json({
      deposits,
      spending,
      totalDeposit,
      totalSpending,
      netRemaining
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch finance data' }, { status: 500 });
  }
}