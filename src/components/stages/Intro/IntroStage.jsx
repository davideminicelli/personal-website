"use client";
import LanguageSwitch from "@/components/Utility/LanguageSwitch";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import IntroCard from "./IntroCard";

const IntroStage = () => {
  const wrapperRef = useRef(null);
  const inView = useInView(wrapperRef, { once: true });

  return (
    <motion.div
      ref={wrapperRef}
      className="max-width-container text-center"
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="main-subtitle">
        <LanguageSwitch it="In Breve:" en="In a few words:" />
      </h2>
      <div className="flex flex-wrap items-stretch justify-center gap-4">
        {homeCopy.map((copy, index) => (
          <div key={`intro_card_${index}`}>
            <IntroCard en={copy.en} ita={copy.it} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default IntroStage;

const homeCopy = [
  {
    it: "Grazie alla mia esperienza nel settore dello sviluppo web a Leeds, ho affinato le mie capacità con una vasta gamma di clienti e progetti, specializzandomi nel front-end e creando esperienze web moderne e coinvolgenti.",
    en: "Thanks to my experience in the web development sector in Leeds, I've honed my skills with a wide range of clients and projects, specializing in front-end development and creating modern, engaging web experiences.",
  },
  {
    it: "Le mie competenze includono HTML, CSS, JavaScript e framework moderni come React e Next.js. Priorità al responsive design e alla compatibilità con i browser per un'esperienza ottimale su tutti i dispositivi.",
    en: "My skills encompass various technologies including HTML, CSS, and JavaScript, complemented by knowledge of modern frameworks such as React, Next.js, and Tailwind. I always prioritize responsive design principles and browser compatibility to deliver optimal experiences across all devices and platforms.",
  },
  {
    it: "Con esperienza in Git e Webpack, sono esperto in flussi di lavoro di sviluppo efficienti che promuovono la collaborazione e la scalabilità.",
    en: "Having worked extensively with version control systems (Git) and front-end build tools (Webpack), I am experienced in efficient development workflows that prioritize collaboration and scalability.",
  },
  {
    it: "In linea con gli standard di accessibilità web, mi impegno affinché ogni esperienza digitale sia inclusiva e accessibile. Grazie alla mia abilità nel risolvere problemi e alla precisione nei dettagli, offro soluzioni di alta qualità che soddisfano le aspettative dei clienti.",
    en: "As a strong advocate for web accessibility standards and best practices, I commit to ensuring that every digital experience I contribute to is inclusive and accessible to all users. Thanks to my excellent problem-solving skills and meticulous attention to detail, I strive to provide high-quality solutions that exceed client expectations.",
  },
  {
    it: "In qualità di professionista esperto del settore, mi dedico all'apprendimento continuo e all'aggiornamento sulle tecnologie emergenti.",
    en: "As a seasoned professional in the field, I am dedicated to continuous learning and staying abreast of emerging technologies and industry trends.",
  },
  {
    it: "Il mio obiettivo è sfruttare la mia esperienza e le mie competenze per guidare l'innovazione e ottenere risultati di impatto in ogni progetto che intraprendo.",
    en: "My goal is to leverage my expertise and experience to drive innovation and deliver impactful results in every project I undertake.",
  },
];
