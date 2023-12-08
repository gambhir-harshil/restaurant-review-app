"use client";

import { getRestaurantById } from "services/apiRestaurants";
import useData from "hooks/useData";
import Reviews from "./_components/reviews";

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
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 p-4 border rounded-lg lg:flex-row border-border">
        <img src={restaurant[0].image} alt={restaurant[0].name} />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-lg font-semibold">{restaurant[0].name}</span>
            <span>Rating</span>
          </div>
          <p className="max-w-lg text-sm font-semibold text-muted-foreground">
            {restaurant[0].description}
          </p>
        </div>
      </div>
      <Reviews id={params.id} />
    </div>
  );
};

export default Restaurant;
