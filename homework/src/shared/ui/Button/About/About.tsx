import { useModal } from '../../../lib/modal/useModal';
import styles from './About.module.css';

export const About = () => {
  const { modalToggle } = useModal();

  return (
    <button className={styles.aboutButton} onClick={modalToggle}>
      About
    </button>
  );
};
