import { client } from '@/lib/sanity';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {

    const universities = await client.fetch(`*[_type == "university"]{
    _id,
    name,
    state,
    city,
    qsRanking,
    nirfRanking,
    description,
    fees,
    subjects,
    "imageUrl": image.asset->url
  }`);

    return NextResponse.json({
      universities
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch University list' }, { status: 500 });
  }
}