import React from "react";

const topItems = [
  "Get Free Audit",
  "Get Free Audit",
  "Get Free Audit",
  "Get Free Audit",
  "Get Free Audit",
  "Work With Us",
];

const bottomItems = [
  "Digital Marketing",
  "Web Dev",
  "Mobile App Dev",
  "SEO",
  "PPC",
  "Work With Us",
];

const topList = [...topItems, ...topItems];
const bottomList = [...bottomItems, ...bottomItems];

const Marquee = () => {
  return (
    <section className="cross-marquee">
      <div className="marquee-strip strip-white">
        <div className="marquee-track reverse">
          {topList.map((item, i) => (
            <div
              key={i}
              className={`marquee-item ${
                item === "Work With Us" ? "marquee-btn dark-btn" : ""
              }`}
            >
              {item !== "Work With Us" && <span>✦</span>}
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="marquee-strip strip-orange">
        <div className="marquee-track">
          {bottomList.map((item, i) => (
            <div
              key={i}
              className={`marquee-item ${
                item === "Work With Us" ? "marquee-btn dark-btn" : ""
              }`}
            >
              {item !== "Work With Us" && <span>✦</span>}
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;