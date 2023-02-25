import React, { useState } from "react";
import { useContract, useSigner, useAccount } from "wagmi";
import { ABI } from "../abi/election";
import { useProvider } from "wagmi";
import { contractaddress } from "@/pages";
import { AiOutlineCheck } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from "react-spinners";
import { CSSProperties } from "react";
import { useRouter } from "next/router";

type Props = {
  data: any;
};

const Card = ({ data }: Props) => {
  const { address, isConnecting, isConnected, isDisconnected } = useAccount();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const provider = useProvider();
  const { data: signer, isError, isLoading } = useSigner();
  const contract = useContract({
    address: contractaddress,
    abi: ABI,
    signerOrProvider: signer,
  });
  const handleVote = async (address: any, id: any) => {
    setLoading(true);
    try {
      const res = await contract?.vote(address, id);
      console.log({ response: res });
      setLoading(false);
      toast.success("Your Vote has been Registered!!!");
    } catch (err: any) {
      if (err.message.includes("You haven't registered yet")) {
        toast.error("You haven't registered yet");
        setLoading(false);
        router.push("/register");
      } else if (err.message.includes("you have already voted")) {
        toast.error("You have already voted");
        setLoading(false);
      }
    }
  };
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const Loader = () => {
    return (
      <BeatLoader
        color={"white"}
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="my-4">
        <div className="flex overflow-x-scroll min-h-full md:grid-cols-2 m-2 md:grid grid-cols-1 lg:grid-cols-3 gap-3">
          {data?.map((item: any, index: any) => (
            <div
              key={index}
              className="flex flex-col h-[auto] py-4 rounded-br-[20px] min-w-[350px] shadow-2xl bg-[white] overflow-hidden"
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
              {!loading ? (
                isConnected && (
                  <div className="flex items-center justify-center my-3 hover:scale-105">
                    <button
                      className="bg-[#01945a] flex items-center text-[25px] font-[600]  justify-center p-3 w-[90%] gap-2 text-white"
                      onClick={() => handleVote(item[6], item[0].toString())}
                    >
                      Vote
                      <AiOutlineCheck />
                    </button>
                  </div>
                )
              ) : (
                <Loader />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
