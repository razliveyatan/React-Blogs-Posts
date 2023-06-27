import React from 'react';
import { PostItemInterface } from '../../../../interfaces/interfaces';
import './postItem.css';

const PostItem = (props:PostItemInterface) => { 
    return (
    <div className='postItemWrapper'>
        <article className='postGridItem'>
            <div className='postGridInner-left'>
                <div className='postAuthors'>
                    <h6 className='author'>
                        <a className='d-flex'>
                            <div className='author-thumb'>
                                <div className='author-mask'>
                                    <img src={props.postItemBottomSection.postCreatorImage} alt={props.postItemBottomSection.postCreator}/>
                                </div>
                            </div>
                            <div className='author-details'>
                                <span>{props.postItemBottomSection.postCreator}</span>
                                <br/>
                                <span className='date'>{props.postItemTopSection.postDate.toDateString()}</span>
                            </div>
                        </a>
                    </h6>
                </div>
            </div>
            <div className='postGridInner-right'>
                <div className='postGridInner-content'>
                    <a className='readMore-button' href={`/blog/post/${props.postId}`}>
                        Read More
                    </a>
                </div>
            </div>
        </article>
    </div>
    )
}

export default PostItem;