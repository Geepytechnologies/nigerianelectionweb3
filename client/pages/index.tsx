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
      {modal && <AnthemModal data={playOn} />}
      <Layout>
        <main className="bg-[#f1eff1]">
          <Hero />
          <Card data={candidateDetails} />
          <Chart data={candidateDetails} />
        </main>
      </Layout>
    </>
  );
}
