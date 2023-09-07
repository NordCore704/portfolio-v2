import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cartO, quizzical, cart, quiz } from "@/exports/image-exports";
import Image from "next/image";
import { Open_Sans, Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: '100',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '700'
})

const DisplayTwo = () => {
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
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className={`flex gap-16 flex-col-reverse sm:w-[40%] sm:h-full w-full h-[50%] items-center justify-center p-5 ${openSans.className}`}
      ref={ref}
    >
      <motion.div
        className=""
        transition={{
          ease: "easeInOut",
          duration: 2,
          type: "spring",
          delay: 0.5,
        }}
        variants={imageVariant}
        animate={animation}
        initial="init"
        ref={ref}
      >
        <a href="https://cart-online.vercel.app/" className="flex flex-col gap-2 items-center">
          <Image src={cart} className="rounded-md" />
          <p className="text-scheme-white font-semibold hover:text-scheme-yellow text-lg">
            Cart Online
          </p>
        </a>
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
        <a href="https://quizzical-rho.vercel.app/" className="flex flex-col items-center gap-2">
          <Image src={quiz} className="rounded-md" />
          <p className="text-scheme-white text-lg font-semibold hover:text-scheme-yellow">
            Quizzical
          </p>
        </a>
      </motion.div>
    </div>
  );
};

export default DisplayTwo;
