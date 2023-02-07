import styles from './Screen.module.scss';
import equal from '../../assets/equals.png';

export function Screen(props: any) {
  return (
    <div className={styles.container}>
      <p>{props.count} 2 + 2</p>

      <div className={styles.result}>
        <img src={equal} alt="" />
        <p>{props.result} 4</p>
      </div>
    </div>
  );
}
