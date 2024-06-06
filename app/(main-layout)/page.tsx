import MainBanner from '@/components/carousel/MainBanner';
import styles from './page.module.css';

const Home = () => {
  return (
    <section className={styles.homepageSection}>
      <div className='banner-section'>
        <MainBanner />
      </div>

      <div className='movie-section'>
        <h1>Homepage</h1>
        <p>Movie Section</p>
      </div>
    </section>
  );
};

export default Home;
