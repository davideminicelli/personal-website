import LanguageSwitch from "@/components/Utility/LanguageSwitch";

const IntroCard = ({ en, ita }) => {
  return (
    <div className="intro-card h-full w-full max-w-96 bg-opacity-5 bg-cover p-6 text-white md:max-w-72">
      <p>
        <LanguageSwitch it={ita} en={en} />
      </p>
    </div>
  );
};

export default IntroCard;
