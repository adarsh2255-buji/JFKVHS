import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    heading: "Welcome to JFKVHS",
    subheading: "Empowering students for a brighter future through excellence, creativity, and community."
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
    heading: "Achieve More Together",
    subheading: "Join a vibrant community dedicated to growth and achievement."
  },
  {
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80",
    heading: "Inspiring Innovation",
    subheading: "We foster creativity and critical thinking for tomorrow's leaders."
  }
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.section 
        className="relative min-h-screen w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-screen"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-screen flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.heading}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/60 to-green-700/80"></div>
                <div className="relative z-10 w-full max-w-2xl mx-auto text-center px-4">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-white">{slide.heading}</h1>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow text-white">{slide.subheading}</p>
                  <button onClick={() => navigate("/register")} className="bg-white text-green-900 font-bold px-8 py-3 rounded-full shadow hover:bg-green-100 transition cursor-pointer">Register Here</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
      {/* School Details Section */}
      <motion.section 
        className="py-12 bg-green-50 w-full"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80"
            alt="JFKVHS School Building"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-64 md:h-80"
          />
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">About JFKVHS</h2>
            <p className="text-lg text-green-800 mb-2">
              JFKVHS is a leading institution committed to nurturing young minds and empowering students to reach their full potential. Our school offers a dynamic learning environment, dedicated faculty, and a wide range of academic and extracurricular opportunities. We believe in fostering innovation, integrity, and a strong sense of community among our students.
            </p>
          </div>
        </div>
      </motion.section>
      {/* School Metrics Section */}
      <motion.section 
        className="py-12 bg-white w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-8 text-center">JFKVHS At a Glance</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{"value":"1,200+","label":"Students"},{"value":"80+","label":"Teachers"},{"value":"40+","label":"Staff"},{"value":"98%","label":"Winning Percentage"}].map((metric, i) => (
              <motion.div
                key={metric.label}
                className="bg-green-100 rounded-lg shadow p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <div className="text-4xl font-extrabold text-green-800 mb-2">{metric.value}</div>
                <div className="text-lg font-medium text-green-900">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Testimonials Section */}
      <motion.section 
        className="py-12 bg-green-50 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-8 text-center">What People Say About JFKVHS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {quote: '"JFKVHS has given me the confidence and skills to pursue my dreams. The teachers are incredibly supportive and the community feels like family."', name: 'Ava Smith', role: 'Alumna'},
              {quote: '"As a parent, I appreciate the dedication of the staff and the wide range of opportunities available to students. My child loves going to school every day!"', name: 'Michael Johnson', role: 'Parent'},
              {quote: '"Working at JFKVHS is a rewarding experience. The school values innovation and truly cares about both students and staff."', name: 'Priya Patel', role: 'Teacher'}
            ].map((t, i) => (
              <motion.div
                key={t.name}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <p className="text-green-900 italic mb-4">{t.quote}</p>
                <div className="font-bold text-green-800">{t.name}</div>
                <div className="text-green-600 text-sm">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Why JFKVHS Section */}
      <motion.section
        className="py-12 bg-white w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">Why JFKVHS?</h3>
          <p className="text-lg text-green-800 mb-2">
            At JFKVHS, we go beyond academics to nurture well-rounded individuals. Our commitment to excellence, innovative teaching methods, and a supportive environment empower students to thrive. We celebrate diversity, encourage leadership, and provide opportunities for every student to discover their unique strengths. Choose JFKVHS for a transformative educational journey that prepares you for success in life.
          </p>
          <button onClick={() => navigate("/register")} className="mt-6 bg-green-700 text-white font-bold px-8 py-3 rounded-full shadow hover:bg-green-800 transition cursor-pointer">Register Here</button>
        </div>
      </motion.section>
    </>
  );
};

export default Home; 