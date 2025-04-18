// assets
import { IconDashboard, IconRobot } from '@tabler/icons-react';

// constant
const icons = { IconDashboard, IconRobot };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: '기본 대시보드',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'robot',
      title: '로봇 대시보드',
      type: 'item',
      url: '/dashboard/robot',
      icon: icons.IconRobot,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
