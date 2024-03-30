import React from "react";
import "./about.css";
import Me from "../../assets/me-2.jpeg";
import { FaAward, FaCertificate, FaFolder} from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      {/* <h5>Hello I'm</h5>
      <h3 className="a">Garvit Jhalani</h3>
      <h4 className="b">A Full-Stack Web Developer</h4> */}
      <h5 className="float-away">Hello I'm</h5>
      <h3 className="a float-away">Garvit Jhalani</h3>
      <h4 className="b float-away">A Full-Stack Web Developer</h4>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Year of building interactive Project</small>
            </article>
            <article className="about_card">
              <FaCertificate className="about_icon" />
              <h5>Certificates</h5>
              <small>3+</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>15+ projects completed</small>
            </article>
          </div>
          <p>I’m a full-stack developer, who enjoys building interactive  interfaces with JavaScript, React, Node, Express and MongoDb..
            <br />
            
            <br />
            I'm open to Full-stack(remote/onsite) opportunities with a passion of developing new and interactive projects.
            If you like this, 
            don’t hestiate to contact me.
          </p>
          <a href="#project" className="btn btn-primary"> See my projects</a>
        </div>
      </div>
    </section>
  );
};

export default About;
