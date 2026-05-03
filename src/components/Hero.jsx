import React from 'react';
import { FaGithub, FaInstagram, FaFacebook, FaYoutube, FaArrowDown, FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animasi variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const avatarVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', duration: 0.8, bounce: 0.5 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-20"
      >
        <div className="text-center">
          {/* Avatar dengan animasi spring */}
          <motion.div 
            variants={avatarVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-[#093C5D] flex items-center justify-center shadow-xl">
              <FaCode className="text-5xl text-white" />
            </div>
          </motion.div>
          
          {/* Nama */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Iwan Sanusi
          </motion.h1>
          
          {/* Badges */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-3 mb-4"
          >
            <span className="px-4 py-1 bg-blue-50 dark:bg-white/10 text-blue-600 dark:text-white rounded-full text-sm flex items-center gap-2">
              <FaLaptopCode className="text-sm" />
              Web Developer
            </span>
            <span className="px-4 py-1 bg-teal-50 dark:bg-white/10 text-teal-600 dark:text-white rounded-full text-sm flex items-center gap-2">
              <FaMobileAlt className="text-sm" />
              Mobile Developer
            </span>
          </motion.div>
          
          {/* Deskripsi */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto"
          >
            Sebagai seorang fresh graduate di bidang teknologi, saya masih terus belajar dan mengasah keterampilan. Saya berharap dapat berkontribusi melalui karya-karya yang bermanfaat
          </motion.p>
          
          {/* Social Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-5 mb-8"
          >
            <a href="https://github.com/h3h3y" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white hover:scale-110 transition-all duration-300">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://instagram.com/_yxwannn" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-white transition-all duration-300">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://fb.com/iwan sanusi" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all duration-300">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://www.youtube.com/@krenzengaming3661" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-white transition-all duration-300">
              <FaYoutube className="text-2xl" />
            </a>
          </motion.div>
          
          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-[#093C5D] text-white rounded-full hover:bg-[#0c4d75] hover:scale-105 transition-transform shadow-lg"
            >
              Hubungi Saya
            </button>
            <a
              href="https://h3h3y.github.io/cv-iwan.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[#093C5D] text-[#093C5D] dark:text-white rounded-full hover:bg-[#093C5D]/10 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Lihat CV
            </a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Arrow Button */}
      <motion.button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group z-10"
        aria-label="Scroll ke bawah"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0 }}
        >
          <FaArrowDown className="text-gray-400 dark:text-gray-500 text-2xl group-hover:text-[#093C5D] dark:group-hover:text-white transition-colors duration-300" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;