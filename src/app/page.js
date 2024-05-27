import CareerStage from "@/components/stages/Career/CareerStage";
import ContactsStage from "@/components/stages/Contacts/ContactsStage";
import HomeStage from "@/components/stages/Home/HomeStage";
import IntroStage from "@/components/stages/Intro/IntroStage";
import SkillsStage from "@/components/stages/Skills/SkillsStage";

export default function Home() {
  return (
    <main>
      <section id="home-section" className="background-section intro-section pt-24 flex items-center">
        <HomeStage />
      </section>
        <section className="">
          <IntroStage />
      </section>
      <section id="skills-section" className="background-section skills-section w-full overflow-hidden lg:w-screen">
        <SkillsStage />
      </section>
      <section id="career-section">
        <CareerStage />
      </section>
      <section id="contacts-section" className="background-section contacts-section">
        <ContactsStage />
      </section>
    </main>
  );
}
