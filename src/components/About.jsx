import React from 'react';
import { Code2, Layers, Server } from 'lucide-react';

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            I’m a web developer specializing in responsive websites, landing pages, and multi-page web apps.
            My stack — React (JSX), modern CSS, and Node.js — lets me ship clean, maintainable, and scalable solutions.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <Code2 className="text-cyan-300" />
              <h3 className="mt-2 font-semibold">JSX / React</h3>
              <p className="mt-1 text-sm text-neutral-300">Component-based architecture for reusable, maintainable UIs.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <Layers className="text-cyan-300" />
              <h3 className="mt-2 font-semibold">CSS</h3>
              <p className="mt-1 text-sm text-neutral-300">Pixel-perfect, responsive, and performant styling (Tailwind / SCSS).</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <Server className="text-cyan-300" />
              <h3 className="mt-2 font-semibold">Node.js</h3>
              <p className="mt-1 text-sm text-neutral-300">Scalable backends, seamless APIs, full-stack control.</p>
            </div>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-neutral-300 list-disc pl-5">
            <li>Fast load times with optimized assets and code-splitting</li>
            <li>SEO-friendly, semantic HTML with best practices</li>
            <li>Built to scale easily with modern tooling and architecture</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6">
          <h3 className="text-xl font-semibold">Capabilities</h3>
          <dl className="mt-4 space-y-3">
            <div className="flex justify-between">
              <dt className="text-neutral-300">Responsive Design</dt>
              <dd className="text-cyan-300 font-medium">Expert</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-neutral-300">Performance Optimization</dt>
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
        </div>
      </div>
    </section>
  );
}
