import React from "react";
import { BsCircle, BsTriangle, BsSquare } from "react-icons/bs";
import {
  FiTwitter,
  FiCircle,
  FiTriangle,
  FiSquare,
  FiGithub,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Open_Sans, Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: '100',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '700'
})

const ContactText = () => {
  const paragraphVariants = {
    initial: {
      opacity: 0,
      x: "150",
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  const headerVariant = {
    init: {
      opacity: 0,
      x: "150",
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  const contactsVariant = {
    init: {
      opacity: 0,
      y: "150",
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className={`flex flex-col gap-10 p-5 w-full h-[40%] md:w-[40%] md:h-full justify-center ${poppins.className}`}>
      <motion.p
        className="font-semibold text-scheme-white"
        transition={{
          ease: "easeInOut",
          duration: 0.9,
          type: "spring",
          delay: 0.5,
        }}
        variants={paragraphVariants}
        animate="animate"
        initial="initial"
      >
        Have an idea? <br /> Let's talk...
      </motion.p>
      <div className="">
        <motion.p
          transition={{
            ease: "easeInOut",
            duration: 1,
            type: "spring",
            delay: 0.8,
          }}
          variants={headerVariant}
          animate="animate"
          initial="init"
          className={`text-8xl md:text-8xl lg:text-9xl underline uppercase font-semibold text-scheme-white ${openSans.className}`}
        >
          Get In <br /> Touch
        </motion.p>
      </div>
      <motion.ul
        transition={{
          ease: "easeInOut",
          duration: 0.9,
          type: "spring",
          delay: 0.5,
        }}
        variants={contactsVariant}
        animate="animate"
        initial="init"
        className="flex-col list-none flex gap-4 text-scheme-white"
      >
        <li className="hover:text-scheme-yellow ">
          <a
            href="mailto:petersimon0730@gmail.com"
            className="flex gap-4 items-center"
          >
            <FiCircle className="text-base font-semibold" /> petersimon0730@gmail.com
          </a>
        </li>
        <li className="flex gap-4 hover:text-scheme-yellow">
          <a href="https://wa.me/2347052359969" className="flex gap-4 items-center">
            <FiTriangle className="text-base font-semibold" />
            +234-70-5235-9969
          </a>
        </li>
        <li className="flex gap-4 hover:text-scheme-yellow">
          <a href="https://www.linkedin.com/in/peter-simon-99b317220" className="flex gap-4 items-center">
            <FiSquare className="text-base font-semibold" />
            LinkedIn
          </a>
        </li>
        <li className="flex gap-4 hover:text-scheme-yellow">
          <a href="https://twitter.com/GoofyWithRae?t=jBy1sHaE8RbDWWApsuso-g&s=09" className="flex gap-4 items-center">
            <FiTwitter className="text-base font-semibold" />
            Twitter
          </a>
        </li>
        <li className="flex gap-4 hover:text-scheme-yellow">
          <a href="https://github.com/NordCore704" className="flex gap-4 items-center">
            <FiGithub className="text-base font-semibold" />
            Github
          </a>
        </li>
      </motion.ul>
    </div>
  );
};

export default ContactText;
