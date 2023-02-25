import Link from "next/link";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-full">
        <div className="relative w-[40%]">
          <img
            src="/landscape.jpg"
            alt="The city of Abuja"
            className="h-[300px] md:h-[500px] object-cover"
          />
          <div className="absolute top-0 bg-[rgba(0,0,0,0.4)] w-full h-full "></div>
          <div className="absolute top-0 w-full h-full text-[12px] flex items-center  text-white">
            {/* <Link href="/" className="flex gap-1 p-2 items-center">
              <img
                src="/circular-min.png"
                alt="logo"
                className="w-[15px] md:w-[30px]"
              />
              <p className="font-[600] font-popp">NigerianElection</p>
            </Link> */}
            {/* <h3 className="font-mont font-[500]">
              Our Country is in our hands. Let&apos;s vote for a better
              Government
            </h3> */}
          </div>
        </div>
        <div className="bg-[url('/mapbackground.jpg')] bg-cover bg-center w-full  text-white"></div>
      </div>
      <div className="w-full text-center bg-[black] text-white">
        <p className="flex items-center justify-center">
          Made with{" "}
          <span className="mx-2">
            <AiFillHeart />
          </span>{" "}
          by{" "}
          <Link className="mx-2" href="https://geepy.vercel.app">
            Geepy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
