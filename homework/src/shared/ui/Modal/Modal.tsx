import { useModal } from './useModal';
import {
  cloneElement,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';
import { ModalContext } from '../../ui/Modal/useModal';

export const Modal = ({ children }: { children: ReactNode }) => {
  const [isShowing, setIsShowing] = useState(false);

  const modalToggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <ModalContext.Provider value={{ isShowing, modalToggle }}>
      {children}
    </ModalContext.Provider>
  );
};

const ModalTrigger = ({
  children,
}: {
  children: ReactElement<{ onClick?: () => void }>;
}) => {
  const { modalToggle } = useModal();
  return cloneElement(children, { onClick: modalToggle });
};

const ModalHeader = ({
  children,
}: {
  children: ReactElement<{ onClick?: () => void }>;
}) => {
  const { modalToggle } = useModal();
  return cloneElement(children, { onClick: modalToggle });
};

const ModalBody = ({ children }: { children: ReactElement }) => {
  return <>{children}</>;
};

const ModalFooter = ({ children }: { children: ReactElement }) => {
  return <>{children}</>;
};

Modal.Trigger = ModalTrigger;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
