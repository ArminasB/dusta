import { FC } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import Button, { ButtonType } from "../Button";

interface Props {
  link: string;
  text: string;
  className?: string;
}

const CategoryLinkBox: FC<Props> = ({ link, text, className }) => {
  return (
    <div className={classNames(styles.categoryLinkBox, className)}>
      <Button
        buttonType={ButtonType.LINK}
        link={link}
        text={text}
        className={styles.link}
      />
    </div>
  );
};

export default CategoryLinkBox;
