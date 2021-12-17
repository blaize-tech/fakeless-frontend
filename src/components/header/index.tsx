import React from 'react';
import {Auth} from '../auth/auth';
import {InitContract} from '../../utils';

import FakeLessLogo from '../../assets/img/Fakeless-logo.svg';
import styles from './Header.module.scss';

const Header = (props: InitContract) => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__inner}>
                    <div className={styles.header__wrapLogo}>
                        <a href="/" className={styles.header__logo}>
                            <img src={FakeLessLogo} alt="FakeLess-logo"/>
                        </a>
                    </div>
                    <Auth {...props} />
                </div>
            </div>
        </header>
    );
};

export default Header;