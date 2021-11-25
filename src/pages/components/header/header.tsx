import './header.scss';
import logoPath from 'assets/habr-logo.jpg';
import { source } from '../source';
import { openInNewTab } from '../../../lib/actions/navigation';

export function Header() {
    return (
        <header className={'header'}>
            <div className={'container'}>
                <div className={'header__logo-container'}>
                    <a href="https://habr.com/ru/all/"
                       target={'_blank'}
                    >
                        <img src={logoPath}
                             alt={'logo'}
                             className={'header__logo-container__logo'}/>
                    </a>
                    <ul className={'header__links'}>
                        {
                            source.map(item =>
                                <li
                                    onClick={() => {
                                        if (item.link)
                                            openInNewTab(item.link);
                                    }}>
                                    {item.title}
                                </li>)
                        }
                    </ul>
                </div>
            </div>
        </header>
    );
}