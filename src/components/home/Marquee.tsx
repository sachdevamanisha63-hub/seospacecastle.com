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
          {topList.map((item, i) =>
            item === "Work With Us" ? (
              <a href="/contact" key={i} className="marquee-item marquee-btn dark-btn">
                {item}
              </a>
            ) : (
              <div key={i} className="marquee-item">
                <span>✦</span>
                {item}
              </div>
            )
          )}
        </div>
      </div>

      <div className="marquee-strip strip-orange">
        <div className="marquee-track">
          {bottomList.map((item, i) =>
            item === "Work With Us" ? (
              <a href="/contact" key={i} className="marquee-item marquee-btn dark-btn">
                {item}
              </a>
            ) : (
              <div key={i} className="marquee-item">
                <span>✦</span>
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Marquee;