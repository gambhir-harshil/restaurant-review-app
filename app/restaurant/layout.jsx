"use client";

import useAuth from "hooks/useAuth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const RestaurantLayout = ({ children }) => {
  const router = useRouter();
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!currentUser) {
    toast("You need to login to access this");
    router.push("/login");
  }
  return <main className="flex flex-col gap-8">{children}</main>;
};

export default RestaurantLayout;
