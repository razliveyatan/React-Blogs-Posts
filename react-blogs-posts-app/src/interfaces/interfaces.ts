import { NullLiteral } from "typescript"

export interface PostItemInterface {
    postId:number,
    postItemTopSection:PostItemTopSectionInterface,
    postItemContentSection:PostItemContentSectionInterface,    
    postItemBottomSection:PostItemBottomSectionInterface
    
}

export interface PostItemListInterface {
    postsList: PostItemInterface[]
}

export interface BlogInterface {
    blogId:number,
    blogDate:Date,
    blogTitle:string,
    blogSubTitle:string|null,
    blogImageUrl:string|null,
    blogContent:React.ReactNode|null,
    postsList:PostItemListInterface
}


export interface PostItemTopSectionInterface {
    postDate:Date,
    postTitle:string,
    postSubTitle:string|null,
    postImageUrl:string|null,
}

export interface PostItemContentSectionInterface{
    postContent: string|TrustedHTML
}

export interface PostItemBottomSectionInterface {
    postCreator:string,
    postCreatorImage:string,
    postCreatorTitle:string|null,
    postCreatorlinkedInUrl:string|null,
    postCreatorMailTo:string|null
}