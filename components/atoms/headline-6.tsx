import { CommonType } from '../../types/common';

export default function Headline6(props: CommonType) {
  return (
    <h6
      className={`font-medium leading-tight text-base mt-0 mb-2 text-gray-500 ${
        props.className || ''
      }`}
    >
      {props.children || ''}
    </h6>
  );
}
