import { CommonType } from '../../types/common';

export default function Headline2(props: CommonType) {
  return (
    <h2
      className={`font-medium leading-tight text-4xl mt-0 mb-2 text-gray-500 ${
        props.className || ''
      }`}
    >
      {props.children || ''}
    </h2>
  );
}
