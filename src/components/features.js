"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const FeatureSection = () => {
  const features = [
    { id: 1, title: "Advanced Analytics", description: "Gain deep insights into user responses with visual data." },
    { id: 2, title: "Conditional Logic", description: "Show or hide questions dynamically based on user inputs." },
    { id: 3, title: "Collaborative Editing", description: "Edit forms simultaneously with your team." },
    { id: 4, title: "Custom Branding", description: "Customize your forms with logos and themes." },
    { id: 5, title: "Password Protection", description: "Secure your forms with password protection." },
  ];

  return (
    <div className="feature-section">
       <hr className="section-divider" />
      <h2 className="feature-heading">Features</h2>

      {features.map((feature) => (
        <div key={feature.id} className="feature-container">
          <motion.div
            className="feature-box"
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={{
              rest: { backgroundColor: "#1c1c1c" },
              hover: { backgroundColor: "#1c1c1c" },
            }}
          >
            <motion.div
              className="text-wrapper"
              variants={{
                rest: { x: 0, opacity: 1 },
                hover: { x: "-100%", opacity: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              {feature.title}
            </motion.div>
            <motion.div
              className="text-wrapper description"
              variants={{
                rest: { x: "100%", opacity: 0 },
                hover: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.4 }}
            >
              {feature.description}
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
