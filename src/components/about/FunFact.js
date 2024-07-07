import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import {FaFly  } from "react-icons/fa";
import FunFactCard from "./comps/FunFactCard";

const FunFact = () => {
  return (
    <div className="grid grid-cols-2 px-0 pb-10 md:grid-cols-4">
      <FunFactCard icon={<BsTrophyFill />} des="Bring Optimism to Projects" />
      <FunFactCard icon={<SiAntdesign />} des="Passionate About Growth" />
      <FunFactCard icon={<BiCodeAlt />} des="Coding a Solution" />
      <FunFactCard icon={<FaFly />} des="Love Traveling" />
      <FunFactCard icon={<BiCodeAlt />} des="Empathetic" />
      <FunFactCard icon={<FaFly />} des="Good Communicator" />
    </div>
  );
};

export default FunFact;
