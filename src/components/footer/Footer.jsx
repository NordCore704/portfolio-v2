import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { logo } from "@/exports/image-exports";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Open_Sans, Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: '100',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '700'
})

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
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
    <div className="h-80 flex items-center justify-center">
      <motion.div
        className={`flex flex-col items-center justify-center gap-5 ${poppins.className}`}
        transition={{
          ease: "easeInOut",
          duration: 2,
          type: "spring",
          delay: 0,
        }}
        variants={mainVariant}
        animate={animation}
        initial="init"
        ref={ref}
      >
        <Image src={logo} className="w-10" />
        <p className="text-scheme-gray">
          <span className={`font-semibold text-scheme-white ${openSans.className} text-lg`}>Thank you </span>{" "}
          for exploring my portfolio!{" "}
        </p>
        <div className="flex gap-3 text-scheme-white">
          <a href="https://github.com/NordCore704" className="hover:text-scheme-yellow">
            <FaGithub />
          </a>
          <a href="https://twitter.com/GoofyWithRae?t=jBy1sHaE8RbDWWApsuso-g&s=09" className="hover:text-scheme-yellow">
            {" "}
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/peter-simon-99b317220" className="hover:text-scheme-yellow">
            <FaLinkedinIn />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
