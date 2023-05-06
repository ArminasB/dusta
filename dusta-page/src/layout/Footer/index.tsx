import { FC } from "react";
import styles from "./index.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mobileFooterContentContainer}>
        <span className={styles.mobileFooterContent}>UAB DUSTA</span>
        <span className={styles.mobileFooterContent}>Įmonės kodas: 1202823917</span>
        <span className={styles.mobileFooterContent}>PVM kodas: LT202823917</span>
        <span className={styles.mobileFooterContent}>Banko sąskaita</span>
        <span className={styles.mobileFooterContent}>LT604010042400011423</span>
        <span className={styles.mobileFooterContent}>AB Luminor Bank</span>
      </div>
    </footer>
  );
};

export default Footer;
