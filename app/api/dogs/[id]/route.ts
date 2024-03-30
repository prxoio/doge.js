// app/api/dogs/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { fetchDogData } from './function';

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
