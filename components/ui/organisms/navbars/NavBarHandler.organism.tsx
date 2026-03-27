import React from "react";
import Navbar1Organism from "@/components/ui/organisms/navbars/Navbar1.organism";
import LogoWithNameMolecule from "@/components/ui/molecules/logo-with-name/LogoWithName.molecule";

const NavBarHandlerOrganism = () => {
  return (
    <Navbar1Organism>
      {" "}
      <LogoWithNameMolecule />{" "}
    </Navbar1Organism>
  );
};

export default NavBarHandlerOrganism;
