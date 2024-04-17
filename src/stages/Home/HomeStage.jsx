import LanguageSwitch from "@/components/Utility/LanguageSwitch";

const HomeStage = () => {
  return (
    <div>
      <h1 className="main-title">Davide Minicelli</h1>
      <h2 className="main-subtitle">
        <LanguageSwitch it="Sviluppatore Front-end" en="Front-end Developer" />
      </h2>
      <p>
        <LanguageSwitch
          it="Sono un appassionato sviluppatore front-end web che si impegna nella creazione di esperienze digitali coinvolgenti. Grazie alla mia competenza in HTML, CSS, JavaScript, React e Next.js, mi specializzo nella realizzazione di siti web e applicazioni user-friendly. Sono impegnato a garantire un lavoro di alta qualità e contribuire a progetti significativi."
          en="I'm a front-end web developer enthusiastic about crafting engaging digital experiences. With skills in HTML, CSS, JavaScript, React, and Next.js, I specialize in building user-friendly websites and web applications. I'm dedicated to delivering high-quality work and contributing to meaningful projects."
        />
      </p>
    </div>
  );
};

export default HomeStage;
