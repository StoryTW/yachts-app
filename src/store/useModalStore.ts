import { ReactNode } from 'react';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type ModalStore = {
  isVisible: boolean;
  content: ReactNode;
  options?: IOptions;
  showModal: (content: ReactNode, options?: IOptions) => void;
  hideModal: () => void;
  setContent: (content: ReactNode) => void;
  setOptions: (options: IOptions) => void;
};

type IOptions = {
  title?: string;
  titleClassName?: string;
  contentClassName?: string;
  withCloseButton?: boolean;
  buttonsOptions?: {
    direction: ButtonsDirection;
    buttons: ButtonModel[];
  };
  width?: string | null;
  onBackButtonClick?: (() => void) | undefined;
};

export enum ButtonsDirection {
  'row',
  'column',
}

type ButtonModel = {
  title?: string;
  onClick?: () => void;
  primary?: boolean;
};

const initialOptions: IOptions = {
  withCloseButton: true,
};

export const useModalStore = create<ModalStore>()(
  immer((set) => ({
    isVisible: false,
    content: null,
    options: initialOptions,
    showModal: (content, options) =>
      set((state) => {
        state.isVisible = true;
        state.content = content;
        state.options = { ...initialOptions, ...options };
      }),
    hideModal: () =>
      set((state) => {
        state.isVisible = false;
        state.content = null;
      }),
    setContent: (content) =>
      set((state) => {
        state.content = content;
      }),
    setOptions: (options) =>
      set((state) => {
        state.options = { ...initialOptions, ...options };
      }),
  })),
);
