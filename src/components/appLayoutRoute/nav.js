import  React from "react";
import { Link } from "react-router-dom";

export const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Map Box uber</Link>{" "}
      </li>
      <li>
        <Link to="/cedar">cedar map</Link>
      </li>
      <li>
        <Link to="/cedar_default">cedar default cords</Link>
      </li>
    </ul>
  </nav>
);
