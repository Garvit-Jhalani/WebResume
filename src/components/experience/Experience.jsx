import React from "react";
import "./experience.css";
import css3 from '../../assets/css3.png'
import html from '../../assets/html-5.png'
import js from '../../assets/javascript.png'
import react from '../../assets/react.png'
import bs from '../../assets/bootstrap.png'
import three from '../../assets/threejs.png'
import node from '../../assets/node.jpg'
import Sql from '../../assets/Sql.png'
import python from '../../assets/python.png'
import express from '../../assets/Express.png'
import mongodb from '../../assets/mongo.png'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={html} className="experience_details-icon" alt="html"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={css3} className="experience_details-icon" alt="css"/>
              <div>
               
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} className="experience_details-icon" alt="js"/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={react} className="experience_details-icon" alt="react"/>
              <div>                
                <h4>REACT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={bs} className="experience_details-icon" alt="bs"/>
              <div>           
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={three} className="experience_details-icon" alt="threejs"/>
              <div>
               
                <h4>Three.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={Sql} className="experience_details-icon" alt="sql"/>
              <div>
               
                <h4>My SQL</h4>
                <small className="text-light">Intermediary</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={mongodb} className="experience_details-icon " alt="mongoDB"/>
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={express} className="experience_details-icon" alt="Express JS"/>
              <div>
                <h4>Express Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={python} className="experience_details-icon" alt="python"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={node} className="experience_details-icon" alt="node"/>
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
