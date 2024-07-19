
import profilePic from '../assets/projects/hero.jpg'
import { motion } from 'framer-motion'

const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: delay, duration: 0.5 }
    }
})
const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Oat Srichainiwas</motion.h1>
                        <motion.span
                         variants={container(0.5)}
                         initial='hidden'
                         animate='visible'
                         className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Data Science Engineer</motion.span>
                        <motion.p
                         variants={container(1)}
                         initial='hidden'
                         animate='visible'
                        className="my-2 max-w-xl py-6 font-light tracking-tight ">I am a passionate full stack developer and data scientist with a knack for crafting robust and scalable web applications and insightful data-driven solutions, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. Additionally, I possess strong expertise in data science using Python, Pandas, Scikit-learn, and TensorFlow. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences by integrating advanced data analytics and machine learning capabilities.</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                        initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay:1.2}}
                        src={profilePic}
                            className='rounded-full h-60 w-60 lg:h-80 lg:w-80'
                            alt="Tarzanlogo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;