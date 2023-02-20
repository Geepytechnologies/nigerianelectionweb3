import React, { useRef, useContext } from "react";
import { motion } from "framer-motion";
import { ModalContext } from "@/utils/ModalContext";
import { hide } from "@/utils/ModalActions";

type Props = {};

const AnthemModal = (props: Props) => {
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
        dispatch(hide());
      }
    }
  };
  return (
    <div
      onClick={(event: any) => handleClick(event)}
      ref={outerDiv}
      className="bg-[rgba(0,0,0,0.5)] w-full h-screen fixed flex items-center justify-center z-[500] overflow-hidden "
    >
      <motion.div
        ref={innerDiv}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="bg-white h-[80%] w-[400px] md:h-[60%] md:w-[70%] "
      >
        hello
      </motion.div>
    </div>
  );
};

export default AnthemModal;
