import Post from "./post";
import PostRepository from "./post-repository";




export default class InMemoryPostRepository implements PostRepository {
    private posts: Array <
        {
            title: string;
            description: string;
            author: string;
        }
    >

    constructor(){
        this.posts = [];
    }

    public async save(post: Post): Promise<void>{
        const title = post.title.value;
        const description = post.description.value;
        const author = post.author.value;
    
        this.posts.push({
            title: title,
            description: description,
            author: author,
        })

    }

    public async seePosts() {
        return this.posts;
    }


}

