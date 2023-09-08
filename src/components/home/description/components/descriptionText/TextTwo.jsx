import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Open_Sans, Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: '300',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '800'
})

const TextTwo = () => {
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
  }, [inView]);
  return (
    <motion.div
      className={`text-scheme-white w-full md:w-[50%] lg:w-[50%] h-[40%] md:h-full flex gap-2 md:gap-6 md:text-left p-3 items-center justify-center flex-col relative overflow-hidden ${poppins.className}`}
      ref={ref}
      transition={{
        ease: "easeInOut",
        duration: 2,
        type: "spring",
        delay: 0.8,
      }}
      animate={animation}
      initial="init"
      variants={mainVariant}
    >
      <p className={`text-3xl text-center md:self-start font-semibold capitalize ${openSans.className}`}>
        Creativity is birthed from Consistency🙃
      </p>
      <p className={`text-center md:text-left text-scheme-gray`}>
        Being creative is a result of constant of consistency, share projects or
        gigs or collaborations so we can hit that extra shot at being more
        creative together!
      </p>
      <div className="flex gap-10 items-center justify-center">
        <div className="flex items-center gap-2 mt-3">
          <p className={`text-4xl font-semibold text-scheme-yellow ${openSans.className}`}>3+</p>
          <p className={`text-scheme-white`}>
            Years of <br /> experience
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className={`text-4xl font-semibold text-scheme-yellow ${openSans.className}`}>20+</p>
          <p className="text-scheme-white">
            Satisfied <br />
            Clients
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TextTwo;
