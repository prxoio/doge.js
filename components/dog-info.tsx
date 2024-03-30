import * as React from "react"
import { FaDog } from "react-icons/fa"
import type { Dog } from "types/dog"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

import { DogGrooming } from "./stats/dog-grooming"
import { DogMinMax } from "./stats/dog-min-max"
import { DogStat } from "./stats/dog-rating"

// Adjust the import path as necessary

export function DogCard({ item }: { item: Dog }) {
  const temperaments: string[] = item.temperament.split(", ")

  function getPopularityNote(popularity: number, maxScore: number): string {
    const proportion = (popularity / maxScore) * 100 // Calculate the proportion of maxScore

    if (proportion <= 20) {
      return "Very low"
    } else if (proportion > 20 && proportion <= 35) {
      return "Low"
    } else if (proportion > 35 && proportion <= 60) {
      return "Medium"
    } else if (proportion > 60 && proportion <= 79) {
      return "High"
    } else {
      return "Very high"
    }
  }

  return (
    <Card>
      <CardHeader
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: "1rem",
        }}
      >
        <div>
          <CardTitle className="card-title flex">
            <FaDog className="mr-4" />
            {item.id}
          </CardTitle>
        </div>
        {/* Render the badges in a horizontal row */}
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "0.5rem" }}>
          <Badge style={{ marginRight: "8px", marginBottom: "8px" }}>
            {item.demeanor_category}
          </Badge>

          {temperaments.map((temperament, index) => (
            <Badge
              variant="secondary"
              key={index}
              style={{ marginRight: "8px", marginBottom: "8px" }}
            >
              {temperament}
            </Badge>
          ))}
        </div>
        <CardDescription className="py-5">{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <DogStat
            item={item}
            title={"Popularity"}
            tooltip={"Statistic based on annual dog registrations in USA"}
            rating={item.popularity}
            ratingMax={195}
            note={getPopularityNote(item.popularity, 195) + " popularity"}
          />
          <DogStat
            item={item}
            title={"Energy Level"}
            tooltip={"Statistic based on survey of dog owners"}
            rating={item.energy_level_value * 100}
            ratingMax={100}
            note={"Category - " + item.energy_level_category}
          />
          <DogStat
            item={item}
            title={"Trainability"}
            tooltip={"Statistic based on survey of dog owners"}
            rating={item.trainability_value * 100}
            ratingMax={100}
            note={"Category - " + item.trainability_category}
          />
          <DogGrooming
            item={item}
            title={"Grooming"}
            tooltip={"A Higher Number Indicates That More Grooming is Required"}
            rating={item.grooming_frequency_value}
            ratingMax={1}
            frequency={item.grooming_frequency_category}
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4">
          <DogGrooming
            item={item}
            title={"Shedding"}
            tooltip={"A Higher Number Indicates That More Grooming is Required"}
            rating={item.shedding_value}
            ratingMax={1}
            frequency={item.shedding_category + " Shedding"}
          />
          <DogMinMax
            item={item}
            title={"Height"}
            tooltip={""}
            min={item.min_height}
            max={item.max_height}
            unit={"cm"}
          />
          <DogMinMax
            item={item}
            title={"Weight"}
            tooltip={""}
            min={item.min_weight}
            max={item.max_weight}
            unit={"kg"}
          />
          <DogMinMax
            item={item}
            title={"Lifespan"}
            tooltip={""}
            min={item.min_expectancy}
            max={item.max_expectancy}
            unit={"Years"}
          />
        </div>
      </CardContent>
    </Card>
  )
}
