import React from 'react';
import { PostItemTopSectionInterface } from '../../../../interfaces/interfaces';
import './postPageTopSection.css';

const PostPageTopSection = (props:PostItemTopSectionInterface) => {
    return (
        <div className={props.postImageUrl ? 'postTopSectionContainer has-image' :'postTopSectionContainer'}>
            {
                props.postImageUrl &&
                <div>
                    <img alt={props.postTitle} src={props.postImageUrl}/>
                </div>
            }
            <div className='postTopInnerContainer'>
                <h1>{props.postTitle}</h1>                  
                <div className='postDate'>
                    <h6>
                        <time>{props.postDate}</time>
                    </h6>
                </div>
            </div>            
        </div>
    )
}

export default PostPageTopSection;