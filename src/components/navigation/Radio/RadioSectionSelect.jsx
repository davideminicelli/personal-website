"use client";

import { PageContext } from "@/contexts/PageContext";
import { RadioGroup } from "@headlessui/react";
import { useContext } from "react";
import RadioOption from "./RadioOption";
import { NavigationCopy } from "@/copy/NavigationCopy";

const RadioSectionSelect = ({}) => {
  const { stage, setStage, language } = useContext(PageContext);

  const Option = () => {};

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={stage} onChange={(e) => setStage(e)}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            <RadioOption
              stage={stage}
              label={NavigationCopy.radio[language].bio}
              value="bio"
            />
            <RadioOption
              stage={stage}
              label={NavigationCopy.radio[language].career}
              value="career"
            />
            <RadioOption
              stage={stage}
              label={NavigationCopy.radio[language].skills}
              value="skills"
            />
            <RadioOption
              stage={stage}
              label={NavigationCopy.radio[language].contacts}
              value="contacts"
            />
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RadioSectionSelect;
