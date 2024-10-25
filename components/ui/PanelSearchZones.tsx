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
export function SearchZones() {
    const profiledata = comms[2];
    return (
        <Card className="h-full bg-black">
            <Input type="text" placeholder="Search Zones" className="h-full font-light"/>
        </Card>
      )
}

export default SearchZones;