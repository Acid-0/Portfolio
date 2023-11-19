import React from "react";
import "./Home.css";
import ProfileComp from "../../Components/ProfileComp/ProfileComp";
import RecentComp from "./RecentComp";
import "animate.css";
import AboutComp from "./AboutComp";

export default function Home() {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="home_main_container">
        <ProfileComp />
        <AboutComp />
      </div>
      <RecentComp bgColor="whitesmoke" />
      <RecentComp />
    </div>
  );
}
