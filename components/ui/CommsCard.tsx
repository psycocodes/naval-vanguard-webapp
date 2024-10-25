import React from "react";

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
    routine: "text-blue-500",
    confidential: "text-fuchsia-500",
    urgent: "text-amber-500",
    immediate: "text-red-500",
    secret: "text-violet-500",
    unknown: "text-emerald-500",
  };

  // Ensure props.priority is typed as Priority
  const textColorClass = colorClasses[props.priority] || "text-gray-200"; // Fallback color if needed
  console.log(`CommsCard colorClass: ${textColorClass}`);
  return (
    <div className="flex flex-col m-2 border border-gray-800 rounded-lg px-2 py-1">
      <div className="text-xs text-neutral-400 text-left">
        <span className={`font-bold ${textColorClass}`}>[{props.id}] </span>
        <span className="text-amber-600">{props.vessel_name}</span>:{" "}

        {props.additional_info}
      </div>
      <div className="text-xs text-neutral-400 text-right">
        {props.coordinates.latitute}
        {props.coordinates.longitude}, {props.date} {props.time}
      </div>
    </div>
  );
};

export default CommsCard;
