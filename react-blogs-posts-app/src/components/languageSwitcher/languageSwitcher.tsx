import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './languageSwitcher.css';
import { changeLanguageInUrl } from '../../services/data-service';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng:any) => {
    i18n.changeLanguage(lng);    
    document.documentElement.setAttribute('dir', lng === 'he' ? 'rtl' : 'ltr');
    changeLanguageInUrl(lng);
    sessionStorage.setItem('lang',lng);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`language-switcher ${isMenuOpen ? 'open' : ''}`}>
      <button className="language-switcher-button" onClick={toggleMenu}>
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="#005986" xmlns="http://www.w3.org/2000/svg" className="language-switcher__icon">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM9.37556 4.1762C7.31921 4.8657 5.62431 6.34321 4.64956 8.25H7.84569C8.04262 7.23415 8.31834 6.30833 8.65891 5.5131C8.86837 5.02402 9.10728 4.57281 9.37556 4.1762ZM7.62034 9.75H4.06055C3.85825 10.4652 3.75 11.22 3.75 12C3.75 12.78 3.85825 13.5348 4.06055 14.25H7.62034C7.54146 13.5271 7.5 12.7732 7.5 12C7.5 11.2268 7.54146 10.4729 7.62034 9.75ZM9.12998 14.25C9.04564 13.5377 9 12.7832 9 12C9 11.2167 9.04564 10.4623 9.12997 9.75H14.87C14.9544 10.4623 15 11.2167 15 12C15 12.7832 14.9544 13.5377 14.87 14.25H9.12998ZM7.8457 15.75H4.64956C5.62432 17.6568 7.31924 19.1343 9.37562 19.8238C9.10732 19.4272 8.86839 18.9759 8.65891 18.4868C8.31835 17.6916 8.04264 16.7658 7.8457 15.75ZM14.6244 19.8238C16.6808 19.1343 18.3757 17.6568 19.3504 15.75H16.1543C15.9574 16.7658 15.6816 17.6916 15.3411 18.4868C15.1316 18.9759 14.8927 19.4272 14.6244 19.8238ZM14.6235 15.75C14.4512 16.5557 14.2262 17.2799 13.9622 17.8963C13.6467 18.633 13.2903 19.1813 12.9327 19.5345C12.5783 19.8845 12.264 20.0062 12 20.0062C11.736 20.0062 11.4217 19.8845 11.0673 19.5345C10.7097 19.1813 10.3533 18.633 10.0378 17.8963C9.77379 17.2799 9.54879 16.5557 9.37647 15.75H14.6235ZM16.3797 14.25H19.9395C20.1417 13.5348 20.25 12.78 20.25 12C20.25 11.22 20.1417 10.4652 19.9395 9.75H16.3797C16.4585 10.4729 16.5 11.2268 16.5 12C16.5 12.7732 16.4585 13.5271 16.3797 14.25ZM16.1543 8.25H19.3504C18.3757 6.34321 16.6808 4.86571 14.6244 4.1762C14.8927 4.57281 15.1316 5.02402 15.3411 5.5131C15.6817 6.30833 15.9574 7.23415 16.1543 8.25ZM14.6235 8.25H9.37645C9.54877 7.44427 9.77378 6.72007 10.0378 6.10362C10.3533 5.36688 10.7097 4.81862 11.0673 4.46545C11.4217 4.11544 11.736 3.99371 12 3.99371C12.264 3.99371 12.5783 4.11544 12.9327 4.46545C13.2903 4.81862 13.6467 5.36688 13.9622 6.10362C14.2262 6.72007 14.4512 7.44427 14.6235 8.25Z" fill="#005986"></path>
        </svg>
      </button>
      {
      isMenuOpen && <ul className="language-switcher-menu">
        <li>
          <button onClick={() => changeLanguage('en')}>English</button>
        </li>
        <li>
          <button onClick={() => changeLanguage('he')}>עברית</button>
        </li>
      </ul>
      }
    </div>
  );
};

export default LanguageSwitcher;