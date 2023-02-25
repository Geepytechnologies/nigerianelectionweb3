import { ABI } from "@/abi/election";
import { Header } from "@/components/Header";
import Layout from "@/components/Layout";
import { basicSchema } from "@/schemas";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";
import { contractaddress } from "..";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const Index = (props: Props) => {
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
    const { name: username, age, pvc } = values;
    if (isConnected) {
      const res = await contract?.RegisterVoter(address, age, username, pvc);
      console.log(res);
    } else {
      toast.warning("Please Click on Get started to connect wallet");
    }
  };
  const Loader = () => {
    return <img src="/circular.png" alt="loader" />;
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
            <img src="/vote_keyboard.jpg" alt="" />
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="flex gap-4 p-3 flex-col w-full "
            >
              <label className="text-white">Name</label>
              <input
                type="text"
                onBlur={handleBlur}
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Matt"
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
              {/* <div className='flex flex-col'>
    </div> */}
              <div className="flex flex-col">
                <label className="text-white">Age</label>
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
                <label className="text-white">PVC Number</label>
                <input
                  id="pvc"
                  onBlur={handleBlur}
                  value={values.pvc}
                  onChange={handleChange}
                  placeholder="asder"
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
                  className="bg-[#d6c18a] py-3 text-[25px]  text-white font-[600]"
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
