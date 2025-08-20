import PostRepository from "./post-repository";




export default class PostDeleter {
    private readonly repository: PostRepository;

    constructor(repository: PostRepository) {
        this.repository = repository;
    };

    public async run(id:number) {
        return await this.repository.deletePosts(id);
    }
}
