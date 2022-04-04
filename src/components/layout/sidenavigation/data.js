import routerMain from '../../../constants/routerMain';
import DomainIcon from './icons/domain';
import HomeIcon from './icons/home';

const data = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: routerMain.HOME,
  },
  {
    title: 'Domain',
    icon: <DomainIcon />,
    link: routerMain.DOMAIN,
  },
];

export default data;
