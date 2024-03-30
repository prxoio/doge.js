// app/api/items/[id].ts
import { NextRequest, NextResponse } from 'next/server';
import items from '../data.json';

// Example of a GET request handler
export async function GET(req: NextRequest) {
  let id = req.nextUrl.searchParams.get('id');
  
  console.log("Original ID:", id);

  // Replace any '-' in the id string with a space
  if (id) {
    id = id.replace(/-/g, ' ');
  }

  console.log("Modified ID:", id);

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
