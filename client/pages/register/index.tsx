import { ABI } from "@/abi/election";
import { Header } from "@/components/Header";
import Layout from "@/components/Layout";
import { basicSchema } from "@/schemas";
import { useFormik } from "formik";
import React, { CSSProperties, useState } from "react";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";
import { contractaddress } from "..";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { BeatLoader } from "react-spinners";

type Props = {};

const Index = (props: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { address, isConnecting, isConnected, isDisconnected } = useAccount();
  const provider = useProvider();
  const { data: signer, isError, isLoading } = useSigner();
  const contract = useContract({
    address: contractaddress,
    abi: ABI,
    signerOrProvider: signer,
  });
  const { values, handleBlur, touched, errors, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        age: "",
        pvc: "",
      },
      validationSchema: basicSchema,
      onSubmit: () => register(),
    });
  const register = async () => {
    setLoading(true);
    const { name: username, age, pvc } = values;
    if (isConnected) {
      const res = await contract?.RegisterVoter(address, age, username, pvc);
      if (res) {
        setLoading(false);
        toast.success("Registration successful");
        router.push("/");
      }
    } else {
      setLoading(false);
      toast.warning("Please Click on Get started to connect wallet");
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
      <Header />
      <Layout>
        <div>
          {" "}
          <div className="">
            <p className="text-[30px] py-5 text-center tracking-[2px]">
              Register as a Voter
            </p>
            <img src="/vote_keyboard.jpg" alt="" className="w-full" />
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="flex gap-4 p-3 flex-col w-full "
            >
              <div className="flex flex-col">
                <label className="text-gray-500">Name</label>
                <input
                  type="text"
                  onBlur={handleBlur}
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Geepy"
                  className={
                    errors.name && touched.name
                      ? "p-3 outline-[#c10622] border border-[#c10622] rounded-lg outline-2"
                      : "outline-none p-3 border border-[green] rounded-lg"
                  }
                />
                {errors.name && touched.name && (
                  <span className="text-[#c10622] font-[600] font-pop text-[14px]">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-gray-500">Age</label>
                <input
                  type="text"
                  onBlur={handleBlur}
                  id="age"
                  value={values.age}
                  onChange={handleChange}
                  placeholder="60"
                  className={
                    errors.age && touched.age
                      ? "p-3 outline-[#c10622] border border-[#c10622] rounded-lg outline-2"
                      : "outline-none p-3 border border-[green] rounded-lg"
                  }
                />
                {errors.age && touched.age && (
                  <span className="text-[#c10622] mt-[5px] font-[600] font-pop text-[14px]">
                    {errors.age}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-gray-500">VIN</label>
                <input
                  id="pvc"
                  onBlur={handleBlur}
                  value={values.pvc}
                  onChange={handleChange}
                  placeholder="ZQ00 1ZZ1 0X22 3333 2003"
                  className={
                    errors.pvc && touched.pvc
                      ? "p-3 outline-[#c10622] border border-[#c10622] rounded-lg outline-2"
                      : "outline-none p-3 border border-[green] rounded-lg"
                  }
                />
                {errors.pvc && touched.pvc && (
                  <span className="text-[#c10622] font-[600] mt-[5px] font-pop text-[14px]">
                    {errors.pvc}
                  </span>
                )}
              </div>
              {!loading ? (
                <button
                  type="submit"
                  className="bg-[#d6c18a] py-3 text-[25px] rounded-lg  text-white font-[600]"
                >
                  Register
                </button>
              ) : (
                <Loader />
              )}
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
