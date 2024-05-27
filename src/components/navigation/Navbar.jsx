"use client";
import { AnimatePresence, motion } from "framer-motion";
import LanguageDial from "../Buttons/LanguageDial";
import { PageContext } from "@/contexts/PageContext";
import { useContext, useEffect, useRef } from "react";
import Image from "next/image";

const Navbar = () => {
  const { language, setStage } = useContext(PageContext);

  const navRef = useRef(null);

  const handleClick = (id) => {
    const currentSection = document.getElementById(id);
    // scroll to the top of the section minus 96 px
    window.scrollTo({
      top: currentSection.offsetTop - 96,
      behavior: "smooth",
    });

    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // add class bgPrimary to navRef when scrolling
  useEffect(() => {
    window.onscroll = () => {
      if (navRef.current) {
        if (window.scrollY > 30) {
          navRef.current.classList.add("bg-primary");
        } else {
          navRef.current.classList.remove("bg-primary");
        }
      }
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed left-0 top-0 z-10 hidden w-full font-heading duration-200 md:block"
    >
      <div className="mx-auto flex h-24 w-10/12 max-w-screen-lg items-center text-white">
        <Image
          src="/images/icon.jpg"
          alt="Davide Minicelli"
          width={50}
          height={50}
          className="h-12 w-12 rounded-lg shadow-xl"
        />
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
                onClick={() => handleClick("home-section")}
                className="cursor-pointer leading-none duration-200 hover:text-accent-off "
              >
                Home
              </li>
              <li
                onClick={() => handleClick("skills-section")}
                className="cursor-pointer leading-none duration-200 hover:text-accent-off"
              >
                Skills
              </li>
              <li
                onClick={() => handleClick("contacts-section")}
                className="cursor-pointer leading-none duration-200 hover:text-accent-off"
              >
                Contacts
              </li>
              <li
                onClick={() => handleClick("career-section")}
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
                onClick={() => handleClick("home-section")}
                className=":text-accent-off cursor-pointer leading-none"
              >
                Home
              </li>
              <li
                onClick={() => handleClick("skills-section")}
                className="cursor-pointer leading-none duration-200 hover:text-accent-off"
              >
                Competenze
              </li>
              <li
                onClick={() => handleClick("contacts-section")}
                className="cursor-pointer leading-none duration-200 hover:text-accent-off"
              >
                Contatti
              </li>
              <li
                onClick={() => handleClick("career-section")}
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
