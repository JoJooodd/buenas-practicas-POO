'/src/utils/post-register.ts';
import Post from "./post";
import PostRepository from "./post-repository";




export default class PostRegister {

    private readonly repository: PostRepository;

    constructor(repository: PostRepository){
        this.repository = repository
    }

    public async run(title: string, description: string, author: string) {
        // Encargado de validar datos y guardar en base de datos
        const post = Post.create(title, description, author);
        await this.repository.save(post);
    }

}
