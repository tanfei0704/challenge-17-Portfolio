import Project from '../components/Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import projects from '../portfolio.json';


function Portfolio() {
  return (
    <section className="container">
      <div className="project">
        <h2 className="top-title">Portfolio</h2>
        <hr />
      </div>
      <div id="card-data" className="grid">
        {projects.map((project) => (
          <Project
            key={project.id}
            image={project.image}
            name={project.name}
            github={project.github}
            deploy={project.deploy}
            topics={project.topics}
          />
        ))}
      </div>
    </section>
  );
}


export default Portfolio;
  