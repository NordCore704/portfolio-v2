import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Open_Sans, Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: '100',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '700'
})

const TextOne = () => {
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  const animation = useAnimation();

  const mainVariant = {
    init: {
      y: 150,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  useEffect(() => {
    if (inView) {
      animation.start("animate");
    } else {
      animation.start("init");
    }
  }, [inView]);



  return (
    <motion.div
      className={`text-scheme-white p-5 w-full md:w-[40%] lg:w-[40%] h-[40%] md:h-full flex gap-2 md:gap-6 md:text-left items-center justify-center flex-col relative overflow-hidden ${poppins.className}`}
      ref={ref}
      animate={animation}
      initial="init"
      variants={mainVariant}
      transition={{
        ease: "easeInOut",
        duration: 2,
        type: "spring",
      }}
    >
      <p className="text-scheme-gray self-center md:self-start">- contact</p>
      <p className={`text-3xl text-center md:text-left font-semibold ${openSans.className}`}>
        For Any Type Of Questions Or Frontend Discussions, Hit Me Up!
      </p>
      <p className="text-center md:text-left text-scheme-gray">
        Got questions or thoughts to share? Drop me a line! click on the mail
        below to connect — just a few words from your message, and I'll be in
        touch soon. Your input is important!🥷
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

export default TextOne;
