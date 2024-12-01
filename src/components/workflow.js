"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Workflow = () => {
  const [boxes, setBoxes] = useState([
    { id: 1, name: 'Landing Page', description: 'Next.js and Git',logo: '/propertiesimages/image.png', isOpen: false },
    { id: 2, name: 'Main', description: 'streamlit and AWS', isOpen: false },
    { id: 3, name: 'FastApi', description: 'elasticbeanstalk', isOpen: false },
    { id: 4, name: 'Backend', description: 'SupaBase', isOpen: false },
  ]);

  const handleToggle = (id) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id ? { ...box, isOpen: !box.isOpen } : box
      )
    );
  };

  const handleChange = (id, field, value) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id ? { ...box, [field]: value } : box
      )
    );
  };

  return (
    <div className="workflow-container">
      <h2 className="workflow-heading">Workflow</h2>
      <div className="boxes-container">
        {boxes.map((box) => (
          <motion.div
            key={box.id}
            layoutId={`box-${box.id}`} // Unique ID for each box layout transition
            className="box"
            style={{ cursor: 'pointer' }}
            onClick={() => handleToggle(box.id)}
          >
            <motion.div
              className="box-header"
              layout
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="text"
                value={box.name}
                onChange={(e) => handleChange(box.id, 'name', e.target.value)}
                className="box-name"
              />
            </motion.div>
            {box.isOpen && (
              <motion.div
                className="box-description"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <textarea
                  value={box.description}
                  onChange={(e) => handleChange(box.id, 'description', e.target.value)}
                  className="box-description-text"
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
