'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSwimmingPool, FaLeaf, FaBed, FaSpa, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Analytics } from "@vercel/analytics/next";

const galleryImages = [
  '/images/FrontView.jpeg',
  '/images/Pool.jpeg',
  '/images/GardenView.jpeg',
  '/images/CommonArea.jpeg',
  '/images/chandelier.jpeg',
  '/images/BarCabinet.jpeg',
  '/images/Terrace.jpeg',
  '/images/bedroom.jpeg',
  '/images/Washroom.jpeg',
  '/images/slider2.jpeg',
];

const welcomeSliderImages = [
  '/images/Pool.jpeg',
  '/images/Slider2.jpeg',
];

// Add custom styles for Swiper pagination
const swiperStyles = `
  .swiper-pagination-bullet {
    width: 12px !important;
    height: 12px !important;
    background: #b2dfdb !important;
    opacity: 1 !important;
  }
  .swiper-pagination-bullet-active {
    width: 16px !important;
    height: 16px !important;
    background: #388e3c !important;
  }
`;

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Swarana Farms - Luxury Farmhouse in Manesar</title>
        <meta name="description" content="Experience luxury and tranquility at Swarana Farms, Manesar. Featuring a grand pool, lush gardens, and premium accommodations." />
        <meta property="og:title" content="Swarana Farms - Luxury Farmhouse in Manesar" />
        <meta property="og:description" content="Experience luxury and tranquility at Swarana Farms, Manesar. Featuring a grand pool, lush gardens, and premium accommodations." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/Pool.jpeg" />
      </Head>
      <main className="min-h-screen bg-background">
        {/* Sticky Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#145374] to-[#388e3c] shadow-lg">
          <div className="container mx-auto px-4 flex items-center justify-between h-16">
            <a href="#hero" className="flex items-center space-x-2 text-3xl font-serif font-bold text-white tracking-wide">
              <FaLeaf className="text-[#b2dfdb] text-2xl mb-1" />
              <span>Swarana Farms</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 font-semibold text-lg">
              <a href="#features" className="relative px-3 py-1 rounded-full text-white hover:bg-[#388e3c]/30 transition-colors after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-2/3">Features</a>
              <a href="#gallery" className="relative px-3 py-1 rounded-full text-white hover:bg-[#388e3c]/30 transition-colors after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-2/3">Gallery</a>
              <a href="#about" className="relative px-3 py-1 rounded-full text-white hover:bg-[#388e3c]/30 transition-colors after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-2/3">About</a>
              <a href="#contact" className="relative px-3 py-1 rounded-full text-white hover:bg-[#388e3c]/30 transition-colors after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-2/3">Contact</a>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-gradient-to-r from-[#145374] to-[#388e3c] border-t border-[#b2dfdb]">
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <a href="#features" className="font-semibold text-lg text-white rounded-full px-3 py-2 hover:bg-[#388e3c]/30 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                <a href="#gallery" className="font-semibold text-lg text-white rounded-full px-3 py-2 hover:bg-[#388e3c]/30 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
                <a href="#about" className="font-semibold text-lg text-white rounded-full px-3 py-2 hover:bg-[#388e3c]/30 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                <a href="#contact" className="font-semibold text-lg text-white rounded-full px-3 py-2 hover:bg-[#388e3c]/30 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </nav>
        <div className="h-16" />

        {/* Hero Section */}
        <section id="hero" className="relative h-[70vh] flex items-center justify-center">
          <Image 
            src="/images/FrontView.jpeg" 
            alt="Swarana Farms Front View" 
            fill 
            className="object-cover" 
            priority 
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">Swarana Farms</h1>
            <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-[#388e3c] text-white font-semibold shadow-lg hover:bg-[#145374] transition">Book Your Stay</a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-[#f4faf6] border-b border-[#b2dfdb]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#145374]">Features</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center p-6 bg-[#e0f2e9] rounded-xl shadow hover:shadow-lg transition border border-[#b2dfdb]">
                <FaSwimmingPool className="text-4xl text-[#388e3c] mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2 text-[#145374]">Luxurious Pool</h3>
                <p className="text-[#145374] text-center">Enjoy our spacious, sparkling pool for relaxation and fun.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-[#e0f2e9] rounded-xl shadow hover:shadow-lg transition border border-[#b2dfdb]">
                <FaLeaf className="text-4xl text-[#388e3c] mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2 text-[#145374]">Beautiful Gardens</h3>
                <p className="text-[#145374] text-center">Stroll through lush, well-maintained gardens and greenery.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-[#e0f2e9] rounded-xl shadow hover:shadow-lg transition border border-[#b2dfdb]">
                <FaBed className="text-4xl text-[#388e3c] mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2 text-[#145374]">Luxurious Stay</h3>
                <p className="text-[#145374] text-center">Experience comfort and elegance in our premium accommodations.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-[#e0f2e9] rounded-xl shadow hover:shadow-lg transition border border-[#b2dfdb]">
                <FaSpa className="text-4xl text-[#388e3c] mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2 text-[#145374]">Peaceful Location</h3>
                <p className="text-[#145374] text-center">Escape the city and unwind in a tranquil, private setting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About/Welcome Split Section */}
        <section id="about" className="py-20 bg-white border-b border-[#b2dfdb]">
          <style>{swiperStyles}</style>
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-7xl">
            <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
              <div className="relative w-full aspect-[4/3] max-w-2xl rounded-xl overflow-hidden shadow-lg border border-[#b2dfdb]">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  className="w-full h-full"
                >
                  {welcomeSliderImages.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="relative w-full h-full">
                        <Image 
                          src={img} 
                          alt={`Welcome slider image ${i + 1}`} 
                          fill 
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="md:w-1/2 w-full text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#145374]">Swarana Farms – The Best Picnic Spot in Delhi NCR.</h2>
              <p className="text-lg text-[#145374] mb-4">Nestled in the heart of Manesar, Swarana Farms offers a perfect blend of luxury, nature, and tranquility. Whether you&apos;re looking for a family getaway, a celebration, or a peaceful retreat, our farmhouse provides the ideal setting with a grand pool, lush gardens, and premium accommodations.</p>
              <p className="text-lg text-[#145374]">Come experience the serenity and elegance that make Swarana Farms truly special.</p>
              <p className="text-lg md:text-xl text-[#145374] font-semibold">Book your day outing, evening outing, or night stay today!</p>
            </div>
          </div>
        </section>

        {/* Gallery Section - Swiper Carousel */}
        <section id="gallery" className="py-20 bg-[#f4faf6] border-b border-[#b2dfdb]">
          <style>{swiperStyles}</style>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#145374]">Photo Gallery</h2>
            <div className="relative">
              <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="w-full"
              >
                {galleryImages.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-[#b2dfdb]">
                      <Image 
                        src={img} 
                        alt={`Gallery image ${i + 1}`} 
                        fill 
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* Contact & Location Section */}
        <section id="contact" className="pt-10 pb-20 bg-[#f4faf6]">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#e0f2e9] rounded-xl shadow-lg p-6 h-[350px] flex flex-col justify-center space-y-5 border border-[#b2dfdb]">
              <h2 className="text-3xl font-serif font-bold text-[#145374] mb-2 text-left">Contact Us</h2>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl text-[#388e3c]" />
                <a href="tel:+919818009007" className="text-lg font-medium text-[#145374] hover:text-[#388e3c] transition-colors">+91 9818009007</a>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-[#388e3c]" />
                <a href="mailto:stayatswarnafarms@gmail.com" className="text-lg font-medium text-[#145374] hover:text-[#388e3c] transition-colors">stayatswarnafarms@gmail.com</a>
              </div>
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-2xl text-[#388e3c] mt-1" />
                <div className="text-[#145374]">
                  <div className="font-bold text-[#145374]">MUSTIL NO 24 KILA NO 112</div>
                  <div>VILLAGE KHEDKI, Near Airtel Mobile Tower,</div>
                  <div>TEHSIL MANESAR, Gururgram-122105</div>
                </div>
              </div>
            </div>
            <div className="bg-[#e0f2e9] rounded-xl shadow-lg p-4 h-[350px] overflow-hidden border border-[#b2dfdb]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.0127693!3d28.5024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a9c31e0f1f7%3A0x2b066bd4cc2b3d3a!2sKhedki%2C%20Haryana%20122051!5e0!3m2!1sen!2sin!4v1647881234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-[#e0f2e9] border-t border-[#b2dfdb] text-center text-[#145374] font-sans">
          &copy; {new Date().getFullYear()} Swarana Farms. All rights reserved.
        </footer>
      </main>
      <Analytics />
    </>
  );
}
