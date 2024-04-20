import LanguageDial from "@/components/Buttons/LanguageDial";
import LanguageSwitch from "@/components/Utility/LanguageSwitch";
import { PageContext } from "@/contexts/PageContext";
import { useContext } from "react";

const FloatingNav = () => {
  const { setStage } = useContext(PageContext);

  return (
    <div className="mx-auto bg-primary p-6 text-2xl font-bold text-white">
      <ul
        key="en_nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="floating-menu-list"
      >
        <li onClick={() => setStage("home")} className="floating-menu-item">
          <LanguageSwitch en="Home" it="Home" />
        </li>
        <li onClick={() => setStage("skills")} className="floating-menu-item">
          <LanguageSwitch en="Skills" it="Competenze" />
        </li>
        <li onClick={() => setStage("contacts")} className="floating-menu-item">
          <LanguageSwitch en="Contacts" it="Contatti" />
        </li>
        <li onClick={() => setStage("career")} className="floating-menu-item">
          <LanguageSwitch en="Career" it="Carriera" />
        </li>
      </ul>
      <div className="mt-4 flex justify-end pr-6">
        <LanguageDial />
      </div>
    </div>
  );
};

export default FloatingNav;
