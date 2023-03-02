import { CommonType } from '../../types/common';
import BoldText from '../atoms/bold-text';
import Text from '../atoms/text';

export default function Note(props: CommonType) {
  const { className = '', children = '' } = props;

  return (
    <div className={`p-2 bg-gray-200 border-l-4 border-gray-500 ${className}`}>
      <Text className="mb-0">
        <BoldText className="mr-4">Note:</BoldText> {children}
      </Text>
    </div>
  );
}
