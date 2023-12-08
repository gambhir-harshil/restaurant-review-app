"use client";
import useData from "hooks/useData";
import { getRestaurants } from "services/apiRestaurants";
import Card from "./_components/card";

export default function Home() {
  const {
    data: restaurants,
    loading,
    error,
  } = useData({ api: getRestaurants });

  if (loading) {
    return (
      <>
        <h1 className="mb-8 text-3xl font-bold">
          Popular Restaurants around your area
        </h1>
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 2xl:grid-cols-3 place-items-center">
          {Array.from({ length: 6 }, (_, index) => (
            <Card.Skeleton key={index} />
          ))}
        </div>
      </>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">
        Popular Restaurants around your area
      </h1>
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 2xl:grid-cols-3 place-items-center">
        {restaurants.map((restaurant) => (
          <Card restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
}
