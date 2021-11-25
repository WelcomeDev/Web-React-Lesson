import { PostItem } from '../postItem/postItem';
import { Post } from '../../../modules/Posts/model/post';
import './postlist.scss';

export interface PostListProps {
    posts: Post[];
}

export function PostList({ posts }: PostListProps) {
    return (
        <section className={'posts-list'}>
            {
                posts?.map(item =>
                    <PostItem
                        key={item.id}
                        post={item}/>)
            }
        </section>
    );
}