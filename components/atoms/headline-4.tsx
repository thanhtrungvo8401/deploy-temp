import { CommonType } from '../../types/common';

export default function Headline4(props: CommonType) {
  return (
    <h4
      className={`font-medium leading-tight text-xl mt-0 mb-2 text-gray-500 ${
        props.className || ''
      }`}
    >
      {props.children || ''}
    </h4>
  );
}
