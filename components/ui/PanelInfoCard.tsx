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
export function InfoCard() {
    const profiledata = comms[5];
  return (
    <Card className="h-full bg-black p-2 relative">
      <CardHeader>
        <CardTitle>John Doe</CardTitle>
        <CardDescription>Status: <span className='text-emerald-500'>Connected</span> {'\n'}
          Location: {profiledata.location}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default InfoCard;