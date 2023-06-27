import React from 'react';
import {PostItemBottomSectionInterface} from '../../../../interfaces/interfaces';
const PostPageBottomSection = (props:PostItemBottomSectionInterface) => {
    return (
        <div className="postPageBottomContainer">
            <div className="postPageAuthorContainer">
                <div className="authorMain">
			        <div className="authorContent">
				        <a className="authorImage" style={{backgroundImage: `url(${props.postCreatorImage})`}}>
                            <img src={props.postCreatorImage} alt={props.postCreator} width="100" height="100" className="photo lazyload"/>                                
                        </a>
                        <div className="authorInfo">
                            <h4>{props.postCreator}</h4>
                            <p>{props.postCreatorTitle}</p>
                            <div className="authorSocialIcons">
                                {
                                    props.postCreatorlinkedInUrl && <a href={props.postCreatorlinkedInUrl} target="_blank"><i className="icon-linkedin"></i></a>
                                }
                                {
                                    props.postCreatorMailTo && <a href={props.postCreatorMailTo} target="_blank"><i className="icon-mail"></i></a>
                                }                                
                                
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
	</div>
    )
}

export default PostPageBottomSection;