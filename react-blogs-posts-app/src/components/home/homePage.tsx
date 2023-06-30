import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './homePage.css';

const HomePage = () => {    
    const [shouldFadeIn, setShouldFadeIn] = useState(false);

    useEffect(() => {
      setShouldFadeIn(true);
    }, []);
    
    const containerClassName = `homePageButtonContainer ${shouldFadeIn ? 'fade-in' : ''}`;
    const { t } = useTranslation();

    return (
    <div className='mainContainer'>
        <div className="logo-container">
            <h1 className="logo-text">{t('homepage.bankNameText')}</h1>
        </div>
        <div className={containerClassName}>
            <Link to="/blog">
                <button type="button" className='enter-blog-button'>{t('homepage.buttonText')}</button>
            </Link>
        </div>        
    </div>
    )
}

export default HomePage;