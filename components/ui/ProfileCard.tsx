"use client";
import React, { useEffect, useState } from "react";
import comms from "@/constants/data";

const ProfileCard = () => {
  const profiledata = comms[2];
  const isVisible = false;
  const glow = false;
  return (
    <div className="relative">
      <div className="relative z-10">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 641.25 691.2"
          className="w-full h-auto"
          role="img"
          aria-label="Stylized representation of a vessel"
        >
          <defs>
            <style>
              {`
            .cls-1 {
              fill: #149765;
              stroke: #199464;
              stroke-miterlimit: 10;
              stroke-width: 0.25px;
            }
          `}
            </style>
          </defs>
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              className="cls-1"
              d="M617.47,691.07h-168.19l-31.61-27.98h-188.96l-31.61,27.98H28.96L.12,659.63v-180.94l26-34.02v-203.38L1.68,207.62l.2-177.06L28.95.12h168.14l31.61,27.98h188.96L449.27.12h167.96l23.89,13.49v193.66l-26,34.02v203.36l26,34.02v180.88l-23.66,31.5ZM449.99,688.92h166.52l22.61-30.11v-179.35l-26-34.02v-204.9l26-34.02V14.92l-22.38-12.64h-166.75l-31.61,27.98h-190.39l-31.61-27.98H29.8L3.88,31.43l-.2,175.45,24.44,33.66v204.89l-26,34.02v179.29l27.67,30.17h166.58l31.61-27.98h190.39l31.61,27.98Z"
            />
          </g>
        </svg>
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 650.16 700.06"
          className={`w-full h-full ${isVisible ? '' : 'hidden'} ${glow ? 'glow' : ''}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }} // Optional: Make it responsive
        >
          <g id="Layer_1-2" data-name="Layer 1">
          <polyline
              className="layer2-polyline-1" // Changed class name for specificity
              points="650.16 332.68 650.16 469.18 631.39 444.35 631.39 249.7 650.16 222.88 650.16 332.68"
              style={{ fill: "#51B781", strokeWidth: 0 }} // Define fill and stroke directly
            />
            <polygon
              className="layer2-polygon-1" // Changed class name for specificity
              points="223.75 700.06 245.4 680.53 415.19 680.53 438.57 700.06 223.75 700.06"
              style={{ fill: "#51B781", strokeWidth: 0 }} // Define fill and stroke directly
            />
            <polyline
              className="layer2-polyline-2" // Changed class name for specificity
              points="0 333.47 0 222.86 18.77 247.69 18.77 442.34 0 469.16 0 333.47"
              style={{ fill: "#51B781", strokeWidth: 0 }} // Define fill and stroke directly
            />
            <polygon
              className="layer2-polygon-2" // Changed class name for specificity
              points="436.84 0 415.19 19.54 245.4 19.54 222.01 0 436.84 0"
              style={{ fill: "#51B781", strokeWidth: 0 }} // Define fill and stroke directly
            />
          </g>
        </svg>
      </div>
      <div className="content absolute top-0 left-0 text-xs flex justify-center flex-col items-center w-full h-full">
      {/* // Priority, Coords, Heading, Last reported, Speed, additional_info */}
      {profiledata ? (
        <div className="space-y-1 text-left p-5 bg-black bg-opacity-70 rounded-lg shadow-md h-[260px] w-full">
          <div className="font-bold text-sm text-white">
            <span>Vessel Name: </span>
            <span>{profiledata.vessel_name}</span>
          </div>
          <div>
            <span className="text-gray-400">IMO Number: </span>
            <span className="text-white">{profiledata.imo_number}</span>
          </div>
          <div>
            <span className="text-gray-400">Location: </span>
            <span className="text-white">{profiledata.location}</span>
          </div>
          <div>
            <span className="text-gray-400">Priority: </span>
            <span className="text-white">{profiledata.priority}</span>
          </div>
          <div>
            <span className="text-gray-400">Coordinates: </span>
            <span className="text-white">{profiledata.coordinates.latitude}, {profiledata.coordinates.longitude}</span>
          </div>
          <div>
            <span className="text-gray-400">Heading: </span>
            <span className="text-white">{profiledata.heading === null ? "None" : `${profiledata.heading}°`}</span>
          </div>
          <div>
            <span className="text-gray-400">Last Reported: </span>
            <span className="text-white">{profiledata.time} {profiledata.date}</span>
          </div>
          <div>
            <span className="text-gray-400">Speed: </span>
            <span className="text-white">{profiledata.speed} Knots</span>
          </div>
          <div>
            <span className="text-gray-400">Additional Info: </span>
            <span className="text-white">{profiledata.additional_info}</span>
          </div>
        </div>
      ) : (
        <div className="text-gray-500 p-5 bg-black bg-opacity-70 rounded-lg shadow-md h-[260px] w-full">No profile selected or profile not found</div>
      )}
      
        </div>
    </div>
  );
};

export default ProfileCard;

