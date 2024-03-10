import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about">
      <h1>What I do</h1>
      <h2>
        I am skilled and passionate Video Editor
      </h2>
      <video id="background-video" autoPlay muted loop playsInline>
        <source src="HAND.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="about-h1">Show Reel</h1>
      <video id="background-video" autoPlay muted loop playsInline>
        <source src="SHOW.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default About;
