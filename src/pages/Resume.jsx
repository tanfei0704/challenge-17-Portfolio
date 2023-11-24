import React, { useState } from 'react';

export default function Contact() {
  const backgroundImageUrl = 'https://media.istockphoto.com/id/1306830654/photo/school-desk-on-laptop-with-white-empty-mock-up-screen-on-blue-background-online-education-and.webp?b=1&s=170667a&w=0&k=20&c=50jQbL6vZpqmWwH9D6DxBDs90bATXJvoPUms24kZ2ok=';

  const [isButtonActive, setButtonActive] = useState(false);

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black', // Set text color to be visible on the background
    height: '100vh', // Set the height to cover the entire viewport
    width: '100%', // Set the width to cover the entire viewport
    display: 'flex',
    flexDirection: 'column', // Display child elements in a column
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const toggleButtonStyle = {
    margin: '20px 0', // Add margin to separate the button from other elements
    padding: '10px 20px',
    fontSize: '15px',
    fontWeight: 'bold',
    backgroundColor: isButtonActive ? '#4CAF50' : '#FF5733', // Different colors for active and inactive states
    color: 'white', // White text color
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer', // Set the cursor style to pointer
    transition: 'background-color 0.3s ease', // Smooth transition on hover
  };

  const handleButtonClick = () => {
    setButtonActive(true);

    // Trigger the download
    const link = document.createElement('a');
    link.href = '/path/to/your/file.pdf'; //the path for download my RV
    link.download = 'RV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container clearfix" style={containerStyle}>
      <h1>Resume</h1>
      <a href="/path/to/your/file.pdf" download="RV.pdf" style={toggleButtonStyle} onClick={handleButtonClick}>
        {isButtonActive ? 'Download' : 'Downloaded'}
      </a>
      <div>
        <h2>Front-end</h2>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
        <h2>Back-end</h2>
        <p>Node.js</p>
        <p>Express.js</p>
        <p>MongoDB</p>
        <p>MySQL</p>
      </div>

    </div>
  );
}
