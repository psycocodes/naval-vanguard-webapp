"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import comms from "@/constants/data";
import CommsCard from "./CommsCard";
import { Button } from "./button";
import { cn } from "@/utils/cn";
import Image from "next/image";

export function Comms() {
  const [commsHistory, setCommsHistory] = React.useState<
    Array<(typeof comms)[number]>
  >([]);
  const commsToShow = 10;
  const { toast } = useToast();
  const clearComms = () => {
    setCommsHistory([]);
  };

  const displayComms = () => {
    setCommsHistory(comms.slice(0, commsToShow));
  };
  return (
    <Card className="h-full bg-black">
      <CardHeader className="pb-1 pr-4">
        <CardTitle className="flex gap-2 items-center">
          Comms{" "}
          {commsHistory.length > 0 ? (
            <Button
              onClick={() => {
                toast({
                  title: "Clearing Comms",
                  description: "Your Comms history will be cleared",
                  duration: 3000,
                  action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
                });
                // alert(files.map((file, idx) => file.name).join("\n"));
                clearComms();
              }}
              className="rounded-[0.3rem] h-[1.5rem] w-[3.5rem]"
              variant="outline"
            >
              Clear
            </Button>
          ) : (
            <Button
              onClick={() => {
                toast({
                  title: "Loading Comms",
                  description: "Your Comms history will load",
                  duration: 3000,
                  action: <ToastAction altText="Dismiss">Dismiss</ToastAction>,
                });
                // alert(files.map((file, idx) => file.name).join("\n"));
                displayComms();
              }}
              className="rounded-[0.3rem] h-[1.5rem] w-[3.5rem]"
              variant="outline"
            >
              Load
            </Button>
          )}
        </CardTitle>
        {commsHistory.length === 0 ? (
          <CardDescription className="pl-[0.9px]">
            Click Load to see history
          </CardDescription>
        ) : (
          <CardDescription className="pl-[0.9px]">
            Scroll to see more
          </CardDescription>
        )}
      </CardHeader>
      <CardContent
        className={cn(
          "h-[calc(100%-5.4rem)] min-h-[20px] overflow-auto no-scrollbar rounded-[0.4rem] mx-3 px-3",
          commsHistory.length > 0 && "border border-gray-500/40 border-b-dashed"
        )}
      >
        <div className="relative h-full">
          <div className="absolute inset-0 flex flex-col">
            {commsHistory.length > 0 ? (
              <div className="flex flex-col -mx-3 -ml-2">
                {/* //hard coding the margin */}
                {commsHistory.map((comm) => {
                  if (comm.id <= commsToShow) {
                    return <CommsCard key={comm.id} props={comm} />;
                  }
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50px"
                  viewBox="0 -960 960 960"
                  width="50px"
                  fill="#6b7280"
                >
                  <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
                <span className="text-center font-light text-sm">
                  No Communications Available
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Comms;
