import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsArrowRight, BsPin } from "react-icons/bs";
import emailjs from '@emailjs/browser'

const Form = () => {
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
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

  const handleSubmit = (e) => {

    e.preventDefault();
    const serviceId = 'service_kj6jp4r'
    const publicKey = 'DPdRzMaNJKGH1ga1W'
    const templateId = 'template_zc87syd'


    const templateParams = {
      from_email: email,
      from_name: name,
      to_name: 'Simon Peter',
      message: subject,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
      console.log('email sent successfully');
      setName('')
      setEmail('')
      setSubject('')
    }).catch((error) => {
        console.log('error sending mail', error);
      })
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
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="bg-transparent border-b w-full placeholder:text-scheme-gray text-scheme-white outline-none border-gray-500"
          placeholder="Tell Me Your Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="bg-transparent border-b w-full placeholder:text-scheme-gray outline-none text-scheme-white border-gray-500"
          placeholder="Tell Me Your Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          name="subject"
          id="subject"
          placeholder="What Is Your Idea?"
          cols="30"
          rows="10"
          className="bg-transparent border-b w-full placeholder:text-scheme-gray text-scheme-white outline-none border-gray-500"
          onChange={(e) => setSubject(e.target.value)}
        ></textarea>

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
