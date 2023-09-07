import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Bs3SquareFill } from "react-icons/bs";
import { MdDesktopWindows } from "react-icons/md";
import { Open_Sans, } from "next/font/google";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '700'
})

const CardOne = () => {
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
  const mainVariant = {
    init: {
      y: 100,
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
        delay: .5,
      }}
      variants={mainVariant}
      animate={animation}
      initial="init"
      ref={ref}
      className={`bg-scheme-yellow py-10 shadow-md w-56 h-56 text-xl font-semibold text-scheme-white flex items-end justify-center gap-5 flex-row-reverse ${openSans.className}`}
    >
      <p>
        Frontend <br /> Development
      </p>
      <MdDesktopWindows />
    </motion.div>
  );
};

export default CardOne;
