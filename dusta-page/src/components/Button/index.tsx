import { FC } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

export enum ButtonType {
  LINK = "LINK",
  ANCHOR = "ANCHOR",
  BUTTON = "BUTTON",
}

interface Props {
  buttonType: ButtonType;
  type?: "button" | "submit" | "reset";
  text?: string;
  className?: string;
  onClick?: () => void;
  link?: string;
  children?: JSX.Element | JSX.Element[];
}

const Button: FC<Props> = ({
  buttonType,
  type = "button",
  text,
  className,
  onClick,
  link,
  children,
}) => {
  const handleSubmit = () => {
    if (onClick && typeof onClick === "function") {
      return onClick();
    }
    return null;
  };

  switch (buttonType) {
    case ButtonType.LINK:
      return (
        <Link
          to={link as string}
          className={classNames(className)}
        >
          {text && text}
          {children && children}
        </Link>
      );
    case ButtonType.ANCHOR:
      return (
        <a
          href={link as string}
          className={classNames(className)}
        >
          {text && text}
          {children && children}
        </a>
      );
    case ButtonType.BUTTON:
    default:
      return (
        <button
          onClick={handleSubmit}
          type={type}
          className={classNames(styles.button, className)}
        >
          {text && text}
          {children && children}
        </button>
      );
  }
};

export default Button;
