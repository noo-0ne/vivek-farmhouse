'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSwimmingPool, FaLeaf, FaBed, FaSpa, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import Head from 'next/head';

const galleryImages = [
  '/images/FrontView.jpeg',
  '/images/Pool.jpeg',
  '/images/GardenView.jpeg',
  '/images/CommonArea.jpeg',
  '/images/chandelier.jpeg',
  '/images/BarCabinet.jpeg',
  '/images/Terrace.jpeg',
];

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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e0f2e9]/90 backdrop-blur-md shadow-md border-b border-[#b2dfdb]">
          <div className="container mx-auto px-4 flex items-center justify-between h-16">
            <a href="#hero" className="text-2xl font-serif font-bold text-[#145374] tracking-wide">Swarana Farms</a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#388e3c]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 font-semibold text-lg">
              <a href="#features" className="hover:text-[#388e3c] text-[#145374] transition-colors">Features</a>
              <a href="#gallery" className="hover:text-[#388e3c] text-[#145374] transition-colors">Gallery</a>
              <a href="#about" className="hover:text-[#388e3c] text-[#145374] transition-colors">About</a>
              <a href="#contact" className="hover:text-[#388e3c] text-[#145374] transition-colors">Contact</a>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-[#e0f2e9] border-t border-[#b2dfdb]">
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <a href="#features" className="font-semibold text-lg hover:text-[#388e3c] text-[#145374] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                <a href="#gallery" className="font-semibold text-lg hover:text-[#388e3c] text-[#145374] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
                <a href="#about" className="font-semibold text-lg hover:text-[#388e3c] text-[#145374] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                <a href="#contact" className="font-semibold text-lg hover:text-[#388e3c] text-[#145374] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </nav>
        <div className="h-16" />

        {/* Hero Section */}
        <section id="hero" className="relative h-[70vh] flex items-center justify-center">
          <Image 
            src="/images/Pool.jpeg" 
            alt="Swarana Farms Pool" 
            fill 
            className="object-cover" 
            priority 
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">Swarana Farms</h1>
            <p className="text-2xl md:text-3xl mb-8 font-sans text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Luxurious Pool, Lush Gardens, Unforgettable Stays</p>
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

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-[#f4faf6] border-b border-[#b2dfdb]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#145374]">Photo Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition border border-[#b2dfdb]">
                  <Image 
                    src={img} 
                    alt={`Gallery image ${i + 1}`} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white border-b border-[#b2dfdb]">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-4xl font-serif font-bold mb-6 text-[#145374]">Welcome to Swarana Farms</h2>
            <p className="text-lg text-[#145374] mb-4">Nestled in the heart of Manesar, Swarana Farms offers a perfect blend of luxury, nature, and tranquility. Whether you&apos;re looking for a family getaway, a celebration, or a peaceful retreat, our farmhouse provides the ideal setting with a grand pool, lush gardens, and premium accommodations.</p>
            <p className="text-lg text-[#145374]">Come experience the serenity and elegance that make Swarana Farms truly special.</p>
          </div>
        </section>

        {/* Contact & Location Section */}
        <section id="contact" className="py-20 bg-[#f4faf6]">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#e0f2e9] rounded-xl shadow-lg p-8 flex flex-col space-y-6 border border-[#b2dfdb]">
              <h2 className="text-3xl font-serif font-bold text-[#145374] mb-4">Contact Us</h2>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl text-[#388e3c]" />
                <a href="tel:+919953721317" className="text-lg font-medium text-[#145374] hover:text-[#388e3c] transition-colors">+91 9953721317</a>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl text-[#388e3c]" />
                <a href="tel:+919818009007" className="text-lg font-medium text-[#145374] hover:text-[#388e3c] transition-colors">+91 9818009007</a>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-[#388e3c]" />
                <a href="mailto:akskamboj1998@gmail.com" className="text-lg font-medium text-[#145374] hover:text-[#388e3c] transition-colors">akskamboj1998@gmail.com</a>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-[#388e3c]" />
                <a href="mailto:stayatswarnafarms@gmail.com" className="text-lg font-medium text-[#145374] hover:text-[#388e3c] transition-colors">stayatswarnafarms@gmail.com</a>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl text-[#388e3c]" />
                <div className="text-[#145374]">
                  <div className="font-semibold">MUSTIL NO 24 KILA NO 112</div>
                  <div>VILLAGE, KHEDKI</div>
                  <div>Near Airtel Mobile Tower</div>
                  <div>TEHSIL MANESAR</div>
                  <div>Gururgram-122105</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4 h-[350px] overflow-hidden border border-[#b2dfdb]">
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
    </>
  );
}
