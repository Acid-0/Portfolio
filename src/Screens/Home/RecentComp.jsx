import React from "react";
import AlertNote from "../../Components/AlertNote/AlertNote";
import "animate.css";

export default function RecentComp({ bgColor = "white" }) {
  return (
    <div
      className="home_second_container "
      style={{ backgroundColor: bgColor }}
    >
      <h1>Recent Achivements</h1>
      <div className="home_second_container_list">
        <ul>
          <li>item 1</li>
          <li>item 2</li>
        </ul>
        <AlertNote />
      </div>
    </div>
  );
}
