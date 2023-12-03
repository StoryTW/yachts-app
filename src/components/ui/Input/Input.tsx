import { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { ValidationError } from '../ValidationError/ValidationError';
import styles from './Input.module.scss';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  className?: string;
  containerClassName?: string;
  label: string;
}

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ error, className, containerClassName, label, id, ...props }, ref) => {
    return (
      <div className={clsx(styles.container, containerClassName)}>
        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            id={id}
            placeholder=' '
            className={className}
            {...props}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        <ValidationError error={error as string} />
      </div>
    );
  },
);

Input.displayName = 'Input';
