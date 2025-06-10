import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Movify",
    description: "Movie browsing web app with search, favorites, and tabular view functionality.",
    image: "/projects/project1.png",
    tags: ["ReactJs", "TailwindCSS", "NodeJs", "TMDB API"],
    demoUrl: "https://movifyapp-project.netlify.app/",
    githubUrl: "https://github.com/surajm7/movify-app",
  },
  {
    id: 2,
    title: "Xcrypto",
    description: "A responsive app featuring crypto exchange listings and interactive coin price charts.",
    image: "/projects/project2.png",
    tags: ["ReactJs", "TailwindCSS", "NodeJs", "Chakra UI"],
    demoUrl: "https://xcrypto-two.vercel.app/",
    githubUrl: "https://github.com/surajm7/xcryptoapp",
  },
  {
    id: 3,
    title: "ChatCraze",
    description: "A password-protected group chat app for real-time conversations.",
    image: "/projects/project3.png",
    tags: ["NextJs", "Node.js", "PostgreSQL", "Socket.IO", "Redis", "Kafka", "ShadCn"],
    demoUrl: "https://github.com/surajm7/ChatCraze-backend",
    githubUrl: "https://github.com/surajm7/ChatCraze-backend",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/surajm7"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};