"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterHeader = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setDisplayText('');
          setIndex(0);
          setIsTyping(true);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [text, index, isTyping]);

  return (
    <article className="relative flex items-center justify-center w-full md:mt-14">
      <span className="absolute mx-auto top-0 text-h1 py-4 flex items-center border w-fit bg-gradient-to-r blur-xl from-[#505050] via-white to-[#f2f2f2] bg-clip-text text-5xl lg:leading-[100px] max-w-[70%] lg:max-w-[90%] box-content font-extrabold text-transparent text-center select-none">
        {displayText}
      </span>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="absolute top-0 w-fit text-h1 h-auto py-4 flex bg-gradient-to-r items-center from-[#505050] via-white to-[#f2f2f2] bg-clip-text text-5xl leading-[60px] lg:leading-[100px] max-w-[70%] lg:max-w-[90%] mx-auto font-extrabold text-transparent text-center select-auto"
      >
        {displayText}
      </motion.h1>
    </article>
  );
};

export default TypewriterHeader;