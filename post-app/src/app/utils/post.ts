import PostTitle from "./post-title";
import PostAuthor from "./post-author";
import PostDescription from "./post-description";
import PostId from "./post-id";





export default class Post {

    public id: PostId;
    public title: PostTitle;
    public author: PostAuthor;
    public description: PostDescription;

    constructor (
        id: PostId,
        title: PostTitle,
        author: PostAuthor,
        description: PostDescription,
    ) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.id = id;
    }

    public static create (id:number, title:string, author:string, description:string) {
        const post = new Post (
            new PostId(id), new PostTitle(title), new PostAuthor(author), new PostDescription(description)
        )
        return post
    }

}