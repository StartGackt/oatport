
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl text-neutral-200"
      >
        Get in Touch
      </motion.h2>
      
      <div className="text-center tracking-tighter">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <div className="flex items-center gap-4 text-neutral-400 hover:text-purple-400 transition-colors duration-300">
            <div className="p-4 rounded-full bg-neutral-900 border border-neutral-800">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <p className="text-lg">Bangkok, 10120</p>
          </div>

          <div className="flex items-center gap-4 text-neutral-400 hover:text-purple-400 transition-colors duration-300">
            <div className="p-4 rounded-full bg-neutral-900 border border-neutral-800">
              <FaPhone className="text-2xl" />
            </div>
            <p className="text-lg">0659143679</p>
          </div>

          <a 
            href="mailto:Thestackdev2001@outlook.com"
            className="flex items-center gap-4 text-neutral-400 hover:text-purple-400 transition-colors duration-300 group"
          >
            <div className="p-4 rounded-full bg-neutral-900 border border-neutral-800 group-hover:border-purple-500/50 transition-colors">
              <FaEnvelope className="text-2xl" />
            </div>
            <p className="text-lg border-b border-transparent group-hover:border-purple-400">
              Thestackdev2001@outlook.com
            </p>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 text-sm text-neutral-500"
        >
          <p>© 2025 OAT SRICHAINIWAS. All Rights Reserved.</p>
          <p className="mt-2 text-xs">Designed & Built with Passion</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;