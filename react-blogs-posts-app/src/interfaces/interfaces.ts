export interface PostItemInterface {
    postId:number,
    postDate:Date,
    postTitle:string,
    postSubTitle:string|null,
    postImageUrl:string|null,
    postCreator:string,
    postContent: React.ReactNode
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
    blogContent:string|null,
    postsList:PostItemListInterface
}