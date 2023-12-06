import supabase from "./supabase";

export async function getRestaurants() {
  let { data, error } = await supabase.from("Restaurants").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
