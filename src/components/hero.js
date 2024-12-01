// src/components/Hero.js
import React from 'react';

export default function Hero() {
  return (
    <section className="hero py-36 text-center bg-[var(--background)]">
      <div className="container mx-auto px-4">
        {/* Increased font size for heading */}
        <h1 className="text-6xl font-bold mb-8 text-[var(--foreground)]">
          Forms Evolved with Intelligence
        </h1>
        {/* Increased font size for description */}
        <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
          The simplicity of Google Forms meets the power of advanced analytics. Built for teams who need deeper insights.
        </p>
      </div>
    </section>
  );
}
