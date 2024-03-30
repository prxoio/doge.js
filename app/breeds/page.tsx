"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
// Import Link from next/link
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const BreedsPage = () => {
  const [ids, setIds] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("") // State to hold the search query
  const router = useRouter()

  useEffect(() => {
    // Fetch the list of dog IDs from the API
    const fetchIds = async () => {
      const response = await fetch("/api/breeds")
      const data = await response.json()
      setIds(data)
    }

    fetchIds()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Search bar container */}
      <div className="p-4">
        <div className="mx-auto mt-10 w-full max-w-md">
          <Input
            type="text"
            placeholder="Search dog breeds..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      {/* List container */}
      <div className="flex-1 overflow-auto p-4">
        <div className="mx-auto w-full max-w-md px-3">
          <ul>
            {ids.filter(id => id.toLowerCase().includes(searchQuery.toLowerCase())).map(id => (
              <li key={id} className="text-sm">
                <Link href={`/breeds/${id.replace(/\s+/g, "-")}`}>
                  <a>{id}</a> {/* Make the ID clickable */}
                </Link>
                <Separator className="my-2" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default BreedsPage
