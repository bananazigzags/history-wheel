import styles from "./Header.module.scss";

export const Header = ({ text }: { text: string }) => {
  return (
    <header className={styles.header}>
      <h1>{text}</h1>
    </header>
  );
};
