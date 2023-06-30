import { BlogInterface } from "../interfaces/interfaces";
const sessionStorageDataKey = 'blogData';

export const getJsonData = async(path:string):Promise<any> => {
    return fetch(path)
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok');
        }       
        return response.json();
        })
    .catch(error => {
            console.error('Error fetching JSON:', error);
            throw error;
        });
}

export const storeDataInSession = (data:BlogInterface|null) => {
    const sessionStorageData = sessionStorage.getItem(sessionStorageDataKey);
    if (!sessionStorageData){
        sessionStorage.setItem(sessionStorageDataKey,JSON.stringify(data));
    }
}

export const getDataFromSession = () => {    
    try{
        const sessionStorageData = sessionStorage.getItem(sessionStorageDataKey);
        if (sessionStorageData){
            return JSON.parse(sessionStorageData);
        }
    }
    catch(error) {
        console.error('Error fetching JSON:', error);
        throw error;
    };       
}

export const getPostIdFromURL = () => {
    const path = window.location.pathname;
    const postId = path.split('/')[3];
    return postId || null;
  }

  export const getLanguageFromUrl = () => {
    const path = window.location.pathname;
    const lang = path.split('/')[4];
    return lang || null;
  }

  export const changeLanguageInUrl = (lang:string) => {
    if (window.location.href.indexOf('post') > -1){
        const searchedLang = lang === 'en' ? 'he' : 'en';
        const currentURL = window.location.href;
        const updatedURL = currentURL.replace(`${searchedLang}`, `${lang}`);
        window.history.pushState({ path: updatedURL }, "", updatedURL);
    }    
}

  

  