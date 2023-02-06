import { Button } from '../components/Button/Button';
import { Screen } from '../components/Screen/Screen';
import styles from './Home.module.scss';

export function Home() {
  return (
    <div className={styles.container}>
      <Screen />

      <div>
        <Button backgroundColor="#2d2a37" color="#ffff" name="+" />
      </div>
    </div>
  );
}
