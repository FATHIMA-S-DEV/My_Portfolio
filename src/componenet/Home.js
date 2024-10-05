import React from 'react';
import './Home.css'; // Import your CSS file

const Home = () => {
    return (
        <div id="home" className="about-container"> 
            <div className="about-info">
                
                <h1>HI I AM FATHIMA!</h1>
                <p>
                    Hello! I’m Fathima, a fresher in web development with a passion for creating responsive and user-friendly websites.<br/>
                    Although I am just starting my journey, I am eager to learn and apply my skills to design and build engaging digital<br/>
                    experiences that work seamlessly on any device.
                </p>
            </div>
            <img src="img1.png" alt="Your Name" className="about-image" /> {/* Replace with your image path */}
        </div>
    );
};

export default Home;
