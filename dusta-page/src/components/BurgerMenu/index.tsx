import { FC, useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import { routes } from "../../constants/routes";
import Button, { ButtonType } from "../Button";
import Burger from "../../components/Burger";

const BurgerMenu: FC = () => {
  const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);

  const toggleBurger = () => {
    return setIsBurgerActive(!isBurgerActive);
  };

  return (
    <div className={styles.burgerMenu}>
      <Button
        buttonType={ButtonType.BUTTON}
        onClick={toggleBurger}
        className={styles.burgerButton}
      >
        <Burger isActive={isBurgerActive} />
      </Button>
      <nav
        className={classNames(styles.dropdown, {
          [styles.dropdownActive]: isBurgerActive,
        })}
        onClick={toggleBurger}
      >
        <ul className={styles.dropdownList}>
          <li className={styles.dropdownListItem}>
            <Button
              buttonType={ButtonType.LINK}
              link={routes.home}
              text={"Paslaugos"}
            />
          </li>
          <li className={styles.dropdownListItem}>
            <Button
              buttonType={ButtonType.LINK}
              link={routes.projektai}
              text={"Projektai"}
            />
          </li>
          <li className={styles.dropdownListItem}>
            <Button
              buttonType={ButtonType.LINK}
              link={routes.apieMus}
              text={"Apie mus"}
            />
          </li>
          <li className={styles.dropdownListItem}>
            <Button
              buttonType={ButtonType.LINK}
              link={routes.duk}
              text={"D.U.K"}
            />
          </li>
          <li className={styles.dropdownListItem}>
            <Button
              buttonType={ButtonType.LINK}
              link={routes.susisiekime}
              text={"Susisiekime"}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
