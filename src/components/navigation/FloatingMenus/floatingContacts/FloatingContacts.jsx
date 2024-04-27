"use client";

import LanguageSwitch from "@/components/Utility/LanguageSwitch";
import { useEffect, useRef } from "react";

const FloatingContacts = ({ setIsContactsOpen }) => {
  const node = useRef();

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsContactsOpen(false);
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
    <div
      className="mx-auto bg-primary p-6 pb-12 font-bold text-white"
      ref={node}
    >
      <div
        key="en_nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="floating-menu-list"
      >
        <h2 className="text-2xl">
          <LanguageSwitch en="Contacts" it="Contatti" />
        </h2>
        <div className="mb-2 mt-4">
          <h3>
            <LanguageSwitch en="Email" it="Email" />
          </h3>
          <a href="mailto:dminicelli@gmail.com">dminicelli@gmail.com</a>
        </div>
        <div className="mb-2 mt-4">
          <h3>
            <LanguageSwitch en="Phone" it="Tel." />
          </h3>
          <a href="tel:+447535867090">+44 7535 867090</a>
        </div>
        <div className="mb-2 mt-4">
          <h3>
            <LanguageSwitch en="LinkedIn" it="LinkedIn" />
          </h3>
          <a
            href="https://www.linkedin.com/in/davide-minicelli/"
            target="_blank"
            rel="noreferrer"
          >
            Davide Minicelli - LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingContacts;
