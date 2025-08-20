

export default class PostId {

    public value: number;

    constructor(value:number) {
        this.isValidId(value);
        this.value = value
    };

    private isValidId(id:number): void{
        if (typeof id !== "number") {
            throw new Error("Invalid id type, it must be a number");
        }
    };

}

