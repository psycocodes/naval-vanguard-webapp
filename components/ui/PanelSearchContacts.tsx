import * as React from "react"
import {
  Card
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import comms from "@/constants/data";
export function SearchContacts() {
  return (
    <Card className="h-full bg-black">
        <Input type="text" placeholder="Search Contacts" className="h-full font-light"/>
    </Card>
  )
}

export default SearchContacts;