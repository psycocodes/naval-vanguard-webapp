import Comms from "@/components/ui/PanelComms";
import InfoCard from "@/components/ui/PanelInfoCard";
import ProfileCard from "@/components/ui/PanelProfileCard";
import Radar from "@/components/ui/PanelRadar";
import SearchContacts from "@/components/ui/PanelSearchContacts";
import SearchZones from "@/components/ui/PanelSearchZones";
import PanelZoneCard from "@/components/ui/PanelZoneCard";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="h-full w-full grid grid-cols-[18%_62%_20%] overflow-hidden">
        <div className="grid grid-rows-[auto_1fr]">
            <div> <InfoCard></InfoCard></div>
            <div> <Comms></Comms></div>
        </div>
        <div className="grid grid-rows-[10%_90%]">
            <div className="grid grid-cols-[50%_50%] ">
                <div><SearchContacts></SearchContacts></div>
                <div><SearchZones></SearchZones></div>
            </div>
            <div><Radar></Radar></div>
            
        </div>
        <div className="grid grid-rows-[50%_50%]">
            <div className=""><ProfileCard></ProfileCard> </div>
            <div><PanelZoneCard></PanelZoneCard></div>
        </div>
    </div>
  )
}

export default DashboardPage