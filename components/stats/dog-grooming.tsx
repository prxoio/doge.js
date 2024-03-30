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
  frequency: string
}

export function DogGrooming({
  item,
  title,
  tooltip,
  rating,
  ratingMax,
  frequency,
}: DogStatProps) {
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
        <CardDescription>{frequency}</CardDescription>
        <CardDescription>
          <h3 className="text-sm text-white">Frequency Score:</h3>
        </CardDescription>
      </CardHeader>
      <CardContent style={{ display: "flex", alignItems: "center" }}>
        <h4 className="mr-2 text-lg font-bold">
          {Math.round((rating / ratingMax) * 100)}

          <span className="font-extralight">/100</span>
        </h4>
      </CardContent>
    </Card>
  )
}