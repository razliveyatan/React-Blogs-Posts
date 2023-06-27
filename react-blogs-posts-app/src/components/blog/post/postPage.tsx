import React from 'react';
import PostPageTopSection from './postPageTopSection/postPageTopSection';
import PostPageContentSection from './postPageContentSection/postPageContentSection';
import { PostItemInterface } from '../../../interfaces/interfaces';
import PostPageBottomSection from './postPageBottomSection/postPageBottomSection';


const PostPage = () => {
    const data:any = {};

    const postPageTopSectionProps = data.postItemTopSection;
    const postPageContentSectionProps = data.postItemContentSection;
    const postPageBottomSectionProps = data.postItemBottomSection;
    return <>
        <PostPageTopSection {...postPageTopSectionProps}/>
        <PostPageContentSection {...postPageContentSectionProps}/>
        <PostPageBottomSection {...postPageBottomSectionProps}/>
    </>
}

export default PostPage;