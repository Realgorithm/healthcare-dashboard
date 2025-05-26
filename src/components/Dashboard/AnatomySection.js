import React from "react";
import "./styles/AnatomySection.css";
import anatomyImage from "../../assets/anatomy.png";

function AnatomySection({ data }) {
  return (
    <section className="anatomySection">
      <div className="imageWrapper">
        <img src={anatomyImage} alt="muscular" className="bodyImage" />

        {data.map((item) => (
          <div
            key={item.id}
            className="anatomyItem"
            style={{ top: item.top, left: item.left }}
          >
            <div className="anatomyCard" style={{ background: item.bgColor , color: item.color }}>
              {item.icon && (
                <div className="anatomyIcon">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AnatomySection;
