import React from 'react';
import { PostItemInterface } from '../../../interfaces/interfaces';
import { useTranslation } from 'react-i18next';
import PostItem from './postItem/postItem';

const PostsList = () => {       
    const { t } = useTranslation();    
    const postsListItems:PostItemInterface[] = t("blog.postsList", { returnObjects: true });    
    return (
    <>
        <div className='postsListGrid'>
            {
                postsListItems && postsListItems.length > 0 && postsListItems.map((postItem:PostItemInterface) => {
                    return(
                        <PostItem {...postItem} key={postItem.postId}/>
                    )
                })
            }
        </div>
    </>
    )
}

export default PostsList;