import { FooterItem } from './FooterColumn';
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  AndroidFilled,
  AppleFilled,
} from '@ant-design/icons';

export const aboutItems: FooterItem[] = [
  { href: '#', label: 'Miracle Movie' },
  { href: '#', label: 'Work with us' },
  { href: '#', label: 'Newsletter' },
  { href: '#', label: 'Contact us' },
];

export const linkItems: FooterItem[] = [
  { href: '#', label: 'Advertising in cinema' },
  { href: '#', label: 'Forum Film' },
];

export const informationItems: FooterItem[] = [
  { href: '#', label: 'Regulation' },
  { href: '#', label: 'Privacy policy' },
  { href: '#', label: 'Manage cookies' },
  { href: '#', label: 'Cookies policy' },
  { href: '#', label: 'Information about tax' },
  { href: '#', label: 'Strategy' },
];

export const followUsItems: FooterItem[] = [
  {
    href: '#',
    label: 'Facebook',
    icon: <FacebookOutlined />,
  },
  { href: '#', label: 'Instagram', icon: <InstagramOutlined /> },
  { href: '#', label: 'Youtube', icon: <YoutubeOutlined /> },
  { href: '#', label: 'LinkedIn', icon: <LinkedinOutlined /> },
];

export const downloadAppItems: FooterItem[] = [
  {
    href: '#',
    label: 'Android',
    icon: <AndroidFilled />,
  },
  { href: '#', label: 'iOS', icon: <AppleFilled /> },
];
