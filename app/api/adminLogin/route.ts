import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { password } = body;

    const result = await client.fetch(`*[_type == "login"][0]{password}`);

    if (result?.password === password) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 });
    }
  } catch (err) {
    console.error('Login API error:', err);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
