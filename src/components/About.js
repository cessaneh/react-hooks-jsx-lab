import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">About
  <h2>About me</h2>
  <img src={image} alt="I made this" />
  <p>Hey can you imagine I actually made this</p>
  
  
  </div>
  );
}

export default About;
