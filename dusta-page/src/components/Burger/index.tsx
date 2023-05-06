import { FC } from "react";
import classNames from "classnames";
import styles from './index.module.scss';
interface Props {
    isActive: boolean;
}

const Burger: FC<Props> = ({isActive}) => {
  return (
    <ul className={styles.burger}>
      <li className={classNames(styles.listItem, {[styles.listItemActive]: isActive })}></li>
      <li className={classNames(styles.listItem, {[styles.listItemActive]: isActive })}></li>
      <li className={classNames(styles.listItem, {[styles.listItemActive]: isActive })}></li>
    </ul>
  );
};

export default Burger;
