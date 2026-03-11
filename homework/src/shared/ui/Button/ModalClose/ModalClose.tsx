import { useModal } from '../../../lib/modal/useModal';
import styles from './ModalClose.module.css';

export const ModalClose = () => {
  const { modalToggle } = useModal();

  return (
    <button className={styles.closeButton} onClick={modalToggle}>
      X
    </button>
  );
};
