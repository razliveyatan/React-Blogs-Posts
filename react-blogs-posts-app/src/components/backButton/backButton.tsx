import React from 'react';
import { useNavigate } from "react-router-dom";
import './backButton.css';

const BackButton = () => {
    
    let navigate = useNavigate();
    
    const handleBack = () => {
        navigate(-1);
    }
    return (
    <div className='backButton' onClick={handleBack}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black" direction="Left">
            <path d="M10 13L5 8L10 3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            </path>
        </svg>
        <span>Back</span>
    </div>   
    )
}

export default BackButton;