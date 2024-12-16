// "use client"
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Workflow = () => {
//   const [boxes, setBoxes] = useState([
//     { id: 1, name: 'Landing Page', description: 'Next.js and Git',logo: '/propertiesimages/image.png', isOpen: false },
//     { id: 2, name: 'Main', description: 'streamlit and AWS', isOpen: false },
//     { id: 3, name: 'FastApi', description: 'elasticbeanstalk', isOpen: false },
//     { id: 4, name: 'Backend', description: 'SupaBase', isOpen: false },
//   ]);

//   const handleToggle = (id) => {
//     setBoxes((prevBoxes) =>
//       prevBoxes.map((box) =>
//         box.id === id ? { ...box, isOpen: !box.isOpen } : box
//       )
//     );
//   };

//   const handleChange = (id, field, value) => {
//     setBoxes((prevBoxes) =>
//       prevBoxes.map((box) =>
//         box.id === id ? { ...box, [field]: value } : box
//       )
//     );
//   };

//   return (
//     <div className="workflow-container">
//       <h2 className="workflow-heading">Workflow</h2>
//       <div className="boxes-container">
//         {boxes.map((box) => (
//           <motion.div
//             key={box.id}
//             layoutId={`box-${box.id}`} // Unique ID for each box layout transition
//             className="box"
//             style={{ cursor: 'pointer' }}
//             onClick={() => handleToggle(box.id)}
//           >
//             <motion.div
//               className="box-header"
//               layout
//               initial={{ opacity: 0.8 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <input
//                 type="text"
//                 value={box.name}
//                 onChange={(e) => handleChange(box.id, 'name', e.target.value)}
//                 className="box-name"
//               />
//             </motion.div>
//             {box.isOpen && (
//               <motion.div
//                 className="box-description"
//                 layout
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <textarea
//                   value={box.description}
//                   onChange={(e) => handleChange(box.id, 'description', e.target.value)}
//                   className="box-description-text"
//                 />
//               </motion.div>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Workflow;
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Workflow = () => {
  const [boxes] = useState([
    { id: 1, name: "Landing Page", image: "/propertiesimages/image.png", description: "Next.js and Git" },
    { id: 2, name: "Main", image: "/propertiesimages/main.png", description: "Streamlit and AWS" },
    { id: 3, name: "FastApi", image: "/propertiesimages/fastapi.png", description: "Elastic Beanstalk" },
    { id: 4, name: "Backend", image: "/propertiesimages/backend.png", description: "SupaBase" },
  ]);

  return (
    <div style={styles.workflowContainer}>
      <h2 style={styles.heading}>Workflow</h2>
      <div style={styles.boxesContainer}>
        {boxes.map((box) => (
          <motion.div
            key={box.id}
            className="box"
            style={styles.box}
            whileHover={{ height: "250px" }} // Expand downward on hover
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div style={styles.boxHeader}>{box.name}</div>
            <motion.img
              src={box.image}
              alt={box.name}
              style={styles.image}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              style={styles.description}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {box.description}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  workflowContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "70vh",
    width: "100%",
    backgroundColor: "#000",
    padding: "20px",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#d78aff",
    marginBottom: "30px",
  },
  boxesContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  box: {
    width: "200px",
    height: "150px", // Default height
    backgroundColor: "#1e1e1e",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#f5f5f5",
    cursor: "pointer",
    overflow: "hidden",
    transition: "height 0.3s ease-in-out",
    transformOrigin: "top", // Expand downward
  },
  boxHeader: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#d78aff",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    borderRadius: "5px",
  },
  description: {
    fontSize: "0.9rem",
    marginTop: "10px",
    color: "#bdbdbd",
  },
};

export default Workflow;
