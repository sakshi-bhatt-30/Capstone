// src/components/CTA.js
import React from 'react';

export default function CTA() {
  return (
    <section className="cta py-24 bg-black">
      <div className="container mx-auto  text-center">
        <div className="cta-card bg-gray-300 text-black py-10 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Ready to Transform Your Forms?</h2>
          <p className="text-gray-600 mb-6">Join thousands of organizations making better decisions with FlockIQ.</p>
          {/* Updated button to be gray */}
          <a href="http://flockiq.streamlit.app/" className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition transform hover:scale-105 shadow-md hover:shadow-lg">Get Started Free</a>
        </div>
      </div>
    </section>
  );
}
