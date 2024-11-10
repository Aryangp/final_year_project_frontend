"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Aryan Gupta",
    designation: "Team Leader",
    image: "/good_photo.jpg",
  },
  {
    id: 2,
    name: "Pratham Dhiman",
    designation: "Team Member",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Abhishek Saini",
    designation: "Team Member",
    image:
      "/abhishek_photo.jpg",
  },
  {
    id: 4,
    name: "Arin Nagwanshi",
    designation: "Team Member",
    image:
      "/arin_photo.jpg",
  },
];

function Footer() {
  return (
    <div className=" bg-custom1 flex flex-row items-center justify-center mt--5 pb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export default Footer;
