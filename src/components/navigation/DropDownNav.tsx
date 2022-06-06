import React from 'react'
import styles from './DropDownNav.module.scss';

type Props = {
    className?: string
}

const DropDownNav = ({ className }: Props) => {
    return (
        <div className={`${styles.DropDownNav} ${className}`}>
            <a href="#" >My Profile</a>
            <a href="#" >Settings</a>
            <button className='logout' >Logout</button>
        </div>
    )
}

export default DropDownNav