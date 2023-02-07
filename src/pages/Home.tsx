import { Button } from '../components/Button/Button';
import { Screen } from '../components/Screen/Screen';
import icons from '../export/icon';

import styles from './Home.module.scss';

export function Home() {
  return (
    <div className={styles.container}>
      <Screen />

      <div className={styles.btnContainer}>
        <Button backgroundColor="#2d2a37" color="#ffff" name="CE" />
        <Button backgroundColor="#2d2a37" color="#ffff" name="C" />
        <Button backgroundColor="#2d2a37" icon={icons.percent} />
        <Button backgroundColor="#462878" icon={icons.divider} />
        <Button backgroundColor="#2d2a37" color="#ffff" name="1" />
        <Button backgroundColor="#2d2a37" color="#ffff" name="2" />
        <Button backgroundColor="#2d2a37" color="#ffff" name="3" />
        <Button backgroundColor="#462878" icon={icons.times} />
        <Button backgroundColor="#2d2a37" color="#ffff" name="4" />
        <Button backgroundColor="#2d2a37" color="#ffff" name="5" />
        <Button backgroundColor="#2d2a37" color="#ffff" name="6" />
        <Button backgroundColor="#462878" icon={icons.minus} />
        <Button backgroundColor="#2d2a37" color="#ffff" name="7" />
        <Button backgroundColor="#2d2a37" color="#ffff" name="8" />
        <Button backgroundColor="#2d2a37" color="#ffff" name="9" />
        <Button backgroundColor="#462878" icon={icons.plus} />
        <Button backgroundColor="#2d2a37" icon={icons.plusMinus} />
        <Button backgroundColor="#2d2a37" color="#ffff" name="0" />
        <Button backgroundColor="#2d2a37" color="#ffff" name="," />
        <Button backgroundColor="#7f45e2" icon={icons.bigEquals} />
      </div>
    </div>
  );
}
