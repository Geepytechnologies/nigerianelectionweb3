import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

const Index = (props: Props) => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  });
  return (
    <Layout>
      <div className="min-h-screen font-mont text-[30px] text-center flex items-center justify-center ">
        <h1>404, Page Not Found</h1>
      </div>
    </Layout>
  );
};

export default Index;
