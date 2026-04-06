import { Plane } from "lucide-react";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import Link from "next/link";
import GetStartedButtonMolecule from "../../molecules/get-started-button/GetStartedButton.molecule";

const Navbar2Organism = () => {
  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Contact-us",
      href: "/contact-us",
    },
  ];

  return (
    <div className="grid grid-cols-3 justify-between mt-4 w-full">
      {/* Logo */}

      <Link href={"/"} className="flex w-fit col-span-1 gap-2 items-center">
        <Plane className="size-8 text-primary" />
        <H2>Trip Planner AI</H2>
      </Link>

      {/* Nav Menu */}
      <div className="flex col-span-1 items-center gap-4 w-full justify-center">
        {navItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="hover:scale-105 transition-transform duration-200 hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Action Button */}
      <div className="flex justify-end items-center">
        <GetStartedButtonMolecule />
      </div>
    </div>
  );
};

export default Navbar2Organism;
