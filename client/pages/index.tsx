import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import useSound from "use-sound";
import { useEffect, useState, useContext } from "react";
import Card from "@/components/Card";
import Chart from "@/components/Chart";
import Hero from "@/components/Hero";
import AnthemModal from "@/components/AnthemModal";
import { ModalContext } from "@/utils/ModalContext";
import { show } from "@/utils/ModalActions";
import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useProvider } from "wagmi";
import { useContract, useSigner, useAccount } from "wagmi";
import { ABI } from "../abi/election";
import { AppContext, setCandidates } from "@/utils/AppContext";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
export const contractaddress = "0x857c7FF5Be4a640B7E27a6B0A6f377Ba497068b6";

type props = {};

export default function Home() {
  const { address, isConnecting, isConnected, isDisconnected } = useAccount();
  const [connected, setConnected] = useState(false);
  const [candidateDetails, setCandidatedetails] = useState<any>();
  const provider = useProvider();
  useEffect(() => {
    setConnected(true);
  }, [isConnected]);
  const { data: signer, isError, isLoading } = useSigner();
  const contract = useContract({
    address: contractaddress,
    abi: ABI,
    signerOrProvider: provider,
  });

  const [playOn] = useSound("/anthem.mp3", { volume: 1 });
  const [playActive] = useSound("/anthem.mp3", { volume: 1 });
  const { modal } = useContext(ModalContext);
  const { candidates, dispatch: set } = useContext(AppContext);
  // const { data, isError, isLoading } = useContractRead({
  //   address: contractaddress,
  //   abi: ABI,
  //   functionName: "getNumberOfVoters",
  // });
  // useEffect(() => {
  //   const settings = {
  //     apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID,
  //     network: Network.MATIC_MUMBAI,
  //   };
  //   const myalchemy = new Alchemy(settings);
  //   //@ts-ignore
  //   setAlchemy(myalchemy);
  // }, []);
  // const contract = useContract({
  //   address: contractaddress,
  //   abi: ABI,
  // });

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     dispatch(show());
  //     console.log("Function called after 5 seconds");
  //   }, 5000);

  //   // Clear the timeout on component unmount
  //   // return () => clearTimeout(timer);
  // }, []); // Run this effect only once on mount
  // const { config } = usePrepareContractWrite({
  //   address: contractaddress,
  //   abi: ABI,
  //   functionName: "vote",
  //   args: ["0x33e354AAf25192a9f4a3f144251058b6887916f6", 1],
  //   // enabled: false,
  // });
  // const {
  //   data: mydata,
  //   isLoading: myloading,
  //   isSuccess,
  //   write,
  // } = useContractWrite(config);
  const getCandidates = async () => {
    const candidateAddress = await contract?.getCandidates();
    const data = await Promise.all(
      candidateAddress.map(async (id: any) => {
        const response = await contract?.getcandidateInfo(id);
        return response;
      })
    );
    setCandidatedetails(data);
    set(setCandidates(data));
  };
  useEffect(() => {
    getCandidates();
  }, []);
  return (
    <>
      <Header />
      {/* {modal && <AnthemModal data={playOn} />} */}
      <Layout>
        <main className="bg-[#f1eff1]">
          {/* <button onClick={handleVote}>vote</button> */}
          <Hero />
          <Card data={candidateDetails} />
          <Chart data={candidateDetails} />
        </main>
      </Layout>
    </>
  );
}
