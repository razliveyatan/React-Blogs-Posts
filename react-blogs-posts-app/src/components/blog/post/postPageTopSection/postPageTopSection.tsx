import React from 'react';
import { PostItemTopSectionInterface } from '../../../../interfaces/interfaces';

const PostPageTopSection = (props:PostItemTopSectionInterface) => {
    return (
        <div className={props.postImageUrl ? 'postTopSectionContainer has-image' :'postTopSectionContainer'}>
            {
                props.postImageUrl &&
                <div>
                    <img src={props.postImageUrl}/>
                </div>
            }
            <div className='postTopInnerContainer'>
                <h1>{props.postTitle}</h1>  
                {
                    props.postSubTitle && 
                    <h4>{props.postSubTitle}</h4>
                }
                <p className='postDate'>
                    <span>
                        <time>{props.postDate}</time>
                    </span>
                </p>
            </div>            
        </div>
    )
}

export default PostPageTopSection;