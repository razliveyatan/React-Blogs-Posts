import React from 'react';
import { PostItemContentSectionInterface } from '../../../../interfaces/interfaces';
import '../postPageContentSection/postPageContentSection.css';

const PostPageTopSection = (props:PostItemContentSectionInterface) => {
    return (
        <div className='postContentSectionContainer'>
             <div dangerouslySetInnerHTML={{__html:props.postContent}}/>     
        </div>
    )
}

export default PostPageTopSection;