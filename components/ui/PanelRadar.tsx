import * as React from "react"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card"

import Map from "@/map/map-element";

export function Radar() {
  return (
    <Card className="h-full bg-black p-2 relative">
      <CardHeader>
        <CardTitle>Radar</CardTitle>
        <CardDescription>Zoom In and Zoom Out for Accessbility</CardDescription>
      </CardHeader>
      <CardContent>
        <Map></Map>
      </CardContent>
      <CardFooter className="absolute bottom-0 right-0 p-4 pr-5">
        <CardDescription className="text-right text-muted-foreground"></CardDescription>
      </CardFooter>
    </Card>
  )
}

export default Radar;