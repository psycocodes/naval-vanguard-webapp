import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import comms from "@/constants/data";
import CommsCard from "./CommsCard";
export function Comms() {
  const profiledata = comms[2];
  const commsToShow = 2;
  return (
    <Card className="h-full bg-black relative">
      <CardHeader>
        <CardTitle className="">Comms</CardTitle>
      </CardHeader>
      <CardContent className="p-2 ">
          {comms.map((comm) => {
            if (comm.id <= commsToShow) {
              return <CommsCard key={comm.id} props={comm} />;
            }
          })}
      </CardContent>
    </Card>
  );
}

export default Comms;
