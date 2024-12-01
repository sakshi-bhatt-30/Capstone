"use client"
import React, { useState } from "react";
import "/src/app/globals.css";

const ComparisonCards = () => {
  const [dropdown, setDropdown] = useState({
    flockiq: null,
    googleForms: null,
  });

  const toggleDropdown = (platform, index) => {
    setDropdown((prev) => ({
      ...prev,
      [platform]: prev[platform] === index ? null : index, // Toggle dropdown visibility
    }));
  };

  const features = [
    {
      title: "Advanced Analytics",
      img: "/images/analytics.png", // Correct path to image
      description: "Gain deep insights into user responses.",
    },
    {
      title: "Conditional Logic",
      img: "/images/logic.png",
      description: "Show or hide questions dynamically based on user inputs.",
    },
    {
      title: "Collaborative Editing",
      img: "/images/collaboration.png",
      description: "Allow multiple users to edit the form simultaneously.",
    },
    {
      title: "Password Protection",
      img: "/images/security.png",
      description: "Secure your forms with password protection.",
    },
    {
      title: "Custom Branding",
      img: "/images/branding.png",
      description: "Add your logo and colors for full customization.",
    },
    {
      title: "Media Embedding",
      img: "/images/media.png",
      description: "Embed videos and images directly into your forms.",
    },
    {
      title: "Built-In Data Visualization",
      img: "/images/charts.png",
      description: "Visualize data with charts and graphs in real-time.",
    },
  ];

  return (
    <div className="comparison-container">
      {/* FlockIQ Card */}
      <div className="comparison-card">
        <h3 className="card-title">FlockIQ</h3>
        <ul>
          {features.map((feature, index) => (
            <li key={index} onClick={() => toggleDropdown("flockiq", index)}>
              <span className="feature-title">
                {feature.title}
                <i
                  className={`fa ${
                    dropdown.flockiq === index ? "fa-chevron-up" : "fa-chevron-down"
                  } arrow-icon`}
                ></i>
              </span>
              {dropdown.flockiq === index && (
                <div className="feature-dropdown">
                  <img
                    src={feature.img} // Correct path to image
                    alt={feature.title}
                    className="feature-img"
                  />
                  <p>{feature.description}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Google Forms Card */}
      <div className="comparison-card">
        <h3 className="card-title">Google Forms</h3>
        <ul>
          {features.map((feature, index) => (
            <li key={index} onClick={() => toggleDropdown("googleForms", index)}>
              <span className="feature-title">
                {feature.title}
                <i
                  className={`fa ${
                    dropdown.googleForms === index ? "fa-chevron-up" : "fa-chevron-down"
                  } arrow-icon`}
                ></i>
              </span>
              {dropdown.googleForms === index && (
                <div className="feature-dropdown">
                  <img
                    src={feature.img} 
                    alt={feature.title}
                    className="feature-img"
                  />
                  <p>{feature.description}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComparisonCards;
