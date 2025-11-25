import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/porject-5.png"

 const PROJECTS = [
    {
      title: "E-Commerce Website",
      image: project3,
      description:
        "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
      link: "https://cia-app.vercel.app", 
      technologies: ["HTML", "CSS", "React", "Next.js", "MongoDB", "Prisma"],

    },
    {
      title: "Tutorial-android",
      image: project4,
      description:
        "An application for Android app with scan Text AI ML.",
      link: "https://github.com/StartGackt/tutorial-android", 
      technologies: ["Firebase", "Java", "ML Kit",],
      
    },
    {
      title: "Portfolio Website",
      image: project1,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["HTML", "CSS", "React", "Typescript"],
    },
    {
      title: " Blockchain Technology to Combat Fake News and Support Sustainable Cities",
      image: project5,
      description:
        "This storyboard focuses on using Blockchain technology to support Goal 11 of the Sustainable Development Goals (SDGs) ",
        link: "https://www.canva.com/design/DAGFG6mS74o/ex8hYsntXtXVhITib-Airw/edit?utm_content=DAGFG6mS74o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", 
      technologies: ["Canva", ],
    },
    {
      title: "E-Shopr Ecommerce",
      image: "/image.png",
      description:
        "A comprehensive e-commerce platform featuring product management, secure checkout, and user dashboard.",
      technologies: ["Next.js", "NestJS", "PostgreSQL"],
    },
    {
      title: "Azure Pipeline Architecture",
      image: "/image copy 4.png",
      description:
        "Developed and implemented microservices architecture using Azure Pipeline for CI/CD automation and deployment workflows.",
      technologies: ["Azure DevOps", "CI/CD", "Microservices"],
    },
    {
      title: "HTTP/3 Implementation",
      image: "/image copy.png",
      description:
        "Implementation and testing of HTTP/3 protocol for improved web performance and security.",
      technologies: ["HTTP/3", "QUIC", "Networking"],
    },
    {
      title: "Asia Plus E-Service Finance",
      image: "/image copy 3.png",
      description:
        "Developed the E-Service financial system for Asia Plus, handling secure transactions and financial reporting.",
      technologies: ["Finance", "Web App", "Security", ".NET"],
    },
  ];


const Project = () => {
    return ( 
        <div className="border-b border-neutral-900 pb-4">
                <h1 className="my-20 text-center text-4xl">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {PROJECTS.map((project,index) => (
                        <div key={index} className="bg-neutral-900/50 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-neutral-800 shadow-lg flex flex-col h-full">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    className="w-full h-full object-cover" 
                                    alt={project.title} 
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h6 className="mb-2 text-xl font-bold text-neutral-200">{project.title}</h6>
                                <p className="mb-4 text-neutral-400 text-sm flex-grow">{project.description}</p>
                                
                                {project.link && (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-purple-400 hover:text-purple-300 text-sm mb-4 inline-block transition-colors"
                                    >
                                        View Project →
                                    </a>
                                )}
                                
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="rounded bg-neutral-800 px-2 py-1 text-xs font-medium text-purple-300 border border-neutral-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
               
     );
}
 
export default Project;