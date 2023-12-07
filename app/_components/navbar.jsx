"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/useScrolltop";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <nav
      className={cn(
        "fixed top-0 z-50 flex items-center w-full p-6 justify-between bg-background",
        scrolled && "border-b shadow-sm"
      )}
    >
      <h1 className="text-2xl font-bold">YUM</h1>
      <div className="flex gap-4">
        <Button>Sign In</Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
