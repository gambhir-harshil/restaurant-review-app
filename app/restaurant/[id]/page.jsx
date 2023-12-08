"use client";

import { getRestaurantById } from "services/apiRestaurants";
import useData from "hooks/useData";
import Reviews from "./_components/reviews";
import { Skeleton } from "components/ui/skeleton";
import Rating from "@mui/material/Rating";

const Restaurant = ({ params }) => {
  const {
    data: restaurant,
    error,
    loading,
  } = useData({
    api: getRestaurantById,
    id: params.id,
    handleArray: true,
  });

  if (loading) {
    return (
      <>
        <div className="flex flex-col gap-4 px-4 py-4 border rounded-lg lg:px-16 lg:flex-row lg:justify-between lg:items-center border-border">
          <Skeleton className="md:h-[480px] h-[240  px] lg:w-[640px] w-full" />
          <div className="flex flex-col gap-2 lg:gap-8">
            <div className="flex justify-between lg:items-center">
              <Skeleton className="w-64 h-8" />
            </div>
            <Skeleton className="h-2 w-128" />
            <Skeleton className="h-2 w-128" />
            <Skeleton className="h-2 w-128" />
          </div>
        </div>
        <Reviews id={params.id} />
      </>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 p-4 border rounded-lg lg:flex-row lg:justify-around lg:items-center border-border">
        <div className="lg:h-[480px]">
          <img
            src={restaurant[0].image}
            alt={restaurant[0].name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2 lg:gap-8">
          <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
            <span className="text-lg font-semibold lg:text-4xl ">
              {restaurant[0].name}
            </span>
            <Rating
              name="average_rating"
              value={restaurant[0].average_rating}
              readOnly
              size="large"
            />
          </div>
          <p className="max-w-lg text-sm font-semibold text-muted-foreground lg:text-base">
            {restaurant[0].description}
          </p>
        </div>
      </div>
      <Reviews id={params.id} />
    </div>
  );
};

export default Restaurant;
