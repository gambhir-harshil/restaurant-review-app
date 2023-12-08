"use client";

import { getCurrentUser } from "services/apiAuth";
import useAuth from "hooks/useAuth";
import { useRouter } from "next/navigation";

const RestaurantLayout = ({ children }) => {
  const router = useRouter();
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!currentUser) {
    router.push("/login");
  }
  return <main className="flex flex-col gap-8">{children}</main>;
};

export default RestaurantLayout;
