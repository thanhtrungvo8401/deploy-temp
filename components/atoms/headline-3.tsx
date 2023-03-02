import { CommonType } from '../../types/common';

export default function Headline3(props: CommonType) {
  return (
    <h3
      className={`font-medium leading-tight text-3xl mt-0 mb-2 text-gray-500 ${
        props.className || ''
      }`}
    >
      {props.children || ''}
    </h3>
  );
}
