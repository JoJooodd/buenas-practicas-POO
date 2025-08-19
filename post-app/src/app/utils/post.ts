import PostTitle from "./post-title";
import PostAuthor from "./post-author";
import PostDescription from "./post-description";




export default class Post {

    public title: PostTitle;
    public author: PostAuthor;
    public description: PostDescription;

    constructor (
        title: PostTitle,
        author: PostAuthor,
        description: PostDescription,
    ) {
        this.title = title;
        this.author = author;
        this.description = description;
    }

    public static create (title:string, author:string, description:string) {
        const post = new Post (
            new PostTitle(title), new PostAuthor(author), new PostDescription(description)
        )
        return post
    }

}