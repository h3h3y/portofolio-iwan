import React from 'react';
import { FaUserGraduate, FaLaptopCode, FaRocket, FaHeartbeat } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-[#093C5D] dark:text-white">
            Tentang Saya
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Saya adalah lulusan S1 Teknik Informatika dari Institut Widya Pratama Pekalongan dengan fokus di bidang pengembangan web dan aplikasi mobile.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Saat ini saya terus mengasah keterampilan menggunakan teknologi seperti React JS, PHP, Laravel, dan CodeIgniter. 
              Saya juga memiliki ketertarikan untuk mendalami kecerdasan buatan (AI) dan perkembangan teknologi terkini.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Saya menikmati proses kolaborasi dalam proyek open source dan selalu antusias untuk mempelajari hal-hal baru yang dapat menambah wawasan dan kemampuan saya.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-[#093C5D]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaUserGraduate className="text-2xl text-[#093C5D]" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white">Fresh Graduate</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">S1 Teknik Informatika</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-[#093C5D]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaLaptopCode className="text-2xl text-[#093C5D]" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white">Web Developer</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">React, Laravel, CodeIgniter</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-[#093C5D]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaRocket className="text-2xl text-[#093C5D]" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white">Pembelajar Aktif</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Terus belajar teknologi baru</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-[#093C5D]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaHeartbeat className="text-2xl text-[#093C5D]" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white">Open Source</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Antusias berkontribusi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;