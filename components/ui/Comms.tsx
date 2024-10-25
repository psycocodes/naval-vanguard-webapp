import React from "react";
import { comms } from "@/constants/data";
import CommsCard from "./CommsCard";
const Comms = () => {
  const commsToShow = 10;
  return (
    <div className="h-full overflow-auto max-h-[370px] no-scrollbar">
      {comms.map((comm) => {
        if (comm.id <= commsToShow) {
          return <CommsCard key={comm.id} props={comm} />;
        }
      })}
    </div>
  );
};

export default Comms;
