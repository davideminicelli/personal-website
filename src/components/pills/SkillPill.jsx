"use client";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LanguageSwitch from "../Utility/LanguageSwitch";

const SkillPill = ({ imageUrl, delay, description, children }) => {
  const [showDesc, setShowDesc] = useState(false);
  const [isStill, setIsStill] = useState(false);

  const node = useRef();

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setShowDesc(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      ref={node}
      className="relative"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      onHoverStart={() => setShowDesc(true)}
      onHoverEnd={() => setShowDesc(false)}
      onBlur={() => setShowDesc(false)}
      onClick={() => setShowDesc(!showDesc)}
      onAnimationComplete={() => setIsStill(true)}
      transition={{
        delay,
        duration: 0.5,
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
    >
      <div
        className={`m-1 flex w-max cursor-help items-center overflow-hidden rounded-full ${showDesc ? "bg-primary text-white" : "bg-white text-black"} p-1 duration-200`}
      >
        <Image
          width={50}
          alt=""
          height={50}
          className="aspect-square rounded-full"
          src={imageUrl}
        />
        <p className="mx-4 overflow-hidden font-medium uppercase">{children}</p>
      </div>
      <AnimatePresence>
        {showDesc && description && isStill && (
          <>
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.2,
                ease: easeInOut,
              }}
              className="fixed bottom-0 left-0 z-10 box-border h-auto w-full"
            >
              <div className="flex bg-primary p-4 text-white">
                <p>
                  <LanguageSwitch en={description.en} it={description.it} />
                </p>
                <div
                  className="absolute -top-6 right-6 h-12 w-12 cursor-pointer rounded-full bg-primary"
                  onClick={() => setShowDesc(false)}
                >
                  <div className="absolute left-1/2 top-1/2 h-[4px] w-8 origin-center -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white duration-200 ease-in-out" />
                  <div className="absolute left-1/2 top-1/2 h-[4px] w-8 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white duration-200 ease-in-out" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillPill;
