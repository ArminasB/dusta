import { FC } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import CategoryLinkBox from "../CategoryLinkBox";


const HeroSection: FC = () => {
  return (
    <section className={styles.heroSection}>
      <h2 className={styles.heroHeading}>Inžinerinių tinklų įrengimas</h2>
      <p className={styles.heroParagraph}>Patirtis ir kokybė nuo 1991</p>

      <div className={styles.grid}>
        <CategoryLinkBox
          link={"#"}
          text={"Dujų sistemų projektavimas"}
          className={styles.containerOne}
        />
        <CategoryLinkBox
          link={"#"}
          text={"Dujų sistemų montavimas"}
          className={styles.containerTwo}
        />
        <CategoryLinkBox
          link={"#"}
          text={"Dūmtraukių montavimas dujinio šildymo katilams"}
          className={styles.containerThree}
        />
        <CategoryLinkBox
          link={"#"}
          text={
            "Vandentiekio buitinių nuotekų ir lietaus inžinerinių tinklų sistemų montavimas"
          }
          className={classNames(styles.font, styles.containerFour)}
        />
        <CategoryLinkBox
          link={"#"}
          text={"Geodeziniai Kadastriniai darbai"}
          className={styles.containerFive}
        />
      </div>
    </section>
  );
};

export default HeroSection;
