import {motion} from 'framer-motion'
const About = () => {
    return ( 
        <div className="border-b border-neutral-900 pb-4">
               <h1 className="my-20 text-center text-4xl text-cyan-500">About Me</h1> 
              
             <div className="flex flex-wrap justify-center">
                <motion.div 
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:100}}
                transition={{duration:0.5}}
                className='w-full lg:w-3/4'>
                        <div className='flex justify-center'>
                            <div className='my-2 max-w-2xl py-6 text-neutral-300 text-center'>
                                <p className="mb-4 text-lg leading-relaxed">
                                    I am a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> currently expanding my expertise while pursuing my education. As a quick learner, I adapt rapidly to new technologies and thrive in collaborative team environments.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    My focus is on building <span className="text-pink-400 font-semibold">efficient, high-performance software solutions</span> that address real-world business challenges. I have a proven track record in Web Development, API Integration, and Database Management, utilizing technologies like <span className="text-cyan-400">Angular</span>, <span className="text-cyan-400">.NET</span>, and <span className="text-cyan-400">SQL</span>.
                                </p>
                            </div>
                        </div>
                     </motion.div>
            </div>  
        </div>
     );
}
 
export default About;