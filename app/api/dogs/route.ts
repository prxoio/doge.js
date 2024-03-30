// app/api/items/[id].ts
import { NextRequest, NextResponse } from "next/server"

import items from "../data.json"

export async function GET(req: NextRequest) {
  let id = req.nextUrl.searchParams.get("id")

  console.log("Original ID:", id)

  if (id) {
    id = id.replace(/-/g, " ")
  }

  console.log("Modified ID:", id)

  const item = items.find((item: { id: string }) => item.id === id)

  if (item) {
    return new NextResponse(JSON.stringify(item), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } else {
    return new NextResponse("Item not found", { status: 404 })
  }
}
