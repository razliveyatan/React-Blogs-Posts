import React from 'react';
import { Link } from 'react-router-dom';
import bankBlogImage from '../../projInnerAssets/banking-blog-image.jpg';

const HomePage = () => {    

    return (
    <div className='mainContainer'>
        <h1 className='mainTitle'>
            Lorem Ipsum
        </h1>
        <h4 className='mainSubTitle'>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </h4>
        <div className='mainContent'>
            <p className='mainContentParagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in metus neque. Sed vitae pharetra mi. Vestibulum eu diam diam. Nullam ornare elementum sapien, non tempor nulla porttitor et. Phasellus tempor nibh eu ante hendrerit egestas. Curabitur luctus urna quis sapien mattis, et porta ligula lacinia. Nullam at aliquam ligula. Praesent sit amet ligula mauris. Nam nec congue sem, id tempor nulla.</p>
            <p className='mainContentParagraph'>Nullam tempus elit et massa ultrices consectetur. Curabitur pulvinar lacus nec dui blandit aliquet. Integer ornare et justo sed placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ipsum et ullamcorper sagittis. Sed vitae metus pulvinar, convallis augue id, sagittis diam. Aliquam quis massa orci. Nam pretium erat et eros feugiat, vel vestibulum libero finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eu nibh ut mauris volutpat dignissim a id neque. Donec ut dignissim eros. Duis id faucibus mauris. Nam a viverra purus. Curabitur aliquet ultricies urna, a vulputate sem iaculis et.</p>
            <p className='mainContentParagraph'>Vivamus egestas mollis convallis. Donec sed erat sapien. Sed tempus ac arcu et blandit. Aliquam erat volutpat. Aliquam pellentesque, enim in mattis lacinia, sapien massa facilisis ipsum, eget placerat mi ex eu arcu. Praesent velit ligula, lacinia eget gravida auctor, aliquam nec orci. Sed ullamcorper est neque, sed convallis odio blandit et. Proin eleifend erat ac velit gravida, sed elementum nisl interdum. Nulla dapibus felis quis velit vehicula malesuada in non felis. Proin imperdiet non velit sed dapibus. Donec dolor elit, pretium vitae sem nec, suscipit mollis nibh. Aenean augue sapien, tempor bibendum commodo ut, posuere eget lorem. Donec vel nibh molestie, tincidunt libero non, consectetur velit. Proin finibus tincidunt tincidunt. Phasellus vel ante eget diam semper vulputate.</p>                    
        </div>
        <Link to="/blog">
            <div className='homePageImage'>
                <img className='mainImage' alt='my banking blog' src={bankBlogImage}/>
            </div>
        </Link>
    </div>
    )
}

export default HomePage;