"use client";
import { useState } from "react";
import "./Navigation.scss";
import ContactsBurger from "./FloatingMenus/ContactsBurger";

import Burger from "./FloatingMenus/floatingNav/Burger";
import FloatingNav from "./FloatingMenus/floatingNav/FloatingNav";
import FloatingContacts from "./FloatingMenus/floatingContacts/FloatingContacts";

const distance = 6;

const FloatingLayers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <div
        className={`fixed left-0 w-full bg-white ${isOpen ? "top-0" : "-top-full"} z-10 duration-300 ease-in-out`}
      >
        <div className={`fixed right-6 top-6 z-10`}>
          <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <FloatingNav />
      </div>

      {/* contacts bottom floating menu */}
      <div
        className={`fixed left-0 w-full bg-primary text-white ${isContactsOpen ? "bottom-0" : "-bottom-full"} z-10 duration-300 ease-in-out`}
      >
        <div className="fixed bottom-6 right-6 z-10">
          <ContactsBurger
            isOpen={isContactsOpen}
            setIsOpen={setIsContactsOpen}
          />
        </div>
        <FloatingContacts />
      </div>
    </div>
  );
};

export default FloatingLayers;
