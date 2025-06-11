import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import AnimatedBackground from '../../components/AnimatedBackground';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <AnimatedBackground />
      <Navbar />
      <section className="max-w-2xl mx-auto px-4 rounded-lg shadow-md my-8" style={{ background: 'none' }}>
        <h1 className="text-3xl font-bold mb-8 text-center section-title">Contact</h1>
        <ContactForm />
        <div className="mt-8 flex flex-col items-center gap-2 text-gray-600">
          <a href="https://github.com/kornshdev" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/kornshdev" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
