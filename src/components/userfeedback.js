// src/components/UserFeedback.js
import React from 'react';

export default function UserFeedback() {
  return (
    <section className="user-feedback">
      <div className="container mx-auto text-center">
        <h2>We'd Love Your Feedback</h2>
        <p className="text-lg mb-12 text-gray-400">Tell us about your experience with FlockIQ and how we can improve.</p>

        <div className="feedback-form">
          <h3>Your Feedback Matters</h3>
          
          {/* Feedback Form */}
          <form className="space-y-6">
            <div className="flex justify-between gap-4">
              <div className="w-full">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your Name"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your Email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="feedback">Feedback</label>
              <textarea
                id="feedback"
                name="feedback"
                rows="4"
                placeholder="Write your feedback here..."
              />
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                type="submit"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
