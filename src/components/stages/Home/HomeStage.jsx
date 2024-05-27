"use client";
import LanguageSwitch from "@/components/Utility/LanguageSwitch";

const HomeStage = () => {
  return (
    <div className="max-width-container text-center">
      <h1 className="font-heading text-9xl text-white">Davide Minicelli</h1>
      <h2 className="main-subtitle">
        <LanguageSwitch it="Sviluppatore Front-end" en="Front-end Developer" />
      </h2>
    </div>
  );
};

export default HomeStage;
