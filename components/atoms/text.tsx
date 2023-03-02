import { CommonType } from '../../types/common';
import cx from 'classnames';

export default function Text(props: CommonType) {
  return (
    <p className={cx(['text-sm mb-2 text-c-white', props.className])}>
      {props.children || ''}
    </p>
  );
}
