import React from 'react';
import { CircleFlag } from 'react-circle-flags';

import styles from './EventContent.module.scss';

import BackIcon from '~/icons/back-arrow.svg';

import CalenderIcon from '~/svg/calender.svg';
import MenuIcon from '~/svg/event-menu-icon.svg';
import FeeIcon from '~/svg/fee-icon.svg';
import MapIcon from '~/svg/map-pin.svg';
import ArticleIcon from '~/icons/blue/article.svg';

// TODO: add loading placeholder whilst actual images are being loaded from cloud
const eventPhoto = '/images/mock/event-photo-large.jpg';
const eventLogo = '/images/mock/logo-thumb.png';

type Props = {
    className?: string
}

const EventContent = ({ className }: Props) => {
    return (
        <div className={`${styles.EventContent} ${className} hidden`}>

            <article>
                <ArticleIcon />
                <h2>About This Event</h2>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Diam maecenas sed enim ut sem. Ac placerat vestibulum lectus mauris. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Faucibus a pellentesque sit amet.</p>
                    <p>Duis tristique sollicitudin nibh sit amet commodo. Non enim praesent elementum facilisis leo vel fringilla est. Malesuada fames ac turpis egestas integer eget aliquet. Sit amet consectetur adipiscing elit pellentesque. Libero volutpat sed cras ornare arcu dui vivamus arcu. Non enim praesent elementum facilisis leo vel fringilla. In aliquam sem fringilla ut morbi. Aenean euismod elementum nisi quis eleifend. Elit eget gravida cum sociis natoque. Consequat semper viverra nam libero justo.</p>
                </div>
            </article>

            <aside>
                <div className="meta hidden">
                    <div>
                        <CalenderIcon />
                        <span>Sat,Sep 14,2022 at 4:00 PM EST</span>
                    </div>
                    <div>
                        <MapIcon />
                        <span>Randall&apos;s Island Manhattan, NY</span>
                    </div>
                    <div>
                        <FeeIcon />
                        <span>Free - $25</span>
                    </div>
                    <hr />
                </div>
            </aside>

        </div>
    )
}

export default EventContent