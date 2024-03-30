// app/api/breeds/index.ts
import { NextRequest, NextResponse } from 'next/server';
import parseCsv from 'lib/parseCsv';

// Cache variable
let cachedData: string | null = null;

export async function GET() {
  if (!cachedData) {
    const dogs = await parseCsv('data/dogs.csv');
    const ids = dogs.map(dog => dog.id);
    cachedData = JSON.stringify(ids);
  }
  
  return new NextResponse(cachedData, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
