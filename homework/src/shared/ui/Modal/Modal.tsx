import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { ModalClose } from '../Button/ModalClose/ModalClose';
import { useModal } from '../../lib/modal/useModal';

export const Modal = () => {
  const { isShowing } = useModal();
  return isShowing
    ? createPortal(
        <div className={styles.modal}>
          <img
            className={styles.icon}
            src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
            alt="github-icon"
          />
          <a className={styles.name} href="https://github.com/DmitryStarchenko">
            Dmitry Starchenko
          </a>
          <ModalClose />
        </div>,
        document.body
      )
    : null;
};
