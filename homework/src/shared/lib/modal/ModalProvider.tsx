import { useState, type ReactNode } from 'react';
import { ModalContext } from './useModal';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
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
