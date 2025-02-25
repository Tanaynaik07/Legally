"use client";
import { HoverEffect } from "../ui/card-hover-effect";

export function Feature() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={automationServices} />
    </div>
  );
}

export const automationServices = [
  {
    title: "User",
    description:
      "Custom trained on your business data, the AI bots gather and store accurate user information.",
      link:"/dashboard"
  },
  {
    title: "Tailored Solutions",
    description:
      "The bots are designed specifically according to your business needs, making them unique to your call handling requirements.",
      link:"/dashboard"
  },
  {
    title: "Superior Customer Service",
    description:
      "The AI bots answer calls promptly and book appointments seamlessly, increasing the overall customer satisfaction.",
      link:"/dashboard"
  },
  {
    title: "Cost Efficiency",
    description:
      "By handling the call management, the AI bots reduce the need for a larger in-house team and save costs.",
      link:"/dashboard"
  },
  {
    title: "Increased Productivity",
    description:
      "As the bots efficiently handle calls, your staff can focus on other important tasks, resulting in increased productivity.",
      link:"/dashboard"
  },
 
];
