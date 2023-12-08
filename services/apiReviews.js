import supabase from "./supabase";

export async function getReviews(id, onRealtimeUpdate) {
  let { data, error } = await supabase
    .from("reviews")
    .select()
    .eq("restaurant_id", id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Reviews could not be loaded");
  }

  return data;
}

export async function postReview(review) {
  const { data, error } = await supabase
    .from("reviews")
    .insert(review)
    .select();
}
