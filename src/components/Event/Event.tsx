import styles from "./Event.module.scss";

type EventProps = {
  year: string;
  text: string;
};

export const Event = ({ year, text }: EventProps) => {
  return (
    <div className={styles.event}>
      <h3 className={styles.year}>{year}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
