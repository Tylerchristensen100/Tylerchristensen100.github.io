import React from "react";

const About = () => {
  return (
    <>
      <div class="container" >
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h1 class="text-center padding-top-20">Tyler Christensen</h1>
            <h3 class="text-center">Web Developer</h3>
            <p class="padding-top-30">I am currently studying Computer Science with an emphasis in Full Stack Web Development.</p>
            <p>I use HTML, CSS, and JS to build and maintain <a href="uvu.edu/chss/" title="UVU College of Humanities">UVU College of Humanities</a> sites.</p>
            <p class="padding-top-40">My free time consists primarily of Mountain Biking, Hiking, Fortnite, and tech(obviously)!</p>
          </div>
          <div class="col-sm-12 col-md-6">
            <img class="img-center" src="./img/me.jpg" alt="Tyler Christensen" width="500px" />
          </div>
        </div>
      </div> 
    </>
  );
  };
  
  export default About;