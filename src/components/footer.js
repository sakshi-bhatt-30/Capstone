// src/components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Tagline */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-4">
              <div className="bg-white text-black p-3 rounded-full font-bold text-lg">
                FQ
              </div>
              <span className="text-xl font-semibold">FlockIQ</span>
            </a>
            <p className="text-gray-400">
              Making forms smarter, insights deeper. Join us in transforming surveys for the modern age.
            </p>
          </div>

          {/* Column 2: Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul>
              <li className="mb-2"><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
              <li className="mb-2"><a href="#analytics" className="text-gray-400 hover:text-white transition">Analytics</a></li>
              <li className="mb-2"><a href="/enterprise" className="text-gray-400 hover:text-white transition">Enterprise</a></li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul>
              <li className="mb-2"><a href="/about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li className="mb-2"><a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li className="mb-2"><a href="/careers" className="text-gray-400 hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul>
              <li className="mb-2"><a href="mailto:support@flockiq.com" className="text-gray-400 hover:text-white transition">support@flockiq.com</a></li>
              <li className="mb-2"><a href="tel:+1234567890" className="text-gray-400 hover:text-white transition">+1 234 567 890</a></li>
              <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white transition">Contact Form</a></li>
            </ul>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">&copy; 2024 FlockIQ. All rights reserved.</p>
          <ul className="flex justify-center mt-4 space-x-4">
            <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            <li><a href="/help" className="text-gray-400 hover:text-white transition">Help Center</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
