import LanguageSwitch from "@/components/Utility/LanguageSwitch";
import SkillPill from "@/components/pills/SkillPill";

const SkillsStage = () => {
  const initialDelay = 0.5;
  const delayIncrement = 0.2;

  const skillsList = [
    {
      name: "Styled Components",
      description: "",
      url: "/images/tech-styled-components.jpg",
      category: "styling",
    },
    {
      name: "Framer Motion",
      description: "",
      url: "/images/tech-motion.jpg",
      category: "styling",
    },
    {
      name: "Sass",
      description: "",
      url: "/images/tech-sass.jpg",
      category: "styling",
    },
    {
      name: "Tailwind CSS",
      description: "",
      url: "/images/tech-tailwind.jpg",
      category: "styling",
    },
    {
      name: "JavaScript",
      description: "",
      url: "/images/tech-javascript.jpg",
      category: "scripting",
    },
    {
      name: "React",
      description: "",
      url: "/images/tech-react.jpg",
      category: "scripting",
    },
    {
      name: "Next.js",
      description: "",
      url: "/images/tech-next.jpg",
      category: "scripting",
    },
    {
      name: "Adobe Illustrator",
      description: "",
      url: "/images/tech-ai.jpg",
      category: "graphics software",
    },
    {
      name: "Adobe Photoshop",
      description: "",
      url: "/images/tech-ps.jpg",
      category: "graphics software",
    },
    {
      name: "Git",
      description: "",
      url: "/images/tech-git.jpg",
      category: "tools",
    },
    {
      name: "Docker",
      description: "",
      url: "/images/tech-docker.jpg",
      category: "tools",
    },
    {
      name: "Blender",
      description: "",
      url: "/images/tech-blender.png",
      category: "3d",
    },
    {
      name: "Three.js",
      description: "",
      url: "/images/tech-three.png",
      category: "3d",
    },
    {
      name: "A-Frame",
      description: "",
      url: "/images/tech-aframe.jpg",
      category: "3d",
    },
  ];

  return (
    <div>
      <h1 className="main-title">Skills</h1>
      <div>
        <h2 className="main-subtitle">
          <LanguageSwitch en="Styling & Animations" it="Styling & Animazioni" />
        </h2>
        <div className="flex flex-wrap">
          {skillsList
            .filter((skill) => skill.category === "styling")
            .map((skill, index) => (
              <div key={`${skill.name}_key`}>
                <SkillPill
                  imageUrl={skill.url}
                  delay={initialDelay + delayIncrement * index}
                >
                  {skill.name}
                </SkillPill>
              </div>
            ))}
        </div>
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
