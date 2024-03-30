"use client"

import * as React from "react"
import type { Dog } from "types/dog"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"

// Adjust the import path as necessary
interface DogStatProps {
  item: Dog
  title: string
  tooltip: string
  rating: number
  ratingMax: number
  note?: string
}

export function DogStat({
  item,
  title,
  tooltip,
  rating,
  ratingMax,
  note,
}: DogStatProps) {
  const [progress, setProgress] = React.useState(1)

  const numb = Math.round(rating * 100) / ratingMax

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(numb), 100)
    return () => clearTimeout(timer)
  }, [numb])

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>{title}</TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
        {note && <CardDescription>{note}</CardDescription>}
      </CardHeader>
      <CardContent style={{ display: "flex", alignItems: "center" }}>
        <h4 className="mr-2 text-lg font-bold">
          {Math.round((rating / ratingMax) * 100)}

          <span className="font-extralight">/100</span>
        </h4>
        <Progress value={progress} className="mx-2 my-0 w-full" />
      </CardContent>
    </Card>
  )
}
