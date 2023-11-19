import React from "react";
import "./ProfileComp.css";
import "animate.css";
import noImage from "../../Assets/images/noImage.png";
import Img from "../ImgWithFallbackSrc/ImgWithFallbackSrc";
import { HiMail } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

export default function ProfileComp() {
  return (
    <div className="profile_container ">
      <Img src={""} fallbackSrc={noImage} alt="avatar" />
      <h1>Name</h1>
      <h3>Profession / designation</h3>
      <h3>Place of recent work (if any)</h3>
      <ul className="network_icons" aria-hidden="true">
        <li>
          <a href="">
            <HiMail size={52} fill="#2962ff" />
          </a>
        </li>
        <li>
          <a href="">
            <ImLinkedin size={35} fill="#2962ff" />
          </a>
        </li>
        <li>
          <a href="">
            <FaGithub size={38} fill="#2962ff" />
          </a>
        </li>
        <li>
          <a
            className="ai ai-cv big-icon"
            // style={{ fontSize: "1.75rem" }}
            href=""
          >
            CV
          </a>
        </li>
      </ul>
    </div>
  );
}
