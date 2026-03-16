import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import { Button } from '../../shared/ui/Button/Button';
import { Modal } from '../../shared/ui/Modal/Modal';
import { ModalView } from '../../shared/ui/Modal/ModalView';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Posts</h1>
      <div className={styles.nav}>
        <Modal>
          <Modal.Trigger>
            <Button CSSClasses={styles.aboutButton} content={'About'} />
          </Modal.Trigger>
          <ModalView />
        </Modal>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
