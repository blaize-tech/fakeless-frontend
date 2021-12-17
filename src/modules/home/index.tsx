import React, { useState } from 'react';
import { Modal, Form, Input, notification, Button } from 'antd';
import { Button as CustomButton } from '../look/components/Button';
import cn from 'classnames';
import FakeLessTitle from '../../assets/img/Fakeless-title.svg';

import NewsImage1 from '../../assets/img/news/news-item--1.png';
import NewsImage2 from '../../assets/img/news/news-item--2.png';
import NewsImage3 from '../../assets/img/news/news-item--3.png';
import NewsImage4 from '../../assets/img/news/news-item--4.png';

import CloseIcon from '../../assets/img/close-icon.svg';

import styles from './Home.module.scss';

interface FormValue {
  uri: string;
  header: string;
  body: string;
}

const initialState = {
  uri: '',
  header: '',
  body: '',
};

const regex =
  '(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}' +
  '|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))' +
  '[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const useForm = (callback: any, initial: FormValue) => {
    const [values, setValues] = useState(initialState);
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };
    const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await callback();
    };

    return {
      onInputChange,
      onSubmit,
      onTextAreaChange,
      setValues,
      values,
    };
  };

  async function loginUserCallback() {
    console.log('loginUserCallback');
  }

  const { onInputChange, onSubmit, onTextAreaChange, setValues, values } = useForm(
    loginUserCallback,
    initialState,
  );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log(values);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setValues(initialState);
  };

  const [form] = Form.useForm();

  const onFinish = () => {
    console.log('Submit success!');
    notification.success({
      message: 'Success',
      className: 'notificationError',
      description: 'News successfully added',
    });
  };

  const onFinishFailed = () => {};

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
      NewsTags: [{ TagTitle: 'Life' }, { TagTitle: 'Mental Health' }, { TagTitle: 'Psychology' }],
    },
    {
      id: 2,
      Title: '7 Daily Habits That Harm Your Brain',
      Desc: 'How you can deploy Self-Determination Theory to better your life and life.',
      Date: '1 day ago',
      ImagePath: `${NewsImage2}`,
      Source: 'Medium',
      Credibility: 4,
      ValidatorsScoreGood: 4,
      ValidatorsScoreBad: 1,
      NewsTags: [{ TagTitle: 'Life' }, { TagTitle: 'Mental Health' }, { TagTitle: 'Psychology' }],
    },
    {
      id: 3,
      Title: '7 Daily Habits That Harm Your Brain',
      Desc:
        'How you can deploy Self-Determination ' +
        'Theory to better your life and life. How you can deploy Self-Determination ' +
        'Theory to better your life and life. How you can deploy Self-Determination ' +
        'Theory to better your life and life. How you can deploy Self-Determination ' +
        'Theory to better your life and life. How you can deploy Self-Determination ' +
        'Theory to better your life and life. How you can deploy Self-Determination' +
        ' Theory to better your life and life.',
      Date: '12 day ago',
      ImagePath: `${NewsImage3}`,
      Source: 'Medium',
      Credibility: 2,
      ValidatorsScoreGood: 4,
      ValidatorsScoreBad: 133,
      NewsTags: [{ TagTitle: 'Life' }, { TagTitle: 'Mental Health' }, { TagTitle: 'Psychology' }],
    },
    {
      id: 4,
      Title: '7 Daily Habits That Harm Your Brain',
      Desc: 'How you can deploy Self-Determination Theory to better your life and life.',
      Date: '1 day ago',
      ImagePath: `${NewsImage4}`,
      Source: 'Medium',
      Credibility: 100,
      ValidatorsScoreGood: 22,
      ValidatorsScoreBad: 0,
      NewsTags: [{ TagTitle: 'Life' }, { TagTitle: 'Mental Health' }, { TagTitle: 'Psychology' }],
    },
  ];

  const isLogged = true;
  const CredibilityStartedRed = 50;

  const clickOnTags = () => {
    console.log('click Tag');
  };

  const publishedNewsItem = () => {
    console.log('click publishedNewsItem');
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
                    <h2 className={styles.newsBody__title}>{item.Title}</h2>
                    <p className={styles.newsBody__desc}>{item.Desc}</p>
                    <div className={styles.newsBody__subInfo}>
                      <p>{item.Date}</p>
                      <p>
                        Source: <span>{item.Source}</span>
                      </p>
                    </div>

                    <ul className={styles.newsBody__tags}>
                      {item.NewsTags.map((tagItem: any, id: number) => (
                        <li key={id} className={styles.newsBody__tagsItem}>
                          <CustomButton
                            size="small"
                            color="primary"
                            onClick={clickOnTags}
                            text={tagItem.TagTitle}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.newsStats}>
                  <p className={styles.newsStats__title}>
                    Credibility:
                    <span className={cn(item.Credibility < CredibilityStartedRed && styles.red)}>
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

                  <CustomButton
                    text="Published"
                    color="primary"
                    size="default"
                    onClick={publishedNewsItem}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal
        title="Add news"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className={styles.modal__addNews}
        closeIcon={<img src={CloseIcon} alt="" />}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="url"
            rules={[
              { required: true, pattern: new RegExp(regex), message: 'Please input correct url!' },
              // @ts-ignore
              { type: 'url', warningOnly: true },
              { type: 'string', min: 6 },
            ]}
            label="News URL"
          >
            <Input value={values.uri} name="uri" id="uri" type="uri" onChange={onInputChange} />
          </Form.Item>
          <Form.Item
            label="News Header"
            rules={[{ required: true, message: 'Please input news header' }]}
          >
            <Input
              name="header"
              id="header"
              type="input"
              onChange={onInputChange}
              value={values.header}
            />
          </Form.Item>

          <Form.Item
            label="Add text"
            rules={[{ required: true, message: 'Please input news header' }]}
          >
            <Input.TextArea
              style={{ height: 100 }}
              minLength={5}
              name="body"
              id="body"
              value={values.body}
              onChange={onTextAreaChange}
              required
            />
            <p>At leeast 5 characters</p>
          </Form.Item>
          <Form.Item>
            <div className={styles.modal__addNews__footer}>
              <Button className="btn cancel" key="back" onClick={handleCancel}>
                Cancel
              </Button>
              <Button className="btn" type="primary" htmlType="submit">
                Add news
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </main>
  );
};

export default Home;
