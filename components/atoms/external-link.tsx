import { CommonType } from '../../types/common';

export default function ExternalLink(props: CommonType & { href: string }) {
  return (
    <a
      href={props.href}
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
    >
      {props.children}
    </a>
  );
}
