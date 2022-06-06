import Link from 'next/link';
import React from 'react';
import { CircleFlag } from 'react-circle-flags';
import { BsFillCaretDownFill } from 'react-icons/bs';

import styles from './EventHeader.module.scss';

import TrophyIcon from '~/icons/blue/trophy.svg';
import CalendarIcon from '~/icons/calendar.svg';
import ChevronIcon from '~/icons/chevron-down.svg';
const seriesLogo = '/images/mock/series-logo.png';

type Props = {
    className?: string
}

const EventHeader = ({ className }: Props) => {
  return (
    <div className={`${styles.EventHeader} ${className}`}>
        <h2>
            Events
            <TrophyIcon />
        </h2>
        <ul>
            <li>
                <Link href="/#">Fixtures</Link>
            </li>
            <li>
                <Link href="/#">Results</Link>
            </li>
            <li>
                <Link href="/#">Stats</Link>
            </li>
            <li>
                <Link href="/#">Comparison</Link>
            </li>
        </ul>
        <button className='btn dark-blue with-icon view-calendar' onClick={() => false}>
            <CalendarIcon />
            View Calendar
        </button>
        <div className="series-info">
            <div className="logo">
                <img src={seriesLogo} alt="series logo" />
                <div className="flag">
                    <CircleFlag countryCode='us' className="h-4" />
                </div>
            </div>
            <div className="menu">
                <button>
                    OPEN MENS
                    <BsFillCaretDownFill />
                </button>
                <span>Open Mens</span>
            </div>
        </div>
    </div>
  )
}

export default EventHeader