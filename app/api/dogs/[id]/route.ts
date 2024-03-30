// app/api/dogs/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import parseCsv from 'lib/parseCsv';
import type { Dog } from 'types/dog';

let cache: Dog[] | null = null;

async function fetchDogData(dogId: string): Promise<Dog | null> {
  if (cache === null) {
    console.log('Loading CSV data into cache...');
    cache = await parseCsv('./public/data/dogs.csv'); // Make sure the path is correct
  }

  const formattedDogId = dogId.replace(/-/g, ' ');
  return cache.find((dog) => dog.id === formattedDogId) || null;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const dogId = request.nextUrl.pathname.split('/').pop() ?? '';

  const dogData = await fetchDogData(dogId);

  if (dogData) {
    return new NextResponse(JSON.stringify(dogData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    return new NextResponse(JSON.stringify({ message: 'Dog not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
