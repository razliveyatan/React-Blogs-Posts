import React, {useContext, useEffect} from 'react';
import { LanguageContext } from '../../context/languageContext';

import { useNavigate } from "react-router-dom";
import './backButton.css';

const BackButton = () => {
    const { language } = useContext(LanguageContext);
    const buttonText = language === 'he' ? 'חזור' : 'Back';
    let navigate = useNavigate();
    useEffect(() => {},[language]);
    
    const handleBack = () => {
        navigate('/blog',{replace:true});
    }

    return (
    <div className='backButton' onClick={handleBack}>
        <svg className={buttonText !== 'Back' ? 'rotated-svg': ''} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black" direction="Left">
            <path d="M10 13L5 8L10 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            </path>
        </svg>
        <h6>{buttonText}</h6>
    </div>   
    )
}

export default BackButton;