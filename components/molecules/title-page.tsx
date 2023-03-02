import Headline1 from '../atoms/headline-1';

type PropsTypes = {
  t1: string;
  t2?: string;
};

export default function TitlePage(props: PropsTypes) {
  return (
    <Headline1 className="mt-2 text-center">
      {props.t1}
      <span className="text-c-red">{props.t2}</span>
    </Headline1>
  );
}
