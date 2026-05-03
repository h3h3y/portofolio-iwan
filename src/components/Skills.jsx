import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel,
  FaBootstrap, FaGitAlt, FaLinux, FaRobot, FaBrain, FaMicrochip
} from 'react-icons/fa';
import { SiCodeigniter, SiTailwindcss, SiMysql, SiOpenai } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';

const Skills = () => {
  const webSkills = [
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-600' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-600' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'React JS', icon: FaReact, color: 'text-cyan-500' },
    { name: 'PHP', icon: FaPhp, color: 'text-indigo-600' },
    { name: 'Laravel', icon: FaLaravel, color: 'text-red-600' },
    { name: 'CodeIgniter', icon: SiCodeigniter, color: 'text-orange-600' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-indigo-600' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-500' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'Linux', icon: FaLinux, color: 'text-yellow-600' },
  ];

  const aiTools = [
    { name: 'ChatGPT', icon: SiOpenai, color: 'text-green-500' },
    { name: 'DeepSeek AI', icon: FaBrain, color: 'text-blue-500' },
    { name: 'Gemini AI', icon: GiArtificialIntelligence, color: 'text-purple-500' },
    { name: 'Claude AI', icon: FaRobot, color: 'text-orange-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-[#093C5D] dark:text-white">
            Keahlian & Peralatan
          </span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Pengembangan Web
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {webSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center group"
                >
                  <Icon className={`text-5xl mx-auto mb-3 ${skill.color} group-hover:animate-bounce`} />
                  <h3 className="font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                </div>
              );
            })}
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Peralatan Kecerdasan Buatan (AI)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aiTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center group"
                >
                  <div className="w-12 h-12 bg-[#093C5D]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className={`text-3xl ${tool.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">{tool.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;