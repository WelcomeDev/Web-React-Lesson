import documentIcon from 'assets/document-icon.svg';
import studyIcon from 'assets/study-icon.png';
import gitIcon from 'assets/git-logo.png';

export interface MenuItem {
    title: string;
    link?: string;
    icon?: string;
}

export const source: MenuItem[] = [
    {
        title: 'Все материалы',
        link: 'https://drive.google.com/drive/folders/1sBjh1uh59363yxLWuL3v9V0TGWdbgN3e?usp=sharing',
        icon: documentIcon,
    },
    {
        title: 'pro-front',
        link: 'https://docs.google.com/document/d/1rXQ4c110HdY-XtvUsHw2hXVNAbk-_kwZhGB5X-qcP0g/edit?usp=sharing',
        icon: studyIcon,
    },
    {
        title: 'Об авторе',
        link: 'https://github.com/WelcomeDev',
        icon: gitIcon
    },
    {
        title: 'на кофе',
    },
];