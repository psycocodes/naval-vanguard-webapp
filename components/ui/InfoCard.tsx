import Image from "next/image";
import React from "react";
import GlowImage from "./GlowImage";

const InfoCard = () => {
  return (
    <div className="text-emerald-600 w-full h-full">
      <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 356.33 179.65"
        width="100%"
        height="100%"
        className="z-10"
      >
        <defs>
          <style>
            {`
            .cls-5 {
              fill: #199364;
              stroke-width: 0px;
            }
          `}
          </style>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <path
              className="cls-5"
              d="M356.33,179.65h-.63s-351.75-.6-351.75-.6v-.74s.25-164.11.25-164.11L11.61.15l343.45-.15,1.27,179.65ZM5.2,177.57l349.86.59-1.25-176.67H12.22l-6.77,13.13-.25,162.96Z"
            />
            <g>
              <polygon
                className="cls-5"
                points=".13 178.9 4.57 178.9 4.57 120.11 .13 121.79 .13 178.9"
              />
              <path
                className="cls-5"
                d="M4.7,179.05H0v-57.37l4.7-1.78v59.14ZM.25,178.75h4.19v-58.44l-4.19,1.59v56.85Z"
              />
            </g>
            <polygon
              className="cls-5"
              points=".8 14.1 4.57 14.1 4.57 70.22 .55 68.64 .8 14.1"
            />
            <polyline
              className="cls-5"
              points="11.86 .15 8.09 .15 .8 14.1 4.82 14.1 11.86 .45"
            />
          </g>
        </g>
      </svg>
      <div className="content flex flex-col items-start w-full  space-y-2 absolute pt-5 top-0 left-0">
        <div className="flex items-center justify-center w-full space-x-2">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-2xl font-bold text-white ml-2">John Doe</span>
          </div>
        </div>
        <div className="text-xs pl-6 pt-1">
          <span className="font-bold text-white">Status:</span>
          <span className="text-gray-400"> Active</span>
        </div>
        <div className="text-xs pl-6">
          <span className="font-bold text-white">Location:</span>
          <span className="text-gray-400"> San Francisco, CA</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

