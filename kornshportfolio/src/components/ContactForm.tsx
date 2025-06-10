import React from 'react';

const ContactForm = () => (
  <form className="flex flex-col gap-4 max-w-md mx-auto bg-white/90 p-8 rounded-lg shadow-lg mt-8">
    <label className="font-semibold">Nom
      <input type="text" name="name" className="w-full mt-1 p-2 border rounded" required />
    </label>
    <label className="font-semibold">Email
      <input type="email" name="email" className="w-full mt-1 p-2 border rounded" required />
    </label>
    <label className="font-semibold">Message
      <textarea name="message" rows={5} className="w-full mt-1 p-2 border rounded" required />
    </label>
    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Envoyer</button>
  </form>
);

export default ContactForm;
