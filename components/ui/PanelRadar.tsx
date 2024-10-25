import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import comms from "@/constants/data";
export function Radar() {
    const profiledata = comms[2];
  return (
    <Card className="h-full bg-black p-2 relative">
      <CardHeader>
        <CardTitle>{profiledata.vessel_name}</CardTitle>
        <CardDescription>{profiledata.additional_info}</CardDescription>
      </CardHeader>
      <CardFooter className="absolute bottom-0 right-0 p-4 pr-5">
        <CardDescription className="text-right text-muted-foreground">{profiledata.time}, {profiledata.date}</CardDescription>
      </CardFooter>
    </Card>
  )
}

export default Radar;