import { Button } from "components/ui/button";
import { Skeleton } from "components/ui/skeleton";
import { useRouter } from "next/navigation";

const Card = ({ restaurant }) => {
  const router = useRouter();

  const redirect = () => {
    router.push(`/restaurant/${restaurant.id}`);
  };

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg border-border">
      <div
        className="h-[240px] w-[380px] sm:w-[480px] sm:h-[360px] lg:w-[480px] md:w-[560px] lg:h-[360px] overflow-hidden cursor-pointer"
        onClick={redirect}
      >
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

Card.Skeleton = function CardSkeleton() {
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg border-border">
      <Skeleton className="h-[240px] w-[300px] sm:w-[480px] sm:h-[360px] lg:w-[480px] md:w-[560px] lg:h-[360px] rounded-lg" />
      <Skeleton className="w-48 h-4 rounded-lg" />
    </div>
  );
};

export default Card;
