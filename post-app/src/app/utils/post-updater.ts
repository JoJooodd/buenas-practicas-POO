import PostRepository from "./post-repository";
import Post from "./post";




export default class PostUpdater {
    private readonly repository: PostRepository;

    constructor(repository: PostRepository) {
        this.repository = repository;
    }

    public async run(id:number, title: string, description: string, author: string) {
        try {

            const post = Post.create(id, title, description, author);
            await this.repository.updatePosts(post);

        } catch (error) {   
            console.error("Error updating post:", error);
        }
    }
}
