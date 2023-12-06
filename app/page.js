"use client";
import { getRestaurants } from "@/services/apiRestaurants";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getRestaurants().then((data) => console.log(data));
  }, []);
  return <></>;
}
