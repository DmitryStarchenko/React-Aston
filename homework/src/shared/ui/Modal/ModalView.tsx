import { createPortal } from 'react-dom';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { useModal } from './useModal';
import styles from './ModalView.module.css';

export const ModalView = () => {
  const { isShowing } = useModal();
  return isShowing
    ? createPortal(
        <div className={styles.modal}>
          <Modal.Header>
            <h2 className={styles.title}>About</h2>
          </Modal.Header>
          <Modal.Trigger>
            <Button CSSClasses={styles.closeButton} content={'X'} />
          </Modal.Trigger>
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
