import './tagElement.scss';

export interface TagProps {
    title: string;
}

export function TagElement(props: TagProps) {
    return (
        <div className={'tag'}>
            {props.title}
        </div>
    )
}
