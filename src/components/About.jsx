import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about">
      <h1>What I do</h1>
      <h2>
        A professional video editor, content creator. I deliver best quality
        videos on 4k,2k, any resolution. Edits for YouTube videos, shorts, reels
        titok documantery
      </h2>
      <video id="background-video" autoPlay muted loop playsInline>
        <source src="HAND.mp4" type="video/mp4" />
      </video>
      <h1 className="about-h1">Show Reel</h1>
      <video id="background-video" autoPlay muted loop playsInline>
        <source src="SHOW.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default About;
