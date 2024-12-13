// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const FeatureSection = () => {
//   const features = [
//     { id: 1, title: "Advanced Analytics", description: "Gain deep insights into user responses with visual data." },
//     { id: 2, title: "Conditional Logic", description: "Show or hide questions dynamically based on user inputs." },
//     { id: 3, title: "Collaborative Editing", description: "Edit forms simultaneously with your team." },
//     { id: 4, title: "Custom Branding", description: "Customize your forms with logos and themes." },
//     { id: 5, title: "Password Protection", description: "Secure your forms with password protection." },
//   ];

//   return (
//     <div className="feature-section">
//       <h2 className="font-bold text-5xl md:text-7xl bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 inline-block text-transparent bg-clip-text mb-6">Features</h2>

//       {features.map((feature) => (
//         <div key={feature.id} className="feature-container">
//           <motion.div
//             className="feature-box"
//             whileHover="hover"
//             initial="rest"
//             animate="rest"
//             variants={{
//               rest: { backgroundColor: "#1c1c1c" },
//               hover: { backgroundColor: "#1c1c1c" },
//             }}
//           >
//             <motion.div
//               className="text-wrapper"
//               variants={{
//                 rest: { x: 0, opacity: 1 },
//                 hover: { x: "-100%", opacity: 0 },
//               }}
//               transition={{ duration: 0.4 }}
//             >
//               {feature.title}
//             </motion.div>
//             <motion.div
//               className="text-wrapper description"
//               variants={{
//                 rest: { x: "100%", opacity: 0 },
//                 hover: { x: 0, opacity: 1 },
//               }}
//               transition={{ duration: 0.4 }}
//             >
//               {feature.description}
//             </motion.div>
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FeatureSection;
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      title: "Advanced Analytics",
      description:
        "SGain deep insights into user responses with visual data.",
      image: "/path/to/real-time-sharing.png", // Replace with actual image path
    },
    {
      id: 2,
      title: "Conditional Logic",
      description:
        "Show or hide questions dynamically based on user inputs.",
      image: "/path/to/group-scheduling.png", // Replace with actual image path
    },
    {
      id: 3,
      title: "Collaborative Editing",
      description:
        "Edit forms simultaneously with your team.",
      image: "/path/to/invite-rsvp.png", // Replace with actual image path
    },
    {
      id: 4,
      title: "Custom Branding",
      description:
        "Customize your forms with logos and themes.",
      image: "/path/to/shared-calendars.png", // Replace with actual image path
    },
    {
      id: 5,
      title: "Password Protection",
      description:
        "Secure your forms with password protection.",
      image: "/path/to/shared-calendars.png", // Replace with actual image path
    },
  ];

  const [activeFeature, setActiveFeature] = useState(features[0]); // Default to first feature

  return (
    
  //   <div className="feature-section  ">
  //      <h2 className="font-bold text-5xl md:text-7xl bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 inline-block text-transparent bg-clip-text mb-6">Features</h2>
  //     <p className="text-white" > Discover features that make our product special</p>
  //     <div className="button-container flex space-x-4 mb-8">
  //       {features.map((feature) => (
  //         <motion.button
  //           key={feature.id}
  //           onMouseEnter={() => setActiveFeature(feature)} // Update active feature on hover
  //           className={`py-2 px-4 rounded-md ${
  //             activeFeature.id === feature.id
  //               ? "bg-gray-700 text-white"
  //               : "bg-gray-900 text-gray-400"
  //           }`}
  //           whileHover={{ scale: 1.1 }}
  //           whileTap={{ scale: 0.95 }}
  //         >
  //           {feature.title}
  //         </motion.button>
  //       ))}
  //     </div>

  //     <div className=" content-container flex flex-col md:flex-row items-center justify-center bg-blackspace-x-6">
  //       <motion.div
  //         className="text-content max-w-md"
  //         key={activeFeature.id} // Trigger animation on change
  //         initial={{ opacity: 0, x: -50 }}
  //         animate={{ opacity: 1, x: 0 }}
  //         exit={{ opacity: 0, x: 50 }}
  //         transition={{ duration: 0.5 }}
  //       >
  //         <h3 className="text-3xl font-bold mb-4">{activeFeature.title}</h3>
  //         <p className="text-lg text-gray-300">{activeFeature.description}</p>
  //         <button className="mt-4 bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition">
  //           Learn More
  //         </button>
  //       </motion.div>
  //       <motion.div
  //         className="image-content"
  //         key={`${activeFeature.id}-image`} // Trigger animation on image change
  //         initial={{ opacity: 0, scale: 0.9 }}
  //         animate={{ opacity: 1, scale: 1 }}
  //         exit={{ opacity: 0, scale: 0.9 }}
  //         transition={{ duration: 0.5 }}
  //       >
  //         <img
  //           src={activeFeature.image}
  //           alt={activeFeature.title}
  //           className="rounded-lg shadow-lg"
  //         />
  //       </motion.div>
  //     </div>
  //     </div>
  // );
  <div className="feature-section min-h-screen flex flex-col items-center justify-center bg-black">
      <h2 className="font-bold text-5xl md:text-7xl bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 inline-block text-transparent bg-clip-text mb-6">
        Features
      </h2>
      <p className="text-white mb-8">
        Discover features that make our product special
      </p>
      <div className="button-container flex space-x-4 mb-8">
        {features.map((feature) => (
          <motion.button
            key={feature.id}
            onMouseEnter={() => setActiveFeature(feature)} // Update active feature on hover
            className={`py-2 px-4 rounded-md ${
              activeFeature.id === feature.id
                ? "bg-gray-700 text-white"
                : "bg-gray-900 text-gray-400"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {feature.title}
          </motion.button>
        ))}
      </div>

      <div className="content-container flex flex-col md:flex-row items-center justify-center bg-gray-800 rounded-lg p-8 space-x-6 w-full max-w-6xl h-[400px]">
        <motion.div
          className="text-content w-1/2 h-full flex flex-col justify-center"
          key={activeFeature.id} // Trigger animation on change
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-white">
            {activeFeature.title}
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            {activeFeature.description}
          </p>
          <button className="mt-4 bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition">
            Learn More
          </button>
        </motion.div>
        <motion.div
          className="image-content w-1/2 h-full flex items-center justify-center"
          key={`${activeFeature.id}-image`} // Trigger animation on image change
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={activeFeature.image}
            alt={activeFeature.title}
            className="rounded-lg shadow-lg max-h-full"
          />
        </motion.div>
      </div>
    </div>
     );
};

export default FeatureSection;
{/* <div className="feature-section text-white min-h-screen flex flex-col items-center justify-center bg-black"></div> */}