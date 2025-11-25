

 const Expre = [
  {
    year: "06/2025 - Present",
    role: "Software Engineer",
    company: "Knightclub",
    description: `AI system architecture design, Next.js, and other key technologies. Working on full-time basis.`,
    technologies: ["AI Architecture", "Next.js", "Full Stack"],
  },
  {
    year: "05/2025 - 10/2025",
    role: "Ai Architecture Design & Engineering",
    company: "Annatasia",
    description: `Internship focused on Artificial Intelligence (AI), Deep Learning, and related technologies. Remote work based in London, UK.`,
    technologies: ["AI", "Deep Learning", "Remote"],
  },
  {
    year: "11/2024 - 02/2025",
    role: "Software Intern",
    company: "Gofive - Bangkok",
    description: `Developed and implemented microservices architecture using Azure Pipeline for CI/CD automation and deployment workflows. Angular with Module Federation for scalable micro frontend architecture. .NET gRPC implementation for high-performance service communication. Conducted comprehensive load testing and performance optimization for SQL database systems. Supported the migration of legacy systems to new technology platforms. Assisted in the creation of technical documentation for software users and developers. Recommended improvements to facilitate team and project workflow.`,
    technologies: ["Angular", "Azure Pipeline", ".NET gRPC", "SQL", "Microservices"],
  },
  {
    year: "2024",
    role: "ASEAN Data Science Explorers",
    company: "Asean Foundation",
    description: `Blockchain Technology to Combat Fake News and Support Sustainable Citie.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2023",
    role: "Jenesys 2023",
    company: "Jice",
    description: `Jenesys 2023 Asean-Japan Students Conference Exchange of Innovations in AI Between Japan and Representatives of 10 Asean Countrices`,
    technologies: ["AI", "React.js", "Next.js", "Python", "Blockchain"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Ztm Mastery",
    description: `Full-Stack Development with Next.js and Prisma: Developed comprehensive skills in both front-end and back-end development using Next.js for server-side rendering and Prisma as an ORM for working with SQL and NoSQL databases.`,
    technologies: ["HTML", "CSS", "Next.js", "mySQL", "React.js", "TypeScript", "Prisma"],
  },
];

const Exper = () => {
    return ( 
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Experiences</h1>
            <div>
                  {Expre.map((experience,index) => (
                  <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">       
                                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                            </div>
                            <div className="w-full max-w-xl lg:w-3/4 ">
                                <h6 className="mb-5  font-semibold ">
                                    {experience.role} -{" "} 
                                <span className="text-sm text-purple-100">{experience.company}</span>
                                </h6>
                                <p className="mb-4 text-neutral-400">{experience.description}</p>
                                <div className="flex flex-wrap">
                                {experience.technologies.map((tech,index) => (
                                    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                                ))}
                                </div>
                        </div>
                      
                  </div>
                  ))}
            </div>
        </div>
     );
}
 
export default Exper;