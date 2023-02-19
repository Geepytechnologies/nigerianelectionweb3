import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between w-full bg-white h-[80px]">
      <div className="flex gap-1 items-center">
        <img src="/circular-min.png" alt="logo" className="w-[30px]" />
        <p>NigerianElection</p>
      </div>
      <div>
        <button className="bg-[#c10622] text-white">Get started</button>
      </div>
    </div>
  );
};

export default Navbar;
