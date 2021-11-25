export interface PostStatDto {
    commentsCount: number,
    favoritesCount: number,
    readingCount: number,
    score: number,
    votesCount: number
}

export class PostStat {
    score: number;
    commentsCount: number;

    constructor(params: PostStatDto) {
        this.score         = params.score;
        this.commentsCount = params.commentsCount;
    }

}