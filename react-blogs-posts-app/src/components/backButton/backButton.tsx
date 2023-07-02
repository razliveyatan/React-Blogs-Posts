import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { getLanguageFromUrl } from '../../services/data-service';
import './backButton.css';

const BackButton = (props:any) => {
    const [buttonText, setButtonText] = useState('Back');
    const [currentLang, setCurrentLang] = useState('en');

    useEffect(() => {
        const lang = getLanguageFromUrl();
          if(lang && lang !== 'en' && lang !== currentLang){
            setButtonText('חזור');
            setCurrentLang(lang);            
          }
    },[currentLang])
    let navigate = useNavigate();
    
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