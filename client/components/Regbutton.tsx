import Link from "next/link";
import React from "react";
import { BsFillPenFill } from "react-icons/bs";

type Props = {};

const Regbutton = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-center my-7">
      <Link
        href={"/register"}
        className="rounded-2xl shadow-2xl flex gap-2 text-[20px] items-center justify-center bg-[#01945a] text-white font-[600] p-5 animate-bounce"
      >
        <BsFillPenFill />
        Register as a Voter
      </Link>
    </div>
  );
};

export default Regbutton;
