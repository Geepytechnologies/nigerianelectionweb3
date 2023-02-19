import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import useSound from "use-sound";
import { useEffect } from "react";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [playOn] = useSound("/anthem.mp3", { volume: 1 });
  const [playActive] = useSound("/anthem.mp3", { volume: 1 });
  return (
    <>
      <Head>
        <title>Nigerian Election</title>
        <meta
          name="description"
          content="Vote for your favorite Nigerian presidential candidates securely and transparently on the blockchain with Nigerian Election. Our decentralized platform ensures the integrity and accuracy of the voting process, giving every citizen a voice in shaping the future of Nigeria. Join the movement and cast your vote today."
        />
        <meta charSet="UTF-8"></meta>
        <meta
          name="keywords"
          content="elections, voting, web3 voting, blockchain voting system, Nigerian elections"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/circular-min.png" />
      </Head>
      <Layout>
        <Hero />
        {/* <main className="min-h-screen"></main> */}
      </Layout>
    </>
  );
}
