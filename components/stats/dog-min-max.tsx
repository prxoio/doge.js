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
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"

// Adjust the import path as necessary
interface DogMinMaxProps {
  item: Dog
  title: string
  tooltip: string
  min: number
  max: number
  unit: string
}

export function DogMinMax({
  item,
  title,
  tooltip,
  min,
  max,
  unit,
}: DogMinMaxProps) {
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
      </CardHeader>
      <CardContent style={{ display: "flex", alignItems: "center" }}>
        <div>
          <div className="flex items-center">
            <h6 className="text-sm font-semibold text-gray-400">
              Lowest: {Math.round(min)} {unit}
            </h6>
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center">
            <h6 className="text-sm font-semibold text-gray-400">
              Highest: {Math.round(max)} {unit}
            </h6>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
