import { Modal } from '../../Modal/Modal';
import styles from './ModalClose.module.css';

export const ModalClose = () => (
  <Modal.Header>
    <button className={styles.closeButton}>X</button>
  </Modal.Header>
);
