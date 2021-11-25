import { PostStatDto } from './postStat';

export interface PostDto {
    id: string;
    title: string;
    date: string;
    imgUrl?: string;
    postStat?: PostStatDto;
}