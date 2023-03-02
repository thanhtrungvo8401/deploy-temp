import React from 'react';
import cx from 'classnames';

type PropsType = {
  children: React.ReactNode;
  className?: string;
};

export default function Button(props: PropsType & { onClick?: () => void }) {
  const { className = '' } = props;

  return (
    <button
      onClick={() => props?.onClick?.()}
      className={cx([
        'inline-flex items-center px-4 py-2 font-bold text-c-white bg-c-gray-lighter rounded hover:opacity-90',
        className
      ])}
    >
      {props.children}
    </button>
  );
}
