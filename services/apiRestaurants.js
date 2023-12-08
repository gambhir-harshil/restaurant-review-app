import supabase from "./supabase";

export async function getRestaurants() {
  let { data, error } = await supabase.from("Restaurants").select("*");

  if (error) {
    console.error(error);
    throw new Error("Restaurants could not be loaded");
  }

  return data;
}

export async function getRestaurantById(id) {
  let { data, error } = await supabase
    .from("Restaurants")
    .select()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Restaurant could not be loaded");
  }
  return data;
}
