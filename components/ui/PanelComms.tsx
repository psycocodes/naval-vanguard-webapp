import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import comms from "@/constants/data";
import CommsCard from "./CommsCard";
export function Comms() {
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
