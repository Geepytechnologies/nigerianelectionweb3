import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import Link from "next/link";
import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex sticky top-0 z-[900] items-center px-2 justify-between w-full bg-[white] h-[80px]">
      <Link href="/" className="flex gap-1 items-center">
        <img src="/circular-min.png" alt="logo" className="w-[30px]" />
        <p className="font-[600] font-popp">NigerianElection</p>
      </Link>
      <div>
        <ConnectButton label="Get Started" />
      </div>
    </div>
  );
};

export default Navbar;
