import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsArrowRight, BsPin } from "react-icons/bs";

const Form = () => {
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
        delay: 0.3,
      }}
      variants={mainVariant}
      animate={animation}
      initial="init"
      ref={ref}
      className="h-[50%] w-full md:w-[50%] md:h-full flex flex-col gap-8 justify-center items-center p-5"
    >
      <p className="font-semibold text-2xl self-center md:self-start text-center md:text-left capitalize text-scheme-white">
        Got an estimation for your Project? <br /> Get in touch with me!
      </p>
      <form
        action=""
        className="w-full flex items-center justify-center flex-col md:justify-normal gap-5"
      >
        <input
          type="text"
          className="bg-transparent border-b w-full placeholder:text-scheme-gray text-scheme-white outline-none border-gray-500"
          placeholder="Tell Me Your Name"
        />
        <input
          type="text"
          className="bg-transparent border-b w-full placeholder:text-scheme-gray outline-none text-scheme-white border-gray-500"
          placeholder="What You Want Your Email To Be"
        />

        <button className="flex w-full justify-between items-center font-semibold text-scheme-white p-2 gap-5 hover:text-scheme-yellow">
          Pitch Your Idea{" "}
          <span className="flex gap-2 flex-row-reverse">
            <BsArrowRight className="text-scheme-yellow" />{" "}
            <BsPin className="text-gray-600" />
          </span>
        </button>
      </form>
    </motion.div>
  );
};

export default Form;
