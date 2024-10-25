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
export function ProfileCard() {
    const profiledata = comms[2];
  return (
    <Card className="h-full bg-black p-2 relative">
      <CardHeader className="pb-0">
        <CardTitle className="w-auto flex gap-2 text-emerald-400 border">{profiledata.vessel_name} <div className="w-auto aspect-[1/1] scale-[80%] bg-emerald-400 rounded-full"></div></CardTitle>
        <CardDescription>{profiledata.additional_info}</CardDescription>
      </CardHeader>
      <CardContent className="pt-2 font-extrabold text-gray-400 text-3xl flex items-center gap-1">
        {profiledata.speed} <span className="text-xl text-center">knots</span>
      </CardContent>
      <CardFooter className="absolute bottom-0 right-0 p-4 pr-5">
        <CardDescription className="text-right text-muted-foreground">{profiledata.time}, {profiledata.date}</CardDescription>
      </CardFooter>
    </Card>
  )
}

export default ProfileCard;