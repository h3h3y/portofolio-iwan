import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const formDataToSend = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/is4561722@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Alert sukses yang keren
        Swal.fire({
          title: 'Berhasil!',
          text: 'Pesan Anda telah terkirim. Terima kasih!',
          icon: 'success',
          confirmButtonColor: '#093C5D',
          confirmButtonText: 'OK',
          background: '#fff',
          timer: 3000,
          timerProgressBar: true,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Alert error
        Swal.fire({
          title: 'Gagal!',
          text: 'Gagal mengirim pesan. Silakan coba lagi nanti.',
          icon: 'error',
          confirmButtonColor: '#093C5D',
          confirmButtonText: 'Coba Lagi',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Terjadi kesalahan. Silakan coba lagi.',
        icon: 'error',
        confirmButtonColor: '#093C5D',
        confirmButtonText: 'OK',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-[#093C5D] dark:text-white">
            Hubungi Saya
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Bagian Kiri - Info Kontak */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Mari Terhubung</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Punya proyek menarik? Atau hanya ingin berdiskusi? Jangan ragu untuk menghubungi saya melalui form di samping atau melalui kontak di bawah ini.
            </p>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#093C5D]/10 dark:bg-[#093C5D]/20 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-[#093C5D] dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">is4561722@gmail.com</p>
                </div>
              </div>
              
              {/* GitHub */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#093C5D]/10 dark:bg-[#093C5D]/20 rounded-full flex items-center justify-center">
                  <FaGithub className="text-[#093C5D] dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">GitHub</p>
                  <a 
                    href="https://github.com/h3h3y" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 dark:text-gray-300 hover:text-[#093C5D] dark:hover:text-blue-400 transition-colors"
                  >
                    github.com/h3h3y
                  </a>
                </div>
              </div>
              
              {/* Instagram */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#093C5D]/10 dark:bg-[#093C5D]/20 rounded-full flex items-center justify-center">
                  <FaInstagram className="text-[#093C5D] dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Instagram</p>
                  <a 
                    href="https://instagram.com/_yxwannn" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 dark:text-gray-300 hover:text-[#093C5D] dark:hover:text-blue-400 transition-colors"
                  >
                    @_yxwannn
                  </a>
                </div>
              </div>
              
              {/* Facebook */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#093C5D]/10 dark:bg-[#093C5D]/20 rounded-full flex items-center justify-center">
                  <FaFacebook className="text-[#093C5D] dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Facebook</p>
                  <a 
                    href="https://fb.com/iwan sanusi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 dark:text-gray-300 hover:text-[#093C5D] dark:hover:text-blue-400 transition-colors"
                  >
                    Iwan Sanusi
                  </a>
                </div>
              </div>
              
              {/* Lokasi */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#093C5D]/10 dark:bg-[#093C5D]/20 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[#093C5D] dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Lokasi</p>
                  <p className="text-gray-600 dark:text-gray-300">Pekalongan, Jawa Tengah</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bagian Kanan - Form Kontak */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093C5D] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                placeholder="Masukkan nama Anda"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Alamat Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093C5D] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                placeholder="email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Pesan</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#093C5D] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all resize-none"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-[#093C5D] hover:bg-[#0c4d75] text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaPaperPlane />
              <span>{isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;