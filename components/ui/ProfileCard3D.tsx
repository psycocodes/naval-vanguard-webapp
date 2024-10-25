"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import ProfileCard from "./ProfileCard";
export function ProfileCard3D() {
  return (
    <CardContainer className="flex">
      <CardBody className="border border-blue-600">
        <CardItem translateZ="100" className="border border-red-600">
          <ProfileCard></ProfileCard>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}