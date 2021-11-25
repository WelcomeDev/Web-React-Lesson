import './postItem.scss';
import {Post} from '../../../modules/Posts/model/post';
import {ReactComponent as Score} from 'assets/score.svg';
import {ReactComponent as Comments} from 'assets/comments.svg';
import {RatingItem} from './rating/ratingItem';
import {navigateToArticle} from "../../../modules/Posts/action/postsActions";
import {TagElement} from "./tagElement/tagElement";

export interface PostItemProps {
    post: Post;
}

export function PostItem({post}: PostItemProps) {

    const {
        timePublished,
        id,
        title,
        statistic: {
            score,
            commentsCount,
        },
        tags
    } = post;

    return (
        <section className={'post-item'}
                 onDoubleClick={() => navigateToArticle(id)}
                 title={'Double click to open article'}>
            <p className={'post-item__date'}>
                {timePublished.format('DD/MM/YYYY')}
            </p>
            <img className={'post-item__image'}
                 src={post.imgUrl}
                 alt={'Здесь должна быть интересная картинка'}
            />
            <p className={'post-item__title'}>{title}</p>
            <div className={'post-item__tags'}>
                {
                    tags.map(item => (<TagElement title={item.title}/>))
                }
            </div>
            <section className={'post-item__ratings'}>
                <RatingItem
                    postId={id}
                    value={score}
                    Icon={Score}/>
                <RatingItem
                    postId={id}
                    value={commentsCount}
                    Icon={Comments}/>
            </section>
        </section>
    );
}