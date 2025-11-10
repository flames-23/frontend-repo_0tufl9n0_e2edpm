import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SaaS‑лендинг',
    desc: 'Высокая конверсия и адаптивность, A/B‑тестирование CTA.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Интернет‑магазин',
    desc: 'Быстрый каталог, оптимизированные изображения и удобная корзина.',
    tech: ['React', 'SCSS', 'Node.js'],
    link: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Веб‑дешборд',
    desc: 'Ролевая модель доступа, графики, авторизация и интеграции с API.',
    tech: ['React', 'Tailwind', 'Node.js'],
    link: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Проекты</h2>
        <p className="text-sm text-neutral-400">Нажмите на карточку, чтобы открыть проект в новой вкладке.</p>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label={`${p.title} — открыть демо`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
          >
            <div className="aspect-video overflow-hidden">
              <img src={p.image} alt="Обложка проекта" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
          </motion.a>
        ))}
      </div>
    </section>
  );
}
