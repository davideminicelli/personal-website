import LanguageSwitch from "@/components/Utility/LanguageSwitch";
import PhoneSwitch from "./PhoneSwitch";

const ContactsStage = () => {
  return (
    <>
      <h1 className="main-title">
        <LanguageSwitch en="Contacts" it="Contatti" />
      </h1>
      <div className="mt-8">
        <div className="mb-2 mt-4">
          <h3>
            <LanguageSwitch en="Email" it="Email" />
          </h3>
          <a href="mailto:dminicelli@gmail.com">dminicelli@gmail.com</a>
        </div>
        <div className="mb-2 mt-4">
          <PhoneSwitch />
        </div>
        <div className="mb-2 mt-4">
          <h3>
            <LanguageSwitch en="LinkedIn" it="LinkedIn" />
          </h3>
          <a
            href="https://www.linkedin.com/in/davide-minicelli/"
            target="_blank"
            rel="noreferrer"
          >
            Davide Minicelli - LinkedIn Profile
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactsStage;
