import React from "react";
import "./styles/HealthStatusCards.css";
function HealthStatusCards({data}) {
  return (
    <div className="healthCardsContainer">
      {data.map((item) => (
        <div
          key={item.id}
          className="healthCard"
          style={{ borderLeft: `4px solid ${item.color}` }}
        >
          <div className="iconContainer">
            <span style={{ color: item.color }}>{item.icon}</span>
            <h3>{item.title}</h3>
          </div>
          <div className="healthInfo">
            <p className="checkDate">{item.date}</p>
            <p className="status" style={{ color: item.color }}>
              {item.status}
            </p>
            <div className="progressContainer">
              <div
                className="progressBar"
                style={{
                  width: `${item.value}`,
                  backgroundColor: item.color,
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
      <span>details ➡️</span>
    </div>
  );
}

export default HealthStatusCards;
