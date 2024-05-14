import FooterColumn from './FooterColumn';
import {
  aboutItems,
  downloadAppItems,
  followUsItems,
  informationItems,
  linkItems,
} from './footerItems';
import classes from './index.module.css';

const MainFooter = () => {
  return (
    <footer className={`${classes.mainFooter} main-container-wrapper`}>
      <div className='footer-column-wrapper'>
        <div className='footer-column about-items'>
          <FooterColumn columnTitle='about us' items={aboutItems} />
        </div>
        <div className='footer-column link-items'>
          <FooterColumn columnTitle='links' items={linkItems} />
        </div>
        <div className='footer-column information-items'>
          <FooterColumn columnTitle='information' items={informationItems} />
        </div>
        <div className='footer-column social-app-items'>
          <FooterColumn columnTitle='follow us' items={followUsItems} />
          <FooterColumn
            columnTitle='download the application'
            items={downloadAppItems}
          />
        </div>
      </div>
      <p className='copy-right'>All right reserved Miracle Movie &copy;</p>
    </footer>
  );
};

export default MainFooter;
