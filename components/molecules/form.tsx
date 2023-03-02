import React from 'react';
import Select from 'react-select';
import cx from 'classnames';

// INPUT COMPONENT:
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<any, InputProps & { className: string }>(
  (props, parentRef) => {
    const ref = React.useRef<HTMLInputElement | null>(null);
    const { className = '', ...rest } = props;

    React.useImperativeHandle(parentRef, () => ({ ...ref.current }), [ref]);

    return (
      <input
        {...rest}
        ref={ref}
        className={cx([
          'inline-block w-full p-2 text-sm border rounded-md bg-c-white border-c-white-lighter text-c-gray-lighter',
          className
        ])}
      />
    );
  }
);

Input.displayName = 'Input';

// EXPOSE:
const Form = {
  Select,
  Input
};

export default Form;
