"use client";

import React, { useState } from 'react';

function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  // Déclarer la variable dans le composant pour garantir l'accès côté client
  const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL || '';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError(null);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch(formspreeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setError("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch {
      setStatus('error');
      setError("Erreur lors de l'envoi. Veuillez réessayer.");
    }
  }

  return (
    <form
      className={`flex flex-col gap-4 ${className || ''}`.trim()}
      onSubmit={handleSubmit}
      aria-label="Formulaire de contact"
      role="form"
    >
      <label className="font-semibold" htmlFor="contact-name">Nom
        <input id="contact-name" type="text" name="name" className="w-full mt-1 p-2 border rounded" required aria-required="true" aria-label="Nom" />
      </label>
      <label className="font-semibold" htmlFor="contact-email">Email
        <input id="contact-email" type="email" name="email" className="w-full mt-1 p-2 border rounded" required aria-required="true" aria-label="Email" />
      </label>
      <label className="font-semibold" htmlFor="contact-message">Message
        <textarea id="contact-message" name="message" rows={5} className="w-full mt-1 p-2 border rounded" required aria-required="true" aria-label="Message" />
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        disabled={status==='sending'}
        aria-busy={status==='sending'}
        aria-label="Envoyer le message"
      >
        {status === 'sending' ? 'Envoi...' : 'Envoyer'}
      </button>
      {status === 'success' && <span className="text-green-600" role="status" aria-live="polite">Message envoyé !</span>}
      {status === 'error' && <span className="text-red-600" role="alert" aria-live="assertive">{error}</span>}
    </form>
  );
}

export default ContactForm;
