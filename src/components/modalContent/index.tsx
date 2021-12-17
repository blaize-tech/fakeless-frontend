import styles from './ModalContent.module.scss';

export interface IModalContent {
  type: string;
  title: string;
  desc: string;
  icon: 'weth' | 'wnear';
}

export interface TabInputProps {
  type: 'supply' | 'borrow' | 'repay' | 'withdraw';
}

export function ModalAddNews(props: IModalContent) {
  return (
    <div className={styles.modalContent}>
      <header className={styles.modalContent__header}>
        <h4>{props.title}</h4>
      </header>
    </div>
  );
}
