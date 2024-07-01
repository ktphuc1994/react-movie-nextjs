import MainBanner from '@/components/carousel/MainBanner';
import styles from './page.module.css';
import MoviesList from '@/components/movies/MovieList';

const Home = () => {
  return (
    <div className={styles.homepage}>
      <section className='banner-section'>
        <MainBanner />
      </section>

      <section className='movie-section'>
        <h1>Movies</h1>
        <MoviesList />
      </section>
    </div>
  );
};

export default Home;
