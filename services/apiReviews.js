export async function getReviews() {
  let { data, error } = await supabase.from("reviews").select("*");

  if (error) {
    console.error(error);
    throw new Error("Reviews could not be loaded");
  }

  return data;
}
