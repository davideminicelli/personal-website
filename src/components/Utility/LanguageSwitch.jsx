"use strict";

import { PageContext } from "@/contexts/PageContext";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";

const LanguageSwitch = ({ en = "no eng input", it = "nessun input ita" }) => {
  const { language } = useContext(PageContext);

  return (
    <AnimatePresence mode="wait">
      {language === "en" && (
        <motion.span
          key={`${en}_key`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="inline-block"
        >
          {en}
        </motion.span>
      )}
      {language === "it" && (
        <motion.span
          key={`${it}_key`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="inline-block"
        >
          {it}
        </motion.span>
      )}
    </AnimatePresence>
  );
};

export default LanguageSwitch;
