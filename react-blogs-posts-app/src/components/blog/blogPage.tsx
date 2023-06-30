import React, {useEffect, useState} from 'react';
import PostsList from './postsList/postsList';
import { BlogInterface } from '../../interfaces/interfaces';
import {getJsonData, storeDataInSession} from '../../services/data-service';
import { useTranslation } from 'react-i18next';
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
      const { t } = useTranslation();
    
    return (
        <div className='blogPageContainer'>
            <div className={data?.blogImageUrl ? 'blogTopSectionContainer has-image' :'blogTopSectionContainer'}>
                {
                    data?.blogImageUrl &&
                    <div>
                        <img alt={t('blog.blogTitle')} src={data?.blogImageUrl}/>
                    </div>
                }
                <div className='blogTopInnerContainer'>
                    <h1>{t('blog.blogTitle')}</h1>  
                    {
                        data?.blogSubTitle && 
                        <h4>{t('blog.blogSubTitle')}</h4>
                    }
                    <div className='blogDate'>
                        <h6>
                            <time>{data?.blogDate}</time>
                        </h6>
                    </div>
                </div>            
            </div>
            {            
                data?.postsList && 
                <div className='postsListContainer'>
                    <PostsList/>
                </div>
            }
        </div>
    )
}

export default BlogPage;