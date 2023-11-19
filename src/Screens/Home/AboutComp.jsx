import React from "react";

export default function AboutComp({
  heading = "Recent News",
  subHeading = [{ heading: "Papers", list: ["li1", "li2"] }],
}) {
  return (
    <div className="home_about_container">
      <h1 className="about_me_h1">About Me</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        aliquam nisi voluptas neque nihil, quaerat enim optio consectetur
        blanditiis est accusamus velit quasi mollitia esse illo praesentium!
        Nisi, unde natus?
      </p>
      <div>
        <h3 className="sub_headings">{heading}</h3>
        {subHeading.map((data) => (
          <>
            <h5>{data.heading}</h5>
            <ul>
              <li className="sub_headings_ul_li">list elements</li>
            </ul>
          </>
        ))}
      </div>
    </div>
  );
}
