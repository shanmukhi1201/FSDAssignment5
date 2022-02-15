import React from "react";
import image from "./icons/react-icon.png";

function Navbar(props) {
  return (
    <div className="navbar">
      <div>
        <a href="" className="navbara">
          <img src={image} alt="" />
          <h2>React</h2>
        </a>
      </div>
      <div>
        <ul className="ul1">
          <li>
            <a href="">{props.n1}</a>
          </li>
          <li>
            <a href="">{props.n2}</a>
          </li>
          <li>
            <a href="">{props.n3}</a>
          </li>
          <li>
            <a href="">{props.n4}</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="ul2">
          <li>
            <input type="text" placeholder="search" />
          </li>
          <li>
            <a href="">{props.n5}</a>
          </li>
          <li>
            <a href="">{props.n6}</a>
          </li>
          <li>
            <a href="">{props.n7}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
