"use client";

import LanguageSwitch from "@/components/Utility/LanguageSwitch";
import { PageContext } from "@/contexts/PageContext";
import { Listbox } from "@headlessui/react";
import Image from "next/image";
import { useContext } from "react";

const ListNavigation = () => {
  const { stage, setStage } = useContext(PageContext);

  const ListButton = ({ iconUrl, targetStage, en, it }) => {
    return (
      <div
        className="my-2 box-border flex h-16 items-center justify-start rounded-xl bg-primary bg-opacity-75 p-4 duration-200 hover:bg-accent-off lg:my-0"
        onClick={() => {
          if (stage !== targetStage) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setStage(targetStage);
          }
        }}
      >
        <Image
          src={iconUrl}
          alt={targetStage}
          width={50}
          height={50}
          className="mr-4 w-8"
        />
        <p>
          <LanguageSwitch en={en} it={it} />
        </p>
      </div>
    );
  };

  return (
    <div className="max-w-96 cursor-pointer grid-cols-2 gap-2 lg:grid lg:max-w-full">
      {/* home, skills, career, contacts */}
      <ListButton
        iconUrl="/images/icon-home.svg"
        targetStage="home"
        en="Home"
        it="Home"
      />
      <ListButton
        iconUrl="/images/icon-skills.svg"
        targetStage="skills"
        en="Skills"
        it="Competenze"
      />
      <ListButton
        iconUrl="/images/icon-work.svg"
        targetStage="career"
        en="Career"
        it="Carriera"
      />
      <ListButton
        iconUrl="/images/icon-contacts.svg"
        targetStage="contacts"
        en="Contacts"
        it="Contatti"
      />
    </div>
  );
};

export default ListNavigation;
