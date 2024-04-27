"use client";

import LanguageDial from "@/components/Buttons/LanguageDial";
import LanguageSwitch from "@/components/Utility/LanguageSwitch";
import { PageContext } from "@/contexts/PageContext";
import { useContext, useEffect, useRef } from "react";

const FloatingNav = ({ setIsOpen, setIsContactsOpen }) => {
  const { stage, setStage } = useContext(PageContext);

  const node = useRef();

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const FloatingItem = ({ targetStage, children }) => {
    return (
      <li
        onClick={() => {
          setIsOpen(false);
          if (stage !== targetStage) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setStage(targetStage);
          }
        }}
        className="floating-menu-item"
      >
        {children}
      </li>
    );
  };

  return (
    <div
      className="mx-auto bg-primary p-6 text-2xl font-bold text-white"
      ref={node}
    >
      <ul
        key="en_nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="floating-menu-list"
      >
        <FloatingItem targetStage="home">
          <LanguageSwitch en="Home" it="Home" />
        </FloatingItem>
        <FloatingItem targetStage="skills">
          <LanguageSwitch en="Skills" it="Competenze" />
        </FloatingItem>
        <FloatingItem targetStage="contacts">
          <LanguageSwitch en="Contacts" it="Contatti" />
        </FloatingItem>
        <FloatingItem targetStage="career">
          <LanguageSwitch en="Career" it="Carriera" />
        </FloatingItem>
      </ul>
      <div className="mt-4 flex justify-end pr-6">
        <LanguageDial />
      </div>
    </div>
  );
};

export default FloatingNav;
