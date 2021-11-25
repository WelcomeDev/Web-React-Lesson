import { PostStat, PostStatDto } from './postStat';
import { Tag, TagDto } from './tag';
import moment, { Moment } from 'moment';
import defaultImg from 'assets/default-img.png';

export interface PostsRawDto {
    articles: {
        articleRefs: any;
    };
}

export interface PostDto {
    id: string;
    titleHtml: string;
    timePublished: string;
    statistics: PostStatDto;
    hubs: TagDto[];
    leadData: {
        imageUrl?: string | null;
    };
}

export class Post {
    id: string;
    title: string;
    timePublished: Moment;
    imgUrl: string;
    statistic: PostStat;
    tags: Tag[];

    constructor(params: PostDto) {
        this.id            = params.id;
        this.title         = params.titleHtml;
        this.timePublished = moment(params.timePublished);
        this.statistic     = new PostStat(params.statistics);
        this.tags          = params.hubs.map(item => new Tag(item));
        this.imgUrl        = params.leadData.imageUrl ? params.leadData.imageUrl : defaultImg;
    }
}
