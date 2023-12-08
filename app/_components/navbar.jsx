"use client";

import { ModeToggle } from "components/mode-toggle";
import { Button } from "components/ui/button";
import { useScrollTop } from "hooks/useScrolltop";
import { cn } from "lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useAuth from "hooks/useAuth";
import { LogOut } from "lucide-react";

import { logout } from "services/apiAuth";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isLoginOrRegister = pathname === "/login" || pathname === "/register";
  const scrolled = useScrollTop();
  const { isAuthenticated } = useAuth();

  function handleLogout() {
    logout();
    router.push("/login");
  }
  return (
    <nav
      className={cn(
        "fixed top-0 z-50 flex items-center w-full p-6 justify-between bg-background",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Link href="/" className="text-2xl font-bold">
        YUM
      </Link>
      <div className="flex items-center gap-4">
        {isLoginOrRegister || !isAuthenticated ? (
          <Button>
            <Link href="/login">Sign In</Link>
          </Button>
        ) : (
          <LogOut onClick={handleLogout} className="cursor-pointer" />
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
