import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  isLoading?: boolean;
  type?: HTMLButtonElement['type'];
}

export const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      isLoading,
      type = 'button',
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={clsx(styles.btn, className, {
          [styles.loading]: isLoading,
        })}
        type={type}
        disabled={isLoading || disabled}
      >
        {isLoading ? <>Загрузка...</> : <>{children}</>}
      </button>
    );
  },
);

Button.displayName = 'Button';
