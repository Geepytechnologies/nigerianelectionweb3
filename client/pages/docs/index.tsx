import { Header } from "@/components/Header";
import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

type Props = {};

const Index = (props: Props) => {
  return (
    <Layout>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center w-full">
        <div className="bg-[#f7f7f7] w-[80%] py-6 px-2 h-auto min-h-[400px] shadow-2xl">
          <div className="flex gap-2 w-full items-center justify-center font-[600] font-mont text-[20px] tracking-[1px]">
            <img src="/ballotbox.png" alt="ballotbox" className="w-[20%]" />
            <h1>Steps to Follow</h1>
          </div>
          <p className="font-popp">
            This dapp is curently running on the polygon mumbai testnet, You
            will have to add this network if you don&apos;t have it in your
            wallet
          </p>
          <ol className="list-disc list-inside font-popp mt-2">
            <li className="break-words">
              Click on add a custom network in your wallet and put in these
              details;<br></br>
              RPC url:{" "}
              <Link
                href="https://endpoints.omniatech.io/v1/matic/mumbai/public"
                className="underline text-blue-600"
              >
                https://endpoints.omniatech.io/v1/matic/mumbai/public{" "}
              </Link>
              <br />
              Chain ID: 80001
              <br />
              <span className="font-[600]">NB:</span> You can request for the
              mumbai faucets through a provider like alchemy, so as to cover the
              gas fees.
            </li>
            <li>
              You can now click on Get started to connect your wallet and
              interact with the dapp.
            </li>
            <li>
              Click on Register as a voter to fill in your details, the VIN
              represents your PVC Number{" "}
            </li>
            <li>
              After you register, you can now proceed to vote your favorite
              candidates by clicking on the vote button.
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
