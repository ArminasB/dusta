import { FC } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Wrapper: FC<Props> = ({ children, className }) => (
  <div className={classNames(styles.wrapper, className)}>{children}</div>
);

export default Wrapper;
