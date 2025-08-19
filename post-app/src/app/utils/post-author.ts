

export default class PostAuthor {

    public value: string

    constructor(value:string) {
        this.isValidAuthor(value);
        this.value = value;
    };

    private isValidAuthor(author:string): void{
        if (typeof author !== "string" || author.length <= 1) {
            throw new Error('Invalid author');
        }
    };

}

