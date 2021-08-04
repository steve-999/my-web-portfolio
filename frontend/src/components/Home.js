import React from 'react';
import './Home.css'

const Home = () => {
    document.title = 'Steve\'s Web Development Portfolio | Home';
    return (  
        <div className="home-page-container fadeInAnimation">
            <div className="hero">
                <h1>Welcome to My Web Development Portfolio</h1>
            </div>
    </div>
    );
}
 
export default Home;
