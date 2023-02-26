import { Inter } from "@next/font/google";
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
import { useProvider } from "wagmi";
import { useContract, useSigner, useAccount } from "wagmi";
import { ABI } from "../abi/election";
import { AppContext, setCandidates } from "@/utils/AppContext";
import { Header } from "@/components/Header";
import Regbutton from "@/components/Regbutton";

const inter = Inter({ subsets: ["latin"] });
export const contractaddress = "0xCe8a0c6d3Ee92939171481Bc335c9B3789728fb4";

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

  const { modal } = useContext(ModalContext);
  const { candidates, dispatch: set } = useContext(AppContext);
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
      {modal && <AnthemModal />}
      <Layout>
        <main className="bg-[#f1eff1]">
          <Hero />
          <Regbutton />
          <Card data={candidateDetails} />
          <Chart data={candidateDetails} />
        </main>
      </Layout>
    </>
  );
}
