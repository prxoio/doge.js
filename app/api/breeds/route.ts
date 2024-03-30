// app/api/breeds/index.ts
import { NextRequest, NextResponse } from 'next/server';
import dogs from '../data.json';

// Cache variable
let cachedData: string | null = null;

export async function GET() {
  if (!cachedData) {
    // Assuming `dogs` is an array of objects from the JSON file
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
