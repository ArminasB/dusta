import { FC } from "react";
import styles from "./index.module.scss";
import Button, { ButtonType } from "../Button";
import { routes } from "../../constants/routes";

const HeaderNavigation: FC = () => {
  return (
    <nav className={styles.headerNavigation}>
        <ul className={styles.headerList}>
          <li className={styles.headerListItem}>
            <Button
              buttonType={ButtonType.LINK}
              link={routes.home}
              text={"Paslaugos"}
            />
          </li>
          <li className={styles.headerListItem}>
            <Button
              buttonType={ButtonType.LINK}
              link={routes.projektai}
              text={"Projektai"}
            />
          </li>
          <li className={styles.headerListItem}>
            <Button
              buttonType={ButtonType.LINK}
              link={routes.apieMus}
              text={"Apie mus"}
            />
          </li>
          <li className={styles.headerListItem}>
            <Button
              buttonType={ButtonType.LINK}
              link={routes.duk}
              text={"D.U.K"}
            />
          </li>
          <li className={styles.headerListItem}>
            <Button
              buttonType={ButtonType.LINK}
              link={routes.susisiekime}
              text={"Susisiekime"}
            />
          </li>
        </ul>
    </nav>
  )
};

export default HeaderNavigation;
