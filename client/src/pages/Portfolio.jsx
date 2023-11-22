import Project from '../components/Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const project = {
  "id": 1,
  "name": "Flight Travel Finder",
  "image": "../assets/p1.png",
  "github": "https://github.com/tanfei0704/ProjectOne-Flight-Travel-Finder",
  "deploy": "https://ljpeach.github.io/Flight-Travel-Finder/",
  "topics": "HTML5, CSS, Javascript"
}

function Portfolio () {  

  return (
      <section className="container">
        <div className="project">
          <h2 className="top-title">Portfolio</h2>
          <hr></hr>
        </div>
        <div id="card-data">
            <Project key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
        </div>
      </section>
  
  );
}

export default Portfolio;
  