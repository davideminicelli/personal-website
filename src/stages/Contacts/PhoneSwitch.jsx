import { PageContext } from "@/contexts/PageContext";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";

const PhoneSwitch = () => {
  const { language } = useContext(PageContext);

  return (
    <AnimatePresence mode="wait">
      {language === "it" && (
        <motion.div
          key={`phone_it_key`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <h3>Tel. </h3>
          <a href="tel:+393206568198">+39 320 6568198</a>
        </motion.div>
      )}
      {language === "en" && (
        <motion.div
          key={`phone_en_key`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <h3>Phone:</h3>
          <a href="tel:+447535867090">+44 7535 867090</a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhoneSwitch;
