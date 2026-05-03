import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import gambar dari folder src/assets/images/
import karkenBMNImage from '../assets/images/karkenbmn.png';
import evitaImage from '../assets/images/manggala.png';
import talkvoidImage from '../assets/images/talkvoid.png';

const Projects = () => {
  const projects = [
    {
      title: 'KarkenBMN',
      description: 'Sistem untuk manajemen data Barang Milik Negara dengan fitur pelaporan dan inventarisasi yang lengkap. Dibangun untuk mendukung operasional BPS Kabupaten Pekalongan.',
      tech: ['CodeIgniter 4', 'jQuery', 'MySQL', 'Bootstrap'],
      image: karkenBMNImage,
      link: 'https://s.bps.go.id/KarkenBMN',
      isRedirect: true,
      client: 'BPS Kabupaten Pekalongan',
    },
    {
      title: 'Manggala',
      description: 'Sistem informasi untuk evaluasi kinerja dan administrasi internal perusahaan. Dikembangkan khusus untuk kebutuhan BPS Kabupaten Pekalongan.',
      tech: ['CodeIgniter 4', 'jQuery', 'MySQL', 'Bootstrap'],
      image: evitaImage,
      link: 'https://s.bps.go.id/Evita',
      isRedirect: true,
      client: 'BPS Kabupaten Pekalongan',
    },
    {
      title: 'TalkVoid',
      description: 'Platform percakapan anonim sederhana untuk berbagi pesan tanpa identitas.',
      tech: ['React JS', 'Tailwind CSS', 'Laravel', 'Vercel'],
      image: talkvoidImage,
      link: 'https://talkvoid.vercel.app',
      github: 'https://github.com/h3h3y',
      isRedirect: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-[#093C5D] dark:text-white">
            Proyek Saya
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                {project.client && (
                  <div className="absolute bottom-2 left-2 bg-[#093C5D]/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                    {project.client}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[#093C5D]/10 dark:bg-[#093C5D]/20 text-[#093C5D] dark:text-blue-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-[#093C5D] transition-colors text-sm"
                    >
                      <FaGithub className="mr-1" /> Code
                    </a>
                  )}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-[#093C5D] transition-colors text-sm"
                  >
                    <FaExternalLinkAlt className="mr-1" /> {project.isRedirect ? 'Lihat Proyek' : 'Demo'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/h3h3y"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#093C5D] hover:bg-[#0c4d75] text-white rounded-lg hover:scale-105 transition-transform"
          >
            <FaGithub />
            <span>Lihat Semua Proyek di GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;