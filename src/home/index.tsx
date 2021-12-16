import React from 'react';
import {ModalLayout} from '../components/modalLayout';
import {Button} from '../components/button';
import FakeLessTitle from '../assets/img/Fakeless-title.svg';
import styles from './Home.module.scss';

function Home() {
    const PublishedNews = [
        {
            id: 1
        }
    ];

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <main>
            <div className={styles.intro}>
                <div className="container">
                    <div className={styles.intro__inner}>
                        <div className={styles.intro__titleLogo}>
                            <img src={FakeLessTitle} alt="FakeLess"/>
                        </div>
                        <h1>Lorem ipsum</h1>

                        <ul className={styles.circlePattern}>
                            <li></li>

                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container">
                <div>
                    <Button
                        size="default"
                        iconType={true}
                        color="primary"
                        onClick={() => console.log('add news click')}
                        text="Add news"
                    />
                </div>
                <ul className={styles.newsList}>
                    <li className={styles.newsList__item}>
                        123
                    </li>
                </ul>
            </div>

            {modalShow &&
                <ModalLayout hideModal={() => setModalShow(false)}>
                    {/*<ModalAddNews />*/}
                </ModalLayout>
            }
        </main>
    );
}

export default Home;
