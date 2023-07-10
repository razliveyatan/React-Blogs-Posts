import { BlogInterface } from "../interfaces/interfaces";
const sessionStorageDataKey = 'blogData';

export const getJsonData = async(path:string):Promise<any> => {
    return fetch(process.env.PUBLIC_URL + path)
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
// Deprecated
// export const getPostIdFromURL = () => {
//     const path = window.location.pathname;
//     const postId = path.split('/')[3];
//     return postId || null;
//   }

  export const getLanguageFromUrl = () => {
    const path = window.location.pathname;
    const lang = path.split('/')[4];
    return lang || null;
  }

  export const getPostNameFromUrl = () => {
    const path = window.location.pathname;
    const postName = path.split('/')[2];
    return postName || null;
  }

  export const changeLanguageInUrl = (lang: string) => {
    const currentURL = window.location.href;
    let updatedURL = '';
  
    if (lang === 'he') {
      // Add '/he/' to the URL
      updatedURL = currentURL.replace(/(https?:\/\/[^/]+\/)(.*)/, `$1he/$2`);
    } else if (lang === 'en') {
      // Remove '/he/' from the URL
      updatedURL = currentURL.replace(/(https?:\/\/[^/]+\/)he\/(.*)/, `$1$2`);
    }
  
    window.history.pushState({ path: updatedURL }, '', updatedURL);
  };
  
  
  
  
  
  
  

  

  