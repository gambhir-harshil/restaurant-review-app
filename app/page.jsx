"use client";
import { getRestaurants } from "@/services/apiRestaurants";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getRestaurants().then((data) => console.log(data));
  }, []);
  return <main className="h-screen overflow-y-scroll"></main>;
}
