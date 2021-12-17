import React from 'react';
import { Auth } from '../../../look/components/Auth/auth';

import FakeLessLogo from '../../../../assets/img/Fakeless-logo.svg';
import styles from './Header.module.scss';
import { IContract } from 'src/utils';

const Header = (props: IContract) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <div className={styles.header__wrapLogo}>
            <div className={styles.header__logo}>
              <img src={FakeLessLogo} alt="FakeLess-logo" />
            </div>
          </div>
          <Auth {...props} />
        </div>
      </div>
    </header>
  );
};

export default Header;
