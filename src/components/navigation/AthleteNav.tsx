import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CircleFlag } from 'react-circle-flags';

import styles from './AthleteNav.module.scss';

import { athleteMenuItems } from '@/static/menuItems';

import TagxLogoVertical from '~/svg/tag-x-vertical.svg';
import DropDownNav from './DropDownNav';

interface MenuItems {
  icon: string;
  label: string;
  url: string;
}

type Props = {
  className?: string;
};

const AthleteNav = ({ className }: Props) => {
  const router = useRouter();
  const [menuItems, setMenuItems] = useState<MenuItems[]>([]);
  const [dropdownActive, setdropdownActive] = useState(false);

  useEffect(() => {
    setMenuItems(athleteMenuItems);
  }, [router.pathname]);

  return (
    <div className={`${styles.AthleteNav} ${className}`}>
      <button onClick={() => setdropdownActive(!dropdownActive)} className="user-name">
        <span className="initial">RD</span>
        <span className="firstname">Ryan</span>
        <DropDownNav className={`${dropdownActive ? 'active' : 'inactive'}`} />
      </button>
      <div className='nav main-nav'>
        <div className='menu-group top'>
          <ul>
            {menuItems &&
              menuItems.map((item, i) => (
                <li
                  key={i}
                  className={`${(router.pathname === item.url) ? 'current' : ''
                    }`}
                >
                  <Link href={item.url}>
                    <a>
                      <div className={`icon ${item.icon}`}></div>
                      <span>{item.label}</span>
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="spacer">
          <button className='side-button' onClick={() => false}>
            <span>Become A Ref</span>
          </button>
        </div>

        <CircleFlag countryCode="us" className="country-icon" />

        <div className="menu-group bottom">
          <ul>
            <li>
              <Link href={'/help'}>
                <div className="icon help"></div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="vertical-logo">
          <TagxLogoVertical />
        </div>
      </div>
    </div>
  );
}

export default AthleteNav;