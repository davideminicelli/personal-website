import { NavigationCopy } from "@/copy/NavigationCopy";
import { RadioGroup } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

const RadioOption = ({ stage, value, language }) => {
  return (
    <RadioGroup.Option
      key={`radio_option_${value}_key`}
      value={value}
      className={({ active = stage === value, checked }) =>
        `${
          active ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300" : ""
        }
                  ${checked ? "bg-sky-900/75 text-white" : "bg-white"}
                    relative flex cursor-pointer overflow-hidden rounded-lg px-5 py-4 shadow-md focus:outline-none`
      }
    >
      {({ active, checked }) => (
        <>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
              <div className="text-sm">
                <RadioGroup.Label
                  as="p"
                  className={`font-medium  ${
                    checked ? "text-white" : "text-gray-900"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {language === "en" && (
                      <motion.p
                        key={`radio_option_${value}_motion_en_key`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {NavigationCopy.radio.en[value]}
                      </motion.p>
                    )}
                    {language === "it" && (
                      <motion.p
                        key={`radio_option_${value}_motion_it_key`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {NavigationCopy.radio.it[value]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </RadioGroup.Label>
              </div>
            </div>
          </div>
        </>
      )}
    </RadioGroup.Option>
  );
};

export default RadioOption;
