const mockMenuItems = [
  {
    heading: 'TX Affiliate',
    items: [
      {
        icon: 'dashboard',
        label: 'Dashboard',
        url: '/dashboard',
      },
    ],
  },
  {
    heading: 'General',
    items: [
      {
        icon: 'calendar',
        label: 'Events',
        url: '/events',
      },
      {
        icon: 'reports',
        label: 'Reports',
        url: '/reports',
      },
      {
        icon: 'settings',
        label: 'Settings',
        url: '/settings',
      },
    ],
  },
  {
    heading: 'Users',
    items: [
      {
        icon: 'account',
        label: 'Staff',
        url: '/staff',
      },
      {
        icon: 'referee',
        label: 'Referees',
        url: '/referees',
      },
    ],
  },
  {
    heading: 'Accounts',
    items: [
      {
        icon: 'overview',
        label: 'Overview',
        url: '/overview',
      },
      {
        icon: 'fees',
        label: 'TX Fees',
        url: '/overview',
      },
      {
        icon: 'transactions',
        label: 'Transactions',
        url: '/overview',
      },
      {
        icon: 'calculator',
        label: 'Budget Calculator',
        url: '/budget-calculator',
      },
    ],
  },
];

export default mockMenuItems;


export const athleteMenuItems = [
  {
    icon: 'home',
    label: 'Home',
    url: '/dashboard',
  },
  {
    icon: 'awards',
    label: 'Events',
    url: '/events',
  },
  {
    icon: 'podium',
    label: 'Leaderboards',
    url: '/leaderboards',
  },
  {
    icon: 'search-stats',
    label: 'Analysis',
    url: '/analysis',
  },
  {
    icon: 'team-builder',
    label: 'Fantasy Team Builder',
    url: '/fantasy-team-builder',
  },
  {
    icon: 'rugby-ball',
    label: 'Create a League',
    url: '/league-builder',
  },
];

// TODO: fetch this data under /static using getStaticProps
