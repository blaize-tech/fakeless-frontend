import React from 'react';
import {ModalLayout} from '../components/modalLayout';
import {Button} from '../components/button';
import cn from 'classnames';
import FakeLessTitle from '../assets/img/Fakeless-title.svg';
import styles from './Home.module.scss';


import NewsImage1 from '../assets/img/news/news-item--1.png';
import NewsImage2 from '../assets/img/news/news-item--2.png';
import NewsImage3 from '../assets/img/news/news-item--3.png';
import NewsImage4 from '../assets/img/news/news-item--4.png';

function Home() {
    const PublishedNews = [
        {
            id: 1,
            Title: "7 Daily Habits That Harm Your Brain",
            Desc: "How you can deploy Self-Determination Theory to better your life and life.",
            Date: "1 day ago",
            ImagePath: `${NewsImage1}`,
            Source: "Medium",
            Credibility: 98,
            ValidatorsScoreGood: 125,
            ValidatorsScoreBad: 1,
            NewsTags: [
                {TagTitle: "Life"},
                {TagTitle: "Mental Health"},
                {TagTitle: "Psychology"}
            ]
        },
        {
            id: 2,
            Title: "7 Daily Habits That Harm Your Brain",
            Desc: "How you can deploy Self-Determination Theory to better your life and life.",
            Date: "1 day ago",
            ImagePath: `${NewsImage2}`,
            Source: "Medium",
            Credibility: 4,
            ValidatorsScoreGood: 4,
            ValidatorsScoreBad: 1,
            NewsTags: [
                {TagTitle: "Life"},
                {TagTitle: "Mental Health"},
                {TagTitle: "Psychology"}
            ]
        },
        {
            id: 3,
            Title: "7 Daily Habits That Harm Your Brain",
            Desc: "How you can deploy Self-Determination " +
                "Theory to better your life and life. How you can deploy Self-Determination " +
                "Theory to better your life and life. How you can deploy Self-Determination " +
                "Theory to better your life and life. How you can deploy Self-Determination " +
                "Theory to better your life and life. How you can deploy Self-Determination " +
                "Theory to better your life and life. How you can deploy Self-Determination" +
                " Theory to better your life and life.",
            Date: "12 day ago",
            ImagePath: `${NewsImage3}`,
            Source: "Medium",
            Credibility: 2,
            ValidatorsScoreGood: 4,
            ValidatorsScoreBad: 133,
            NewsTags: [
                {TagTitle: "Life"},
                {TagTitle: "Mental Health"},
                {TagTitle: "Psychology"}
            ]
        },
        {
            id: 4,
            Title: "7 Daily Habits That Harm Your Brain",
            Desc: "How you can deploy Self-Determination Theory to better your life and life.",
            Date: "1 day ago",
            ImagePath: `${NewsImage4}`,
            Source: "Medium",
            Credibility: 100,
            ValidatorsScoreGood: 22,
            ValidatorsScoreBad: 0,
            NewsTags: [
                {TagTitle: "Life"},
                {TagTitle: "Mental Health"},
                {TagTitle: "Psychology"}
            ]
        }
    ]

    const [modalShow, setModalShow] = React.useState(false);

    const isLogged = true;
    const CredibilityStartedRed = 50;

    const clickOnTags = () => {
        console.log('click Tag');
    }

    const publishedNewsItem = () => {
        console.log('click publishedNewsItem');
    }
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
                            <li className={styles.op0}/>
                            <li className={styles.op0}/>
                            <li className={styles.op0}/>
                            <li className={cn(styles.border, styles.firstLine)}/>
                            <li className={cn(styles.border, styles.firstLine)}/>
                            <li className={cn(styles.border, styles.firstLine)}/>
                            <li className={styles.op0}/>
                            <li className={styles.op0}/>
                            <li className={cn(styles.border, styles.secondLine, styles.op3)}/>
                            <li className={cn(styles.border, styles.secondLine, styles.op5)}/>
                            <li className={cn(styles.border, styles.secondLine, styles.op7)}/>
                            <li className={cn(styles.border, styles.secondLine, styles.op9)}/>
                            <li className={cn(styles.thirdLine, styles.op1)}/>
                            <li className={cn(styles.thirdLine, styles.op2)}/>
                            <li className={cn(styles.thirdLine, styles.op3)}/>
                            <li className={cn(styles.thirdLine, styles.op5)}/>
                            <li className={cn(styles.thirdLine, styles.op8)}/>
                            <li className={styles.thirdLine}/>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.news}>
                    {isLogged &&
                        <div className={styles.news__addBtn}>
                            <Button
                                size="default"
                                iconType={true}
                                color="primary"
                                onClick={() => console.log('add news click')}
                                text="Add news"
                            />
                        </div>
                    }
                    <ul className={styles.newsList}>
                        {PublishedNews.map((item: any) => (
                            <li key={item.id} className={styles.newsList__item}>
                                <div className={styles.newsBody}>
                                    <div className={styles.newsBody__images}>
                                        <img src={item.ImagePath} alt="News Images"/>
                                    </div>

                                    <div>
                                        <h2 className={styles.newsBody__title}>{item.Title}</h2>
                                        <p className={styles.newsBody__desc}>{item.Desc}</p>
                                        <div className={styles.newsBody__subInfo}>
                                            <p>{item.Date}</p>
                                            <p>Source: <span>{item.Source}</span></p>
                                        </div>

                                        <ul className={styles.newsBody__tags}>
                                            {item.NewsTags.map((tagItem: any, id: number) =>
                                                <li key={id} className={styles.newsBody__tagsItem}>
                                                    <Button
                                                        size="small"
                                                        color="primary"
                                                        onClick={clickOnTags}
                                                        text={tagItem.TagTitle}
                                                    />
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.newsStats}>
                                    <p className={styles.newsStats__title}>
                                        Credibility:
                                        <span
                                            className={cn(item.Credibility < CredibilityStartedRed && styles.red)}>
                                            {item.Credibility}%
                                        </span>
                                    </p>
                                    <div className={styles.validators}>
                                        <p>Validators score:</p>
                                        <button className={cn(styles.validators__btn, styles.validators__btnGood)}>
                                            {item.ValidatorsScoreGood}
                                        </button>

                                        <button className={cn(styles.validators__btn, styles.validators__btnBad)}>
                                            {item.ValidatorsScoreBad}
                                        </button>
                                    </div>

                                    <Button
                                        text="Published"
                                        color="primary"
                                        size="default"
                                        onClick={publishedNewsItem}/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
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
