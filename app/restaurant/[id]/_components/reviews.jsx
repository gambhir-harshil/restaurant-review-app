"use client";

import { Button } from "components/ui/button";
import { getReviews, postReview } from "../../../../services/apiReviews";
import Review from "./review";
import useData from "hooks/useData";
import { useEffect, useState } from "react";
import supabase from "../../../../services/supabase";
import Rating from "@mui/material/Rating";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Reviews = ({ id }) => {
  const [input, setInput] = useState("");
  const [reviews, setReviews] = useState([]);
  const { loading, error } = useData({ api: getReviews, id });

  async function fetchReviews() {
    const { data } = await supabase
      .from("reviews")
      .select()
      .eq("restaurant_id", id)
      .order("created_at", { ascending: false });

    if (data) {
      setReviews(data);
    }
  }

  async function handlePostReview(e) {
    e.preventDefault();
    await postReview([
      {
        review: input,
        restaurant_id: id,
      },
    ]);
    setInput("");
    await fetchReviews(id);
  }

  useEffect(() => {
    fetchReviews(id);
    supabase
      .channel("table-db-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "reviews",
        },
        (payload) => {
          fetchReviews(id);
        }
      )
      .subscribe();
  }, [id]);

  if (loading) {
    return <div className="border-red-600">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg border-border">
      <h1 className="text-2xl font-bold text-center text-muted-foreground">
        Rate now
      </h1>
      <Rating
        name="user_rating"
        onChange={(e, newRating) => {}}
        size="large"
        emptyIcon={
          <StarBorderIcon fontSize="inherit" className="text-yellow-400" />
        }
      />
      <div className="flex items-center justify-center gap-4">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Write a review"
          className="px-4 py-2 border rounded-lg outline-none bg-background border-border"
        />
        <Button
          onClick={handlePostReview}
          className="font-semibold rounded-r-lg"
          variant="secondary"
        >
          Post
        </Button>
      </div>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
