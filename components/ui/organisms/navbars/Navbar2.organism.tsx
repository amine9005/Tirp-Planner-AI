import { Plane } from "lucide-react";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import Link from "next/link";

const Navbar2Organism = () => {
  const navItems = [
    {
      label: "Home",
      href: "/",
    },
  ];

  return (
    <div className="grid grid-cols-3 justify-between mt-4 w-full border border-yellow-500">
      {/* Logo */}
      <div className="flex w-fit col-span-1 gap-2 items-center border border-green-500">
        <Plane className="size-8 text-blue-500/50" />
        <H2>Trip Planner AI</H2>
      </div>

      {/* Nav Menu */}
      <div className="flex col-span-1 items-center gap-4 w-full">
        {navItems.map((item, index) => (
          <Link href={item.href} key={index} className="hover:scale-105">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar2Organism;
