import PostRepository from "./post-repository";




export default class PostSearcher {
    private repository: PostRepository;

    constructor(repository: PostRepository) {
        this.repository = repository;
    }

    public async run(){
        return await this.repository.seePosts();
    }
}
