import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const { name } = useSelector((state) => state.user.userData);
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="home"> Home </a>
        </li>
        <li>
          <a href="about"> About </a>
        </li>
        <li>
          <a href="contact"> Contact </a>
        </li>
        <li>
          <a href="blog"> Blog </a>
        </li>
        <li>
          <a href="workes"> {name} Workes</a>
        </li>
      </ul>
    </div>
  );
}
