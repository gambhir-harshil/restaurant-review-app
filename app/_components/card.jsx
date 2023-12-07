import { Button } from "@/components/ui/button";

const Card = ({ restaurant }) => {
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg border-border">
      <div className="h-[240px] w-[300px] sm:w-[480px] sm:h-[360px] lg:w-[480px] md:w-[560px] lg:h-[360px] overflow-hidden cursor-pointer">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">{restaurant.name}</span>
        <Button size="sm">Rate now</Button>
      </div>
    </div>
  );
};

export default Card;
