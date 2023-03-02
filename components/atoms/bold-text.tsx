import { CommonType } from '../../types/common';

export default function BoldText(props: CommonType) {
  return (
    <span
      className={`text-base text-gray-500 font-medium ${props.className || ''}`}
    >
      {props.children || ''}
    </span>
  );
}
