import BlaizeLogo from '../../assets/img/blaize-logo.svg';
import GitHubLogo from '../../assets/img/github-logo.png';

import styles from './Footer.module.scss';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.powered}>
                        <p>Powered by</p>
                        <a href="https://blaize.tech/" target="_blank" rel="noreferrer"
                           className={styles.powered__logo}>
                            <img src={BlaizeLogo} alt="Blaize logo"/>
                        </a>
                    </div>

                    <div className={styles.socials}>
                        <a href="https://github.com/blaize-tech"
                           target="_blank"
                           className={styles.socials__git}
                           rel="noreferrer"
                        >
                            <img src={GitHubLogo} alt="GitHub Logo"/>
                        </a>

                        <ul className={styles.socials__list}>
                            <li>
                                <p>Contracts</p>
                            </li>

                            <li>
                                <p>Frontend</p>
                            </li>
                        </ul>
                    </div>

                    <p className={styles.date}>December 2021</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;