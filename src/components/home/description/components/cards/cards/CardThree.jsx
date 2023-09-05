import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaNodeJs } from "react-icons/fa";

const CardThree = () => {
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
        delay: 1.2,
      }}
      variants={mainVariant}
      animate={animation}
      initial="init"
      ref={ref}
      className="bg-scheme-ash-blue-2 py-10 shadow-md w-56 h-56 text-xl font-semibold text-scheme-white flex items-center justify-end flex-col"
    >
      <div className="flex flex-row-reverse items-center gap-5">
        <p>Node Js</p>
        <FaNodeJs />
      </div>
      <p className="text-sm font-semibold">(in view)</p>
    </motion.div>
  );
};

export default CardThree;
