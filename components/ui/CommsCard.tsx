import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CommsCard = ({ props }: { props: any }) => {
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

  // Ensure props.priority is typed as Priority
  const textColorClass = colorClasses[props.priority].split(" ")[0] || "text-gray-200"; // Fallback color if needed
  const backgroundColorClass = colorClasses[props.priority]
    ? colorClasses[props.priority].split(" ")[1]
    : "bg-gray-100"; // Fallback color if needed
  console.log(`CommsCard colorClass: ${textColorClass}`);
  return (
    <div className="flex flex-col my-1 rounded-lg px-2 py-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {" "}
            <div className="text-xs text-neutral-400 text-left">
              <span className={`${textColorClass}`}>
                {" "}
                <span
                  className={`inline-block aspect-square h-2 rounded-full ${backgroundColorClass}`}
                ></span> {" "}
                {props.vessel_name}
              </span>
              : {props.additional_info}
            </div>
          </TooltipTrigger>
          <TooltipContent className="text-xs">
            {props.coordinates.latitute}
            {props.coordinates.longitude}, {props.date} {props.time}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default CommsCard;


