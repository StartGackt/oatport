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
  ];


const Project = () => {
    return ( 
        <div className="border-b border-neutral-900 pb-4">
                <h1 className="my-20 text-center text-4xl">Projects</h1>
                <div>
                    {PROJECTS.map((project,index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center" >
                            <div className="w-full lg:w-1/4">
                            <img src={project.image} width={150} height={150} className="mb-6 rounded" alt={project.title} />
                            </div>    
                            <div className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold">{project.title}</h6>
                                <p className="mb-4 text-neutral-400">{project.description}</p>
                              <div className="mr-2" >
                              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-neutral-400">{project.link}</a>
                              </div>
                              <br />
                                <div className="flex flex-wrap">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="mr-2  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
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