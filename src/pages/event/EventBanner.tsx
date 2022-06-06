import React from 'react';
import { CircleFlag } from 'react-circle-flags';

import styles from './EventBanner.module.scss';

import BackIcon from '~/icons/back-arrow.svg';

// TODO: add loading placeholder whilst actual images are being loaded from cloud
const eventPhoto = '/images/mock/event-photo-large.jpg';
const eventLogo = '/images/mock/logo-thumb.png';

type Props = {
    className?: string
}

const EventBanner = ({ className }: Props) => {
    return (
        <div className={`${styles.EventBanner} ${className}`}>
            <div className='event-photo'
                style={{ backgroundImage: `url(${eventPhoto})` }}
            />
            <div className="nav">
                <button className="capsule large">OPEN</button>
                <button className="btn red with-icon" onClick={() => false}>
                    <BackIcon />
                    Back to all Events
                </button>
            </div>
            <div className="text">
                <h1>NY SEVENS</h1>
                <h3>Series 9 | <span className='text-blue-brand'>Event Open</span></h3>
                <h2>Homebush</h2>
            </div>
            <div className='logo'>
                <img alt="logo" src={eventLogo}></img>
            </div>
            <div className="flag">
                <CircleFlag countryCode='us'/>
            </div>
        </div>
    )
}

export default EventBanner