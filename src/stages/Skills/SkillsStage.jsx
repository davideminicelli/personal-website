import LanguageSwitch from "@/components/Utility/LanguageSwitch";
import SkillPill from "@/components/pills/SkillPill";

const SkillsStage = () => {
  const initialDelay = 0.5;
  const delayIncrement = 0.2;

  const skillsList = [
    {
      name: "Styled Components",
      description: {
        en: "CSS styled components blend CSS with component-based JavaScript frameworks like React, allowing developers to create reusable UI elements styled with regular CSS within their JavaScript code. This approach offers encapsulation, easier maintenance, and highly customizable user interfaces.",
        it: "I CSS styled components uniscono CSS ai framework JavaScript basati su componenti come React, consentendo agli sviluppatori di creare elementi UI riutilizzabili stilizzati con CSS standard nel loro codice JavaScript. Questo approccio offre incapsulamento, una manutenzione più semplice e interfacce utente altamente personalizzabili.",
      },

      url: "/images/tech-styled-components.jpg",
      category: "styling",
    },
    {
      name: "Framer Motion",
      description: {
        en: "Framer Motion is a React animation library, simplifying the creation of fluid and interactive animations. With declarative syntax, it seamlessly integrates with React, offering features like spring physics and gesture recognition for engaging user experiences.",
        it: "Framer Motion è una libreria di animazione per React, semplificando la creazione di animazioni fluide e interattive. Con una sintassi dichiarativa, si integra perfettamente con React, offrendo funzionalità come la fisica a molla e il riconoscimento dei gesti per esperienze utente coinvolgenti.",
      },
      url: "/images/tech-motion.jpg",
      category: "styling",
    },
    {
      name: "Sass",
      description: {
        en: "Sass extends CSS with features like variables and nesting, offering a more organized and efficient way to write stylesheets. It compiles into standard CSS for compatibility with all web browsers.",
        it: "Sass estende il CSS con funzionalità come variabili e nidificazione, offrendo un modo più organizzato ed efficiente di scrivere fogli di stile. Viene compilato in CSS standard per la compatibilità con tutti i browser web.",
      },
      url: "/images/tech-sass.jpg",
      category: "styling",
    },
    {
      name: "Tailwind CSS",
      description: {
        en: "Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined utility classes for styling HTML elements. It offers a rapid way to build custom designs without writing custom CSS, allowing developers to focus on functionality rather than design details.",
        it: "Tailwind CSS è un framework CSS di tipo utility-first che fornisce un insieme di classi di utilità predefinite per stilizzare gli elementi HTML. Offre un modo rapido per creare design personalizzati senza scrivere CSS personalizzato, consentendo agli sviluppatori di concentrarsi sulla funzionalità anziché sui dettagli di design.",
      },
      url: "/images/tech-tailwind.jpg",
      category: "styling",
    },
    {
      name: "JavaScript",
      description: {
        en: "JavaScript is a versatile programming language primarily used for adding interactivity to web pages. It enables dynamic behavior, such as responding to user actions, manipulating HTML content, and communicating with servers. JavaScript is widely supported by web browsers and is essential for creating modern, interactive web applications.",
        it: "JavaScript è un linguaggio di programmazione versatile utilizzato principalmente per aggiungere interattività alle pagine web. Consente comportamenti dinamici, come rispondere alle azioni dell'utente, manipolare il contenuto HTML e comunicare con i server. JavaScript è ampiamente supportato dai browser web ed è essenziale per creare applicazioni web moderne e interattive.",
      },
      url: "/images/tech-javascript.jpg",
      category: "scripting",
    },
    {
      name: "React",
      description: {
        en: "React is a JavaScript library for building user interfaces. It simplifies UI development by allowing the creation of reusable components and efficient state management. With its declarative approach and virtual DOM, React offers high performance for building interactive web applications.",
        it: "React è una libreria JavaScript per la costruzione di interfacce utente. Semplifica lo sviluppo UI consentendo la creazione di componenti riutilizzabili e una gestione efficiente dello stato. Con il suo approccio dichiarativo e il DOM virtuale, React offre elevate prestazioni per la creazione di applicazioni web interattive.",
      },
      url: "/images/tech-react.jpg",
      category: "scripting",
    },
    {
      name: "Next.js",
      description: {
        en: "Next.js is a React framework for building server-side rendered and statically generated web applications. It simplifies development with features like automatic code splitting and server-side rendering, enabling fast and optimized web apps.",
        it: "Next.js è un framework React per creare applicazioni web con rendering lato server e generazione statica. Semplifica lo sviluppo con funzionalità come il code splitting automatico e il rendering lato server, consentendo la creazione di app web veloci e ottimizzate.",
      },
      url: "/images/tech-next.jpg",
      category: "scripting",
    },
    {
      name: "Adobe Illustrator",
      description: {
        en: "Illustrator is a versatile vector graphics editor developed by Adobe. It's used for creating illustrations, logos, icons, typography, and other vector-based artwork. With its powerful drawing tools and flexible workflow, Illustrator is favored by designers and artists for its ability to produce scalable and high-quality graphics for print, web, and multimedia projects.",
        it: "Illustrator è un versatile editor di grafica vettoriale sviluppato da Adobe. Viene utilizzato per creare illustrazioni, loghi, icone, tipografia e altri tipi di grafica vettoriale. Con i suoi potenti strumenti di disegno e il flusso di lavoro flessibile, Illustrator è apprezzato da designer e artisti per la sua capacità di produrre grafiche scalabili e di alta qualità per progetti di stampa, web e multimedia.",
      },
      url: "/images/tech-ai.jpg",
      category: "graphics software",
    },
    {
      name: "Adobe Photoshop",
      description: {
        en: "Photoshop is a top-tier graphics editing software by Adobe, used for everything from photo retouching to graphic design. Its array of tools enables users to manipulate images with precision and creativity.",
        it: "Photoshop è un software di editing grafico di alto livello sviluppato da Adobe, utilizzato per tutto, dal ritocco fotografico al design grafico. La sua vasta gamma di strumenti consente agli utenti di manipolare le immagini con precisione e creatività.",
      },
      url: "/images/tech-ps.jpg",
      category: "graphics software",
    },
    {
      name: "Git",
      description: {
        en: "Git is a version control system for tracking changes in code during software development. It enables collaboration among developers by managing code repositories, allowing for efficient tracking, reverting to previous versions, and merging changes from multiple contributors.",
        it: "Git è un sistema di controllo versione per tracciare le modifiche nel codice durante lo sviluppo del software. Consente la collaborazione tra sviluppatori gestendo repository di codice, permettendo il tracciamento efficiente, il ritorno a versioni precedenti e la fusione delle modifiche da parte di diversi contributori.",
      },
      url: "/images/tech-git.jpg",
      category: "tools",
    },
    {
      name: "Docker",
      description: {
        en: "Docker is a platform for developing, shipping, and running applications using containerization. It simplifies deployment by packaging applications and dependencies into containers, ensuring consistency across different environments.",
        it: "Docker è una piattaforma per sviluppare, distribuire ed eseguire applicazioni utilizzando la containerizzazione. Semplifica la distribuzione confezionando applicazioni e dipendenze in container, garantendo coerenza tra diversi ambienti.",
      },
      url: "/images/tech-docker.jpg",
      category: "tools",
    },
    {
      name: "Blender",
      description: {
        en: "Blender is a powerful open-source 3D creation software used for modeling, animation, rendering, and more. It's known for its versatility and robust feature set, making it popular among artists, animators, and designers worldwide.",
        it: "Blender è un potente software open-source per la creazione di contenuti 3D utilizzato per modellazione, animazione, rendering e altro. È noto per la sua versatilità e per la ricca gamma di funzionalità, rendendolo popolare tra artisti, animatori e designer in tutto il mondo.",
      },
      url: "/images/tech-blender.png",
      category: "3d",
    },
    {
      name: "Three.js",
      description: {
        en: "Three.js is a popular JavaScript library for creating 3D graphics in web applications. It simplifies the process of working with WebGL, offering a wide range of features for rendering 3D scenes, animations, and interactive experiences.",
        it: "Three.js è una popolare libreria JavaScript per la creazione di grafica 3D nelle applicazioni web. Semplifica il processo di lavorare con WebGL, offrendo una vasta gamma di funzionalità per il rendering di scene 3D, animazioni ed esperienze interattive.",
      },
      url: "/images/tech-three.png",
      category: "3d",
    },
    {
      name: "A-Frame",
      description: {
        en: "A-Frame is a web framework for building virtual reality (VR) experiences on the web. It simplifies VR development by providing a declarative, HTML-like syntax for creating VR scenes and interactions, making it accessible to developers of all skill levels.",
        it: "A-Frame è un framework web per la creazione di esperienze di realtà virtuale (VR) sul web. Semplifica lo sviluppo VR fornendo una sintassi dichiarativa simile all'HTML per la creazione di scene e interazioni VR, rendendolo accessibile a sviluppatori di tutti i livelli.",
      },
      url: "/images/tech-aframe.jpg",
      category: "3d",
    },
  ];

  return (
    <div>
      <header className="mb-8">
        <h1 className="main-title">Skills</h1>
        <h2 className="main-subtitle">
          <LanguageSwitch en="Styling & Animations" it="Styling & Animazioni" />
        </h2>
        <p>
          <LanguageSwitch
            en="Click/hover on each skill to learn more about it."
            it="Clicca/passa sopra ogni competenza per saperne di più."
          />
        </p>
      </header>
      <div className="flex flex-wrap">
        {skillsList
          .filter((skill) => skill.category === "styling")
          .map((skill, index) => (
            <div key={`${skill.name}_key`}>
              <SkillPill
                imageUrl={skill.url}
                delay={initialDelay + delayIncrement * index}
                description={skill.description}
              >
                {skill.name}
              </SkillPill>
            </div>
          ))}
      </div>
      <div>
        <h2 className="main-subtitle">
          <LanguageSwitch en="Scripting" it="Scripting" />
        </h2>
        <div className="flex flex-wrap">
          {skillsList
            .filter((skill) => skill.category === "scripting")
            .map((skill, index) => (
              <div key={`${skill.name}_key`}>
                <SkillPill
                  imageUrl={skill.url}
                  delay={initialDelay + delayIncrement * index}
                  description={skill.description}
                >
                  {skill.name}
                </SkillPill>
              </div>
            ))}
        </div>
      </div>
      <div>
        <h2 className="main-subtitle">
          <LanguageSwitch en="Graphics Software" it="Software di Grafica" />
        </h2>
        <div className="flex flex-wrap">
          {skillsList
            .filter((skill) => skill.category === "graphics software")
            .map((skill, index) => (
              <div key={`${skill.name}_key`}>
                <SkillPill
                  imageUrl={skill.url}
                  delay={initialDelay + delayIncrement * index}
                  description={skill.description}
                >
                  {skill.name}
                </SkillPill>
              </div>
            ))}
        </div>
      </div>
      <div>
        <h2 className="main-subtitle">
          <LanguageSwitch en="Tools" it="Strumenti" />
        </h2>
        <div className="flex flex-wrap">
          {skillsList
            .filter((skill) => skill.category === "tools")
            .map((skill, index) => (
              <div key={`${skill.name}_key`}>
                <SkillPill
                  imageUrl={skill.url}
                  delay={initialDelay + delayIncrement * index}
                  description={skill.description}
                >
                  {skill.name}
                </SkillPill>
              </div>
            ))}
        </div>
      </div>
      <div>
        <h2 className="main-subtitle">
          <LanguageSwitch en="3D" it="3D" />
        </h2>
        <div className="flex flex-wrap">
          {skillsList
            .filter((skill) => skill.category === "3d")
            .map((skill, index) => (
              <div key={`${skill.name}_key`}>
                <SkillPill
                  imageUrl={skill.url}
                  delay={initialDelay + delayIncrement * index}
                  description={skill.description}
                >
                  {skill.name}
                </SkillPill>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsStage;
