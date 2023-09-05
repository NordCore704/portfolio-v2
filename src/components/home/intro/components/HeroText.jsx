import Link from "next/link";
import React from "react";
import { MdArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const HeroText = () => {
  const mainVariant = {
    init: {
      y: "140",
   
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      transition={{
        ease: "easeInOut",
        duration: 2,
        type: "spring",
        delay: 2,
      }}
      variants={mainVariant}
      animate="animate"
      initial="init"
      className="text-scheme-white w-full md:w-[40%] lg:w-[40%] h-[40%] md:h-full flex gap-2 md:gap-6 md:text-left items-center md:justify-center flex-col relative overflow-hidden"
    >
      <p className="text-scheme-gray md:text-left md:w-full">- Introduction</p>
      <div className="">
        <p className="font-semibold text-2xl text-center md:text-left">
          Crafting Immersive Web Experiences: Meet Frontend Genius Behind the
          code.
        </p>
      </div>
      <div className="">
        <p className="text-scheme-gray text-center md:text-left">
          Passionate Frontend Developer specializing in React and Nextjs,
          crafting engaging user experiences with a keen eye for detail. Let's
          collaborate to bring your digital visions to life!
        </p>
      </div>
      <div className="md:self-start self-center">
        <Link
          className="font-semibold  text-scheme-yellow hover:text-scheme-gray flex gap-1 items-center justify-center"
          href={"/about"}
        >
          My story <MdArrowRight className="" />{" "}
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroText;
