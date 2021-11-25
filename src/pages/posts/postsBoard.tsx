import Loader from 'react-loader-spinner';
import { usePostsStorage } from '../../modules/Posts/hooks/context/PostsProvider';
import { PostList } from './postList/postList';
import './postsBoard.scss';

export function PostsBoard() {
    const { posts } = usePostsStorage();

    return (
        <section className={'posts-board'}>
            <p className={'posts-board__heading'}>
                {'Интересное на сегодня:'}
            </p>
            {posts ?
                (
                    <PostList posts={posts}/>
                )
                :
                (
                    <div className={'posts-board__spinner'}>
                        <Loader type={'TailSpin'}
                                color="#1c72ef"
                                height={100}
                                width={100}/>
                    </div>
                )
            }
        </section>
    );
}