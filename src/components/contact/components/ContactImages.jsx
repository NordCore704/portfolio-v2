import React from "react";
import { motion } from "framer-motion";
import { abstract, jigsaw, messages, waze } from "@/exports/image-exports";
import Image from "next/image";

const ContactImages = () => {
  const imageOneVariants = {
    init: {
      y: "150",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  const imageTwoVariants = {
    init: {
      y: "150",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="flex flex-col gap-5 mt-14 p-5 w-full h-[60%] md:w-[60%] md:h-full justify-center items-center">
      <motion.div
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          type: "spring",
          delay: 1,
        }}
        variants={imageOneVariants}
        initial="init"
        animate="animate"
        className="flex gap-3 items-center justify-center w-full h-[50%]"
      >
        <Image src={messages} className="w-36" />
        <Image src={abstract} className="  justify-self-center" />
      </motion.div>
      <motion.div  transition={{
          ease: "easeInOut",
          duration: .9,
          type: "spring",
          delay: .9,
        }} variants={imageOneVariants} animate='animate' initial='init' className="flex items-center justify-center gap-3 w-full h-[50%]">
        <Image src={jigsaw} className="self-start justify-self-center" />
        <Image src={waze} className="w-36" />
      </motion.div>
    </div>
  );
};

export default ContactImages;
