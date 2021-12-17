import CloseIcon from '../../assets/img/close-icon.svg';
import styles from './ModalLayout.module.scss';

export interface IModal {
  children: any;
  hideModal?: any;
}

export function ModalLayout(props: IModal) {
  const { children, hideModal } = props;

  return (
    <div className={styles.modalLayout} onClick={hideModal}>
      <section className={styles.modalLayout__main} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={styles.modalLayout__close} type="button" onClick={hideModal}>
          <img src={CloseIcon} alt="close icon" />
        </button>
      </section>
    </div>
  );
}
