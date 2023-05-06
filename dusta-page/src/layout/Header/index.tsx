import { FC } from "react";
import styles from "./index.module.scss";
import Button, { ButtonType } from "../../components/Button";
import { routes } from "../../constants/routes";
import BurgerMenu from "../../components/BurgerMenu";
import HeaderNavigation from "../../components/HeaderNavigation";

const Header: FC = () => {
  return (
    <div className={styles.headerBackground}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Button
            buttonType={ButtonType.LINK}
            link={routes.home}
            className={styles.logoLink}
          />
        </div>
        <BurgerMenu />
        <HeaderNavigation />
      </header>
    </div>
  );
};

export default Header;
