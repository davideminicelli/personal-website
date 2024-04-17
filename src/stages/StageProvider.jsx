"use client";

import { PageContext } from "@/contexts/PageContext";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import HomeStage from "./Home/HomeStage";
import SkillsStage from "./Skills/SkillsStage";

const StageProvider = () => {
  const { stage } = useContext(PageContext);

  return (
    <div className="text-white">
      <AnimatePresence mode="wait">
        {stage === "home" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={"home_stage"}
          >
            <HomeStage />
          </motion.div>
        )}
        {stage === "career" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={"career_stage"}
          >
            <h1>Career</h1>
          </motion.div>
        )}
        {stage === "skills" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={"skills_stage"}
          >
            <SkillsStage />
          </motion.div>
        )}
        {stage === "contacts" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={"contacts_stage"}
          >
            <h1>Contacts</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StageProvider;
