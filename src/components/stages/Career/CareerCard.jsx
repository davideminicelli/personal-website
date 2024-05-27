"use client";
import LanguageSwitch from "@/components/Utility/LanguageSwitch";
import Image from "next/image";
import { useState } from "react";

const CareerCard = ({
  role,
  company,
  description,
  responsibilities,
  skills,
  dates,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-8">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center justify-between rounded-xl border-2 border-white p-4"
      >
        <div>
          <h2 className="mb-2 text-3xl/none leading-none">
            <LanguageSwitch it={role.it} en={role.en} />
          </h2>
          <h4 className="mb-1 text-sm text-gray-500">{company}</h4>
          <p>
            <LanguageSwitch it={dates.it} en={dates.en} />
          </p>
        </div>
        <Image
          src="/images/icons/icon-triangle.svg"
          width={24}
          height={24}
          className={`${isOpen ? "rotate-180" : "rotate-90"} h-8 w-8 origin-center duration-200 ease-in-out`}
        />
      </div>
      <div
        className={`overflow-hidden duration-200 ${isOpen ? "h-full py-4" : "h-0 py-0"} box-border px-4`}
      >
        <p>
          <LanguageSwitch it={description.it} en={description.en} />
        </p>
        <div>
          <h3 className="font-base mb-1 mt-2 text-xl text-white underline">
            <LanguageSwitch it="Responsabilità" en="Main Responsibilities" />
          </h3>
          <ul>
            {responsibilities.map((item, index) => (
              <li key={`responsibility_${company}_${index}`}>
                <LanguageSwitch it={item.it} en={item.en} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-base mb-1 mt-2 text-xl text-white underline">
            <LanguageSwitch it="Competenze" en="Skills" />
          </h3>
          <ul>
            {skills.map((item, index) => (
              <li key={`skill_${company}_${index}`}>
                <LanguageSwitch it={item.it} en={item.en} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
