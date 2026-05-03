import React from 'react';
import { FaGithub, FaInstagram, FaFacebook, FaYoutube, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/h3h3y" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors text-xl">
            <FaGithub />
          </a>
          <a href="https://instagram.com/_yxwannn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors text-xl">
            <FaInstagram />
          </a>
          <a href="https://fb.com/iwan sanusi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors text-xl">
            <FaFacebook />
          </a>
          <a href="https://www.youtube.com/@krenzengaming3661" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors text-xl">
            <FaYoutube />
          </a>
        </div>
        
        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Iwan Sanusi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;