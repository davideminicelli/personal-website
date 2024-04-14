"use client";

import { PageContext } from "@/contexts/PageContext";
import { Switch } from "@headlessui/react";
import { useContext } from "react";

const LanguageDial = () => {
  const { language, setLanguage } = useContext(PageContext);

  return (
    <div className="flex flex-nowrap gap-2 text-sm text-white">
      <p>IT</p>
      <Switch
        checked={language === "it"}
        onChange={
          language === "it" ? () => setLanguage("en") : () => setLanguage("it")
        }
        className={`${
          language === "it" ? "bg-background" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            language === "it" ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <p>EN</p>
    </div>
  );
};

export default LanguageDial;
