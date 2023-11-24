import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectCard = (props) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'row-reverse', // Display gif on the right, other info on the left
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '200px',
    padding: '20px',
    margin: '20px',
    color: 'black',
  };

  const contentStyle = {
    flex: 1, // Take the remaining space
    paddingRight: '20px', // Add some space between the image and text
  };

  return (
    <div className="bg-warning" style={cardStyle}>
      <div style={contentStyle}>
        <p className="card-title fs-2">{props.name}</p>
        <p className="proj-icons-container">
          <a href={props.github}><img className="project-icon" src="https://img.icons8.com/plasticine/100/github-squared.png" alt="GitHub Repo" /></a>
          <a href={props.deploy}><img className="project-icon" src="https://img.icons8.com/bubbles/100/domain.png" alt="Live Application" /></a>
        </p>
        <p className="topics">
          ({props.topics})
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;



