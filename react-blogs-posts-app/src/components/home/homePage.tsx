import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';

const HomePage = () => {    
    const [shouldFadeIn, setShouldFadeIn] = useState(false);

    useEffect(() => {
      // Trigger the fade-in effect after the component has mounted
      setShouldFadeIn(true);
    }, []);
  
    const containerClassName = `homePageButtonContainer ${shouldFadeIn ? 'fade-in' : ''}`;
  
    return (
    <div className='mainContainer'>
        <div className="logo-container">
            <h1 className="logo-text">Demo Bank Name</h1>
        </div>
        <div className={containerClassName}>
            <Link to="/blog">
                <button type="button" className='enter-blog-button'>Enter Blog</button>
            </Link>
        </div>        
    </div>
    )
}

export default HomePage;