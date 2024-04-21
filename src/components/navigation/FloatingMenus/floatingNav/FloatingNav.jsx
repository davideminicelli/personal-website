import LanguageDial from "@/components/Buttons/LanguageDial";
import LanguageSwitch from "@/components/Utility/LanguageSwitch";
import { PageContext } from "@/contexts/PageContext";
import { useContext } from "react";

const FloatingNav = ({ setIsOpen }) => {
  const { stage, setStage } = useContext(PageContext);

  const FloatingItem = ({ targetStage, children }) => {
    return (
      <li
        onClick={() => {
          setIsOpen(false);
          if (stage !== targetStage) {
            setStage(targetStage);
          }
        }}
        className="floating-menu-item"
      >
        {children}
      </li>
    );
  };

  return (
    <div className="mx-auto bg-primary p-6 text-2xl font-bold text-white">
      <ul
        key="en_nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="floating-menu-list"
      >
        {/* <li onClick={() => setStage("home")} className="floating-menu-item">
          <LanguageSwitch en="Home" it="Home" />
        </li> */}
        <FloatingItem targetStage="home">
          <LanguageSwitch en="Home" it="Home" />
        </FloatingItem>
        {/* <li onClick={() => setStage("skills")} className="floating-menu-item">
          <LanguageSwitch en="Skills" it="Competenze" />
        </li> */}
        <FloatingItem targetStage="skills">
          <LanguageSwitch en="Skills" it="Competenze" />
        </FloatingItem>
        {/* <li onClick={() => setStage("contacts")} className="floating-menu-item">
          <LanguageSwitch en="Contacts" it="Contatti" />
        </li> */}
        <FloatingItem targetStage="contacts">
          <LanguageSwitch en="Contacts" it="Contatti" />
        </FloatingItem>
        {/* <li onClick={() => setStage("career")} className="floating-menu-item">
          <LanguageSwitch en="Career" it="Carriera" />
        </li> */}
        <FloatingItem targetStage="career">
          <LanguageSwitch en="Career" it="Carriera" />
        </FloatingItem>
      </ul>
      <div className="mt-4 flex justify-end pr-6">
        <LanguageDial />
      </div>
    </div>
  );
};

export default FloatingNav;
