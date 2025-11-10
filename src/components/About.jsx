import React from 'react';
import { Code2, Layers, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Обо мне
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 text-neutral-300 leading-relaxed"
          >
            Я фронтенд/фулстек‑разработчик. Делаю адаптивные сайты, лендинги и веб‑приложения.
            Стек — React (JSX), современный CSS и Node.js — позволяет выпускать чистые и масштабируемые решения.
          </motion.p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[{ Icon: Code2, title: 'JSX / React', text: 'Компонентный подход для поддерживаемых интерфейсов.' },
              { Icon: Layers, title: 'CSS', text: 'Пиксель‑перфект адаптивная и быстрая стилизация (Tailwind/SCSS).' },
              { Icon: Server, title: 'Node.js', text: 'Масштабируемые бэкенды и API.' }].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i+2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <item.Icon className="text-cyan-300" />
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-neutral-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.ul
            variants={fadeUp}
            custom={5}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 space-y-2 text-sm text-neutral-300 list-disc pl-5"
          >
            <li>Быстрая загрузка: оптимизация ассетов и код‑сплиттинг</li>
            <li>SEO и семантическая вёрстка по best‑practice</li>
            <li>Готовность к росту благодаря современной архитектуре</li>
          </motion.ul>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6"
        >
          <h3 className="text-xl font-semibold">Навыки</h3>
          <dl className="mt-4 space-y-3">
            <div className="flex justify-between">
              <dt className="text-neutral-300">Responsive Design</dt>
              <dd className="text-cyan-300 font-medium">Expert</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-neutral-300">Performance</dt>
              <dd className="text-cyan-300 font-medium">Advanced</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-neutral-300">Accessibility (a11y)</dt>
              <dd className="text-cyan-300 font-medium">Advanced</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-neutral-300">API Integrations</dt>
              <dd className="text-cyan-300 font-medium">Advanced</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
