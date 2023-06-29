import React from 'react';
import { PostItemTopSectionInterface } from '../../../../interfaces/interfaces';
import './postPageTopSection.css';

const PostPageTopSection = (props:PostItemTopSectionInterface) => {
    console.log(props.postImageUrl);
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