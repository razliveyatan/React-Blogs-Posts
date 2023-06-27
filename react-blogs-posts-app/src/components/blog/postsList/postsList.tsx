import React from 'react';
import { PostItemListInterface, PostItemInterface } from '../../../interfaces/interfaces';
import PostItem from './postItem/postItem';

const PostsList = () => {
    const data:any = {};
    const postsListItems = data.postsList;
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