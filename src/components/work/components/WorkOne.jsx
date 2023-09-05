import React from "react";
import { motion } from "framer-motion";

const WorkOne = () => {
  const textVariantOne = {
    init: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    } 
  }
  const textVariantTwo = {
    init: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    } 
  }


  return (
    <div className="p-5 md:w-[50%] md:h-[100dvh] w-full h-[50%] flex flex-col justify-between gap-16 text-scheme-white">
      <div className="h-[50%] w-full">
        <motion.p  transition={{
        ease: "easeInOut",
        duration: 1.5,
        type: "spring",
        delay: .2,
      }}
      variants={textVariantOne}
      animate='animate'
      initial="init"
       className="font-bold uppercase text-8xl">
          Front <br />
          end
        </motion.p>
      </div>
      <div className="h-[50%] w-full flex justify-end md:justify-normal">
        <motion.p  transition={{
        ease: "easeInOut",
        duration: 2,
        type: "spring",
        delay: .8,
      }}
      variants={textVariantTwo}
      animate='animate'
      initial="init"
       className="font-bold uppercase text-8xl self-end ">
          01
        </motion.p>
      </div>
    </div>
  );
};

export default WorkOne;
