import React from "react";
import i1 from "../../Assets/s1.png";

import i2 from "../../Assets/d1.png";
import i3 from "../../Assets/p1.png";
import i4 from "../../Assets/p2.png";

export default function ProjectDetails() {
  return (
    <section className="projectsDetailContainer">
      <aside className="side_container">white space</aside>
      <div className="proj_main_space">
        <div className="proj_details_container">
          <h2>Project Name</h2>
          <div className="details_main_container">
            <section className="details_main_container_content">
              <article>
                <h3>Overview</h3>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  et, eos veniam nisi repudiandae nobis soluta animi quibusdam
                  doloremque sequi, odit libero ab corrupti harum explicabo
                  velit mollitia natus nihil.
                </div>
              </article>
              <div className="proj_images_container">
                <img src={i1} alt="s" height={400} width={700} />
                <img src={i2} alt="s" height={270} width={250} />
                <img src={i3} alt="s" height={270} width={250} />
                <img src={i4} alt="s" height={270} width={250} />
              </div>
            </section>
            <aside className="details_main_container_techs">
              <h3>Technologies Used</h3>
              <ul>
                <li>HTML</li>
                <li>React</li>
                <li>Node Js</li>
                <li>Mongo DB</li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
