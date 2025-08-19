

export default class PostTitle {

    public value: string

    constructor(value:string) {
        this.isValidTitle(value);
        this.value = value
    };

    private isValidTitle(title:string): void{
        if (typeof title !== "string" || title.length >= 15) {
            throw new Error("Invalid title");
        }
    };

}

