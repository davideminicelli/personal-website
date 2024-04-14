"use client";
import { useState } from "react";
import Burger from "./Burger";
import "./FloatingMenu.scss";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <div className="fixed right-10 top-10 z-10">
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div
        className={`fixed left-0 w-full bg-white ${isOpen ? "top-0" : "-top-full"} z-0 duration-300 ease-in-out`}
      >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default FloatingMenu;
