import React from "react";
import { motion } from 'framer-motion'
import { Open_Sans, Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: '300',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '700'
})


const AboutText = () => {
  const variants = {
    init: {
      opacity: 0,
      y: 100,
    }, 
    animate: {
      opacity: 1,
      y: 0,
    }
  }
  return (
    <motion.div className={`flex flex-col lg:flex-row gap-5 p-10 w-full h-[60%] md:self-start md:w-[60%] md:h-full justify-center items-center lg:mt-14 ${poppins.className}`} variants={variants} animate='animate' initial='init' transition={{
      delay: 0.4,
      duration: 2,
      type: 'spring',
      ease: 'easeInOut'
    }}>
      <div className="flex flex-col gap-4 lg:w-[60%] lg:mt-14 self-center lg:self-end">
        <p className={`text-7xl font-semibold text-scheme-white text-center md:text-left${openSans.className}`}>
          My Name is Simon Peter
        </p>
        <p className="text-scheme-gray text-center md:text-left">
          Meet Simon Peter, a React Frontend Developer, who is currently
          combining passion for aesthetics and functionality to improve the
          experience on the internet and make it a better space.
        </p>
        <p className="text-scheme-gray text-center md:text-left">
          I am currently on the lookout for opportunities and projects that will
          help me grow even better. With boundless enthusiasm and design
          finesse, I am that React and Nextjs Developer you have been in the
          long search for!👽.
        </p>
      </div>
      <div className="flex gap-2 flex-col text-scheme-gray self-center">
        <div className="flex gap-1 ">
          <p className="border p-1 rounded-lg text-scheme-gray text-center font-semibold">
            Frontend
          </p>
          <p className="border p-1 rounded-lg text-scheme-gray font-semibold text-center">
          Design
          </p>
          <p className="border p-1 text-center rounded-lg text-scheme-gray font-semibold">
            Animations
          </p>
        </div>
        <div className="flex gap-1">
          <p className="border p-1 rounded-lg text-scheme-gray font-semibold">
            HTML
          </p>
          <p className="border p-1 rounded-lg text-scheme-gray font-semibold">
            JavaScript
          </p>
          <p className="border p-1 rounded-lg text-scheme-gray font-semibold">
            Python
          </p>
        </div>
        <div className="flex gap-1">
        <p className="border p-1 rounded-lg text-scheme-gray font-semibold">
          C
        </p>
        <p className="border p-1 rounded-lg text-scheme-gray font-semibold">
          TypeScript
        </p>
        <p className="border p-1 rounded-lg text-scheme-gray font-semibold">
          CSS
        </p>
        <p className="border p-1 rounded-lg text-scheme-gray font-semibold">
          Framer Motion
        </p>
        </div>
        <div className="flex gap-1">
        <p className="border p-1 rounded-lg text-scheme-gray font-semibold">
          React
        </p>
        <p className="border p-1 rounded-lg text-scheme-gray font-semibold">
          Nextjs
        </p>
        <p className="border p-1 rounded-lg text-scheme-gray font-semibold">
          GSAP
        </p>
        </div>
        
      </div>
    </motion.div>
  );
};

export default AboutText;
