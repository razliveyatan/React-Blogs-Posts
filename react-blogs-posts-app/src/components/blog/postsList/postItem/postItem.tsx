import Reactת , {useState} from 'react';
import { PostItemInterface } from '../../../../interfaces/interfaces';
import './postItem.css';

const PostItem = (props:PostItemInterface) => { 
    const [isHovered, setIsHovered] = useState(false);

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
                                <span>{props.postItemBottomSection.postCreator}</span>
                                <span className='date'>{props.postItemTopSection.postDate}</span>
                            </div>
                        </a>
                    </h6>
                </div>
            </div>
            <div className='postGridInner-right'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
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