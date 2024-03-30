// app/api/dogs/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import parseCsv from 'lib/parseCsv';
import type { Dog } from 'types/dog';

let cache: Dog[] | null = null; // Initialize cache

async function fetchDogData(dogId: string): Promise<Dog | null> {
  // Load data into cache if it's not already loaded
  if (cache === null) {
    console.log('Loading CSV data into cache...');
    cache = await parseCsv('data/dogs.csv'); // Correct the path as needed
  }
  
  // Replace dashes with spaces in the dogId
  const formattedDogId = dogId.replace(/-/g, ' ');

  // Find the dog with the formatted ID
  return cache.find(dog => dog.id === formattedDogId) || null;
}

export async function GET(request: NextRequest) {
  const dogId = request.nextUrl.pathname.split('/').pop();
  const dogData = await fetchDogData(dogId!);

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
