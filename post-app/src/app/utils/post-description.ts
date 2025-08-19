

export default class PostDescription {

    public value: string

    constructor(value:string) {
        this.isValidDescription(value);
        this.value = value
    };

    private isValidDescription(description:string): void {
        if (typeof description !== "string" || 
            description.length >= 40) {
            throw new Error('Invalid description');
        }
    };
}

