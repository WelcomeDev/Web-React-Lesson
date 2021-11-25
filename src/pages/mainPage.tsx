import { Header } from './components/header/header';
import './mainPage.scss';
import { PostsBoard } from './posts/postsBoard';
import { PostsProvider } from '../modules/Posts/hooks/context/PostsProvider';
import { Footer } from './components/footer/footer';

export function MainPage() {
    return (
        <>
            <Header/>
            <article className={'page-content'}>
                <div className={'container'}>
                    <PostsProvider>
                        <PostsBoard/>
                    </PostsProvider>
                </div>
            </article>
            <Footer/>
        </>
    );
}