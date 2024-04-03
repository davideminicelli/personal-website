import { RadioGroup } from "@headlessui/react";

const RadioOption = ({ stage, value, label }) => {
  return (
    <RadioGroup.Option
      key={`radio_option_${value}_key`}
      value={value}
      className={({ active = stage === value, checked }) =>
        `${
          active ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300" : ""
        }
                  ${checked ? "bg-sky-900/75 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
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
                  {label}
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
