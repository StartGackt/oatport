import aboutImg from '../assets/projects/project-2.jpg';
import {motion} from 'framer-motion'
const About = () => {
    return ( 
        <div className="border-b border-neutral-900 pb-4">
               <h1 className="my-20 text-center text-4xl text-cyan-500">About Me</h1> 
              
             <div className="flex flex-wrap">
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                      <img src={aboutImg} className='rounded-2xl' alt="about" />
                    </div>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2'>
                        <div className='flex justify-center lg:justify-start'>
                            <p className='my-2 max-w-xl py-6'>I am a dedicated and versatile developer with a passion for creating efficient and user-friendly web applications. I have expertise in various technologies such as React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a curiosity about how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.

In addition to web development, I have an interest and skills in Data Science, including data analysis, machine learning model creation, and data mining. Having skills in both web development and data analysis enables me to create applications that are not only highly functional but also leverage data to its fullest potential.

In my free time, I enjoy staying active, exploring new technologies, and contributing to open-source projects. These activities help broaden my perspective and continuously develop various skills.</p>
                        </div>
                     </motion.div>
            </div>  
        </div>
     );
}
 
export default About;