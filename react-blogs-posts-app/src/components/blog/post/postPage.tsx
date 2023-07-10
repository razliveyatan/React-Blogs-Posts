import React, {useEffect, useState, useContext} from 'react';
import PostPageTopSection from './postPageTopSection/postPageTopSection';
import PostPageContentSection from './postPageContentSection/postPageContentSection';
import { PostItemInterface } from '../../../interfaces/interfaces';
import PostPageBottomSection from './postPageBottomSection/postPageBottomSection';
import { getPostNameFromUrl } from '../../../services/data-service';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../../context/languageContext';
import './postPage.css';
import BackButton from '../../backButton/backButton';

const PostPage = () => {
    const location = useLocation();
    const postData:PostItemInterface = location.state;  
    const [post, setPostData]:any = useState(null);    
    const { language } = useContext(LanguageContext);
    const { t } = useTranslation();
    
    useEffect(() => {      
      if (postData !== post){
        const postsListItems:PostItemInterface[] = t("blog.postsList", { returnObjects: true }); 
        const currentPost:PostItemInterface|undefined = postsListItems.find((post:PostItemInterface) => post.postName === getPostNameFromUrl());
        if (currentPost){
          setPostData(currentPost);
        }
      }
           
    }, [language,postData,t,post]);

    const postPageTopSectionProps = post?.postItemTopSection;
    const postPageContentSectionProps = post?.postItemContentSection;
    const postPageBottomSectionProps = post?.postItemBottomSection;

    return (
    <div className="postPageContainer">
      <BackButton/>   
       {
        postPageTopSectionProps && <PostPageTopSection {...postPageTopSectionProps}/>
       } 
       {
        postPageContentSectionProps &&  <PostPageContentSection {...postPageContentSectionProps}/>
       }
       {
        postPageBottomSectionProps && <PostPageBottomSection {...postPageBottomSectionProps}/>
       }        
    </div>
    )
}

export default PostPage;