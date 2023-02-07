import styles from './Button.module.scss';

export function Button(props: any) {
  return (
    <div className={`${styles.container} ${styles.boxSize}`}>
      <button
        style={{ backgroundColor: props.backgroundColor, color: props.color }}
        className={`${styles.btn} ${styles.boxSize}`}
      >
        {props.icon && <img className={styles.img} src={props.icon} />}
        {props.name}
      </button>
    </div>
  );
}
