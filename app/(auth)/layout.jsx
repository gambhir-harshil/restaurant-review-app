"use client";
import { useRouter } from "next/navigation";
import useAuth from "hooks/useAuth";

const AuthLayout = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    router.push("/");
  }
  return <>{children}</>;
};

export default AuthLayout;
