import './footer.scss';
import { source } from '../source';

export function Footer() {
    return (
        <footer className={'footer'}>
            <section className={'footer__links'}>
                {
                    source.map(item => {
                        if (!item.link || !item.icon)
                            return undefined;

                        return (
                            <a className={'footer__links__link'}
                               href={item.link}
                               target={'_blank'}
                               title={item.title}>
                                <img src={item.icon}
                                     alt={item.title}/>
                            </a>
                        );
                    })
                }
            </section>
            <p className={'footer__year'}>2021</p>
        </footer>
    );
}