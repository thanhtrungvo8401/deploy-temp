import React from 'react';
import Link from 'next/link';
import Container from '../atoms/container';
import MyImage from '../atoms/image';
import cx from 'classnames';
import { PageUrlEnum } from '../../containers/shared/enum';

type NavItemProps = { title: string; url: string; active?: boolean };
type ExpandBtnProps = { onClick: () => void };

function NavItem(props: NavItemProps) {
  return (
    <li>
      <Link
        href={props.url}
        className={cx([
          'block px-6 py-[10px] rounded text-c-white text-center hover:bg-c-gray-lighter transition-all leading-5 text-sm',
          { 'bg-c-gray-lighter': props.active }
        ])}
        aria-current="page"
      >
        {props.title}
      </Link>
    </li>
  );
}

function ExpandBtn(props: ExpandBtnProps) {
  return (
    <button
      onClick={() => props.onClick?.()}
      type="button"
      className="inline-flex items-center p-2 text-sm bg-transparent rounded-lg text-c-white md:hidden"
    >
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
}

export default function Navigation() {
  const [mobileExpand, setMobileExpand] = React.useState<boolean>(false);

  const toggleMobile = () => {
    setMobileExpand((isExpand) => !isExpand);
  };

  const navItems: Array<NavItemProps> = [
    { title: 'Deal lương', url: PageUrlEnum.QuickDealLuong, active: true },
    { title: 'Deal CV', url: '#' },
    { title: 'Dịch vụ', url: '#' },
    { title: 'Công cụ', url: '#' }
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-screen bg-c-gray">
      <Container className="flex items-center justify-between">
        <div className="flex flex-wrap items-center justify-around">
          <Link href="#" className="flex items-center">
            <MyImage
              src="https://img.freepik.com/premium-vector/company-icon-simple-element-illustration-company-concept-symbol-design-can-be-used-web-mobile_159242-7784.jpg"
              className="w-6 h-6 mr-3 overflow-hidden rounded-full"
              alt="Flowbite Logo"
            />
          </Link>

          {/* MOBILE menu */}
          <ExpandBtn onClick={toggleMobile} />
          <div
            onClick={toggleMobile}
            className={cx(
              [
                'fixed left-0 z-50 block w-screen h-0 md:hidden top-10 bg-c-gray transition-all opacity-0'
              ],
              { '!h-screen !opacity-100': mobileExpand }
            )}
          >
            <ul
              className={cx([
                'flex-col text-sm rounded-lg h-0 hidden',
                { '!flex': mobileExpand }
              ])}
            >
              {navItems.map((i: NavItemProps, index) => {
                return <NavItem key={index + i.title} {...i} />;
              })}
            </ul>
          </div>
          {/* */}

          {/* DESKTOP menu */}
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex text-sm rounded-lg">
              {navItems.map((i: NavItemProps, index) => {
                return <NavItem key={index + i.title} {...i} />;
              })}
            </ul>
          </div>
          {/*  */}
        </div>

        <div className="flex justify-around">
          <MyImage
            className="w-6 h-6 mr-3 overflow-hidden rounded-full cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDF-GL6nSo2N1HKjTWt5XG7oV81topDSoIA&usqp=CAU"
            alt="profile"
          />

          <MyImage
            className="w-6 h-6 mr-3 overflow-hidden rounded-full cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/323/323319.png"
            alt="Vietnamese"
          />
        </div>
      </Container>
    </nav>
  );
}
