import { createPortal } from 'react-dom';
import { Modal } from './Modal';
import { ModalClose } from '../Button/ModalClose/ModalClose';
import { useModal } from './useModal';
import styles from './ModalView.module.css';

export const ModalView = () => {
  const { isShowing } = useModal();
  return isShowing
    ? createPortal(
        <div className={styles.modal}>
          <ModalClose />
          <Modal.Body>
            <>
              <img
                className={styles.icon}
                src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
                alt="github-icon"
              />
              <a
                className={styles.name}
                href="https://github.com/DmitryStarchenko"
              >
                Dmitry Starchenko
              </a>
            </>
          </Modal.Body>
          <Modal.Footer>
            <p className={styles.footer}>2026</p>
          </Modal.Footer>
        </div>,
        document.body
      )
    : null;
};
