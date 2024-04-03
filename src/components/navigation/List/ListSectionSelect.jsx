"use client";

import { Fragment, useContext } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import ListOption from "./ListOption";
import { NavigationCopy } from "@/copy/NavigationCopy";
import { PageContext } from "@/contexts/PageContext";

const ListSectionSelect = () => {
  const { stage, setStage, language } = useContext(PageContext);

  return (
    <div className="fixed top-16 w-72 cursor-pointer">
      <Listbox value={stage} onChange={(e) => setStage(e)}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {NavigationCopy.radio[language][stage]}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              <ListOption
                stage={stage}
                value={"bio"}
                label={NavigationCopy.radio[language].bio}
              />
              <ListOption
                stage={stage}
                value={"career"}
                label={NavigationCopy.radio[language].career}
              />
              <ListOption
                stage={stage}
                value={"skills"}
                label={NavigationCopy.radio[language].skills}
              />
              <ListOption
                stage={stage}
                value={"contacts"}
                label={NavigationCopy.radio[language].contacts}
              />
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ListSectionSelect;
