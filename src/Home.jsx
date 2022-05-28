import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcom to the home page</h1>
      <Link to="/images">Go to images</Link>
    </div>
  );
};

export default Home;
