import React from "react";
import "./Alert.css";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function AlertNote({ text = "See all previous talks here:" }) {
  return (
    <div class="alert alert_note">
      <div style={{ display: "flex", alignItems: "center" }}>
        <BsFillInfoCircleFill
          style={{ marginRight: "7px" }}
          size={18}
          color="#209cee"
        />{" "}
        {text}
      </div>
    </div>
  );
}
