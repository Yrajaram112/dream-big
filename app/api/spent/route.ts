import { client } from '@/lib/sanity';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, amount, reason, place, date } = body;

if (!name || !amount || !reason || !place || !date) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await client.create({
       _type: 'spend',
      name,
      amount: parseFloat(amount),
      reason,
      place,
      date,
    });

    return new Response(JSON.stringify({ message: 'Spent Data saved successfully.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Sanity error:', error);
    return new Response(JSON.stringify({ error: 'Failed to Save' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}