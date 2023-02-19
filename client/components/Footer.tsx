import Link from "next/link";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div>
          <img
            src="/landscape.jpg"
            alt="The city of Abuja"
            className="h-[350px]"
          />
        </div>
        <div className="bg-[#01945a] flex-1 text-white">
          <h2>Nigerian Election</h2>
          <h3>
            Our Country is in our hands. Let&apos;s vote for a better Government
          </h3>
        </div>
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
