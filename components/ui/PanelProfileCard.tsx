"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Compass,
  Anchor,
  Navigation,
  AlertCircle,
  Info,
  MapPin,
  Gauge,
  Map,
  Radio,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import comms from "@/constants/data";

const HeadingIndicator = ({ heading }: { heading: string | null }) => {
  // Convert heading to number and handle invalid values
  const degrees = Number(heading) || 0;

  return (
    <div className="relative w-6 h-6">
      <svg
        viewBox="0 0 24 24"
        className="absolute inset-0 w-full h-full text-blue-400"
        style={{ transform: `rotate(${degrees}deg)` }}
      >
        <path
          d="M12 3L16 15H8L12 3Z"
          fill="currentColor"
          className="group-hover:fill-blue-500 transition-colors"
        />
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          fill="none"
          strokeWidth="1"
          className="opacity-30"
        />
      </svg>
    </div>
  );
};
export function ProfileCard() {
  const profiledata = comms[6];
  type Priority =
    | "routine"
    | "confidential"
    | "urgent"
    | "immediate"
    | "secret"
    | "unknown";
  type ColorScheme = { [key in Priority]: string };

  // Dynamically generate colorClasses based on colorScheme
  const colorClasses: { [key: string]: string } = {
    routine: "text-blue-500 bg-blue-500",
    confidential: "text-fuchsia-500 bg-fuchsia-500",
    urgent: "text-amber-500 bg-amber-500",
    immediate: "text-red-500 bg-red-500",
    secret: "text-violet-500 bg-violet-500",
    unknown: "text-emerald-500 bg-emerald-500",
  };

  const priorityConfig = {
    routine: {
      color: "text-blue-500",
      bgLight: "bg-blue-50",
      bgDark: "bg-blue-500/10",
      icon: Info,
    },
    confidential: {
      color: "text-fuchsia-500",
      bgLight: "bg-fuchsia-50",
      bgDark: "bg-fuchsia-500/10",
      icon: AlertCircle,
    },
    urgent: {
      color: "text-amber-500",
      bgLight: "bg-amber-50",
      bgDark: "bg-amber-500/10",
      icon: AlertCircle,
    },
    immediate: {
      color: "text-red-500",
      bgLight: "bg-red-50",
      bgDark: "bg-red-500/10",
      icon: AlertCircle,
    },
    secret: {
      color: "text-violet-500",
      bgLight: "bg-violet-50",
      bgDark: "bg-violet-500/10",
      icon: AlertCircle,
    },
    unknown: {
      color: "text-emerald-500",
      bgLight: "bg-emerald-50",
      bgDark: "bg-emerald-500/10",
      icon: AlertCircle,
    },
  };

  const config =
    priorityConfig[profiledata.priority as keyof typeof priorityConfig];
  const PriorityIcon = config.icon;
  // Speed status indicator
  const getSpeedStatus = (speed: number) => {
    if (speed > 15) return "text-red-500";
    if (speed > 10) return "text-amber-500";
    return "text-emerald-500";
  };

  const getSpeedBg = (speed: number) => {
    if (speed > 15) return "bg-red-500";
    if (speed > 10) return "bg-amber-500";
    return "bg-emerald-500";
  };

  return (
    <Card className="w-full h-full bg-gradient-to-b from-gray-900/40 to-black border-gray-800 shadow-xl relative">
      <CardHeader className="p-3 pb-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Anchor className={`w-auto h-auto ${config.color}`} />
            <CardTitle className="text-2xl text-white">
              {profiledata.vessel_name}
            </CardTitle>
          </div>
          <div className="flex items-center gap-1">
            <div
              className={`px-2 py-0.5 rounded-full ${config.bgDark} ${config.color} flex items-center gap-1 text-sm capitalize w-fit`}
            >
              <PriorityIcon className="w-3 h-3" />
              {profiledata.priority}
            </div>
            <div className="bg-gray-900/50 rounded-full px-1.5 py-1 flex items-center gap-1">
              <span className="text-xs text-blue-400 font-medium">
                {profiledata.coordinates.latitude}
              </span>
            </div>
            <div className="bg-gray-900/50 rounded-full px-1.5 py-1 flex items-center gap-1">
              <span className="text-xs text-blue-400 font-medium">
                {profiledata.coordinates.longitude}
              </span>
            </div>
          </div>
        </div>
        <CardDescription className="text-gray-400 mt-1 text-xs">
          {profiledata.additional_info}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-3 pt-0 h-full">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-3">
            {/* Speed Section */}
            <div className="group relative bg-gray-800/30 rounded-lg p-2 hover:bg-gray-800/50 transition-all cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Gauge
                    className={`p-1 w-6 h-6 ${getSpeedStatus(
                      Number(profiledata.speed)
                    )}`}
                  />
                  <span
                    className={`absolute -top-[1px] -right-[0.5px] w-1 h-1 rounded-full ${getSpeedStatus(
                      Number(profiledata.speed)
                    )} animate-pulse`}
                  ></span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    Speed
                  </p>
                  <p className="text-xs font-medium text-white">
                    {profiledata.speed} knots
                  </p>
                </div>
              </div>
            </div>

            {/* Heading Section */}
            <div className="group relative bg-gray-800/30 rounded-lg p-2 hover:bg-gray-800/50 transition-all cursor-pointer">
              <div className="flex items-center gap-2">
                <HeadingIndicator heading={profiledata.heading} />
                <div>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    Heading
                  </p>
                  <p className="text-xs font-medium text-white">
                    {profiledata.heading}°
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Refined Location Section */}
          <div className="bg-gray-800/30 rounded-lg p-2 hover:bg-gray-800/50 transition-all cursor-pointer relative group h-full">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 mb-2">
                <div className="relative flex-shrink-0">
                  <Radio className="w-4 h-4 text-red-400" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
                </div>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  Current Position
                </p>
              </div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex justify-between items-end h-full">
                      <p className="text-[1rem] text-white font-medium group-hover:text-blue-400 transition-colors line-clamp-2 text-left">
                        {profiledata.location}
                      </p>
                      <Map className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0 ml-2" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="text-xs">
                    {profiledata.location}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-3 pt-2 flex justify-between items-center border-t border-gray-800 absolute bottom-0 w-full">
        <p className="text-[10px] text-gray-500">
          IMO: {profiledata.imo_number}
        </p>
        <p className="text-[10px] text-gray-500">
          {profiledata.time}, {profiledata.date}
        </p>
      </CardFooter>
    </Card>
  );
}

export default ProfileCard;
