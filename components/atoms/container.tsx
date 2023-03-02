import React from 'react';

export default function Container(props: {
  children: React.ReactNode;
  className?: string;
  style?: Record<string, any>;
  background?: {
    className?: string;
    style?: Record<string, any>;
    children?: React.ReactNode;
  };
}) {
  const { className = '', style = {}, background } = props;

  if (!props.background) {
    return (
      <div
        style={style}
        className={`relative max-w-7xl px-4 mx-auto ${className}`}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div
      style={style}
      className={`relative max-w-7xl px-4 mx-auto ${className}`}
    >
      <div
        className={`absolute w-screen h-full ${
          background?.className || ''
        } z-0 top-0 left-1/2 -translate-x-1/2`}
        style={background?.style || {}}
      >
        {background?.children}
      </div>

      <div className="relative z-10">{props.children}</div>
    </div>
  );
}
