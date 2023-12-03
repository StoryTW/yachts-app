'use client';
import React from 'react';
import { Content, Overlay, Portal, Root } from '@radix-ui/react-dialog';
// import { Header } from './Header';
// import { Footer } from './Footer';
import { useModalStore } from '@/store/useModalStore';
import clsx from 'clsx';

const styles = {
  overlay: 'fixed inset-0 bg-black/70 z-50 data-[state=open]:animate-overlayShow',
  contentContainer:
    'w-[534px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50',
  content: 'bg-white shadow-lg pb-1 rounded-32 data-[state=open]:animate-contentShow',
};

const Modal: React.FC = () => {
  const { isVisible, content, options, hideModal } = useModalStore();

  return (
    <Root open={isVisible} onOpenChange={hideModal}>
      <Portal>
        <Overlay className={styles.overlay} />
        <div className={clsx(styles.contentContainer, options?.width)}>
          <Content className={styles.content}>
            {/* <Header /> */}
            <div className={clsx('my-[32px] w-full px-8', options?.contentClassName)}>
              {content}
            </div>
            {/* {options?.buttonsOptions ? <Footer /> : null} */}
          </Content>
        </div>
      </Portal>
    </Root>
  );
};

export default Modal;
