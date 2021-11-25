import {JSXElementConstructor} from 'react';
import './ratingItem.scss';
import {navigateToComments} from "../../../../modules/Posts/action/postsActions";

export interface RatingItemProps {
    value: number;
    postId: string;
    Icon: JSXElementConstructor<any>;
}

export function RatingItem({Icon, ...rest}: RatingItemProps) {
    return (
        <section className={'rating-item'}
                 onClick={() => navigateToComments(rest.postId)}>
            <Icon
                className={'rating-item__icon'}/>
            <p>{rest.value}</p>
        </section>
    );
}