import React from "react";
import { man } from "@/exports/image-exports";
import Image from "next/image";
import {
  BsTwitter,
  BsLinkedin,
  BsFacebook,
  BsEnvelopeFill,
} from "react-icons/bs";
import { motion } from "framer-motion";
import { Open_Sans, Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: '100',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '800',
})

const Hero = () => {
  const headerVariant = {
    init: {
      y: "140",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  const mainVariant = {
    init: {
      x: '-100',
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      transition={{
        ease: "easeInOut",
        duration: 2,
        type: "spring",
        delay: 0.8,
      }}
      variants={mainVariant}
      animate="animate"
      initial="init"
      className="w-full md:w-[60%] lg:w-[60%] h-[60%] md:h-full flex gap-10 md:gap-16 items-center justify-center flex-col relative overflow-hidden"
    >
      <div className="flex flex-col gap-10 z-10 w-full">
        <motion.h1
          className={`font-bold text-9xl  flex text-scheme-white line z-10 ${openSans.className}`}
          transition={{
            ease: "easeInOut",
            duration: 2,
            type: "spring",
            delay: 1.2,
          }}
          variants={headerVariant}
          animate="animate"
          initial="init"
        >
          Peter <br /> Simon.
        </motion.h1>
        <hr className="w-14 h-1 border-scheme-yellow bg-scheme-yellow rounded-lg z-10" />
      </div>
      <Image
        src={man}
        className="absolute top-0 w-20 sm:w-72 md:w-96 lg:w-[400px] right-0 sm:right-8 lg:right-40 bg-scheme-yellow border-2 rounded-full"
      />
      <div className="flex gap-3 items-center z-10 w-full">
        <a href="https://twitter.com/GoofyWithRae?t=jBy1sHaE8RbDWWApsuso-g&s=09" className="">
          <BsTwitter className="hover:text-scheme-yellow text-scheme-white" />
        </a>
        <a href="https://www.linkedin.com/in/peter-simon-99b317220" className="">
          <BsLinkedin className="hover:text-scheme-yellow text-scheme-white" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100024412431318&mibextid=ZbWKwL" className="">
          <BsFacebook className="hover:text-scheme-yellow text-scheme-white" />
        </a>
        <a href="mailto:petersimon0730@gmail.com" className="">
          <BsEnvelopeFill className="hover:text-scheme-yellow text-scheme-white" />
        </a>
      </div>
    </motion.div>
  );
};

export default Hero;
