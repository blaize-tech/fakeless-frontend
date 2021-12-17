import React, { useState } from 'react';
import { Modal, Form, Input, message, Button } from 'antd';
import { ModalLayout } from '../../components/modalLayout';
import { Button as CustomButton } from '../../components/button';
import cn from 'classnames';
import FakeLessTitle from '../../assets/img/Fakeless-title.svg';
import styles from './Home.module.scss';

import NewsImage1 from '../../assets/img/news/news-item--1.png';
import NewsImage2 from '../../assets/img/news/news-item--2.png';
import CloseIcon from '../../assets/img/close-icon.svg';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [form] = Form.useForm();

  const onFinish = () => {
    message.success('Submit success!');
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  // interface PublishedNewsTypes {
  //     id: number,
  //     Title: string,
  //     Desc: string,
  //     Date: string,
  //     ImagePath: string,
  //     Source: string,
  //     Credibility: number,
  //     ValidatorsScoreGood: number,
  //     ValidatorsScoreBad: number,
  //     NewsTags: ['Life', 'Mental Health', 'Psychology']
  // }

  const PublishedNews = [
    {
      id: 1,
      Title: '7 Daily Habits That Harm Your Brain',
      Desc: 'How you can deploy Self-Determination Theory to better your life and life.',
      Date: '1 day ago',
      ImagePath: `${NewsImage1}`,
      Source: 'Medium',
      Credibility: 98,
      ValidatorsScoreGood: 125,
      ValidatorsScoreBad: 1,
      NewsTags: ['Life', 'Mental Health', 'Psychology'],
    },
    {
      id: 2,
      Title: '7 Daily Habits That Harm Your Brain',
      Desc: 'How you can deploy Self-Determination Theory to better your life and life.',
      Date: '1 day ago',
      ImagePath: `${NewsImage2}`,
      Source: '',
      Credibility: 30,
      ValidatorsScoreGood: 4,
      ValidatorsScoreBad: 1,
      NewsTags: ['Life', 'Mental Health', 'Psychology'],
    },
  ];

  const [modalShow, setModalShow] = useState(false);

  const isLogged = true;

  const clickOnTags = () => {
    console.log('click Tag');
  };
  return (
    <main>
      <div className={styles.intro}>
        <div className="container">
          <div className={styles.intro__inner}>
            <div className={styles.intro__titleLogo}>
              <img src={FakeLessTitle} alt="FakeLess" />
            </div>
            <h1>Lorem ipsum</h1>

            <ul className={styles.circlePattern}>
              <li className={styles.op0} />
              <li className={styles.op0} />
              <li className={styles.op0} />
              <li className={cn(styles.border, styles.firstLine)} />
              <li className={cn(styles.border, styles.firstLine)} />
              <li className={cn(styles.border, styles.firstLine)} />
              <li className={styles.op0} />
              <li className={styles.op0} />
              <li className={cn(styles.border, styles.secondLine, styles.op3)} />
              <li className={cn(styles.border, styles.secondLine, styles.op5)} />
              <li className={cn(styles.border, styles.secondLine, styles.op7)} />
              <li className={cn(styles.border, styles.secondLine, styles.op9)} />
              <li className={cn(styles.thirdLine, styles.op1)} />
              <li className={cn(styles.thirdLine, styles.op2)} />
              <li className={cn(styles.thirdLine, styles.op3)} />
              <li className={cn(styles.thirdLine, styles.op5)} />
              <li className={cn(styles.thirdLine, styles.op8)} />
              <li className={styles.thirdLine} />
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.news}>
          {isLogged && (
            <div className={styles.news__addBtn}>
              <CustomButton
                size="default"
                iconType={true}
                color="primary"
                onClick={showModal}
                text="Add news"
              />
            </div>
          )}
          <ul className={styles.newsList}>
            {PublishedNews.map((item: any) => (
              <li key={item.id} className={styles.newsList__item}>
                <div className={styles.newsBody}>
                  <div className={styles.newsBody__images}>
                    <img src={item.ImagePath} alt="News Images" />
                  </div>

                  <div>
                    <h2>{item.Title}</h2>
                    <p>{item.Desc}</p>
                    <div>
                      <p>{item.Date}</p>
                      <p>
                        Source: <span>{item.Source}</span>
                      </p>
                    </div>

                    <ul>
                      {item.NewsTags.map((tagItem: any) => (
                        <li key={tagItem.id}>
                          <CustomButton
                            size="small"
                            color="primary"
                            onClick={clickOnTags}
                            text={item.NewsTag}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.newsStats} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {modalShow && (
        <ModalLayout hideModal={() => setModalShow(false)}>{/*<ModalAddNews />*/}</ModalLayout>
      )}
      <Modal
        title="Add news"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className={styles.modal__addNews}
        closeIcon={<img src={CloseIcon} alt="" />}
        footer={[
          <Button className="btn cancel" key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button className="btn" key="submit" type="primary" disabled onClick={handleOk}>
            Add news
          </Button>,
        ]}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="News URL">
            <Input />
          </Form.Item>
          <Form.Item label="News Header">
            <Input />
          </Form.Item>

          <Form.Item label="Add text">
            <Input.TextArea style={{ height: 100 }} minLength={5} />
            <p>At leeast 5 characters</p>
          </Form.Item>
        </Form>
      </Modal>
    </main>
  );
};

export default Home;
