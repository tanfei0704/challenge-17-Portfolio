import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const ProjectCard = (props) => {
    return (
        <div className="card bg-warning"> 
        <div className="img-container">
          <img alt={props.id} src={props.image}/>
        </div>
        <div className="content">
              <p className="card-title fs-2">{props.name}</p>
              <p class="proj-icons-container">
              <a href={props.github}><img class="project-icon" src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub Repo" /></a> 
              <a href={props.deploy}><img class="project-icon" src="https://img.icons8.com/fluent/48/000000/domain.png" alt="Live Application" /></a> 
       
             
             </p>
              <p class="topics">
                    ({props.topics})
                </p>
        </div>
      </div>
    );
}

export default ProjectCard;

