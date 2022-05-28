import React, { useEffect, useState } from "react";
import { images } from "./imgs";

const Card = ({ match }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const p = images.find((item) => {
      return item.id == match.params.id;
    });
    JSON.stringify(data);
    setData(p);
  }, []);

  console.log(match);

  return (
    <div>
      <img src={data.photo} alt="" />
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default Card;
