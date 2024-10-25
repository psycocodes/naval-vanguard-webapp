import Comms from "@/components/ui/Comms";
import InfoCard from "@/components/ui/InfoCard";
import ProfileCard from "@/components/ui/ProfileCard";
import { ProfileCard3D } from "@/components/ui/ProfileCard3D";
import Radar from "@/components/ui/Radar";
import SearchContacts from "@/components/ui/SearchContacts";
import SearchZone from "@/components/ui/SearchZone";
import ZoneCard from "@/components/ui/ZoneCard";
import React from "react";


const Ops = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-12 gap-2 full w-full mx-6">
      <div className="row-start-1 row-span-3 relative">
        <InfoCard />
      </div>
      <div className="border border-double border-emerald-500 rounded-lg text-l text-center col-start-1 row-span-9 min-h-full max-h-[415px]">
        <Comms />
      </div>
      <div className=" text-l text-center col-start-2 row-start-1 col-span-3 row-span-12 grid grid-rows-subgrid">
        <div className="grid grid-cols-subgrid col-span-2 gap-2">
          <div className="">
            <SearchContacts />
          </div>
          <div className="">
            <SearchZone />
          </div>
        </div>
        <div className="row-span-11 col-span-2">
          <Radar />
        </div>
      </div>
      <div className="grid grid-rows-subgrid text-l text-center row-span-12 row-start-1 col-start-5">
        <div className="row-span-6">
          <ProfileCard/>
        </div>
        <div className="row-span-6">
          <ZoneCard/>
        </div>
      </div>
    </div>
  );
};

export default Ops;
