import { NullLiteral } from "typescript"

export interface PostItemInterface {
    postReadMore:string,
    postId:number,
    postItemTopSection:PostItemTopSectionInterface,
    postItemContentSection:PostItemContentSectionInterface,    
    postItemBottomSection:PostItemBottomSectionInterface
    
}

export interface BlogInterface {
    blogId:number,
    blogDate:string,
    blogTitle:string,
    blogSubTitle:string,
    blogImageUrl:string,
    // blogContent:React.ReactNode|null,
    postsList:PostItemInterface[]
}


export interface PostItemTopSectionInterface {
    postDate:string,
    postTitle:string,
    postSubTitle:string,
    postImageUrl:string,
}

export interface PostItemContentSectionInterface{
    postContent: string|TrustedHTML
}

export interface PostItemBottomSectionInterface {
    postCreator:string,
    postCreatorImage:string,
    postCreatorTitle:string,
    postCreatorlinkedInUrl:string,
    postCreatorMailTo:string
}