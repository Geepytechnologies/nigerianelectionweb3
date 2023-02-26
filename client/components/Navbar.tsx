import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import Link from "next/link";
import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex sticky top-0 z-[500] items-center px-2 justify-between w-full bg-[white] h-[80px]">
      <Link href="/" className="flex gap-1 items-center">
        <img
          src="/circular-min.png"
          alt="logo"
          className="w-[20px] d3:w-[30px]"
        />
        <p className="font-[600] d1:text-[14px] d2:text-[16px] sm:text font-popp">
          NigerianElection
        </p>
      </Link>
      <div className="">
        <ConnectButton label="Get Started" />
      </div>
    </div>
  );
};

export default Navbar;
