import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TagxLogoVertical from '~/svg/tag-x-vertical.svg';
import { CircleFlag } from 'react-circle-flags';
import Link from 'next/link';
import { athleteMenuItems } from '@/static/menuItems';
import styles from './AthleteNav.module.scss';

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

  useEffect(() => {
    setMenuItems(athleteMenuItems);
  }, [router.pathname]);

  return (
    <div className={`${styles.AthleteNav} ${className}`}>
      <div className="user-name">
        <span className="initial">RD</span>
        <span className="firstname">Ryan</span>
      </div>
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
              <button onClick={() => false} className="btn-link">
                <div className="icon help"></div>
              </button>
            </li>
            <li>
              <button onClick={() => false} className="btn-link">
                <div className="icon logout"></div>
              </button>
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