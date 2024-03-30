// app/api/items/[id].ts
import { NextRequest, NextResponse } from 'next/server';
import items from './data.json';


// Example of a GET request handler
export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  console.log("Searching for ID:", id);


  // Search for the item with the matching 'id'
  const item = items.find((item: { id: string }) => item.id === id);

  // Return the found item or a 404 error if not found
  if (item) {
    return new NextResponse(JSON.stringify(item), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    return new NextResponse('Item not found', { status: 404 });
  }
}