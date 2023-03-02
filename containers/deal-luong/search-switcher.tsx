import Link from 'next/link';
import Button from '../../components/atoms/button';
import { PageUrlEnum } from '../shared/enum';
import cx from 'classnames';

export default function SearchSwitcher() {
  const items = [
    { text: 'TRA CỨU NHANH', key: PageUrlEnum.QuickDealLuong, active: true },
    { text: 'TRA CỨU CHUYÊN SÂU', key: PageUrlEnum.IntensiveDealLuong }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {items.map((i) => {
        return (
          <Link href={i.key} key={i.key} className="w-full md:w-52">
            <Button
              className={cx([
                'justify-center text-c-white w-full',
                { 'bg-c-green-lighter': i.active },
                { 'bg-c-gray-lighter': !i.active }
              ])}
            >
              {i.text}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
