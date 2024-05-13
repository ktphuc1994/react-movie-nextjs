import styles from './page.module.css';
import LogoutButton from '@/components/common/LogoutButton';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Homepage</h1>
      <LogoutButton />
    </main>
  );
}
