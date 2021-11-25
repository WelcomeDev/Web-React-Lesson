import axios from 'axios';
import {Post, PostsRawDto} from '../model/post';
import {openInNewTab} from '../../../lib/actions/navigation';

const URL_BASE = 'https://habr.com/';
const URL_API_BASE = `${URL_BASE}kek/v2/articles`;
const api = axios.create({baseURL: URL_API_BASE});

export function getMostReading() {
    return api.get<PostsRawDto>('most-reading?fl=ru&hl=ru')
        .then(resp => {
            const posts: Post[] = [];
            const dictionary = resp.data.articles.articleRefs;

            for (const key in dictionary) {
                const dto = dictionary[key];
                if (dto)
                    posts.push(new Post(dto));
            }
            return posts;
        });
}

export function navigateToArticle(id: string) {
    openInNewTab(`${URL_BASE}post/${id}`);
}

export function navigateToComments(id: string){
    openInNewTab(`${URL_BASE}post/${id}/comments`);
}