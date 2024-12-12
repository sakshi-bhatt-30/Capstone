// src/components/Hero.js
import React from 'react';

export default function Hero() {
  return (
    <section className="flex flex-col items-start justify-start text-left py-40 px-5 bg-transparent">
      <div className="container mx-auto px-4 py-6 ">
        {/* Increased font size for heading */}
        <h1 className="animate-typing overflow-hidden whitespace-nowrap text-4xl md:text-6xl  text-white mb-6">
          Forms Evolved with Intelligence
        </h1>
        {/* Increased font size for description */}
        <p className="text-2xl text-gray-400 max-w-2xl">
          The simplicity of Google Forms meets the power of advanced analytics. Built for teams who need deeper insights.
        </p>
      </div>
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-2 mt-6 ml-10">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-2 py-2 bg-gray-800 border border-gray-700 rounded outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button className="bg-yellow-400 text-black px-3 py-2 rounded hover:bg-white transition">
          Access To Workspace
        </button>
      </div>
    </section>
  );
}
