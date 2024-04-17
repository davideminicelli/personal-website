"use client";
import { useState } from "react";
import "./FloatingOverlays.scss";
import ContactsBurger from "./FloatingMenus/ContactsBurger";

import Burger from "./FloatingMenus/floatingNav/Burger";
import FloatingNav from "./FloatingMenus/floatingNav/FloatingNav";
import FloatingContacts from "./FloatingMenus/floatingContacts/FloatingContacts";

const FloatingLayers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <div
        className={`fixed left-0 w-full bg-white ${isOpen ? "top-0" : "-top-full"} z-0 duration-300 ease-in-out`}
      >
        <div className="fixed right-10 top-10 z-10">
          <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <FloatingNav />
      </div>

      {/* contacts bottom floating menu */}
      <div
        className={`fixed left-0 w-full bg-primary text-white ${isContactsOpen ? "bottom-0" : "-bottom-full"} z-10 duration-300 ease-in-out`}
      >
        <div className="fixed bottom-10 right-10 z-10">
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
