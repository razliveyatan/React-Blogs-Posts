import React, {useEffect, useState} from 'react';
import PostsList from './postsList/postsList';
import { BlogInterface } from '../../interfaces/interfaces';
import {getJsonData, storeDataInSession} from '../../services/data-service';
import '../blog/blogPage.css';

const BlogPage = () => {
    const [data, setData] = useState<BlogInterface | null>(null);   
    useEffect(() => {
        getJsonData('data/data.json')
          .then((jsonData:BlogInterface) => {
            setData(jsonData);
            storeDataInSession(jsonData);
        })          
          .catch(error => console.error('Error fetching JSON:', error));
      }, []);
    
    return (
        <div className='wrap container'>
            <div className={data?.blogImageUrl ? 'blogTopSectionContainer has-image' :'blogTopSectionContainer'}>
                {
                    data?.blogImageUrl &&
                    <div>
                        <img alt={data?.blogTitle} src={data?.blogImageUrl}/>
                    </div>
                }
                <div className='blogTopInnerContainer'>
                    <h1>{data?.blogTitle}</h1>  
                    {
                        data?.blogSubTitle && 
                        <h4>{data?.blogSubTitle}</h4>
                    }
                    <p className='blogDate'>
                        <span>
                            <time>{data?.blogDate}</time>
                        </span>
                    </p>
                </div>            
            </div>
            {            
                data?.postsList && 
                <div className='postsListContainer'>
                    <PostsList postsListItems={data.postsList}/>
                </div>
            }
        </div>
    )
}

export default BlogPage;