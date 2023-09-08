import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { nftInfo, card } from "@/exports/image-exports";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Open_Sans, Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: '300',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '700'
})

const DisplayOne = () => {
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start("animate");
    } else {
      animation.start("init");
    }
  });
  const imageVariant = {
    init: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  const textVariant = {
    init: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div
      className={`h-[50%] w-full sm:w-[50%] sm:h-full flex flex-col gap-8 justify-center items-center p-5 ${poppins.className}`}
      ref={ref}
    >
      <motion.div
        className="flex flex-col gap-4"
        transition={{
          ease: "easeInOut",
          duration: 2,
          type: "spring",
          delay: 0.5,
        }}
        variants={textVariant}
        animate={animation}
        initial="init"
        ref={ref}
      >
        <p className="text-scheme-gray sm:text-left text-center text-sm">
          - portfolio
        </p>
        <p className={`font-semibold text-2xl text-scheme-white sm:text-left text-center ${openSans.className}`}>
          All Creative Works, Featured Projects
        </p>
        <p className="text-center sm:text-left text-scheme-gray ">
          Here are snapshots of some featured projects of mine, let's
          collaborate and build more interesting stuff!
        </p>

        <Link
          href={"/work"}
          className="flex items-center gap-1 font-semibold text-scheme-yellow hover:underline hover:border-dashed hover:border-scheme-yellow self-center sm:self-start"
        >
          Explore More
          <BsArrowRight className="mt-1" />{" "}
        </Link>
      </motion.div>
      <motion.div
        className=""
        transition={{
          ease: "easeInOut",
          duration: 2,
          type: "spring",
          delay: 0.9,
        }}
        variants={imageVariant}
        animate={animation}
        initial="init"
        ref={ref}
      >
        <a href="https://github.com/NordCore704/nft-info" className="flex flex-col items-center gap-2">
          <Image src={card} className="rounded-md " />
          <p className="text-scheme-white text-lg font-semibold hover:text-scheme-yellow">
            NftInfo
          </p>
        </a>
      </motion.div>
    </div>
  );
};

export default DisplayOne;
