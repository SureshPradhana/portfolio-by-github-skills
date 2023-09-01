/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/design-desk.jpeg";

// const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Git cheat sheet 🎉",
    description:"Unlock the full potential of Git with our comprehensive cheat sheet. Simplify complex commands, streamline collaboration, and boost your coding efficiency.",
    url: "https://iabcshsh.deno.dev/git_cheetsheet",
  },
  {
    title: "screen!",
    description:
      "Screen is a powerful terminal multiplexer that revolutionizes the way you work with command-line interfaces. It's your secret weapon for managing multiple terminal sessions effortlessly.",
    url: "https://iabcshsh.deno.dev/screen",
  },
  {
    title: "My Blogging Site",
    description:
      "This is my blogging site where I write about my experiences and learnings in the field of software engineering.",
    url: "https://iabcshsh.deno.dev/",
  },
  {
    title: "Markdown previewer",
    description:
      "This is a markdown previewer that I built using React. It is a part of the FreeCodeCamp Front End Libraries Certification.",
    url: "https://sureshpradhana.github.io/fcc-markdown-preview-2/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        {/* <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div> */}
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
