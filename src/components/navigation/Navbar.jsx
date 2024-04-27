"use client";
import { AnimatePresence, motion } from "framer-motion";
import LanguageDial from "../Buttons/LanguageDial";
import { PageContext } from "@/contexts/PageContext";
import { useContext } from "react";

const Navbar = () => {
  const { language, setStage } = useContext(PageContext);

  return (
    <nav className="fixed left-0 top-0 hidden w-full bg-primary md:block">
      <div className="mx-auto flex h-24 w-10/12 max-w-screen-lg items-center text-white">
        <p className="grow-[2]">Davide Minicelli</p>
        <AnimatePresence mode="wait">
          {language === "en" && (
            <motion.ul
              key="en_nav"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mx-auto mr-4 flex list-none justify-between gap-4 leading-none"
            >
              <li
                onClick={() => setStage("home")}
                className="cursor-pointer leading-none duration-200 hover:text-accent-off "
              >
                Home
              </li>
              <li
                onClick={() => setStage("skills")}
                className="cursor-pointer leading-none duration-200 hover:text-accent-off"
              >
                Skills
              </li>
              <li
                onClick={() => setStage("contacts")}
                className="cursor-pointer leading-none duration-200 hover:text-accent-off"
              >
                Contacts
              </li>
              <li
                onClick={() => setStage("career")}
                className="cursor-pointer leading-none duration-200 hover:text-accent-off"
              >
                Career
              </li>
            </motion.ul>
          )}
          {language === "it" && (
            <motion.ul
              key="it_nav"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mx-auto mr-4 flex list-none justify-between gap-4 leading-none"
            >
              <li
                onClick={() => setStage("home")}
                className=":text-accent-off cursor-pointer leading-none"
              >
                Home
              </li>
              <li
                onClick={() => setStage("skills")}
                className="cursor-pointer leading-none duration-200 hover:text-accent-off"
              >
                Competenze
              </li>
              <li
                onClick={() => setStage("contacts")}
                className="cursor-pointer leading-none duration-200 hover:text-accent-off"
              >
                Contatti
              </li>
              <li
                onClick={() => setStage("career")}
                className="cursor-pointer leading-none duration-200 hover:text-accent-off"
              >
                Carriera
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
        <LanguageDial />
      </div>
    </nav>
  );
};

export default Navbar;
