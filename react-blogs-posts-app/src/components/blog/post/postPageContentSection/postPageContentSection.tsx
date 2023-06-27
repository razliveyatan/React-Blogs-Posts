import React from 'react';
import { PostItemContentSectionInterface } from '../../../../interfaces/interfaces';

const PostPageTopSection = (props:PostItemContentSectionInterface) => {
    return (
        <div className='postContentSectionContainer'>
             <div dangerouslySetInnerHTML={{__html:props.postContent}}/>     
        </div>
    )
}

export default PostPageTopSection;