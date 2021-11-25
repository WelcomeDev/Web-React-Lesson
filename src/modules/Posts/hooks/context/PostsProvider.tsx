import { Post } from '../../model/post';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { getMostReading } from '../../action/postsActions';

export interface PostsProvider {
    posts: Post[] | null;
}

const postsContext = createContext<PostsProvider | null>(null);

export function usePostsStorage() {
    const posts = useContext(postsContext);
    if (!posts)
        throw new Error('You should use "usePostsStorage" only inside PostsProvider');

    return posts;
}

export function PostsProvider({ children }: { children: ReactNode }) {

    const [posts, setPosts] = useState<Post[] | null>(null);

    useEffect(() => {
        getMostReading()
            .then(items => {setPosts(items);
                console.log(items);});
    }, []);

    const memoPosts = useMemo(() => posts, [posts]);

    return <postsContext.Provider value={{ posts: memoPosts }}>{children}</postsContext.Provider>;
}
