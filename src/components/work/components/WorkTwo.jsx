import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdArrowDropDown } from "react-icons/md";
import { BsAsterisk } from "react-icons/bs";
import { projects } from "@/constants/projects";
import { Open_Sans, Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: '300',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '700'
})

const WorkTwo = () => {
  const mainVariant = {
    init: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  const headerVariant = {
    init: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className={`p-5 md:w-[50%] md:h-[100dvh] w-full h-[50%] flex flex-col gap-8  text-scheme-white ${poppins.className}`}>
      <motion.div className="border-b p-2" transition={{
        ease: "easeInOut",
        duration: 2,
        type: "spring",
      }}
      variants={headerVariant}
      animate='animate'
      initial="init">
        <p className={`text-xl font-semibold ${openSans.className}`}>Projects</p>
      </motion.div>
      {projects.map((item, index) => (
        <motion.div
          className=""
          key={index}
          transition={{
            ease: "easeInOut",
            duration: 1,
            type: "spring",
            delay: index * 0.2,
          }}
          variants={mainVariant}
          animate="animate"
          initial="init"
        >
          <details className="group border-b">
            <summary className="flex items-center gap-1 marker:content-none hover:cursor-pointer hover:text-scheme-yellow font- justify-between">
              {item.projectName}{" "}
              <MdArrowDropDown className="-rotate-90 group-open:rotate-0 transition-transform" />
            </summary>
            <article className="flex flex-col gap-1 px-2">
              <a
                href={item.projectGithub}
                className="hover:text-scheme-yellow flex items-center gap-1 text-sm"
              >
                <BsAsterisk className="text-[7px]" /> See Code
              </a>
              <a
                href={item.projectURL}
                className="hover:text-scheme-yellow flex items-center gap-1 text-sm"
              >
                <BsAsterisk className="text-[7px]" /> See Project
              </a>
            </article>
          </details>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkTwo;
