import React from "react";
import "./services.css";
import { FaCheckSquare } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="services">
          <div className="service_head">
            <h3>Front-end Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I build front-end websites. </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I optimize applications for maximum speed.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I integrate front-end application with back-end to improve usability. </p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I build web apps using MongoDB, ExpressJS, ReactJS and NodeJS.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>I create Ecommerce Applications with some real time applications. </p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Front-end + Back-end</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>Back-End Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Integrated MongoDB using Mongoose for schema modeling and data manipulation.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Designed MongoDB schemas to efficiently store and retrieve data according to project requirements.</p>
            </li>
            <li>
              <FaCheckSquare className="service_list-icon" />
              <p>Implemented RESTful APIs to handle CRUD operations.</p>
            </li>
          </ul>
        </article>       
      </div>
    </section>
  );
};

export default Services;
