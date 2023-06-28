import React from 'react';
import { PostItemInterface } from '../../../interfaces/interfaces';
import PostItem from './postItem/postItem';

const PostsList = (props: { postsListItems: PostItemInterface[] }) => {       
    const postsListItems:PostItemInterface[] = props.postsListItems;
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