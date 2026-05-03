import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaSchool } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      tingkat: 'SD',
      institusi: 'SD Negeri 1 Sidosari',
      tahun: '2010 - 2016',
      lokasi: 'Sidosari',
      icon: FaSchool,
    },
    {
      tingkat: 'SMP',
      institusi: 'SMP Negeri 1 Kesesi',
      tahun: '2016 - 2019',
      lokasi: 'Kesesi',
      icon: FaSchool,
    },
    {
      tingkat: 'SMK',
      institusi: 'SMK Muhammadiyah Kesesi',
      jurusan: 'Rekayasa Perangkat Lunak',
      tahun: '2019 - 2022',
      lokasi: 'Kesesi',
      icon: FaGraduationCap,
    },
    {
      tingkat: 'S1',
      institusi: 'Institut Widya Pratama Pekalongan',
      jurusan: 'Teknik Informatika',
      tahun: '2022 - 2026',
      lokasi: 'Pekalongan',
      icon: FaGraduationCap,
      prestasi: 'GPA: 3.8/4.0',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-[#093C5D] dark:text-white">
            Riwayat Pendidikan
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow border-l-4 border-[#093C5D]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#093C5D]/10 rounded-full flex items-center justify-center">
                    <Icon className="text-[#093C5D] text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 bg-[#093C5D]/10 text-[#093C5D] dark:text-blue-400 rounded text-xs font-semibold">
                            {edu.tingkat}
                          </span>
                          {edu.jurusan && (
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {edu.jurusan}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                          {edu.institusi}
                        </h3>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        <FaCalendarAlt className="text-[#093C5D]" />
                        <span>{edu.tahun}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <FaMapMarkerAlt className="text-[#093C5D]" />
                      <span>{edu.lokasi}</span>
                    </div>
                    {edu.prestasi && (
                      <div className="mt-2">
                        <span className="px-2 py-0.5 bg-[#093C5D]/10 text-[#093C5D] dark:text-blue-400 rounded text-xs">
                          {edu.prestasi}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;