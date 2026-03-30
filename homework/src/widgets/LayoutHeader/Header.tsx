import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import { Button } from '../../shared/ui/Button/Button';
import { Modal } from '../../shared/ui/Modal/Modal';
import { ModalView } from '../../shared/ui/Modal/ModalView';
import { UserTabs } from '../UserTabs/UserTabs';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Our blog</h1>
      <div className={styles.nav}>
        <UserTabs />
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
