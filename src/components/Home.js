import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Hello World!</h1>
    <h2>Welcome to Hubstairs Challenge</h2>
    <ul>
      <li>
        <Link to="/music">Music</Link>
      </li>
      <li>
        <Link to="/prime">Prime</Link>
      </li>
      <li>
        <Link to="/graph">Graph</Link>
      </li>
    </ul>
  </div>
);

export default Home;
