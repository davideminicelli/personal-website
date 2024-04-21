import LanguageSwitch from "@/components/Utility/LanguageSwitch";
import CareerCard from "./CareerCard";

const CareerStage = () => {
  return (
    <div>
      <h1 className="main-title">
        <LanguageSwitch en="Career" it="Carriera" />
      </h1>
      <CareerCard
        role={{ en: "Front-End Web Developer", it: "Sviluppatore Front-End" }}
        dates={{
          it: "Settembre 2021 - Presente",
          en: "September 2021 - Present",
        }}
        company="Savvy Marketing, Leeds, UK"
        Link="https://www.getsavvy.com"
        description={{
          en: "As a Front-End Web Developer at Savvy, I play a pivotal role in crafting immersive and user-friendly web experiences that resonate with our audience. My responsibilities extend beyond just writing code; I am a storyteller who uses technology to engage and delight users.",
          it: "Come sviluppatore front-end web presso Savvy, svolgo un ruolo fondamentale nella creazione di esperienze web coinvolgenti e user-friendly che risuonano con il nostro pubblico. Le mie responsabilità vanno oltre la scrittura del codice; sono un narratore che utilizza la tecnologia per coinvolgere e deliziare gli utenti.",
        }}
        responsibilities={[
          {
            en: "User Interface Development: I translate design mockups and wireframes into responsive and visually appealing user interfaces. Using HTML, CSS, and JavaScript, I ensure that our websites and applications are intuitive and easy to navigate across various devices and platforms.",
            it: "Sviluppo dell'Interfaccia Utente: Traduco mockup e wireframe di design in interfacce utente responsive e visivamente accattivanti. Utilizzando HTML, CSS e JavaScript, mi assicuro che i nostri siti web e applicazioni siano intuitivi e facili da navigare su diversi dispositivi e piattaforme.",
          },
          {
            en: "Cross-Browser Compatibility: I meticulously test and optimize websites to ensure compatibility across different browsers and devices, providing a seamless experience for all users. I stay updated on the latest web standards and best practices to maintain consistency and performance.",
            it: "Compatibilità tra Browser: Testo e ottimizzo meticolosamente i siti web per garantire la compatibilità tra diversi browser e dispositivi, offrendo un'esperienza senza soluzione di continuità per tutti gli utenti. Mi tengo aggiornato sugli ultimi standard web e le migliori pratiche per mantenere coerenza e prestazioni.",
          },
          {
            en: "Performance Optimization: I optimize the performance of our web assets, focusing on factors such as page load speed, rendering efficiency, and resource utilization. By employing techniques like code minification, image optimization, and lazy loading, I strive to deliver fast and efficient web experiences.",
            it: "Ottimizzazione delle Prestazioni: Ottimizzo le prestazioni dei nostri asset web, concentrandomi su fattori come la velocità di caricamento della pagina, l'efficienza del rendering e l'utilizzo delle risorse. Utilizzando tecniche come la minificazione del codice, l'ottimizzazione delle immagini e il caricamento ritardato, mi impegno a offrire esperienze web veloci ed efficienti.",
          },
          {
            en: "Accessibility Compliance: I adhere to accessibility standards (such as WCAG) to ensure that our websites are usable by individuals with disabilities. I implement features like proper semantic markup, keyboard navigation, and ARIA attributes to make our content accessible to all users.",
            it: "Conformità all'Accessibilità: Mi attengo agli standard di accessibilità (come il WCAG) per garantire che i nostri siti web siano utilizzabili da individui con disabilità. Implemento funzionalità come il markup semantico corretto, la navigazione da tastiera e gli attributi ARIA per rendere il nostro contenuto accessibile a tutti gli utenti.",
          },
          {
            en: "Collaboration with Design and Back-End Teams: I collaborate closely with designers to bring their visions to life while maintaining a balance between aesthetics and functionality. Additionally, I work alongside back-end developers to integrate front-end components with server-side logic, ensuring seamless data flow and interactivity.",
            it: "Collaborazione con i Team di Design e Back-End: Collaboro strettamente con i designer per dare vita alle loro visioni mantenendo un equilibrio tra estetica e funzionalità. Inoltre, lavoro a fianco dei developer back-end per integrare i componenti front-end con la logica lato server, garantendo un flusso di dati e un'interattività senza soluzione di continuità.",
          },
          {
            en: "Continuous Learning and Innovation: I stay abreast of emerging technologies and trends in web development, constantly seeking opportunities to enhance our workflows and elevate the quality of our projects. Whether it's adopting new frameworks or experimenting with cutting-edge techniques, I strive to push the boundaries of what's possible on the web.",
            it: "Apprendimento Continuo e Innovazione: Mi tengo aggiornato sulle tecnologie emergenti e le tendenze nello sviluppo web, cercando costantemente opportunità per migliorare i nostri flussi di lavoro e elevare la qualità dei nostri progetti. Che si tratti di adottare nuovi framework o sperimentare con tecniche all'avanguardia, mi impegno a spingere i limiti di ciò che è possibile sul web.",
          },
        ]}
        skills={[
          {
            en: "Proficiency in HTML, CSS, and JavaScript, along with modern frameworks and libraries (e.g., React, Angular, Vue.js).",
            it: "Competenza in HTML, CSS e JavaScript, insieme a framework e librerie moderni (ad es., React, Angular, Vue.js).",
          },
          {
            en: "Strong understanding of responsive design principles and cross-browser compatibility.",
            it: "Forte comprensione dei principi del design responsive e della compatibilità tra browser.",
          },
          {
            en: "Familiarity with version control systems (e.g., Git) and front-end build tools (e.g., Webpack).",
            it: "Conoscenza dei sistemi di controllo versione (ad es., Git) e degli strumenti di build front-end (ad es., Webpack).",
          },
          {
            en: "Experience with UI/UX design principles and tools like Adobe XD, Sketch, or Figma.",
            it: "Esperienza con i principi del design UI/UX e gli strumenti come Adobe XD, Sketch o Figma.",
          },
          {
            en: "Knowledge of web accessibility standards and best practices.",
            it: "Conoscenza degli standard di accessibilità web e delle migliori pratiche.",
          },
          {
            en: "Excellent problem-solving skills and attention to detail.",
            it: "Eccellenti capacità di risoluzione dei problemi e attenzione ai dettagli.",
          },
        ]}
      />
    </div>
  );
};

export default CareerStage;
