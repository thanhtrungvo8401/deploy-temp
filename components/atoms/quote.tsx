import { CommonType } from '../../types/common';

export default function Quote(props: CommonType & { by?: string }) {
  return (
    <p className={`text-base text-gray-500 italic ${props.className || ''}`}>
      {`"${props.children}"`}
      <span className="ml-2 font-medium"> {props.by}</span>
    </p>
  );
}
