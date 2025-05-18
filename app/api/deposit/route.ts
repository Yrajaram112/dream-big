import { client } from '@/lib/sanity';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, amount, remarks, date } = body;

if (!name || !amount || !remarks || !date) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await client.create({
       _type: 'deposit',
      name,
      amount: parseFloat(amount),
      remarks,
      date,
    });

    return new Response(JSON.stringify({ message: 'Deposit Data saved successfully.' }), {
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