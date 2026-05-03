import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { nama: 'Beranda', id: 'home' },
    { nama: 'Tentang', id: 'about' },
    { nama: 'Pendidikan', id: 'education' },
    { nama: 'Keahlian', id: 'skills' },
    { nama: 'Proyek', id: 'projects' },
    { nama: 'Kontak', id: 'contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Portofolio
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.nama}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white hover:scale-105 transition-all duration-300"
              >
                {item.nama}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700 dark:text-white" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10"
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700 dark:text-white" />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 dark:text-white text-2xl hover:scale-110 transition-transform"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-none p-4 border border-gray-200 dark:border-gray-800">
            {menuItems.map((item) => (
              <button
                key={item.nama}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 px-3 rounded-lg transition-all duration-300"
              >
                {item.nama}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;