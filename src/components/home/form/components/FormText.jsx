import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

const FormText = () => {
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
    <motion.div className={`h-[50%] w-full md:w-[50%] md:h-full flex flex-col gap-8 justify-center items-center p-5 ${poppins.className}`}  transition={{
      ease: "easeInOut",
      duration: 2,
      type: "spring",
      delay: 0,
    }}
    variants={mainVariant}
    animate={animation}
    initial="init"
    ref={ref}>
      <p className={`font-semibold text-2xl text-scheme-white md:text-left text-center md:self-start self-center ${openSans.className}`}>
        Got a project in mind? <br /> Let's talk then.
      </p>
      <p className="text-scheme-gray md:text-left text-center self-center md:self-start">
        Have a fantastic project concept that's been on your mind? Let's connect and discuss it in detail.
      </p>
      <a
        href="mailto:petersimon0730@gmail.com"
        className="font-semibold text-scheme-yellow  flex gap-1 items-center self-center md:self-start justify-center"
      >
        petersimon0730@gmail.com <BsArrowRight className="mt-1" />
      </a>
    </motion.div>
  );
};

export default FormText;
