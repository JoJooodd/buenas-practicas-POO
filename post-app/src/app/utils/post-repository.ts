import Post from "./post";

export default interface PostRepository {
    save(post: Post): Promise<void>;

    seePosts(): any;

    updatePosts(post: Post): unknown;

    deletePosts(id:number): unknown;
}
