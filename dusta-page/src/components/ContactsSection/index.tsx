import { FC } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import Button, { ButtonType } from "../Button";

const ContactsSection: FC = () => {
  return (
    <section className={styles.contactsSection}>
      <Button
        buttonType={ButtonType.ANCHOR}
        link={"tel:+37052329029"}
        text={"+37052329029"}
        className={styles.mobileNumber}
      />
      <div className={styles.workingHours}>
        <span className={styles.contactsContent}>I - IV : 07:30 - 16:30</span>
        <span className={styles.contactsContent}>V : 07:30 - 15:15</span>
      </div>
      <div className={styles.address}>
        <span className={styles.contactsContent}>Metalo g. 23, LT-02190</span>
        <span className={styles.contactsContent}>Vilnius</span>
        <span className={styles.contactsContent}>info@dusta.lt</span>
      </div>
    </section>
  );
};

export default ContactsSection;
