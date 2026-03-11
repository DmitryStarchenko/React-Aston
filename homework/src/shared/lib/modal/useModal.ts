import { createContext, useContext } from 'react';

type ModalContextType = {
  isShowing: boolean;
  modalToggle: () => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
