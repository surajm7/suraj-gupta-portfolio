import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Redux", level: 85, category: "frontend" },
  { name: "React Native", level: 80, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "CSS3", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Material UI", level: 80, category: "frontend" },
  { name: "Framer Motion", level: 75, category: "frontend" },
  { name: "Angular", level: 75, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "NestJS", level: 70, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "MySQL", level: 60, category: "backend" },
  { name: "Firebase", level: 75, category: "backend" },
  { name: "Prisma", level: 70, category: "backend" },

  // Tools & Platforms
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "Postman", level: 80, category: "tools" },
  { name: "Jira", level: 75, category: "tools" },
  { name: "Webpack", level: 70, category: "tools" },
  { name: "Storybook", level: 65, category: "tools" },

  // Programming Languages
  { name: "JavaScript", level: 85, category: "languages" },
  { name: "Java", level: 89, category: "languages" },
  { name: "C++", level: 80, category: "languages" },
  { name: "Go", level: 80, category: "languages" },
  { name: "Python", level: 75, category: "languages" },
];

const categories = ["all", "frontend", "backend", "languages", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-foreground">
        My Technical <span className="text-primary">Proficiency</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-10">
          Explore my strengths across different stacks and tools.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-transparent shadow-md"
                  : "bg-background border-border hover:bg-muted hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-gradient-to-br from-background via-card to-muted border border-border p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                <span className="text-sm font-medium text-primary">{skill.level}%</span>
              </div>

              <div className="relative w-full bg-muted h-2 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
