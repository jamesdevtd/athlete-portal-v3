/* 
  Layout: Dashboard Layout
  Description: default Admin Portal dashboard layout 
  Main elements: 
    1. sidebar - portal root nagivation 
    2. header - search bar and user avatar 
    3. content - wrapper for props.children
*/

import { useEffect, useState } from 'react';

import styles from '@/components/layout/Dashboard.module.scss';


import Header from '@/components/Header';


import BottomWhiteCurve from '~/svg/bottom-white-curve.svg';
import AthleteNav from '../navigation/AthleteNav';



type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};


const Layout = (props: Props) => {
  
  const [sidebarCollapse, setSidebarCollapse] = useState(true);

  return (
    <div className={`${styles.dashboardLayout} default-layout`}>

      <div className='wall-bg bg-gradient-blue-wall-2'>
        <BottomWhiteCurve />
      </div>

      <AthleteNav className={`${sidebarCollapse ? 'collapsed' : 'expanded'}`} />

      <div className={`content ${sidebarCollapse ? 'collapsed' : 'expanded'} pt-3`}>
          {props.children}
      </div>

    </div>
  );
};

export default Layout;
