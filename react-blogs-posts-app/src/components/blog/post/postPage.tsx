import React, {useState, useEffect} from 'react';
import PostPageTopSection from './postPageTopSection/postPageTopSection';
import PostPageContentSection from './postPageContentSection/postPageContentSection';
import { BlogInterface, PostItemInterface } from '../../../interfaces/interfaces';
import PostPageBottomSection from './postPageBottomSection/postPageBottomSection';
import { getDataFromSession ,getPostIdFromURL , getJsonData, storeDataInSession, getLanguageFromUrl} from '../../../services/data-service';
import { useTranslation } from 'react-i18next';
import './postPage.css';
import BackButton from '../../backButton/backButton';

const PostPage = () => {
    const [data, setData] = useState<PostItemInterface[]>([]); 
    const [postId, setPostId] = useState(0);
    const [currentLang, setCurrentLang] = useState('en');    
    const { t,i18n } = useTranslation();   
    useEffect(() => {
          const postId = getPostIdFromURL();
          const lang = getLanguageFromUrl();
          if(lang && lang !== 'en'){           
            document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
            setCurrentLang(lang);
          }
          const postsListItems:PostItemInterface[] = t("blog.postsList", { returnObjects: true }); 
          setPostId(postId ? Number(postId) : 0);
          const sessionData = getDataFromSession();
          if (!sessionData){
            getJsonData('/data/data.json')
            .then((jsonData:BlogInterface) => {              
              storeDataInSession(jsonData);
          })          
            .catch(error => console.error('Error fetching JSON:', error));
          }
          setData(postsListItems);
      }, [currentLang,i18n,t]);
  
    const post = data?.find((post:PostItemInterface) => post.postId === postId);
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