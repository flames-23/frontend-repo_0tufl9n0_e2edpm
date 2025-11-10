import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative">
      <div className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle vignette gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300 backdrop-blur">
              <Rocket size={14} className="text-cyan-300" />
              Modern React • Tailwind • Node.js
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Building fast, responsive, and scalable web experiences.
            </h1>
            <p className="mt-4 text-neutral-300 leading-relaxed">
              I craft performant UIs with React, pixel-perfect CSS, and robust Node.js backends — optimized for SEO, accessibility, and future growth.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-md bg-cyan-400/90 hover:bg-cyan-400 text-neutral-900 font-semibold px-4 py-2 transition"
              >
                View Work <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold px-4 py-2 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
