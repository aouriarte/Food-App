import React from "react";

export default function Card({ image, name, diets }) {
  return (
    <div>
      <img src={image} alt="Img not found" />
      <h3>{name}</h3>
      <div>
        {diets?.map((d, i) => (
          <div key={i}>
            <h4>{d}</h4>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
