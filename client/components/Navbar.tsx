import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between w-full bg-white h-[80px]">
      <div className="flex gap-1 items-center">
        <img src="/circular-min.png" alt="logo" className="w-[30px]" />
        <p className="font-[600] font-popp">NigerianElection</p>
      </div>
      <div>
        <button className="bg-[#c10622] flex items-center gap-2 p-2 rounded-md text-white">
          Get started
          <AiOutlineDoubleRight className="animate-pulse animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
