import { Modal } from '../../Modal/Modal';
import { ModalView } from '../../Modal/ModalView';
import styles from './About.module.css';

export const About = () => {
  return (
    <Modal>
      <Modal.Trigger>
        <button className={styles.aboutButton}>About</button>
      </Modal.Trigger>
      <ModalView />
    </Modal>
  );
};
