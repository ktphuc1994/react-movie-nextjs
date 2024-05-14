import Link from 'next/link';
import classes from './FooterColumn.module.css';

export type FooterItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};
type FooterColumnComponent = {
  columnTitle: string;
  items: FooterItem[];
};

const FooterColumn = ({ items, columnTitle }: FooterColumnComponent) => {
  return (
    <div className={classes.footerColumn}>
      <h4>{columnTitle}</h4>
      <div className='items-wrapper'>
        {items.map((footerItem, index) => (
          <div key={footerItem.label.trim() + index} className='item'>
            {footerItem.icon}
            <Link className='item-label' href={footerItem.href}>
              {footerItem.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
