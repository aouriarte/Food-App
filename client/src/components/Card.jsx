import React from "react";

export default function Card({ image, title, diets }) {
  return (
    <div>
      <img src={image} alt="Img not found" />
      <h3>{title}</h3>
      <div>
        {diets?.map((d, i) => (
          <div key={i}>
            <h4>{d}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
