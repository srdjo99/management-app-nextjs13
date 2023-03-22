import Card from './Card';
import Image from 'next/image';
import SidebarLink from './SidebarLink';

const links = [
  { label: 'Home', icon: 'Grid', link: '/home' },
  {
    label: 'Calendar',
    // <Calendar/> function is NOT serializable
    // -> cannot cross network
    icon: 'Calendar',
    link: '/calendar',
  },
  { label: 'Profile', icon: 'User', link: '/profile' },
  {
    label: 'Settings',
    icon: 'Settings',
    link: '/settings',
  },
];

const Sidebar = () => {
  return (
    <Card className='flex flex-wrap items-center justify-between w-40 h-full'>
      {links.map((link) => (
        <SidebarLink key={link.label} link={link} />
      ))}
    </Card>
  );
};

export default Sidebar;
