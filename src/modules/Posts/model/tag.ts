export interface TagDto {
    id: string,
    alias: string,
    type: string,
    title: string,
    titleHtml: string,
    isProfiled: boolean
}

export class Tag {
    title: string;

    constructor(tag: TagDto) {
        this.title = tag.title;
    }
}