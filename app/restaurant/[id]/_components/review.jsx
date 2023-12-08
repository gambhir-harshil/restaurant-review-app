const Review = ({ review }) => {
  return (
    <div className="flex justify-between px-4 py-2 rounded-lg bg-secondary/50">
      <span className="font-semibold">{review.review}</span>
      <span>Rating</span>
    </div>
  );
};

export default Review;
