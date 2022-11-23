import { Wheel } from "@/components/index";
import { useState } from "react";
import styles from "./Dates.module.scss";

type DatesProps = {
  from: string;
  to: string;
};

export const Dates = ({ from, to }: DatesProps) => {
  const [activePeriod, setActivePeriod] = useState(0);

  return (
    <div className={styles.dates}>
      <Wheel activeDot={activePeriod} />
      <div className="line horizontal-center"></div>
      <span className={styles.from}>{from}</span>
      <span className={styles.to}>{to}</span>
    </div>
  );
};
