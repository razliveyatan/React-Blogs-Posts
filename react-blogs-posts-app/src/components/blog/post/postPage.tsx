import React, {useState, useEffect} from 'react';
import PostPageTopSection from './postPageTopSection/postPageTopSection';
import PostPageContentSection from './postPageContentSection/postPageContentSection';
import { BlogInterface } from '../../../interfaces/interfaces';
import PostPageBottomSection from './postPageBottomSection/postPageBottomSection';
import { getDataFromSession ,getPostIdFromURL , getJsonData, storeDataInSession} from '../../../services/data-service';
import { PostItemInterface } from '../../../interfaces/interfaces';
import './postPage.css';
import BackButton from '../../backButton/backButton';


const PostPage = () => {
    const [data, setData] = useState<BlogInterface | null>(null); 
    const [postId, setPostId] = useState(0);
    useEffect(() => {        
        const postId = getPostIdFromURL();
        setPostId(postId ? Number(postId) : 0);
        const sessionData = getDataFromSession();
        if (!sessionData){
          getJsonData('/data/data.json')
          .then((jsonData:BlogInterface) => {
            setData(jsonData);
            storeDataInSession(jsonData);
        })          
          .catch(error => console.error('Error fetching JSON:', error));
        }
        setData(sessionData);                    
      }, []);

  
    const post = data?.postsList.find((post:PostItemInterface) => post.postId === postId);
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