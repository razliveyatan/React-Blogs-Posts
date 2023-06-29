import React from 'react';
import {PostItemBottomSectionInterface} from '../../../../interfaces/interfaces';
import './postPageBottomSection.css';

const PostPageBottomSection = (props:PostItemBottomSectionInterface) => {
    return (
        <div className="postPageBottomContainer">
            <div className="postPageAuthorContainer">
                <div className="authorMain">
			        <div className="authorContent">
				        <div className="authorImage" style={{backgroundImage: `url(${props.postCreatorImage})`}}>
                            <img src={props.postCreatorImage} alt={props.postCreator} width="100" height="100"/>                                
                        </div>
                        <div className="authorInfo">
                            <h4>{props.postCreator}</h4>
                            <p>{props.postCreatorTitle}</p>
                            <div className="authorSocialIcons">
                                {
                                    props.postCreatorlinkedInUrl && <a href={props.postCreatorlinkedInUrl} rel="noreferrer" target="_blank"><i className="icon-linkedin"></i></a>
                                }
                                {
                                    props.postCreatorMailTo && <a href={props.postCreatorMailTo} rel="noreferrer" target="_blank"><i className="icon-mail"></i></a>
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