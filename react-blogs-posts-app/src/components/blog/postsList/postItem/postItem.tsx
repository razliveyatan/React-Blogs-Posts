import React, {useState, useEffect, useContext} from 'react';
import { PostItemInterface } from '../../../../interfaces/interfaces';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../../../context/languageContext';
import './postItem.css';

const PostItem = (props:PostItemInterface) => { 
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useContext(LanguageContext);
  useEffect(() => {    
  },[language])

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const postGridInnerLeftClass = isHovered ? 'postGridInner-left hovered' : 'postGridInner-left';
    return (
    <div className='postItemWrapper'>
        <article className='postGridItem' style={{backgroundImage: `url(${props.postItemTopSection.postImageUrl})`}}>
            <div className={postGridInnerLeftClass}>
                <div className='postAuthors'>
                    <h6 className='author'>
                        <a className='d-flex' target='_blank' rel="noreferrer" href='https://www.google.com/search?q=bankworke'>
                            <div className='author-thumb'>
                                <div className='author-mask'>
                                    <img src={props.postItemBottomSection.postCreatorImage} alt={props.postItemBottomSection.postCreator}/>
                                </div>
                            </div>
                            <div className='author-details'>
                                <h6>{props.postItemBottomSection.postCreator}</h6>
                                <h6 className='date'>{props.postItemTopSection.postDate}</h6>
                            </div>
                        </a>
                    </h6>
                </div>
            </div>
            <div className='postGridInner-right'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
                <div className='postGridInner-content'>
                    <Link className='readMore-button' to={`/blog/${props.postName}`} state={props}>
                        {props.postReadMore}
                    </Link>
                </div>
            </div>
        </article>
    </div>
    )
}

export default PostItem;