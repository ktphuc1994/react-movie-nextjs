import styles from './page.module.css';
import LogoutButton from '@/components/common/LogoutButton';

const Home = () => {
  return (
    <section className={styles.mainSection}>
      <h1>Homepage</h1>
      <LogoutButton />
    </section>
  );
};

export default Home;
