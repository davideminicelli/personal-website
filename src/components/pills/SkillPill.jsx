"use client";

import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

const SkillPill = ({ imageUrl, delay, children }) => {
  return (
    <motion.div
      className="m-1 flex w-max items-center overflow-hidden rounded-full bg-white p-1 text-black"
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ delay, duration: 0.5, ease: "easeInOut" }}
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay,
        duration: 0.5,
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
    >
      <Image
        width={50}
        alt=""
        height={50}
        className="aspect-square rounded-full"
        src={imageUrl}
      />
      <p className="mx-4 overflow-hidden font-medium uppercase">{children}</p>
    </motion.div>
  );
};

export default SkillPill;
