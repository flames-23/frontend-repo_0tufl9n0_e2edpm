import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'SaaS Landing Page',
    desc: 'High-converting, responsive marketing site with A/B-tested CTA flow.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'E-commerce Storefront',
    desc: 'Fast product browsing with optimized images and cart UX.',
    tech: ['React', 'SCSS', 'Node.js'],
    link: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Web App Dashboard',
    desc: 'Role-based dashboard with charts, auth, and API integrations.',
    tech: ['React', 'Tailwind', 'Node.js'],
    link: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
        <p className="text-sm text-neutral-400">Click a card to open the live project in a new tab.</p>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label={`${p.title} — open live demo`}
          >
            <div className="aspect-video overflow-hidden">
              <img src={p.image} alt="Project cover" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-300">{p.desc}</p>
                </div>
                <ExternalLink className="text-cyan-300 opacity-0 group-hover:opacity-100 transition" size={18} />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs rounded-md border border-white/10 bg-neutral-900/60 px-2 py-1 text-neutral-300">{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
