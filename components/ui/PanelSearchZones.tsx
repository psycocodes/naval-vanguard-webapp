import * as React from "react"
import {
  Card
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function SearchZones() {
    return (
        <Card className="h-full bg-black">
            <Input type="text" placeholder="Search Zones" className="h-full font-light"/>
        </Card>
      )
}

export default SearchZones;