import { client } from '@/lib/sanity';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and Email are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await client.create({
      _type: 'subscribe',
      name,
      email,
    });

    return new Response(JSON.stringify({ message: 'Subscribed successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Sanity error:', error);
    return new Response(JSON.stringify({ error: 'Failed to subscribe' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
