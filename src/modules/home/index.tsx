import React, { useEffect, useState } from 'react';
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
import { IContract } from 'src/utils';

function getImage(): string {
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const news = [NewsImage2, NewsImage1, NewsImage2, NewsImage3, NewsImage4];

  return news[getRandomInt(4)];
}

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

interface News {
  creator: string;
  dislike: number;
  hash_body: string;
  hash_head: string;
  id: number;
  like: number;
  published: boolean;
  uri: string;
  voted: string[];
}

const regex =
  '(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}' +
  '|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))' +
  '[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})';

const Home = (props: IContract) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newsList, setNews] = useState([] as News[]);
  const { fakeNewsContract } = props;

  async function updateNews() {
    const news = await fakeNewsContract.get_all();
    console.log(news);
    setNews(news);
  }

  useEffect(() => {
    (async function () {
      try {
        await updateNews();
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const useForm = (callback: any, initial: FormValue) => {
    const [values, setValues] = useState(initialState);
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };
    const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      await callback(values);
    };

    return {
      onInputChange,
      onSubmit,
      onTextAreaChange,
      setValues,
      values,
    };
  };

  function withSuccess(text: string) {
    notification.success({
      message: 'Success',
      className: 'notificationError',
      description: text,
    });
  }

  function withError(text: string) {
    notification.error({
      message: 'Error',
      className: 'notificationError',
      description: text,
    });
  }

  async function makeVote(news: News, is_like: boolean) {
    try {
      await fakeNewsContract.vote({ index: news.id - 1, is_like });
      await updateNews();
      withSuccess('Your vote was added');
    } catch {
      withError('failed to vote');
    }
  }

  async function onFinish(formValues: FormValue) {
    console.log('Submit success!', formValues);
    await fakeNewsContract.add({
      hash_head: formValues.header,
      hash_body: formValues.body,
      uri: formValues.uri,
    });
    await updateNews();
    setIsModalVisible(false);
    withSuccess('News successfully added');
  }

  const { onInputChange, onSubmit, onTextAreaChange, setValues, values } = useForm(
    onFinish,
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

  const onFinishFailed = () => {};

  const isLogged = true;
  const CredibilityStartedRed = 50;

  const clickOnTags = () => {
    console.log('click Tag');
  };

  async function publishedNewsItem(news: News) {
    if (news.like < 3) return;
    await fakeNewsContract.nft_mint({ index: news.id });
    await updateNews();
  }

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
            {newsList.map((item: News) => (
              <li key={item.id} className={styles.newsList__item}>
                <div className={styles.newsBody}>
                  <div className={styles.newsBody__images}>
                    <img src={getImage()} alt="News Images" />
                  </div>

                  <div>
                    <h2 className={styles.newsBody__title}>{item.hash_head}</h2>
                    <p className={styles.newsBody__desc}>{item.hash_body}</p>
                    <div className={styles.newsBody__subInfo}>
                      <p>17.12.2021</p>
                      {/* <p>{item.date}</p> */}
                      <p>
                        Source:{' '}
                        <a href={item.uri} target="_blank">
                          {item.uri}
                        </a>
                      </p>
                    </div>

                    <ul className={styles.newsBody__tags}>
                      {/* {item.NewsTags.map((tagItem: any, id: number) => (
                        <li key={id} className={styles.newsBody__tagsItem}>
                          <CustomButton
                            size="small"
                            color="primary"
                            onClick={clickOnTags}
                            text={tagItem.TagTitle}
                          />
                        </li>
                      ))} */}
                    </ul>
                  </div>
                </div>

                <div className={styles.newsStats}>
                  <p className={styles.newsStats__title}>
                    Credibility:
                    <span
                      className={
                        item.dislike + item.like >= 5 && item.like < item.dislike ? styles.red : ''
                      }
                    >
                      {item.like > 0 && item.dislike > 0
                        ? ((item.like / (item.like + item.dislike)) * 100).toFixed(2)
                        : 100}{' '}
                      %
                    </span>
                  </p>
                  <div className={styles.validators}>
                    <p>Validators score:</p>
                    <button
                      onClick={() => {
                        makeVote(item, true);
                      }}
                      className={cn(styles.validators__btn, styles.validators__btnGood)}
                    >
                      {item.like}
                    </button>

                    <button
                      onClick={() => {
                        makeVote(item, false);
                      }}
                      className={cn(styles.validators__btn, styles.validators__btnBad)}
                    >
                      {item.dislike}
                    </button>
                  </div>

                  <CustomButton
                    text={item.published ? 'Published' : 'Publish'}
                    // color={item.published ? 'transaprent' : 'primary'}
                    size="default"
                    onClick={() => {
                      publishedNewsItem(item);
                    }}
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
          onFinish={onSubmit}
          // onFinishFailed={onFailed}
          autoComplete="off"
        >
          <Form.Item name="url" rules={[{ type: 'url', required: true }]} label="News URL">
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
