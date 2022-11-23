import { useLayoutEffect } from "react";
import gsap from "gsap";
import styles from "./Wheel.module.scss";

type WheelProps = {
  activeDot: number;
};

export const Wheel = ({ activeDot }: WheelProps) => {
  useLayoutEffect(() => {
    gsap.from(`.${styles.circle}`, { rotation: 120, duration: 1 });
  }, []);
  return (
    <div className={styles.circle}>
      <div className={styles.dotWrapper}>
        <div className={styles.deg0}></div>
        <div className={styles.deg60}></div>
        <div className={styles.deg120}></div>
        <div className={styles.deg180}></div>
        <div className={styles.deg240}></div>
        <div className={styles.deg300}></div>
      </div>
    </div>
  );
};
