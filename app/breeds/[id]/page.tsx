"use client"

// 'nodejs' (default) | 'edge'

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import { BreadcrumbDefault } from "@/components/default-breadcrumb"
// Adjust the import path as necessary
import { DogCard } from "@/components/dog-info"

// Import usePathname
import type { Dog } from "../../../types/dog"

export const runtime = "edge"

const DogPage: React.FC = () => {
  const [dog, setDog] = useState<Dog | null>(null)
  const pathname = usePathname() // Use usePathname to get the current path

  // Extract the dog's id from the pathname and replace spaces with dashes
  const id = pathname.split("/").pop()?.replace(/\s+/g, "-") // Assumes the last segment is the id

  useEffect(() => {
    const fetchDogData = async () => {
      if (!id) return

      console.log("fetching dog data for id:", id)

      try {
        const response = await fetch(`/api/dogs/${id}`)
        if (!response.ok) {
          throw new Error("Dog data fetch failed")
        }
        const data: Dog = await response.json()
        setDog(data)
      } catch (error) {
        console.error(error)
        setDog(null) // Optionally handle the error state more explicitly here
      }
    }

    fetchDogData()
  }, [id])

  if (!dog) {
    return <div>Loading...</div>
  }

  return (
    <section className="container grid items-center">
      <div className="flex pt-8" style={{ marginLeft: "34px" }}>
        <BreadcrumbDefault capitalizeLinks={true} homeElement={undefined} separator={undefined} />
      </div>
      <section className="container grid items-center gap-6 pb-8 pt-4 md:py-8">
        <DogCard item={dog} />
      </section>
    </section>
  )
}

export default DogPage
