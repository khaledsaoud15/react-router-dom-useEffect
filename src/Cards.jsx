import React from "react";
import { Link } from "react-router-dom";
import { images } from "./imgs";
import "./style.css";

const Cards = () => {
  return (
    <div>
      <div className="card">
        {images.map((item) => (
          <div className="items" key={item.id}>
            <Link to={`/images/${item.id}`}>
              <img src={item.photo} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
