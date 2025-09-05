// src/components/Hero.jsx
import React from "react";
import { Element } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./css.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <>
      {/* Hero section target for Navbar Link to="hero" */}
      <Element name="hero">
        <section className="hero">
          <h1>Welcome to My Loop Learn</h1>
          <p>
            Loop Learn is a free learning hub designed to help students and job seekers
            strengthen their Numerical, Verbal, and Logical reasoning skills through
            topic-wise tests, performance tracking, and personalized analysis.
          </p>
          {/* Optional: keep id for CSS or direct anchors */}
          <div style={{ marginTop: 20 }}>
            <button className="cta-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </section>
      </Element>

      {/* Separate target for Navbar Link to="get" so scrolling lands nicely */}
      <Element name="get">
        <div id="get" style={{ height: 0 }} />
      </Element>
    </>
  );
};

export default Hero;
