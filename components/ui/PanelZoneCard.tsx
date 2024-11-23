"use client";
import React, { useState } from "react";
import zones from "@/constants/zone";
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
  Anchor,
  AlertCircle,
  Info,
  MapPin,
  Compass,
  Navigation,
  LandPlot,
  Maximize2,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ZoneCard = () => {
  const zoneData = zones[1];
  // Dynamically generate colorClasses based on priority
  const priorityConfig = {
    1: {
      color: "text-blue-500",
      bgLight: "bg-blue-50",
      bgDark: "bg-blue-500/10",
      icon: Info,
    },
    2: {
      color: "text-fuchsia-500",
      bgLight: "bg-fuchsia-50",
      bgDark: "bg-fuchsia-500/10",
      icon: AlertCircle,
    },
    3: {
      color: "text-amber-500",
      bgLight: "bg-amber-50",
      bgDark: "bg-amber-500/10",
      icon: AlertCircle,
    },
    4: {
      color: "text-red-500",
      bgLight: "bg-red-50",
      bgDark: "bg-red-500/10",
      icon: AlertCircle,
    },
  };

  const config =
    priorityConfig[zoneData.priority as keyof typeof priorityConfig];
  const PriorityIcon = config.icon;

  return (
    <Card className="w-full h-full bg-gradient-to-b from-gray-900/40 to-black border-gray-800 shadow-xl relative">
      <CardHeader className="p-3 pb-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 pr-1">
            <LandPlot className={`w-auto h-[3.2rem] ${config.color}`} />
            <CardTitle className="text-xl text-white">
              {zoneData.name}
            </CardTitle>
          </div>
          <div className="flex items-center gap-1">
            <div
              className={`px-2 py-0.5 rounded-full ${config.bgDark} ${config.color} flex items-center gap-1 text-sm capitalize w-fit`}
            >
              <PriorityIcon className="w-3 h-3" />
              {["Low", "Medium", "High", "Critical"][zoneData.priority - 1]}
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="bg-gray-900/50 rounded-full px-1.5 py-1 flex items-center gap-1">
                    <MapPin className={`w-3 h-3 ${config.color}`} />
                    <span className="text-xs text-blue-400 font-medium">
                      Coordinates
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="h-full w-full">
                  {zoneData.coordinates.map((coordinate, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <MapPin className={`w-3 h-3 ${config.color}`} />
                      <p className="text-xs text-gray-400 font-medium">
                        {`(${coordinate[0]}, ${coordinate[1]})`}
                      </p>
                    </div>
                  ))}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <CardDescription className="text-gray-400 mt-1 text-xs">
          {zoneData.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-3">
        <div className="flex-1 mb-2">
          <p className="text-sm text-white font-medium">Objective:</p>
          <p className="text-xs text-gray-400 ">{zoneData.objective}</p>
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-2 flex justify-between items-center border-t border-gray-800 absolute bottom-0 w-full">
        <p className="text-[10px] text-gray-500">ID: {zoneData.id}</p>
        <p className="text-[10px] text-gray-500">
          Hover the map-pin to see coordinates
        </p>
      </CardFooter>
    </Card>
  );
};

export default ZoneCard;
