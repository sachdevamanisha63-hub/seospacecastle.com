// import React from "react";

// const topItems = [
//   "Get Free Audit",
//   "Get Free Audit",
//   "Get Free Audit",
//   "Get Free Audit",
//   "Get Free Audit",
//   "Work With Us",
// ];

// const bottomItems = [
//   "Digital Marketing",
//   "Web Dev",
//   "Mobile App Dev",
//   "SEO",
//   "PPC",
//   "Work With Us",
// ];

// const topList = [...topItems, ...topItems];
// const bottomList = [...bottomItems, ...bottomItems];

// const Marquee = () => {
//   return (
//     <section className="cross-marquee">
//       <div className="marquee-strip strip-white">
//         <div className="marquee-track reverse">
//           {topList.map((item, i) =>
//             item === "Work With Us" ? (
//               <a href="/contact" key={i} className="marquee-item marquee-btn dark-btn">
//                 {item}
//               </a>
//             ) : (
//               <div key={i} className="marquee-item">
//                 <span>✦</span>
//                 {item}
//               </div>
//             )
//           )}
//         </div>
//       </div>

//       <div className="marquee-strip strip-orange">
//         <div className="marquee-track">
//           {bottomList.map((item, i) =>
//             item === "Work With Us" ? (
//               <a href="/contact" key={i} className="marquee-item marquee-btn dark-btn">
//                 {item}
//               </a>
//             ) : (
//               <div key={i} className="marquee-item">
//                 <span>✦</span>
//                 {item}
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Marquee;


import React from "react";
import { motion } from "framer-motion";

const coreServices = [
  { id: 1, title: "Digital Marketing", icon: "🚀" },
  { id: 2, title: "Web Development", icon: "💻" },
  { id: 3, title: "Mobile App Dev", icon: "📱" },
  { id: 4, title: "SEO Strategy", icon: "📈" },
];

const mixedCards = coreServices.flatMap((service) => [
  { ...service, type: "service" },
  { id: `audit-${service.id}`, title: "Get Free Audit", icon: "✦", type: "audit" }
]);

const ServiceArc = () => {
  return (
    <section className="service-arc-section">
      <div className="cosmic-bg">
        <div className="glow-sphere gold-glow"></div>
        <div className="glow-sphere red-glow"></div>
      </div>

      <div className="arc-wrapper">
        <div className="path-container">
          {mixedCards.map((item, index) => (
            <motion.div
              key={item.id}
              className="moving-arc-card"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                delay: index * (30 / mixedCards.length) * -1
              }}
            >
              <div className={`glass-card ${item.type}-card`}>
                <div className="icon-wrapper">{item.icon}</div>
                <p className="card-label">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="content-overlay">
          <h2 className="display-text">
            Elevate Your <span className="text-gradient">Digital Empire</span>
          </h2>
          <p className="description-text">
            We blend cosmic creativity with technical precision to build
            web experiences that don't just exist—they dominate.
          </p>

          <div className="button-container">
            <a href="/contact" className="Ebtn">
              <span className="">Work With Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArc;