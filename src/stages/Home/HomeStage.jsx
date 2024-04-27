import LanguageSwitch from "@/components/Utility/LanguageSwitch";
import ListNavigation from "@/components/navigation/ListNavigation/ListNavigation";

const HomeStage = () => {
  return (
    <div>
      <h1 className="main-title">Davide Minicelli</h1>
      <h2 className="main-subtitle">
        <LanguageSwitch it="Sviluppatore Front-end" en="Front-end Developer" />
      </h2>

      <p className="mt-4">
        <LanguageSwitch
          it="Con quasi 3 anni di esperienza nel settore dello sviluppo web, ho affinato le mie capacità come sviluppatore web a Leeds, lavorando con una vasta gamma di clienti e progetti. Specializzato nello sviluppo front-end, eccello nella creazione di esperienze web moderne e coinvolgenti che danno priorità all'usabilità e alla funzionalità."
          en="With almost 3 years of experience in the web development industry, I have honed my skills as a Web Developer in Leeds, working with a diverse range of clients and projects. Specializing in front-end development, I excel in crafting modern and engaging web experiences that prioritize usability and functionality."
        />
      </p>
      <p className="mt-4">
        <LanguageSwitch
          it="Le mie competenze si estendono a diverse tecnologie, tra cui HTML, CSS e JavaScript, completate dalla conoscenza di framework moderni (React, Next.js, Tailwind). Prendo sempre in seria considerazione i principi del responsive design e della compatibilità con i browser per offrire esperienze ottimali su tutti i dispositivi e le piattaforme."
          en="My expertise spans across a variety of technologies, including HTML, CSS, and JavaScript, complemented by proficiency in modern frameworks (React, Next.js, Tailwind). I am passionate about responsive design principles and ensuring seamless browser compatibility to deliver optimal experiences across all devices and platforms."
        />
      </p>
      <p className="mt-4">
        <LanguageSwitch
          it="Avendo lavorato a lungo con sistemi di controllo di versione (Git) e strumenti di compilazione front-end (Webpack), sono esperto di flussi di lavoro di sviluppo efficienti che privilegiano la collaborazione e la scalabilità."
          en="Having worked extensively with version control systems (Git) and front-end build tools (Webpack), I am well-versed in efficient development workflows that prioritize collaboration and scalability."
        />
      </p>
      <p className="mt-4">
        <LanguageSwitch
          it="Forte sostenitore degli standard e delle best practice di accessibilità del web, mi impegno per garantire che ogni esperienza digitale a cui contribuisco sia inclusiva e accessibile a tutti gli utenti. Grazie a un'eccellente capacità di risolvere i problemi e a una meticolosa attenzione ai dettagli, mi impegno a fornire soluzioni di alta qualità che superino le aspettative dei clienti."
          en="A strong advocate for web accessibility standards and best practices, I strive to ensure that every digital experience I contribute to is inclusive and accessible to all users. With excellent problem-solving skills and meticulous attention to detail, I am committed to delivering high-quality solutions that exceed client expectations."
        />
      </p>
      <p className="mt-4">
        <LanguageSwitch
          it="In qualità di professionista esperto del settore, mi dedico all'apprendimento continuo e all'aggiornamento sulle tecnologie emergenti."
          en="As a seasoned professional in the field, I am dedicated to continuous learning and staying abreast of emerging technologies and industry trends."
        />
      </p>
      <p className="mt-4">
        <LanguageSwitch
          it="Il mio obiettivo è sfruttare la mia esperienza e le mie competenze per guidare l'innovazione e ottenere risultati di impatto in ogni progetto che intraprendo."
          en="My goal is to leverage my expertise and experience to drive innovation and deliver impactful results in every project I undertake."
        />
      </p>
      <div>
        <h2 className="main-subtitle">
          <LanguageSwitch it="Esplora:" en="Explore:" />
        </h2>
        <ListNavigation />
      </div>
    </div>
  );
};

export default HomeStage;
