import React, { useRef, useContext, CSSProperties, useState } from "react";
import { motion } from "framer-motion";
import { ModalContext } from "@/utils/ModalContext";
import { hide } from "@/utils/ModalActions";
import useSound from "use-sound";
import { ScaleLoader } from "react-spinners";

type Props = {};

const AnthemModal = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [play, { stop, pause, duration }] = useSound("/national-anthem.mp3", {
    volume: 1,
  });
  const { dispatch } = useContext(ModalContext);
  const outerDiv = useRef<HTMLDivElement>(null);
  const innerDiv = useRef<HTMLDivElement>(null);
  const outerBounds = outerDiv.current?.getBoundingClientRect();
  const innerBounds = innerDiv.current?.getBoundingClientRect();
  const handleClick = (event: MouseEvent) => {
    if (outerBounds && innerBounds) {
      if (
        event.clientX >= outerBounds.left &&
        event.clientX <= outerBounds?.right &&
        event.clientY >= outerBounds.top &&
        event.clientY <= outerBounds?.bottom &&
        (event.clientX < innerBounds.left ||
          event.clientX > innerBounds.right ||
          event.clientY < innerBounds.top ||
          event.clientY > innerBounds.bottom)
      ) {
        stop();
        dispatch(hide());
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
      <ScaleLoader
        color={"white"}
        loading={loading}
        cssOverride={override}
        radius={10}
        width={5}
      />
    );
  };
  const handlePlayanthem = () => {
    setLoading(true);
    play();
  };
  const handleStop = () => {
    setLoading(false);
    stop();
    dispatch(hide());
  };
  return (
    <div
      onClick={(event: any) => handleClick(event)}
      ref={outerDiv}
      className="bg-[rgba(0,0,0,0.5)] w-full h-screen fixed flex items-center justify-center z-[900] overflow-hidden "
    >
      <motion.div
        ref={innerDiv}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center justify-center bg-gradient-to-r from-[#01945a] to-[#a9e2cb] rounded-lg h-[auto] py-7 w-[90%] sm:w-[400px]  md:h-[70%] md:w-[70%] "
      >
        <motion.img
          src="/balloons.png"
          alt=""
          className="animate-pulse w-[300px]"
        />
        <p className="text-white text-[25px] font-popp font-[600] text-center">
          In honour of our country Nigeria, Join me as we sing the National
          Anthem
        </p>
        <div className="text-white pl-3 text-[20px] font-[600] flex w-full items-center justify-center mt-6 gap-3">
          <button
            onClick={() => handleStop()}
            className="bg-[#c10622] border-2 shadow-xl border-white py-3 px-3 md:p-5 rounded-md"
          >
            Cancel
          </button>
          {!loading ? (
            <button
              onClick={() => handlePlayanthem()}
              className="bg-[#d6c18a] border-2 shadow-xl border-white py-3 px-3 md:p-5 rounded-md"
            >
              Proceed
            </button>
          ) : (
            <Loader />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AnthemModal;
