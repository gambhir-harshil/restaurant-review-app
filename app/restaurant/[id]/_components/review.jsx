import Rating from "@mui/material/Rating";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { formatDistanceToNow } from "date-fns";

const Review = ({ review }) => {
  function handleDateFormatter(timeStamp) {
    const date = new Date(timeStamp);
    const timeAgo = formatDistanceToNow(date, { addSuffix: true });
    return timeAgo;
  }
  return (
    <div className="flex items-center justify-between gap-2 px-2 py-2 mt-4 rounded-lg md:px-16 bg-secondary/30">
      <div className="flex flex-col gap-2 md:gap-1">
        <span className="text-sm font-semibold md:max-w-md md:text-lg">
          {review.review}
        </span>
        <span>
          <Rating
            name="average_rating"
            value={review.individual_rating}
            readOnly
            emptyIcon={
              <StarBorderIcon
                fontSize="inherit"
                className="dark:text-yellow-400"
              />
            }
          />
        </span>
      </div>
      <span className="text-xs text-muted-foreground text-semibold md:text-base">
        {handleDateFormatter(review.created_at)}
      </span>
    </div>
  );
};

export default Review;
