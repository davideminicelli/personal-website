"use client";
import LanguageSwitch from "@/components/Utility/LanguageSwitch";
import ClientCard from "./ClientCard";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const CareerStage = () => {
  const jobRef = useRef(null);
  const testimonialRef = useRef(null);

  const inViewJob = useInView(jobRef, { once: true, amount: 0.3 });
  const inViewTestimonial = useInView(testimonialRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <div className="max-width-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inViewJob ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        ref={jobRef}
      >
        <h1 className="main-title text-primary">
          <LanguageSwitch en="Career" it="Carriera" />
        </h1>
        <div className="my-8">
          <h2 className="font-heading mb-2 text-3xl/none leading-none">
            <LanguageSwitch
              en="Front-end web developer"
              it="Sviluppatore front-end"
            />
          </h2>
          <h3 className="mb-1 text-sm text-gray-500">
            Savvy Marketing, Leeds, UK
          </h3>
          <p>
            <LanguageSwitch
              it={"Settembre 2021 - Presente"}
              en={"September 2021 - Present"}
            />
          </p>
        </div>
        <p>
          <LanguageSwitch
            it="Come sviluppatore front-end presso Savvy, ho un ruolo centrale nella creazione di esperienze web coinvolgenti e user-friendly che risuonano con il nostro pubblico.<br />Basato a Leeds e collaborando con un'azienda internazionale, affronto una vasta gamma di progetti per aziende di piccole, medie e grandi dimensioni, nonché marchi molto noti."
            en="As a front-end developer at Savvy, I play a central role in creating engaging and user-friendly web experiences that resonate with our audience.<br />Based in Leeds and working with an international company, I tackle a wide range of projects for small, medium and large companies, as well as well-known brands."
          />
        </p>
        <div className="my-6">
          <h3 className="font-base mb-1 mt-2 text-xl font-bold text-primary  underline">
            <LanguageSwitch it="Responsabilità" en="Main Responsibilities" />
          </h3>
          <ul className="ml-4 list-disc">
            <li className="my-2">
              <LanguageSwitch
                it="Analisi dei requisiti e definizione degli obiettivi del progetto."
                en="Requirements Analysis and Project Goal Definition."
              />
            </li>
            <li className="my-2">
              <LanguageSwitch
                it="Progettazione dell'architettura dell'informazione e dell'esperienza utente."
                en="Information Architecture and User Experience Design."
              />
            </li>
            <li className="my-2">
              <LanguageSwitch
                en="Implementation of responsive design and cutting-edge technologies."
                it="Implementazione di design responsive e tecnologie all'avanguardia."
              />
            </li>
            <li className="my-2">
              <LanguageSwitch
                it="Utilizzo di librerie e framework come React.js, Next.js e tailwind."
                en="Utilization of libraries and frameworks like React.js, Next.js, and Tailwind."
              />
            </li>
            <li className="my-2">
              <LanguageSwitch
                it="Ottimizzazione delle prestazioni e della velocità di caricamento del sito."
                en="Optimization of site performance and loading speed."
              />
            </li>
            <li className="my-2">
              <LanguageSwitch
                it="Integrazione di funzionalità avanzate per migliorare l'esperienza utente."
                en="Integration of advanced features to enhance user experience."
              />
            </li>
          </ul>
        </div>
        <div className="my-6">
          <h3 className="font-base mb-1 mt-2 text-xl font-bold text-primary underline">
            <LanguageSwitch it="Competenze" en="Skills" />
          </h3>
          <ul className="ml-4  list-disc">
            <li className="my-2">
              <LanguageSwitch
                en="Proficiency in HTML, CSS, and JavaScript, along with modern frameworks and libraries (React, Next.js, Tailwind)."
                it="Competenza in HTML, CSS e JavaScript, insieme a framework e librerie moderni (React, Next.js, Tailwind)."
              />
            </li>
            <li className="my-2">
              <LanguageSwitch
                en="Experience with graphic editing programs (Adobe Photoshop and Illustrator)."
                it="Padronanza dei programmi di editing grafico (Adobe Photoshop e Illustrator.)"
              />
            </li>
            <li className="my-2">
              <LanguageSwitch
                en="Strong understanding of responsive design principles and cross-browser compatibility."
                it="Comprensione dei principi del design responsive e della compatibilità cross-browser."
              />
            </li>
            <li className="my-2">
              <LanguageSwitch
                en="Familiarity with version control systems (Git) and front-end build tools (Webpack)."
                it="Conoscenza dei sistemi di controllo versione (Git) e degli strumenti di build front-end (Webpack)."
              />
            </li>
            <li className="my-2">
              <LanguageSwitch
                en="Knowledge of web accessibility standards and best practices."
                it="Conoscenza degli standard di accessibilità web e delle migliori pratiche."
              />
            </li>
            <li className="my-2">
              <LanguageSwitch
                it="Eccellenti capacità di risoluzione dei problemi e attenzione ai dettagli."
                en="Excellent problem-solving skills and attention to detail."
              />
            </li>
            <li className="my-2">
              <LanguageSwitch
                it="Interesse di ulteriore sviluppo nell'area dell'integrazione 3d in browser (Three.js, Blender, A-Frame)."
                en="Interest in further development in the area of 3D integration in the browser (Three.js, Blender, A-Frame)."
              />
            </li>
          </ul>
        </div>
        <div className="my-8 rounded-xl bg-primary p-4 font-bold text-white">
          <LanguageSwitch
            en="Note: because of contractual obligations, I can't publish links to my work on this website. I'll be happy to provide examples of my work as part of the next steps."
            it="Nota: a causa di obblighi contrattuali, non posso pubblicare collegamenti al mio lavoro su questo sito web. Sarò lieto di fornire esempi del mio lavoro come parte dei prossimi step."
          />
        </div>
      </motion.div>
      <motion.div
        ref={testimonialRef}
        initial={{ opacity: 0, y: 20 }}
        animate={
          inViewTestimonial
            ? { opacity: 1, y: 0 }
            : {
                opacity: 0,
                y: 20,
              }
        }
        transition={{ duration: 0.5 }}
      >
        <div className="mt-12">
          <h1 className="main-title text-primary">
            <LanguageSwitch en="Clients" it="Clienti" />
          </h1>
          <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {clientsList.map((client, index) => (
              <div key={`client_card_key_${index}`}>
                <ClientCard url={client.url} label={client.label} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CareerStage;

// schawarzkopf, henkel, adidas, britvic, decathlon, hasbro, kepak, robinsons
const clientsList = [
  {
    url: "/images/clients/client-adidas.jpg",
    label: "adidas",
  },
  {
    url: "/images/clients/client-schwarzkopf.jpg",
    label: "Schwarzkopf",
  },
  {
    url: "/images/clients/client-decathlon.jpg",
    label: "Decathlon",
  },
  {
    url: "/images/clients/client-hasbro.jpg",
    label: "Hasbro",
  },
  {
    url: "/images/clients/client-henkel.jpg",
    label: "Henkel",
  },
  {
    url: "/images/clients/client-britvic.jpg",
    label: "Britvic",
  },
  {
    url: "/images/clients/client-kepak.jpg",
    label: "Kepak",
  },
  {
    url: "/images/clients/client-robinsons.jpg",
    label: "Robinsons",
  },
  {
    url: "/images/clients/client-lecol.jpg",
    label: "Le Col",
  },
];
