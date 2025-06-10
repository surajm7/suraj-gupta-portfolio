import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 bg-[length:200%_200%] animate-gradient-x text-white"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate  Software Engineer 🚀 
            </h3>

            <p className="text-muted-foreground text-white/80">
              With over 2 years of professional experience as a <strong>Full-Stack Software Engineer</strong>, I specialize in  crafting responsive frontend , mobile interfaces and building scalable backend systems and using modern technologies like <strong>Node.js</strong>, <strong>Express</strong>, <strong>NestJS</strong>, <strong>React</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and <strong>React Native</strong>.
            </p>



            <p className="text-muted-foreground text-white/80">
              I thrive in agile teams, embrace clean and maintainable code, and constantly seek opportunities to learn and innovate. I’m driven by solving real-world problems through tech that blends functionality with user delight.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a
                href="#contact"
                className="cosmic-button text-white font-medium px-6 py-2 rounded-full bg-primary hover:bg-primary/90 transition"
              >
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1kSa5FOWG5CLn__x1V73C10K9dslaT36O/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover bg-white/5 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-white">Full-Stack Development</h4>
                  <p className="text-white/70">
                    Building scalable APIs and intuitive UIs using modern web technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover bg-white/5 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-white">UI/UX Engineering</h4>
                  <p className="text-white/70">
                    Designing engaging, accessible, and responsive interfaces that users love.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover bg-white/5 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-white">Project Experience</h4>
                  <p className="text-white/70">
                    Worked at Volkswagen and freelanced on impactful projects across industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
