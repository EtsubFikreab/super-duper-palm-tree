/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Computer Science student studying at HiLCoE. I enjoy creating unique and simplistic software in creative ways.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Software Development",
  "System Design",
  "Problem Solving",
  "Multiple Programming languages",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Greetings! I'm Etsub, a passionate individual with a love for technology and a penchant for continuous learning. My journey includes leadership roles as the Google Developer Students Club Lead and a Microsoft Learn Ambassador in Ethiopia, where I've honed my skills in communication, collaboration, and project management. With a keen interest in emerging technologies, I've explored software development, logistics technology, and blockchain, leveraging my roles to bridge the gap between technical complexities and user understanding. My commitment to excellence, quick learning, and effective leadership positions me as an asset in dynamic and fast-paced environments. Currently exploring the vast realm of blockchain, I aim to contribute my skills and enthusiasm to innovative projects. This journey reflects my belief that technology has the power to create positive change, a belief that I carry into every endeavor. Join me on this exciting venture, where technology meets creativity, and together, we can make an impact! ";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
