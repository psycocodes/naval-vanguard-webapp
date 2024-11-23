import * as React from "react"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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