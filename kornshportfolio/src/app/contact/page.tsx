import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <Navbar />
      <section className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">Contact</h1>
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
