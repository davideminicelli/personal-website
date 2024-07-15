"use client";
import LanguageSwitch from "@/components/Utility/LanguageSwitch";

const HomeStage = () => {
  return (
    <div className="max-width-container text-center">
      <h1 className="font-heading text-4xl text-white sm:text-5xl md:text-6xl xl:text-9xl">
        Davide Minicelli
      </h1>
      <h2 className="main-subtitle">
        <LanguageSwitch it="Sviluppatore Front-end" en="Front-end Developer" />
      </h2>
    </div>
  );
};

export default HomeStage;
