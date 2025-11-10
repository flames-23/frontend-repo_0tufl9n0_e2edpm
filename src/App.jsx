import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-300/30 selection:text-cyan-100">
      {/* Простая навигация-якоря */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/60 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Моё портфолио</a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-cyan-300 transition">Обо мне</a>
            <a href="#work" className="hover:text-cyan-300 transition">Проекты</a>
            <a href="#contact" className="hover:text-cyan-300 transition">Контакты</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="work"><Portfolio /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="mt-20 border-t border-white/10 py-10 text-center text-sm text-neutral-400">
        <p>
          © {new Date().getFullYear()} • Сделано на React и Tailwind с любовью к чистым и доступным интерфейсам.
        </p>
      </footer>
    </div>
  );
}
