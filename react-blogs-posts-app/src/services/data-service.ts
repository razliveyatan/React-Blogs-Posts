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
    const postId = path.split('/').pop();
    return postId || null;
  }