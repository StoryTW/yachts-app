import React, { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Skeleton.module.scss';

type SkeletonVariantType = 'text' | 'circle';

interface ISkeleton extends HTMLAttributes<HTMLDivElement> {
  width: number;
  height: number;
  variant?: SkeletonVariantType;
}

export const Skeleton: FC<ISkeleton> = ({
  className,
  width,
  height,
  variant = 'text',
  ...props
}) => {
  return (
    <div
      style={{
        width: width,
        height: height,
      }}
      className={clsx(styles.skeleton, styles[variant], className)}
      {...props}
    />
  );
};
