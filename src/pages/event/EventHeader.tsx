import Link from 'next/link';
import React from 'react';
import { CircleFlag } from 'react-circle-flags';

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
        <button className='btn dark-blue with-icon' onClick={() => false}>
            <CalendarIcon />
            View Calendar
        </button>
        <div className="series-info hidden">
            <div className="logo">
                <img src={seriesLogo} alt="series logo" />
                <CircleFlag countryCode='US' className="h-4" />
            </div>
            <div className="menu">
                <button>
                    OPEN MENS
                    <ChevronIcon />
                </button>
                <span>Open Mens</span>
            </div>
        </div>
    </div>
  )
}

export default EventHeader