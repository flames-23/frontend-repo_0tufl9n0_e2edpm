import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thanks${name ? `, ${name}` : ''}! Your message was captured locally.`);
    e.currentTarget.reset();
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s work together</h2>
      <p className="mt-2 text-neutral-300 max-w-2xl">
        Have a project in mind? Send a quick brief and I’ll get back within one business day.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="block text-sm text-neutral-300">Name</label>
          <input id="name" name="name" type="text" required className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900/70 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className="block text-sm text-neutral-300">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900/70 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="type" className="block text-sm text-neutral-300">Project type</label>
          <select id="type" name="type" className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900/70 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400">
            <option>Landing Page</option>
            <option>E-commerce</option>
            <option>Web App</option>
            <option>Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm text-neutral-300">Message</label>
          <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-900/70 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" />
        </div>
        <div className="sm:col-span-2 flex items-center gap-4">
          <button type="submit" className="inline-flex items-center justify-center rounded-md bg-cyan-400/90 hover:bg-cyan-400 text-neutral-900 font-semibold px-4 py-2 transition">
            Send message
          </button>
          {status && <span className="text-sm text-cyan-300">{status}</span>}
        </div>
      </form>
    </section>
  );
}
