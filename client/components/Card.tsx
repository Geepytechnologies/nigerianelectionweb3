import React from "react";
import { useContract, useSigner, useAccount } from "wagmi";
import { ABI } from "../abi/election";
import { useProvider } from "wagmi";
import { contractaddress } from "@/pages";
import { AiOutlineCheck } from "react-icons/ai";

type Props = {
  data: any;
};

const Card = ({ data }: Props) => {
  const provider = useProvider();
  const { data: signer, isError, isLoading } = useSigner();
  const contract = useContract({
    address: contractaddress,
    abi: ABI,
    signerOrProvider: signer,
  });
  const handleVote = async (address: any, id: any) => {
    try {
      const res = await contract?.vote(address, id);
      console.log({ response: res });
    } catch (err: any) {
      if (err.message.includes("You haven't registered yet")) {
        alert("You haven't registered yet");
      }
    }
  };
  return (
    <div className="my-4">
      <div className="flex overflow-x-scroll min-h-full sm:grid-cols-2 m-2 sm:grid grid-cols-1 md:grid-cols-3 gap-3">
        {data?.map((item: any, index: any) => (
          <div
            key={index}
            className="flex flex-col h-[auto] rounded-br-[20px] min-w-[350px] shadow-2xl bg-[white] overflow-hidden"
          >
            <div className="font-[600] my-2 font-pop p-2 tracking-wide ">
              {item[5]}
            </div>
            <img
              src={item[3]}
              alt="candidate"
              className="hover:scale-105 h-[300px] my-3 object-cover object-center transition-all duration-500 ease-in-out cursor-pointer"
            />
            <p className="font-pop font-[600] pl-2 text-[25px] tracking-[1px] ">
              {item[2]}
            </p>
            <p className="font-mont font-[500] pl-2">
              CandidateID: {item[0].toString()}
            </p>
            <p className="font-mont font-[500] pl-2">
              Address: {item[6].slice(0, 9)}...
            </p>
            <p className="font-mont font-[500] pl-2">
              Votes: {item[4].toString()}
            </p>
            <div className="flex items-center justify-center my-3 hover:scale-105">
              <button
                className="bg-[#01945a] flex items-center text-[25px] font-[600]  justify-center p-3 w-[90%] gap-2 text-white"
                onClick={() => handleVote(item[6], item[0].toString())}
              >
                Vote
                <AiOutlineCheck />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
